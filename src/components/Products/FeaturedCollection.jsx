import { Link } from 'react-router-dom'
import featured from "../../assets/featured-collection.png";

function FeaturedCollection() {
    return (
        <section className="py-16 px-4 lg:px-0">
            <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center bg-steel-blue/10 rounded-3xl">
                {/* Left content */}
                <div className="lg:w-1/2 p-8 text-center lg:text-left">
                    <h2 className="text-lg font-semibold text-gray-700 mb-2">
                        Comfort and Style
                    </h2>
                    <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                        Apparel made for your everyday life
                    </h2>
                    <p className="text-lg text-gray-600 mb-6">
                        Discover high-quality, comfortable clothing that effortlessly blends fashion and function. Designed to make you look and feel great every day.
                    </p>
                    <Link to="/collection/all" className='bg-black text-white px-6 py-3 rounded-lg text-lg hover:bg-steel-blue'>
                        Shop Now
                    </Link>
                </div>
                {/* Right content */}
                <div className="lg:w-1/2">
                    <img src={featured} alt="featured Collection" className='w-full h-full object-cover lg:rounded-tr3xl lg:rounded-br-3xl' />
                </div>
            </div>
        </section>
    )
}

export default FeaturedCollection