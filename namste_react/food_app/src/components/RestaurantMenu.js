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
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[4]?.card
      ?.card?.itemCards || [];

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
            {item?.card?.info?.name || "Unnamed Item"} - Price Rs.{" "}
            {item?.card?.info?.price ? item?.card?.info?.price / 100 : "N/A"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
