import { useSearchParams } from "react-router-dom";

function SortOptions() {
  const [searchParams, setSearchParams] = useSearchParams();
  const handleSortChange = (e) => {
    const sortBy = e.target.value;
    searchParams.set("sortBy", sortBy);
    setSearchParams(searchParams);
  };
  return (
    <div className="mb-4 flex items-center justify-end">
      <select
        name=""
        id="sort"
        onChange={handleSortChange}
        value={searchParams.get("sortBy") || ""}
        className="rounded-md border p-2 focus:outline-none"
      >
        <option className="">Default</option>
        <option value="priceAsc" className="priceAsc">
          Price: Low to High
        </option>
        <option value="priceDesc" className="priceDesc">
          Price: High to Low
        </option>
        <option value="popularity" className="popularity">
          Popularity
        </option>
      </select>
    </div>
  );
}
export default SortOptions;
