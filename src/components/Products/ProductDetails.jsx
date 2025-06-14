import { useEffect, useState } from 'react'
import { toast } from 'sonner';
import ProductGrid from './ProductGrid';

const selectedProduct = {
    name: "Stylish Jacket",
    price: 120,
    originalPrice: 150,
    description: "This is a stylish jacket perfect for any occasion.",
    brand: "FashionBrand",
    material: "Leather",
    size: ["S", "M", "L", "XL"],
    color: ["Red", "skyblue", "Green"],
    images: [
        {
            url: "https://picsum.photos/500/500?random=1",
            altText: "Stylish Jacket 1",
        },
        {
            url: "https://picsum.photos/500/500?random=2",
            altText: "Stylish Jacket 2",
        }
    ]
}

const similarProducts = [
    {
        _id: 1,
        name: "Product 1",
        price: 100,
        images: [
            { url: "https://picsum.photos/500/500?random=2", }
        ]
    },
    {
        _id: 2,
        name: "Product 2",
        price: 100,
        images: [
            { url: "https://picsum.photos/500/500?random=8", }
        ]
    },
    {
        _id: 3,
        name: "Product 3",
        price: 100,
        images: [
            { url: "https://picsum.photos/500/500?random=12", }
        ]
    },
    {
        _id: 4,
        name: "Product 4",
        price: 100,
        images: [
            { url: "https://picsum.photos/500/500?random=14", }
        ]
    }
]
function ProductDetails() {

    const [mainImage, setMainImage] = useState(selectedProduct.images[0].url);
    const [selectedSize, setSelectedSize] = useState("")
    const [selectedColor, setSelectedColor] = useState("")
    const [quantity, setQuantity] = useState(1)
    const [isButtonDisabled, setIsButtonDisabled] = useState(false)



    useEffect(() => {
        if (selectedProduct?.images?.length > 0) {
            setMainImage(selectedProduct.images[0].url);
        }
    }, [selectedProduct]);


    const handleQuantityChange = (action) => {
        if (action === "plus") setQuantity((prev) => prev + 1);
        else if (action === "minus") {
            if (quantity > 1) {
                setQuantity((prev) => prev - 1);
            }
        }
    }

    const handleAddToCart = () => {
        if (!selectedSize || !selectedColor) {
            toast.error("Please select a size and color before adding to cart.", {
                duration: 1000,
            })
            return;
        }
        setIsButtonDisabled(true);
        setTimeout(() => {
            toast.success("Product Added to cart.", {
                duration: 1000,
            })
            setIsButtonDisabled(false);
        }, 500);
    }
    return (
        <div className='p-6'>
            <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg">
                <div className="flex flex-col md:flex-row">
                    {/* Left Thumbnails */}
                    <div className="hidden md:flex flex-col space-y-4 mr-6">
                        {
                            selectedProduct.images.map((image, index) => (
                                <img
                                    key={index}
                                src={image.url}
                                    alt={image.altText || `Thumbnail ${index}`}
                                    className="w-20 h-20 object-cover rounded-lg cursor-pointer"
                                    onClick={() => setMainImage(image.url)}
                                />
                            ))
                        }
                    </div>
                    {/* Main Image */}
                    <div className="md:w1/2">
                        <div className="mb-4">
                            <img src={mainImage} alt="Mina Product" className='w-full h-auto object-cover rounded-lg' />
                        </div>
                    </div>
                    {/* Mobile Thumbnails */}
                    <div className="md:hidden flex overscroll-x-scroll space-x-4 mb-4">
                        {
                            selectedProduct.images.map((image, index) => (
                                <img key={index} src={image.url} alt={image.alt || `Thumbnail ${index}`} className='w-20 h-20 object-cover rounded-lg cursor-pointer border' />
                            ))
                        }
                    </div>
                    {/* Right Side */}
                    <div className="md:w-1/2 md:ml-10">
                        {/* Product Name */}
                        <h1 className='text-2xl md:text-3xl font-semibold mb-2'>
                            {selectedProduct.name}
                        </h1>
                        {/* Price */}
                        <p className='text-lg text-gray-600 mb-1 line-through'>
                            {selectedProduct.originalPrice &&
                                `${selectedProduct.originalPrice}`}
                        </p>
                        {/* Price */}
                        <p className="text-xl text-gray-500 mb-2">
                            ${selectedProduct.price}
                        </p>
                        {/* Description */}
                        <p className="text-gray-600 mb-4">
                            {selectedProduct.description}
                        </p>
                        {/* Color */}
                        <div className="mb-4">
                            <p className="text-gray-700">Color:</p>
                            <div className="flex gap-2 mt-2">
                                {selectedProduct.color.map((color) => (
                                    <button onClick={() => setSelectedColor(color)} key={color} className={`w-8 h-8 rounded-full border cursor-pointer ${selectedColor === color ? "border-4 border-black" : "border-gray-300"}`} style={{ backgroundColor: color.toLocaleLowerCase(), filter: "brightness(0.5)" }}></button>
                                ))}
                            </div>
                        </div>
                        {/* size */}
                        <div className="mb-4">
                            <p className="text-gray-700">Size:</p>
                            <div className="flex gap-2 mt-2">
                                {selectedProduct.size.map((size) => (
                                    <button onClick={() => setSelectedSize(size)} key={size} className={`px-4 py-2 rounded border cursor-pointer ${selectedSize === size ? "bg-black text-white" : ""}`}>
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>
                        {/* Quantity */}
                        <div className="mb-6">
                            <p className="text-gray-700">Quantity:</p>
                            <div className="flex items-center space-x-4 mt-2">
                                <button onClick={() => handleQuantityChange("minus")} className='px-2 bg-gray-200 rounded text-lg py-1 cursor-pointer'>
                                    -
                                </button>
                                <span className='text-lg'>{quantity}</span>
                                <button onClick={() => handleQuantityChange("plus")} className='px-2 bg-gray-200 rounded text-lg py-1 cursor-pointer'>
                                    +
                                </button>
                            </div>
                        </div>
                        {/* Add to Cart Button */}
                        <button onClick={handleAddToCart} disabled={isButtonDisabled} className={`bg-black text-white py-2 px-6 rounded w-full mb-4 cursor-pointer ${isButtonDisabled ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-900"}`}>
                            {isButtonDisabled ? "Adding..." : "ADD TO CART"}
                        </button>
                        <div className="mt-10 text-gray-700">
                            <h3 className='text-xl font-bold mb-4'>Characteristics:</h3>
                            <table className='w-full text-left text-sm text-gray-600'>
                                <tbody>
                                    <tr>
                                        <td className='py-1'>Brand</td>
                                        <td className='py-1'>{selectedProduct.brand}</td>
                                    </tr>
                                    <tr>
                                        <td className='py-1'>Material</td>
                                        <td className='py-1'>{selectedProduct.material}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="mt-20">
                    <h2 className="text-3xl font-bold mb-4 text-center">
                        You May Also Like
                    </h2>
                    <ProductGrid products={similarProducts} />
                </div>
            </div>
        </div>
    )
}

export default ProductDetails