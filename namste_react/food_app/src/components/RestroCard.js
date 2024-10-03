import { CDN_URL } from "../utils/constants";

const RestroCard = (props) => {
  const { resData } = props;
  const {
    name,
    cloudinaryImageId,
    cuisines,
    avgRating,
    costForTwo,
    sla: { deliveryTime },
  } = resData?.info;

  // console.log(resData?.info);

  return (
    <div className="res-card m-4 p-4 w-[250px] h-[300px] bg-yellow-100 rounded-xl hover:border-yellow-300 hover:border-2 hover:bg-yellow-200">
      {cloudinaryImageId ? (
        
        <img
          className="res-logo rounded-lg w-[95%] h-[100px]"
          src={CDN_URL + cloudinaryImageId}
          alt=""
        />
      ) : (
        ""
      )}

      <h3 className="font-bold py-2 text-md">{name}</h3>
      <h4 className="font-thin">{cuisines.join(", ")}</h4>
      <h4 className=" font-bold py-1 ">
        {avgRating} <span className="font-mono"> ({costForTwo})</span>
      </h4>
      <h4>
        <span className="font-thin"> Delivered in {deliveryTime} minutes</span>
      </h4>
    </div>
  );
};

// Higher order component
// input - RestaurantCard
// output - RestaurantCardPureveg

export const withPurevegLabel = (RestroCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-green-600 text-white m-2 p-1 rounded-lg ">
          Pure Veg
        </label>
        <RestroCard {...props} />
      </div>
    );
  };
};

export default RestroCard;
