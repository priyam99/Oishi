import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { API_URL } from "../Utils/constants";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import search from "../img/search.jpg";

const Search = () => {
    const [searchText, setSearchText] = useState("");
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");
    const [topRestaurants, setTopRestaurants] = useState([]);

    useEffect(() => {
        getRestaurants();
    }, []);

    async function getRestaurants() {
        try {
            const response = await fetch(API_URL);
            const json = await response.json();

            async function checkJsonData(jsonData) {
                for (let i = 0; i < jsonData?.data?.cards.length; i++) {
                    let checkData = json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
                    if (checkData !== undefined) {
                        return checkData;
                    }
                }
            }

            const resData = await checkJsonData(json);
            setAllRestaurants(resData);
            setFilteredRestaurants(resData);
            console.log(resData);
        } catch (error) {
            console.log(error);
        }
    }

    const handleSearch = (text) => {
        setSearchText(text);



        setErrorMessage("");

        const filteredRestaurantsList = allRestaurants.filter((res) =>
            res.info.name.toLowerCase().includes(text.toLowerCase())
        );
        setFilteredRestaurants(filteredRestaurantsList);
    };

    return (
        <>
            <div className="flex justify-between items-center flex-col lg:px-[105px] lg:my-10 md:px-16 px-6 my-2 md:my-5 w-full overflow-x-hidden">
                <div className="mx-auto mt-12 ">
                    <input
                        type="text"
                        className="bg-transparent border-2 shadow-md border-solid border-zinc-300 px-1.5 text-xs lg:text-base lg:px-3.5 py-1 lg:py-1.5 rounded-2xl lg:rounded-3xl mr-1 lg:mr-4 w-80"
                        placeholder="Search a restaurant you want..."
                        value={searchText}
                        onChange={(e) => handleSearch(e.target.value)}
                    />
                    <button
                        className="bg-transparent border-2 shadow-md border-solid border-zinc-300 px-1.5 text-xs lg:text-base lg:px-3.5 py-1 lg:py-1.5 rounded-2xl lg:rounded-3xl mr-1 lg:mr-4 "
                        onClick={() => handleSearch(searchText)}
                    >
                        <CiSearch />
                    </button>
                </div>

                {errorMessage && <div className="text-red-500 font-bold ml-64">{errorMessage}</div>}

                {!searchText ? (
                    <>
                        <div className="flex gap-2 mt-16 pr-16">
                            <div className="text-[65px] font-bold mt-4 mx-36 mr-32 text-orange-500">Search for Restaurants Nearby</div>
                            <img src={search} alt="" className="w-[700px] mr-12" />
                        </div>
                    </>
                ) : (
                    searchText && (
                        <div className="flex justify-center lg:justify-start items-center  flex-wrap gap-7 my-2 px-12 mt-12 ">
                            {filteredRestaurants.map((restaurant) => (
                                <Link to={"/restaurant/" + restaurant?.info?.id} key={restaurant?.info?.id}>
                                    <RestaurantCard {...restaurant?.info} />
                                </Link>
                            ))}
                        </div>
                    )
                )}
            </div>
        </>
    );
};

export default Search;
