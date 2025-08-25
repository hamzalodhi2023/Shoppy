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
    <div className="mx-auto max-w-4xl bg-white p-4 sm:p-6">
      <h1 className="mb-8 text-center text-3xl font-bold text-emerald-700 sm:text-4xl">
        Thank You! For the order
      </h1>

      {checkout && (
        <div className="rounded-lg border p-4 sm:p-6">
          {/* Order ID and Estimated Delivery */}
          <div className="mb-8 flex flex-col justify-between sm:flex-row">
            <div>
              <h2 className="text-base font-semibold sm:text-xl">
                Order ID: {checkout._id}
              </h2>
              <p className="text-sm text-gray-500">
                Order date: {new Date(checkout.createdAt).toLocaleDateString()}
              </p>
            </div>
            <div className="mt-2 sm:mt-0">
              <p className="text-sm text-emerald-700">
                Estimated Delivery:{" "}
                {calculatedEstimatedDelivery(checkout.createdAt)}
              </p>
            </div>
          </div>

          {/* Ordered Items */}
          <div className="mb-10 space-y-4">
            {checkout.checkoutItems.map((item) => (
              <div
                key={item.productId}
                className="flex flex-col items-center gap-4 border-b pb-4 sm:flex-row"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-20 w-20 rounded-md object-cover"
                />
                <div className="flex-1 text-center sm:text-left">
                  <h4 className="text-base font-semibold">{item.name}</h4>
                  <p className="text-sm text-gray-500">
                    {item.color} | {item.size}
                  </p>
                </div>
                <div className="text-center sm:text-right">
                  <p className="text-base">${item.price}</p>
                  <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Payment & Delivery Info */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <h4 className="mb-2 text-lg font-semibold">Payment</h4>
              <p className="text-gray-600">Paypal</p>
            </div>
            <div>
              <h4 className="mb-2 text-lg font-semibold">Delivery</h4>
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
