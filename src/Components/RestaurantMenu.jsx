import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Shimmer from './Shimmer';

import {
  MENU_API_URL,
  MENU_IMG_CDN_URL,
  MENU_ITEM_TYPE_KEY,
  RESTAURANT_TYPE_KEY,
  IMG_CDN_URL,
} from '../Utils/constants';
import RestaurantCategory from './RestaurantCategory';

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [showIndex, setShowIndex] = useState(null);
  const [showItems, setShowItems] = useState(false);
  
  const [restaurant, setRestaurant] = useState(null);
  const [menuItems, setMenuItems] = useState([]);
  const [categories, setCategories] = useState([]); // Added state for categories
  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    try {
      const response = await fetch(MENU_API_URL + resId);
      const json = await response.json();

      const restaurantData =
        json?.data?.cards?.map((x) => x.card)?.find(
          (x) => x && x.card['@type'] === RESTAURANT_TYPE_KEY
        )?.card?.info || null;

      setRestaurant(restaurantData);
      console.log(restaurantData);

      const menuItemsData =
        json?.data?.cards.find((x) => x.groupedCard)?.groupedCard?.cardGroupMap?.REGULAR?.cards
          ?.map((x) => x.card?.card)
          ?.filter((x) => x['@type'] == MENU_ITEM_TYPE_KEY)
          ?.map((x) => x.itemCards)
          .flat()
          .map((x) => x.card?.info) || [];

      const uniqueMenuItems = [];
      menuItemsData.forEach((item) => {
        if (!uniqueMenuItems.find((x) => x.id === item.id)) {
          uniqueMenuItems.push(item);
        }
      });
      setMenuItems(uniqueMenuItems);


      const categories =
        json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
          (c) =>
            c.card?.['card']?.['@type'] ===
            'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
        ) || [];
      setCategories(categories);


    } catch (error) {
      setMenuItems([]);
      setRestaurant(null);
      console.log(error);
    }
  }


  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className=" mx-auto max-w-2xl">
      <div className=" flex items-center justify-between mt-6">
        <img
          className=" w-36 rounded-lg"
          src={IMG_CDN_URL + restaurant?.cloudinaryImageId}
          alt={restaurant?.name}
        />
        <div className=" ml-4">
          <h2 className=" text-2xl font-bold mb-1">{restaurant?.name}</h2>
          <p className=" text-gray-500">{restaurant?.cuisines?.join(', ')}</p>
          <div className=" flex items-center mt-2">
            <div
              className={` rounded-full px-2 ${restaurant?.avgRating < 4
                ? 'bg-red-300'
                : restaurant?.avgRating === '--'
                  ? 'bg-white text-black'
                  : 'bg-green-500 text-white'
                }`}
            >
              <i className="fa-solid fa-star"></i>
              <span>{restaurant?.avgRating}</span>
            </div>
            <div className=" mx-2">|</div>
            <div className="text-gray-600">{restaurant?.sla?.slaString}</div>
            <div className=" mx-2">|</div>
            <div>{restaurant?.costForTwoMessage}</div>
          </div>
        </div>
      </div>

      <div>
        {categories.map((category, index) => (
          <RestaurantCategory key={category.id} data={category?.card?.card} showItems={index === showIndex ? true : false} setShowIndex={() => setShowIndex(index)}

          />
        ))}
      </div>

    </div>
  );
};

export default RestaurantMenu;
