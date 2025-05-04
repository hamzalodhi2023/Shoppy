import React from 'react'

function ProductDetails() {
    const selectedProduct = {
        nam: "Stylish Jacket",
        price: 120,
        originalPrice: 150,
        description: "This is a stylish jacket perfect for any occasion.",
        brand: "FashionBrand",
        material: "Leather",
        size: ["S", "M", "L", "XL"],
        color: ["Red", "Blue", "Green"],
        images: [
            {
                url: "https://picsum.photos/500/500?random=10",
                altText: "Stylish Jacket 1",
            },
            {
                url: "https://picsum.photos/500/500?random=12",
                altText: "Stylish Jacket 2",
            }
        ]
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
                                    className="w-24 h-24 object-cover rounded-md cursor-pointer"
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails