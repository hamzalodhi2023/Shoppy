import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom"

function FilterSidebar() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [filters, setFilters] = useState({
        category: "",
        gender: "",
        color: "",
        size: [],
        material: [],
        brand: [],
        minPrice: 0,
        maxPrice: 100,
    });
    const [priceRange, setPriceRange] = useState()

    const categories = ["Top Wear", "Bottom Wear"]
    const colors = [
        "Black",
        "White",
        "Blue",
        "Green",
        "Yellow",
        "Brown",
        "Gray",
        "Silver",
        "Gold",
        "Beige",
        "Cyan",
        "Magenta",
        "Teal",
        "Turquoise",
        "Indigo",
        "Lavender",
        "Lime",
        "Maroon",
        "Navy",
        "Olive",
        "Orange",
        "Pink",
        "Purple",
        "Red",
        "Violet",
    ];
    const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
    const materials = [
        "Cotton",
        "Polyester",
        "Wool",
        "Silk",
        "Denim",
        "Velvet",
        "Satin",
        "Chiffon",
        "Leather",
        "Fleece",
        "Nylon",
        "Rayon",
        "Spandex",
        "Cashmere",
        "Hemp",
        "Linen",
        "Polyester Blend",
        "Wool Blend",
        "Silk Blend",
        "Denim Blend",
        "Velvet Blend",
        "Satin Blend",
        "Chiffon Blend",
        "Leather Blend",
        "Fleece Blend",
        "Nylon Blend",
        "Rayon Blend",
        "Spandex Blend",
        "Cashmere Blend",
        "Hemp Blend",
        "Linen Blend",
        "Cotton Blend"
    ];
    const brands = [
        "Adidas",
        "Nike",
        "Puma",
        "Reebok",
        "Under Armour",
        "New Balance",
        "Converse",
        "Vans",
        "Fila",
        "Asics",
        "Skechers",
        "Timberland",
        "Columbia",
        "The North Face",
        "Patagonia"
    ];


    const gender = ["Men", "Women"];

    useEffect(() => {
        const params = Object.fromEntries([...searchParams]);
        setFilters({
            category: params.category || "",
            gender: params.gender || "",
            color: params.color || "",
            size: params.size ? params.size.split(",") : [],
            material: params.material ? params.size.split(",") : [],
            brand: params.brand ? params.size.split(",") : [],
            minPrice: params.minPrice || 0,
            maxPrice: params.maxPrice || 100,
        })
        setPriceRange([0, params.maxPrice || 100]);
    }, [searchParams])

    return (
        <div className="p-4">
            <h3 className="text-xl font-medium text-gray-800 mb-4">Filter</h3>
            {/* Category Filter */}
            <div className="mb-6">
                <label className="block text-gray-600 font-medium mb-2">Category</label>
                {categories.map((category) => (
                    <div key={category} className="flex items-center mb-1">
                        <input type="radio" name="category" className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300" />
                        <span className="text-gray-700">{category}</span>
                    </div>
                ))}
            </div>
            {/* Gender Filter */}
            <div className="mb-6">
                <label className="block text-gray-600 font-medium mb-2">Gender</label>
                {gender.map((gender) => (
                    <div key={gender} className="flex items-center mb-1">
                        <input type="radio" name="category" className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300" />
                        <span className="text-gray-700">{gender}</span>
                    </div>
                ))}
            </div>

            {/* Color Filter */}
            <div className="mb-6">
                <label htmlFor="" className="block text-gray-600 font-medium mb-2">Color</label>
                <div className="flex flex-wrap gap-2">
                    {colors.map((color) => (
                        <button key={color} name="color" className="w-8 h-8 rounded-full border border-gray-300 cursor-pointer transition hover:scale-105" style={{ backgroundColor: color.toLocaleLowerCase() }}></button>
                    ))}
                </div>
            </div>

            {/* Size Filter */}
            <div className="mb-6">
                <label className="block text-gray-600 font-medium mb-2"></label>
                {sizes.map((size) => (
                    <div key={size} className="flex items-center mb-1">
                        <input type="checkbox" name="size" className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400" />
                        <span className="text-gray-700">{size}</span>
                    </div>
                ))}
            </div>

            {/* Size Filter */}
            <div className="mb-6">
                <label className="block text-gray-600 font-medium mb-2"></label>
                {materials.map((material) => (
                    <div key={material} className="flex items-center mb-1">
                        <input type="checkbox" name="size" className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400" />
                        <span className="text-gray-700">{material}</span>
                    </div>
                ))}
            </div>

            {/* Size Filter */}
            <div className="mb-6">
                <label className="block text-gray-600 font-medium mb-2"></label>
                {brands.map((brand) => (
                    <div key={brand} className="flex items-center mb-1">
                        <input type="checkbox" name="size" className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400" />
                        <span className="text-gray-700">{brand}</span>
                    </div>
                ))}
            </div>
        </div >
    )
}
export default FilterSidebar