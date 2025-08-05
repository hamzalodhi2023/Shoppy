import React from "react";
import { RiDeleteBin2Line } from "react-icons/ri";
import { useDispatch } from "react-redux";

function CartComponents({ cart, userId, guestId }) {
  const dispatch = useDispatch();

  // Handle adding or subtracting to cart
  const handleAddToCart = (productId, delta, quantity, size, color) => {
    const newQuantity = quantity + delta;
    if (newQuantity <= 1) {
      dispatch({});
    }
  };
  return (
    <div>
      {cartProducts.map((product, index) => (
        <div
          key={index}
          className="flex items-start justify-between border-b py-4"
        >
          <div className="flex items-start">
            <img
              src={product.image}
              alt={product.name}
              className="mr-4 h-24 w-20 rounded object-cover"
            />
            <div>
              <h3>{product.name}</h3>
              <p className="text-sm text-gray-500">
                size:{product.size} | color: {product.color}
              </p>
              <div className="mt-2 flex items-center">
                <button className="cursor-pointer rounded border px-2 py-1 text-xl font-medium">
                  -
                </button>
                <span className="mx-4">{product.quantity}</span>
                <button className="cursor-pointer rounded border px-2 py-1 text-xl font-medium">
                  +
                </button>
              </div>
            </div>
          </div>
          <div>
            <p>${product.price.toLocaleString()}</p>
            <button>
              <RiDeleteBin2Line className="mt-2 h-6 w-6 cursor-pointer text-red-600" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CartComponents;
