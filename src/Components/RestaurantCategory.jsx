import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import ItemList from './ItemList';
import { useState } from 'react';

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
    console.log(data);
    
    const handleClick = () => {
      setShowIndex();
    };
    return (
        <div>
          {/* Header */}
          <div className="w-full mx-auto my-4 bg-gray-50 shadow-lg p-4">
            <div
              className="flex justify-between cursor-pointer"
              onClick={handleClick}
            >
              <span className="font-bold text-lg">
                {data.title} ({data.itemCards.length})
              </span>
              <span><IoIosArrowDown/></span>
            </div>
    
            {showItems && <ItemList items={data.itemCards}/>}
            
        </div>
        </div>

    )
}

export default RestaurantCategory