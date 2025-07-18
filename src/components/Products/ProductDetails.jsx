import { useEffect, useState } from "react";
import { toast } from "sonner";
import ProductGrid from "./ProductGrid";

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
    },
  ],
};

const similarProducts = [
  {
    _id: 1,
    name: "Product 1",
    price: 100,
    images: [{ url: "https://picsum.photos/500/500?random=2" }],
  },
  {
    _id: 2,
    name: "Product 2",
    price: 100,
    images: [{ url: "https://picsum.photos/500/500?random=8" }],
  },
  {
    _id: 3,
    name: "Product 3",
    price: 100,
    images: [{ url: "https://picsum.photos/500/500?random=12" }],
  },
  {
    _id: 4,
    name: "Product 4",
    price: 100,
    images: [{ url: "https://picsum.photos/500/500?random=14" }],
  },
];
function ProductDetails() {
  const [mainImage, setMainImage] = useState(selectedProduct.images[0].url);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

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
  };

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      toast.error("Please select a size and color before adding to cart.", {
        duration: 1000,
      });
      return;
    }
    setIsButtonDisabled(true);
    setTimeout(() => {
      toast.success("Product Added to cart.", {
        duration: 1000,
      });
      setIsButtonDisabled(false);
    }, 500);
  };
  return (
    <div className="p-6">
      <div className="mx-auto max-w-6xl rounded-lg bg-white p-8">
        <div className="flex flex-col md:flex-row">
          {/* Left Thumbnails */}
          <div className="mr-6 hidden flex-col space-y-4 md:flex">
            {selectedProduct.images.map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt={image.altText || `Thumbnail ${index}`}
                className="h-20 w-20 cursor-pointer rounded-lg object-cover"
                onClick={() => setMainImage(image.url)}
              />
            ))}
          </div>
          {/* Main Image */}
          <div className="md:w1/2">
            <div className="mb-4">
              <img
                src={mainImage}
                alt="Mina Product"
                className="h-auto w-full rounded-lg object-cover"
              />
            </div>
          </div>
          {/* Mobile Thumbnails */}
          <div className="overscroll-x-scroll mb-4 flex space-x-4 md:hidden">
            {selectedProduct.images.map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt={image.alt || `Thumbnail ${index}`}
                className="h-20 w-20 cursor-pointer rounded-lg border object-cover"
              />
            ))}
          </div>
          {/* Right Side */}
          <div className="md:ml-10 md:w-1/2">
            {/* Product Name */}
            <h1 className="mb-2 text-2xl font-semibold md:text-3xl">
              {selectedProduct.name}
            </h1>
            {/* Price */}
            <p className="mb-1 text-lg text-gray-600 line-through">
              {selectedProduct.originalPrice &&
                `${selectedProduct.originalPrice}`}
            </p>
            {/* Price */}
            <p className="mb-2 text-xl text-gray-500">
              ${selectedProduct.price}
            </p>
            {/* Description */}
            <p className="mb-4 text-gray-600">{selectedProduct.description}</p>
            {/* Color */}
            <div className="mb-4">
              <p className="text-gray-700">Color:</p>
              <div className="mt-2 flex gap-2">
                {selectedProduct.color.map((color) => (
                  <button
                    onClick={() => setSelectedColor(color)}
                    key={color}
                    className={`h-8 w-8 cursor-pointer rounded-full border ${selectedColor === color ? "border-4 border-black" : "border-gray-300"}`}
                    style={{
                      backgroundColor: color.toLocaleLowerCase(),
                      filter: "brightness(0.5)",
                    }}
                  ></button>
                ))}
              </div>
            </div>
            {/* size */}
            <div className="mb-4">
              <p className="text-gray-700">Size:</p>
              <div className="mt-2 flex gap-2">
                {selectedProduct.size.map((size) => (
                  <button
                    onClick={() => setSelectedSize(size)}
                    key={size}
                    className={`cursor-pointer rounded border px-4 py-2 ${selectedSize === size ? "bg-black text-white" : ""}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            {/* Quantity */}
            <div className="mb-6">
              <p className="text-gray-700">Quantity:</p>
              <div className="mt-2 flex items-center space-x-4">
                <button
                  onClick={() => handleQuantityChange("minus")}
                  className="cursor-pointer rounded bg-gray-200 px-2 py-1 text-lg"
                >
                  -
                </button>
                <span className="text-lg">{quantity}</span>
                <button
                  onClick={() => handleQuantityChange("plus")}
                  className="cursor-pointer rounded bg-gray-200 px-2 py-1 text-lg"
                >
                  +
                </button>
              </div>
            </div>
            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              disabled={isButtonDisabled}
              className={`mb-4 w-full cursor-pointer rounded bg-black px-6 py-2 text-white ${isButtonDisabled ? "cursor-not-allowed opacity-50" : "hover:bg-gray-900"}`}
            >
              {isButtonDisabled ? "Adding..." : "ADD TO CART"}
            </button>
            <div className="mt-10 text-gray-700">
              <h3 className="mb-4 text-xl font-bold">Characteristics:</h3>
              <table className="w-full text-left text-sm text-gray-600">
                <tbody>
                  <tr>
                    <td className="py-1">Brand</td>
                    <td className="py-1">{selectedProduct.brand}</td>
                  </tr>
                  <tr>
                    <td className="py-1">Material</td>
                    <td className="py-1">{selectedProduct.material}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="mt-20">
          <h2 className="mb-4 text-center text-3xl font-bold">
            You May Also Like
          </h2>
          <ProductGrid products={similarProducts} />
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
