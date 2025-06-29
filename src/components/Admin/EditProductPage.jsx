import { useState } from "react"

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
            }
        ]

    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProductData((prevData) => ({ ...prevData, [name]: value }))
    }
    return (
        <div className="max-w-5xl mx-auto p-6 shadow-md rounded-md">
            <h2 className="text-3xl font-bold mb-6">Edit Product</h2>
            <form>
                {/* Name */}
                <div className="mb-6">
                    <label className="block font-semibold mb-2">Product Name</label>
                    <input type="text" name="name" value={productData.name} onChange={handleChange} className="w-full border border-gray-300 rounded-md p-2" required />
                </div>
                {/* Description */}
                <div className="mb-6">
                    <label className="block font-semibold mb-2">Description</label>
                    <textarea name="description" value={productData.description} className="w-full border border-gray-300 rounded-md p-2" rows={4} required />
                </div>
            </form>
        </div>
    )
}
export default EditProductPage