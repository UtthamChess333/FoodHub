import { useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import ItemList from "./ItemList";
import { useDispatch } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold m-4 p-4">Cart</h1>
      <div className="w-9/12 m-auto">
        <div>
          <button
            className="p-2 m-2 bg-black text-white rounded-lg align-middle"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
        </div>
        {cartItems.length === 0 && (<h1>Cart is empty. Add items to the Cart</h1>)}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
