import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../redux/slices/cartSlice";

function OrderConfirmationPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { checkout } = useSelector((state) => state.checkout);

  useEffect(() => {
    if (checkout && checkout._id) {
      dispatch(clearCart());
      localStorage.removeItem("cart");
    } else {
      navigate("/my-orders");
    }
  }, [checkout, dispatch, navigate]);

  const calculatedEstimatedDelivery = (createdAt) => {
    const orderDate = new Date(createdAt);
    orderDate.setDate(orderDate.getDate() + 10); // Add 10 days to the order date
    return orderDate.toLocaleDateString();
  };

  return (
    <div className="mx-auto max-w-4xl bg-white p-6">
      <h1 className="mb-8 text-center text-4xl font-bold text-emerald-700">
        Thank! For the order{" "}
      </h1>
      {checkout && (
        <div className="rounded-lg border p-6">
          <div className="mb-20 flex justify-between">
            {/* Order Id and Date */}
            <div>
              <h2 className="text-xl font-semibold">
                Order ID: {checkout._id}
              </h2>
              <p className="text-gray-500">
                Order date: {new Date(checkout.createdAt).toLocaleDateString()}
              </p>
            </div>
            {/* Estimated Delivery */}
            <div>
              <p className="text-sm text-emerald-700">
                Estimated Delivery:{" "}
                {calculatedEstimatedDelivery(checkout.createdAt)}
              </p>
            </div>
          </div>
          {/* Ordered Items */}
          <div className="mb-20">
            {checkout.checkoutItems.map((item) => (
              <div key={item.productId} className="mb-4 flex items-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="mr-4 h-16 w-16 rounded-md object-cover"
                />
                <div>
                  <h4 className="text-base font-semibold">{item.name}</h4>
                  <p className="text-sm text-gray-500">
                    {item.color}| {item.size}
                  </p>
                </div>
                <div className="ml-auto text-right">
                  <p className="text-base">${item.price}</p>
                  <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Payment and Delivery Info */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="test-lg mb-2 font-semibold">Payment</h4>
              <p className="test-gray-600">Paypal</p>
            </div>
            {/* Delivery Info */}
            <div>
              <h4 className="test-lg mb-2 font-semibold">Delivery</h4>
              <p className="text-gray-600">
                {checkout.shippingAddress.address}
              </p>
              <p className="text-gray-600">
                {checkout.shippingAddress.city},{" "}
                {checkout.shippingAddress.country}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default OrderConfirmationPage;
