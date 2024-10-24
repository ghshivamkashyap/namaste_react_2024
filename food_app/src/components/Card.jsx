import React, { useContext } from "react";
import UserContext from "../context_api/userContext";
import { useDispatch } from "react-redux";
import { addItem } from "../store/slices/cartSlice";

const Card = ({ data }) => {
  const { theme } = useContext(UserContext);

  const dispatch = useDispatch();
  const addToCart = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div
      className={`max-w-sm mx-auto ${
        theme == "lite" ? "bg-white" : "bg-slate-600 text-white"
      } rounded-lg shadow-md overflow-hidden`}
    >
      <img className="w-full h-48 object-cover" src={data.image} alt="Dish" />

      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">{data?.title}</h3>
        <p className="text-gray-600 mt-2">
          Delicious and spicy grilled chicken with special herbs and spices.
        </p>

        <div className="flex justify-between items-center mt-4">
          <span className="text-lg font-bold text-gray-800">
            {`Rs.${data.price}`}
          </span>
          <span className="bg-green-500 text-white text-sm font-semibold px-2 py-1 rounded">
            {data.rating.rate} ★
          </span>
        </div>

        <div className="mt-4 flex justify-between items-center">
          <span className="text-gray-600 text-sm">35 mins delivery</span>
          <button
            onClick={() => addToCart(data?.title)}
            className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-600"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export const labeledCard = (Card) => {
  return (props) => {
    console.log("props in lable: ", props);

    return (
      <div>
        <label className="text-red-500">*Sale</label>
        <Card {...props} />
      </div>
    );
  };
};

export default Card;
