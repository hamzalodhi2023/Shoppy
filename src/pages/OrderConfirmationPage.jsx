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
            image: "https://picsum.photos/150?random=1"
        },
        {
            productId: "2",
            name: "T-shirt",
            color: "Black",
            size: "M",
            price: 120,
            quantity: 1,
            image: "https://picsum.photos/150?random=2"
        },
    ],
    shippingAddress: {
        address: "123 Fashion Streey"
    }

}


function OrderConfirmationPage() {
    return (
        <div>OrderConfirmationPage
        </div>
    )
}
export default OrderConfirmationPage