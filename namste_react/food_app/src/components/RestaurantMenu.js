import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(2);

  if (!resInfo) {
    return <Shimmer />;
  }

  const restoName =
    resInfo?.cards?.[0]?.card?.card?.text || "Unknown Restaurant";
  const cuisines = resInfo?.cards?.[2]?.card?.card?.info?.cuisines || [];
  const costForTwo = resInfo?.cards?.[2]?.card?.card?.info?.costForTwo || "N/A";

  const itemCards =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card
      ?.card?.itemCards || [];

  // console.log(resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const categories =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  {
    /**  console.log(resInfo?.cards);
    0 - > Restorant name
    1 -> Order online
    2 -> ratings and detail info
    3 -> Deals for you (offer h scroll)
    4 ->  resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[index]?.card
      ?.card?.itemCards ( upto index 9 accordian recipee card ) -> index 10 and 11 footer
    
    */
  }

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{restoName}</h1>
      <p className="font-bold text-md my-2">
        {cuisines.join(", ")} - Cost for 2 people - Rs. {costForTwo / 100}
      </p>
      {/* Categories accordian */}
      {categories.map((category, index) => {
        return (
          // Controlled component
          <RestaurantCategory
            data={category?.card?.card}
            key={category?.card?.card.title}
            showItems={index === showIndex ? true : false}
            setShowIndex={() =>
              setShowIndex(index === showIndex ? null : index)
            }
          />
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
