const checkout = {
  _id: "12323",
  createdAt: new Date(),
  checkoutItems: [
    {
      productId: "1",
      name: "Jacket",
      color: "Black",
      size: "M",
      price: 150,
      quantity: 2,
      image: "https://picsum.photos/150?random=1",
    },
    {
      productId: "2",
      name: "T-shirt",
      color: "Black",
      size: "M",
      price: 120,
      quantity: 1,
      image: "https://picsum.photos/150?random=2",
    },
  ],
  shippingAddress: {
    address: "123 Fashion Streey",
    city: "New York",
    country: "USA",
  },
};

function OrderConfirmationPage() {
  const calculatedEstimatedDelivery = (createdAt) => {
    const orderDate = new Date(createdAt);
    orderDate.setDate(orderDate.getDate() + 10); // Add 10 days to the order date
    return orderDate.toLocaleDateString();
  };

  return (
    <div className="mx-auto max-w-4xl bg-white p-6">
      <h1 className="mb-8 text-center text-4xl font-bold text-emerald-700">
        Thank You for Your Order!
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
            {/* Delicery Info */}
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
