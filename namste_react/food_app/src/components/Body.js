import RestroCard, { withPurevegLabel } from "./RestroCard";
// import resList from "../utils/mockdata";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  console.log({ listOfRestaurants });

  const [searchText, setSearchText] = useState("");

  const RestaurantCardPureveg = withPurevegLabel(RestroCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // const data = await fetch(
    //   "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    // );
    // https://corsproxy.io/?

    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.4716294&lng=85.85694040000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    // console.log(
    //   json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    // );
    setListOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return <h1>Lokks like u r offline!! Check internet status !!!</h1>;
  }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filte flex">
        <div className="search m-4 p-4 ">
          <input
            type="text"
            className="search-box border border-solid border-black "
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="search-btn px-4 py-1 bg-yellow-200 mx-4 rounded-lg"
            onClick={() => {
              const filteredRestaurant = listOfRestaurants.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
                // return res.info.name.includes("Seasons Restaurant");
              });

              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div className="m-4 p-4 flex items-center">
          <button
            className="filter-btn px-4 py-2 bg-yellow-100 rounded-lg"
            onClick={() => {
              console.log("top rated");
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > "4.5"
              );
              setFilteredRestaurant(filteredList);
              //  console.log(listOfRestaurants);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
      </div>
      <div className="res-container flex flex-wrap ">
        {filteredRestaurant.map((restaurant) => (
          <Link
            to={"/restorants/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            {/** if the resorant card has veg:true then add lebel Pure Veg 
               restaurant?.info?.veg ? <RestaurantCardPureveg  resData={restaurant}/> :  <RestroCard resData={restaurant} />
              */}
            {restaurant?.info?.veg ? (
              <RestaurantCardPureveg resData={restaurant} />
            ) : (
              <RestroCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
