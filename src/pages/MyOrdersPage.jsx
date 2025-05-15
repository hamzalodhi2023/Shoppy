import { useEffect, useState } from "react"

function MyOrdersPage() {
    const [orders, setOrders] = useState([])
    useEffect(() => {

        setTimeout(() => {
            const mockOrders = [
                {
                    _id: "12345",
                    createdAt: new Date(),
                    shippingAddress: { city: "Karachi", country: "Pakistan" },
                    orderItems: [
                        {
                            name: "Product 1",
                            image: "https://picsum.photo/500/500?rendom=1",


                        }
                    ],
                    totalPrice: 100,
                    isPaid: true,

                },
                {
                    _id: "34567",
                    createdAt: new Date(),
                    shippingAddress: { city: "Karachi", country: "Pakistan" },
                    orderItems: [
                        {
                            name: "Product 2",
                            image: "https://picsum.photo/500/500?rendom=2",


                        }
                    ],
                    totalPrice: 100,
                    isPaid: true,

                }
            ]
            setOrders(mockOrders);
        }, 1000);
    }, [])

    return (
        <div className="max-w7xl mx-auto p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-bold mb-6">My Orders</h2>
            <div className="relative shadow-md sm:rounded-lg overflow-hidden">
                <table className="min-w-full text-left text-gray-500">
                    <thead className="bg-gray-100 text-xs uppercase text-gray-700">
                        <th className="py-2 px-4 sm:py-3">Image</th>
                        <th className="py-2 px-4 sm:py-3">Order ID</th>
                        <th className="py-2 px-4 sm:py-3">Created</th>
                        <th className="py-2 px-4 sm:py-3">Shipping Address</th>
                        <th className="py-2 px-4 sm:py-3">Items</th>
                        <th className="py-2 px-4 sm:py-3">Price</th>
                        <th className="py-2 px-4 sm:py-3">Status</th>
                    </thead>
                    <tbody>
                        {orders.length > 0 ? (
                            orders.map((order) => (
                                <tr key={order._id} className="border-b hover:border-gray-50 cursor-pointer">
                                    <td className="py-2 px-2 sm:py-4 sm:px-4">
                                        <img src={order.orderItems[0].img} alt={order.orderItems[0].name} className="w-10 h-10 sm:h-12 object-cover rounded-lg" />
                                    </td>
                                    <td className="py-2 px-2 sm:px-4 font-medium text-gray-900 whitespace-nowrap">
                                        #{order._id}
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={7} className="py-4 text-center text-gray-500">
                                    You have no orders
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default MyOrdersPage