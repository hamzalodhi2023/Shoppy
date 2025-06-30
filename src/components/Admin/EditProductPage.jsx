import { useState } from "react";

function EditProductPage() {
  const [productData, setProductData] = useState({
    name: "",
    description: "",
    price: 0,
    countInStock: 0,
    sku: "",
    category: "",
    brand: "",
    size: "",
    color: [],
    collections: "",
    material: "",
    gender: "",
    images: [
      {
        url: "https://picsum.photos.150?random=1",
      },
      {
        url: "https://picsum.photos.150?random=2",
      },
    ],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({ ...prevData, [name]: value }));
  };
  return (
    <div className="mx-auto max-w-5xl rounded-md p-6 shadow-md">
      <h2 className="mb-6 text-3xl font-bold">Edit Product</h2>
      <form>
        {/* Name */}
        <div className="mb-6">
          <label className="mb-2 block font-semibold">Product Name</label>
          <input
            type="text"
            name="name"
            value={productData.name}
            onChange={handleChange}
            className="w-full rounded-md border border-gray-300 p-2"
            required
          />
        </div>

        {/* Description */}
        <div className="mb-6">
          <label className="mb-2 block font-semibold">Description</label>
          <textarea
            name="description"
            value={productData.description}
            className="w-full rounded-md border border-gray-300 p-2"
            rows={4}
            required
          />
        </div>

        {/* Price */}
        <div className="mb-6">
          <label className="mb-2 block font-semibold">Price</label>
          <input
            type="number"
            name="price"
            value={productData.price}
            onChange={handleChange}
            className="no-arrow w-full rounded-md border border-gray-300 p-2"
            required
          />
        </div>

        {/* Count In Stock */}
        <div className="mb-6">
          <label className="mb-2 block font-semibold">Count In Stock</label>
          <input
            type="number"
            name="countInStock"
            value={productData.countInStock}
            onChange={handleChange}
            className="no-arrow w-full rounded-md border border-gray-300 p-2"
            required
          />
        </div>

        {/* SKU */}
        <div className="mb-6">
          <label className="mb-2 block font-semibold">SKU</label>
          <input
            type="text"
            name="sku"
            value={productData.sku}
            onChange={handleChange}
            className="no-arrow w-full rounded-md border border-gray-300 p-2"
            required
          />
        </div>
        {/* Size */}
        <div className="mb-6">
          <label className="mb-2 block font-semibold">
            Size (comma-separated)
          </label>
          <input
            type="text"
            name="size"
            value={productData.size}
            onChange={handleChange}
            className="no-arrow w-full rounded-md border border-gray-300 p-2"
            required
          />
        </div>
      </form>
    </div>
  );
}
export default EditProductPage;
