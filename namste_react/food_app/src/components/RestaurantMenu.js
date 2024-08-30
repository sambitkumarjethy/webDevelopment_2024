import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API_URL } from "../utils/constants";
const RestaurantMenu = () => {
  const [resInfo, SetResInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API_URL + resId);

    const json = await data.json();
    console.log(json);
    SetResInfo(json.data);
  };

  // const { cuisines } = resInfo?.cards[2]?.card?.card?.info;

  if (!resInfo) {
    return <Shimmer />;
  }

  const { text: restoName } = resInfo?.cards[0]?.card?.card;

  const { cuisines, costForTwo } = resInfo?.cards?.[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card
      ?.card;

  console.log(itemCards);

  return (
    <div className="menu">
      <h1>{restoName} </h1>
      <p>
        {cuisines.join(",")} - {costForTwo}
      </p>

      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => {
          console.log(item?.card?.info?.name);

          return (
            <li key={item?.card?.info?.id}>
              {item?.card?.info?.name} - Price Rs.{" "}
              {item?.card?.info?.price / 100}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
