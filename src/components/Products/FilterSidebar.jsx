import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom"

function FilterSidebar() {
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();
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
    const [priceRange, setPriceRange] = useState([0, 100]);


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

    const handleFilterChange = (e) => {

        const { name, value, checked, type } = e.target;
        let newFilters = { ...filters };

        if (type === "checkbox") {
            if (checked) {
                newFilters[name] = [...(newFilters[name] || []), value];
            } else {
                newFilters[name] = newFilters[name].filter((item) => item !== value);
            }
        } else {
            newFilters[name] = value;
        }
        setFilters(newFilters);
        updateURLParams(newFilters);
    };

    const updateURLParams = (newFilters) => {
        const params = new URLSearchParams();
        Object.keys(newFilters).forEach((key) => {
            if (Array.isArray(newFilters[key]) && newFilters[key].length > 0) {
                params.append(key, newFilters[key].join(","));
            } else if (newFilters[key]) {
                params.append(key, newFilters[key]);
            }
        });
        setSearchParams(params);
        navigate(`?${params.toString()}`);
    }
    return (
        <div className="p-4">
            <h3 className="text-xl font-medium text-gray-800 mb-4">Filter</h3>
            {/* Category Filter */}
            <div className="mb-6">
                <label className="block text-gray-600 font-medium mb-2">Category</label>
                {categories.map((category) => (
                    <div key={category} className="flex items-center mb-1">
                        <input checked={filters.category === category} value={category} onChange={handleFilterChange} type="radio" name="category" className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300" />
                        <span className="text-gray-700">{category}</span>
                    </div>
                ))}
            </div>
            {/* Gender Filter */}
            <div className="mb-6">
                <label className="block text-gray-600 font-medium mb-2">Gender</label>
                {gender.map((gender) => (
                    <div key={gender} className="flex items-center mb-1">
                        <input checked={filters.gender === gender} value={gender} onChange={handleFilterChange} type="radio" name="gender" className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300" />
                        <span className="text-gray-700">{gender}</span>
                    </div>
                ))}
            </div>

            {/* Color Filter */}
            <div className="mb-6">
                <label htmlFor="" className="block text-gray-600 font-medium mb-2">Color</label>
                <div className="flex flex-wrap gap-2">
                    {colors.map((color) => (
                        <button value={color} onClick={handleFilterChange} key={color} name="color" className={`w-8 h-8 rounded-full border border-gray-300 cursor-pointer transition hover:scale-105 ${filters.color === color ? "ring-2 ring-blue-500" : ""}`} style={{ backgroundColor: color.toLocaleLowerCase() }}></button>
                    ))}
                </div>
            </div>

            {/* Size Filter */}
            <div className="mb-6">
                <label className="block text-gray-600 font-medium mb-2">Sizes</label>
                {sizes.map((size) => (
                    <div key={size} className="flex items-center mb-1">
                        <input checked={filters.size === size} value={size} onChange={handleFilterChange} type="checkbox" name="size" className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400" />
                        <span className="text-gray-700">{size}</span>
                    </div>
                ))}
            </div>

            {/* Size Filter */}
            <div className="mb-6">
                <label className="block text-gray-600 font-medium mb-2">Materials</label>
                {materials.map((material) => (
                    <div key={material} className="flex items-center mb-1">
                        <input value={material} onChange={handleFilterChange} type="checkbox" name="material" className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400" />
                        <span className="text-gray-700">{material}</span>
                    </div>
                ))}
            </div>

            {/* Size Filter */}
            <div className="mb-6">
                <label className="block text-gray-600 font-medium mb-2">Brands</label>
                {brands.map((brand) => (
                    <div key={brand} className="flex items-center mb-1">
                        <input value={brand} onChange={handleFilterChange} type="checkbox" name="brand" className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400" />
                        <span className="text-gray-700">{brand}</span>
                    </div>
                ))}
            </div>

            {/* Price Range Filter */}
            <div className="mb-8">
                <label className="block text-gray-600 font-medium mb-2">
                    Price Range
                </label>
                <input min={0} max={100} type="range" className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer" />
                <div className="flex justify-between text-gray-600 mt-2">
                    <span>$0</span>
                    <span>${priceRange[1]}</span>
                </div>
            </div>

        </div>
    )
}
export default FilterSidebar