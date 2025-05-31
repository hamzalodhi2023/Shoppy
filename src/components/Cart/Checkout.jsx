const cart = {
    products: [
        {
            name: "stylish Jacket",
            size: "M",
            color: "Black",
            price: 120,
            image: "https://picsum.photos/150?random=1",
        },
        {
            name: "casual Sneakers",
            size: 42,
            color: "White",
            price: 80,
            image: "https://picsum.photos/150?random=2",
        }
    ],
    totalPrice: 195,
}
function Checkout() {
    return (
        <div>Checkout</div>
    )
}
export default Checkout