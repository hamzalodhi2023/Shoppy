function OrderManagement() {
  const orders = [
    {
      _id: 12312321,
      user: {
        name: "John Doe",
      },
      totalPrice: 100,
      status: "Processing",
    },
  ];

  const handleStatusChange = (orderId, status) => {
    console.log({ id: orderId, status: status });
  };
  return (
    <div className="mx-auto max-w-7xl p-6">
      <h2 className="mb-6 text-2xl font-bold">Order Management</h2>
      <div className="overflow-x-auto shadow-md sm:rounded-lg">
        <table className="min-w-full text-left text-gray-500">
          <thead className="bg-gray-100 text-xs text-gray-700 uppercase">
            <tr>
              <th className="px-4 py-3">Order ID</th>
              <th className="px-4 py-3">Customer</th>
              <th className="px-4 py-3">Total Price</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.length > 0 ? (
              orders.map((order) => (
                <tr
                  key={order._id}
                  className="order-b cursor-pointer hover:bg-gray-50"
                >
                  <td className="px-4 py-4 font-medium whitespace-nowrap text-gray-900">
                    #{order._id}
                  </td>
                  <td className="p-4">{order.user.name}</td>
                  <td className="p-4">${order.totalPrice}</td>
                  <td className="p-4">
                    <select
                      value={order.status}
                      onChange={(e) =>
                        handleStatusChange(order._id, e.target.value)
                      }
                      className="bordr block rounded-lg border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                    ></select>
                  </td>
                </tr>
              ))
            ) : (
              <tr></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default OrderManagement;
