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
    const color = [
        "Black",
        "White",
        "Red",
        "Blue",
        "Green",
        "Yellow",
        "Orange",
        "Purple",
        "Pink",
        "Brown",
        "Gray",
        "Silver",
        "Gold",
        "Beige",
        "Cyan",
        "Magenta",
        "Teal",
        "Olive",
        "Maroon",
        "Navy",
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
        "Silver",
        "Teal",
        "Turquoise",
        "Violet",
        "Yellow",
    ];
    const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
    const materials = [
        "Cotton",
        "Polyester",
        "Wool",
        "Silk",
        "Linen",
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
        "Cotton Blend",
        "Polyester Blend",
        "Wool Blend",
        "Silk Blend",
        "Linen Blend",
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
        "Cotton Blend",
        "Polyester Blend",
        "Wool Blend",
        "Silk Blend",
        "Linen Blend",
    ]
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
        "Patagonia",
        "The North Face",
        "Columbia",
        "Patagonia",
        "The North Face",
        "Columbia",
        "Patagonia",
        "The North Face",
        "Columbia",
        "Patagonia",
        "The North Face",
        "Columbia",
        "Patagonia",
        "The North Face",
        "Columbia",
        "Patagonia",
        "The North Face",
        "Columbia",
        "Patagonia",
        "The North Face",
        "Columbia",
        "Patagonia",
        "The North Face",
        "Columbia",
        "Patagonia",
        "The North Face",
        "Columbia",
    ]

    const gender = ["Men", "Women"];

    useEffect(() => {
        const params = object.fromEntries([...searchParams]);
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
            <h3 className=""></h3>
        </div>
    )
}
export default FilterSidebar