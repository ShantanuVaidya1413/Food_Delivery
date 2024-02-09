import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart, removeItem } from "../utils/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleRemoveItem = () => {
    dispatch(removeItem());
  };

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems.length);
  return (
    <div className="text-center m-4 p-4">
      <h1 className="font-bold text-lg">Cart</h1>
      <div className="w-6/12 m-auto">
        <button
          className="bg-black text-white p-2 m-2 rounded-lg"
          onClick={handleClearCart}
        >
          Clear cart
        </button>
        <button
          className="bg-black text-white p-2 m-2 rounded-lg"
          onClick={handleRemoveItem}
        >
          Remove Item
        </button>
        {cartItems.length == 0 ? (
          <h1>Add Items to your cart. Go to Home!</h1>
        ) : (
          <ItemList items={cartItems} />
        )}
      </div>
    </div>
  );
};

export default Cart;
