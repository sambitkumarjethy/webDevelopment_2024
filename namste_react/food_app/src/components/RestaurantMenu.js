import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

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

  console.log(resInfo?.cards);
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
    <div className="menu">
      <h1>{restoName}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwo}
      </p>

      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item?.card?.info?.id}>
            {item?.card?.info?.name || "Unnamed Item"} - Price Rs.
            {item?.card?.info?.price ? item?.card?.info?.price / 100 : "N/A"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
