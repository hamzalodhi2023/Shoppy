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
        <div></div>
    )
}
export default OrderDetailsPage