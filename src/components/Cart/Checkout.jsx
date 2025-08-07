import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createCheckout } from "../../redux/slices/checkoutSlice";

function Checkout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cart, loading, error } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.auth);

  const [checkoutId, setCheckoutId] = useState(null);
  const [shippingAddress, setShippingAddress] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    phone: "",
  });

  //` Ensure cart is loading before proceeding

  useEffect(() => {
    if (!cart || !cart.products || cart.products.length === 0) {
      navigate("/");
    }
  }, [cart, navigate]);

  const handleCreateCheckout = (e) => {
    e.preventDefault();
    if (cart && cart.products.length > 0) {
      const res = dispatch(
        createCheckout({
          checkoutItems: cart.products,
          shippingAddress,
          paymentMethod: "Paypal",
          totalPrice: cart.totalPrice,
        }),
      );
    }
  };
  return (
    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 py-10 tracking-tighter lg:grid-cols-2">
      {/* Left Section */}
      <div className="rounded-lg bg-white p-6">
        <h2 className="mb-6 text-2xl uppercase">Checkout</h2>
        <form onSubmit={handleCreateCheckout}>
          <h3 className="mb-4 text-lg">Contact Details</h3>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              disabled
              value="user@example.com"
              className="w-full rounded border p-2"
            />
          </div>
          <h3 className="mb-4 text-lg">Delivery</h3>
          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">First Name</label>
              <input
                type="text"
                className="w-full rounded border p-2"
                required
                value={shippingAddress.firstName}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    firstName: e.target.value,
                  })
                }
              />
            </div>
            <div>
              <label className="block text-gray-700">Last Name</label>
              <input
                type="text"
                className="w-full rounded border p-2"
                required
                value={shippingAddress.lastName}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    lastName: e.target.value,
                  })
                }
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="" className="block text-gray-700">
              Address
            </label>
            <input
              type="text"
              value={shippingAddress.address}
              onChange={(e) =>
                setShippingAddress({
                  ...shippingAddress,
                  address: e.target.value,
                })
              }
              className="w-full rounded border p-2"
              required
            />
          </div>
          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">City</label>
              <input
                type="text"
                className="w-full rounded border p-2"
                required
                value={shippingAddress.city}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    city: e.target.value,
                  })
                }
              />
            </div>
            <div>
              <label className="block text-gray-700">Postal Code</label>
              <input
                type="text"
                className="w-full rounded border p-2"
                required
                value={shippingAddress.postalCode}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    postalCode: e.target.value,
                  })
                }
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="" className="block text-gray-700">
              Country
            </label>
            <input
              type="text"
              value={shippingAddress.country}
              onChange={(e) =>
                setShippingAddress({
                  ...shippingAddress,
                  country: e.target.value,
                })
              }
              className="w-full rounded border p-2"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="" className="block text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              value={shippingAddress.phone}
              onChange={(e) =>
                setShippingAddress({
                  ...shippingAddress,
                  phone: e.target.value,
                })
              }
              className="w-full rounded border p-2"
              required
            />
          </div>
          <div className="mt-6">
            {!checkoutId ? (
              <button
                onClick={(e) => {
                  (e.preventDefault(), navigate("/order-confirmation"));
                }}
                type="submit"
                className="w-full rounded bg-black py-3 text-white"
              >
                Continue to payment
              </button>
            ) : (
              <div>
                <h3 className="mb-4 text-lg">Pay with Paypal</h3>
                {/* Paypal Component */}
              </div>
            )}
          </div>
        </form>
      </div>
      {/* Right Section */}
      <div className="rounded-lg bg-gray-50 p-6">
        <h3 className="mb-4 text-lg">Order Summary</h3>
        <div className="mb-4 border-t py-4">
          {cart.products.map((product, index) => (
            <div
              key={index}
              className="flex items-start justify-between border-b py-2"
            >
              <div className="flex items-start">
                <img
                  src={product.image}
                  alt={product.name}
                  className="mr-4 h-24 w-full object-cover"
                />
              </div>
              <h3 className="text-base">{product.name}</h3>
              <p className="text-gray-500">Size: {product.size}</p>
              <p className="text-gray-500">Color: {product.color}</p>
              <div></div>
              <p className="text-xl">${product.price?.toLocaleString()}</p>
            </div>
          ))}
        </div>
        <div className="mb-4 flex items-center justify-between text-lg">
          <p>Subtotal</p>
          <p>${cart.totalPrice?.toLocaleString()}</p>
        </div>
        <div className="flex items-center justify-between text-lg">
          <p>Shipping</p>
          <p>Free</p>
        </div>
        <div className="mt-4 flex items-center justify-between border-t pt-4 text-lg">
          <p>Total</p>
          <p>${cart.totalPrice?.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
