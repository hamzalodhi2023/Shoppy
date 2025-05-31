import { useState } from "react"
import { useNavigate } from "react-router-dom"

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
    const navigate = useNavigate()
    const [shippingAddress, setShippingAddress] = useState({
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        postalCode: "",
        country: "",
        phone: "",
    })
    return (
        <div className="gird grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto py-10 px-6 tracking-tighter">
            {/* Left Section */}

            {/* Right Section */}
        </div>
        // <div className="min-h-screen bg-gray-100 py-8">
        //     <div className="container mx-auto px-4">
        //         <div className="flex flex-col md:flex-row gap-8">
        //             {/* Order Summary */}
        //             <div className="md:w-2/3">
        //                 <div className="bg-white rounded-lg shadow p-6">
        //                     <h2 className="text-2xl font-semibold mb-6">Order Summary</h2>
        //                     {cart.products.map((product, index) => (
        //                         <div key={index} className="flex items-center border-b py-4 last:border-0">
        //                             <img src={product.image} alt={product.name} className="w-24 h-24 object-cover rounded" />
        //                             <div className="ml-4 flex-grow">
        //                                 <h3 className="text-lg font-medium">{product.name}</h3>
        //                                 <p className="text-gray-600">Size: {product.size} | Color: {product.color}</p>
        //                                 <p className="text-gray-800 font-semibold mt-1">${product.price}</p>
        //                             </div>
        //                         </div>
        //                     ))}
        //                     <div className="mt-6 pt-6 border-t">
        //                         <div className="flex justify-between text-lg font-semibold">
        //                             <span>Total</span>
        //                             <span>${cart.totalPrice}</span>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>

        //             {/* Shipping and Payment */}
        //             <div className="md:w-1/3">
        //                 <div className="bg-white rounded-lg shadow p-6 mb-6">
        //                     <h2 className="text-2xl font-semibold mb-6">Shipping Details</h2>
        //                     <form className="space-y-4">
        //                         <div>
        //                             <label className="block text-gray-700 mb-2">Full Name</label>
        //                             <input type="text" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
        //                         </div>
        //                         <div>
        //                             <label className="block text-gray-700 mb-2">Address</label>
        //                             <input type="text" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
        //                         </div>
        //                         <div>
        //                             <label className="block text-gray-700 mb-2">City</label>
        //                             <input type="text" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
        //                         </div>
        //                         <div>
        //                             <label className="block text-gray-700 mb-2">Postal Code</label>
        //                             <input type="text" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
        //                         </div>
        //                     </form>
        //                 </div>

        //                 <div className="bg-white rounded-lg shadow p-6">
        //                     <h2 className="text-2xl font-semibold mb-6">Payment Method</h2>
        //                     <div className="space-y-4">
        //                         <div className="flex items-center">
        //                             <input type="radio" name="payment" id="card" className="mr-2" />
        //                             <label htmlFor="card">Credit/Debit Card</label>
        //                         </div>
        //                         <div className="flex items-center">
        //                             <input type="radio" name="payment" id="paypal" className="mr-2" />
        //                             <label htmlFor="paypal">PayPal</label>
        //                         </div>
        //                         <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
        //                             Place Order
        //                         </button>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
}

export default Checkout