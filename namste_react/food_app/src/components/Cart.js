import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center m-5 p-5">
      <div className="relative flex items-center justify-center">
        <h1 className="text-2xl font-bold relative w-full">
          <span className="block text-4xl text-yellow-500 bg-clip-text text-transparent text-center">
            Cart
          </span>
          <button
            className="p-2 bg-red-500 shadow-lg text-white rounded-lg 
                 hover:bg-red-600 hover:shadow-xl transition-all duration-300 
                 z-10 absolute right-0 top-1/2 transform -translate-y-1/2"
            style={{ pointerEvents: "auto" }} // Ensure button is clickable
            onClick={handleClearCart}
          >
            Clear
          </button>
        </h1>
      </div>
      {cartItems.length === 0 && <h1>Cart is empty! Add Items to cart..</h1>}
      <div className="w-6/12 m-auto">
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
