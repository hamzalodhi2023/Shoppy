import { useSearchParams } from "react-router-dom"

function SortOptions() {
    const [searchParams, setSearchParams] = useSearchParams()
    const handleSortChange = (e) => {
        const sortBy = e.target.value;
        searchParams.set("sortBy", sortBy)
        setSearchParams(searchParams);
    }
    return (
        <div className="mb-4 flex items-center justify-end">
            <select name="" id="sort" className="border p-2 rounded-md focus:outline-none">
                <option onChange={handleSortChange} value={searchParams.get("sortBy") || ""} className="">Default</option>
                <option value="" className="priceAsc">Price: Low to High</option>
                <option value="" className="priceDesc">Price: High to Low</option>
                <option value="" className="popularity">Popularity</option>
            </select>
        </div>
    )
}
export default SortOptions