import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function OrderDetailsPage() {
    const { id } = useParams()
    const [orderDetails, setOrderDetails] = useState(null)

    useEffect(() => {
        const mockOrderDetails = {
            _id: id,
            createdAt: new Date(),
            isPaid: true,
            isDelivered: false,
            paymentMethod: "Paypal",
            shippingMethod: "Standard",
            shippingAddress: { city: "New Yourk", country: "USA" },
            orderItems: [
                {
                    productId: "1",
                    name: "Jacket",
                    price: 120,
                    quantity: 1,
                    image: "https://picsum.photos/150?random=1"
                },
                {
                    productId: "2",
                    name: "Shirt",
                    price: 150,
                    quantity: 2,
                    image: "https://picsum.photos/150?random=2"
                },
            ]
        }
        setOrderDetails(mockOrderDetails);
    }, [id])

    return (
        <div className="max-w-7xl mx-auto p-4 sm:p-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Order Details</h2>
            {!orderDetails ? (<p>No Order details found</p>) : (
                <div className="p-4 sm:p-6 rounded-lg border">
                    {/* Order Info */}
                    <div className="flex flex-col sm:flex-row justify-between mb-8">
                        <div>
                            <h3 className="text-lg md:text-xl font-semibold">
                                Order ID: #{orderDetails._id}
                            </h3>
                            <p className="text-gray-600">
                                {new Date(orderDetails.createdAt).toLocaleDateString()}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
export default OrderDetailsPage