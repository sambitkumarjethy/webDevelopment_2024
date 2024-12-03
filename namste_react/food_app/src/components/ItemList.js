import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  console.log({ items });
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    // Dispatch action
    dispatch(addItem(item));
  };
  return (
    <div>
      {items.map((item) => {
        return (
          <div
            key={item.card.info.id}
            className=" p-2 m-2 border-y-[1px] text-left flex hover:bg-yellow-500 rounded-xl hover:border-[1px]"
          >
            <div className="pr-4 w-9/12">
              <div className="py-2">
                <span>{item.card.info.name}</span>
                <span>
                  - ₹
                  {item.card.info.price
                    ? item.card.info.price / 100
                    : item.card.info.defaultPrice / 100}
                </span>
              </div>
              <p className="text-xs">{item.card.info.description}</p>
            </div>
            <div className="w-3/12 relative">
              <div
                className="relative overflow-hidden"
                style={{ height: "auto", width: "auto" }}
              >
                {item.card.info.imageId ? (
                  <img
                    src={CDN_URL + item.card.info.imageId}
                    className="max-w-80 w-40 hover:w-56 rounded-lg transition-all duration-100"
                    alt="img"
                  />
                ) : (
                  <div className="my-16"></div>
                )}

                <button
                  className="p-1 bg-white shadow-lg absolute bottom-0 right-0 m-2 text-green-500 rounded-lg hover:bg-green-500 hover:text-white z-10"
                  style={{ pointerEvents: "auto" }} // Ensure button is clickable
                  onClick={() => handleAddItem(item)}
                >
                  Add +
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
