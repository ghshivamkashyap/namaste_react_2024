import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { emptyCart, removeItem } from "../store/slices/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log("cart page item list: ", cartItems);
  const dispatch = useDispatch();
  const handleEmptyCart = () => {
    console.log("empty cart function called");
    dispatch(emptyCart());
  };

  const popItem = () => {
    dispatch(removeItem());
  };
  return (
    <div>
      <button
        className="px-4 py-2 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 transition duration-300"
        onClick={() => handleEmptyCart()} // replace with your empty cart function
      >
        Empty Cart
      </button>

      <ul
        className=" bg-green-200 flex flex-col gap-y-2
      "
      >
        {cartItems.length ? (
          cartItems.map((item) => (
            <li className=" flex gap-x-3">
              {item.title} -{" "}
              <span
                onClick={() => popItem()}
                className="flex items-center gap-2 px-3 py-2 bg-red-500 text-white font-medium rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300 transition duration-200"
              >
                Pop item
              </span>
            </li>
          ))
        ) : (
          <div>Your cart is empty</div>
        )}
        -{" "}
      </ul>
    </div>
  );
};

export default Cart;
