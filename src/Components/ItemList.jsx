import React from 'react';
import { IMG_CDN_URL } from '../Utils/constants';
import { useDispatch } from 'react-redux';
import { addItem } from '../Utils/cartSlice';

const ItemList = (props) => {
  const { items } = props;
  const dispatch = useDispatch();
  const handleAddItem =(item) =>{
    dispatch(addItem(item));
  }
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span className="text-lg font-semibold w-full">
                {item.card.info.name.length > 20
                  ? item.card.info.name.substring(0, 20) + '...'
                  : item.card.info.name}
              </span>
              <br />
              <span className="text-green-500">
                ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
          </div>
          <div className="relative w-3/12 p-4 ">
            <img
              src={IMG_CDN_URL + item.card.info.imageId}
              className="w-full rounded-lg"
              alt={item.card.info.name}
            />
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
              <button className="p-2 px-4 rounded-lg bg-white text-green-500 hover:bg-green-100 focus:outline-none shadow-lg font-bold" 
              onClick={()=>handleAddItem(item)}
              >
                Add +
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
