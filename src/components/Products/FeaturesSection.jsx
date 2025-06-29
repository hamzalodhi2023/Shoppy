import { HiOutlineCreditCard, HiShoppingBag } from "react-icons/hi";
import { HiArrowPathRoundedSquare } from "react-icons/hi2";

function FeaturesSection() {
  return (
    <section className="bg-white px-4 py-16">
      <div className="container mx-auto grid grid-cols-1 text-center md:grid-cols-3">
        {/* Feature 1 */}
        <div className="flex flex-col items-center">
          <div className="mb-4 rounded-full p-4">
            <HiShoppingBag className="text-3xl" />
          </div>
          <h4 className="mb-2 tracking-tighter">FREE INTERNATIONAL SHIPPING</h4>
          <p className="text-sm tracking-tighter text-gray-600">
            On all orders over $100.00
          </p>
        </div>
        {/* Feature 2 */}
        <div className="flex flex-col items-center">
          <div className="mb-4 rounded-full p-4">
            <HiArrowPathRoundedSquare className="text-3xl" />
          </div>
          <h4 className="mb-2 tracking-tighter">45 DAYS RETURN</h4>
          <p className="text-sm tracking-tighter text-gray-600">
            Money back guarantee
          </p>
        </div>
        {/* Feature 3 */}
        <div className="flex flex-col items-center">
          <div className="mb-4 rounded-full p-4">
            <HiOutlineCreditCard className="text-3xl" />
          </div>
          <h4 className="mb-2 tracking-tighter">SECURE CHECKOUT</h4>
          <p className="text-sm tracking-tighter text-gray-600">
            100% secure checkout
          </p>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
