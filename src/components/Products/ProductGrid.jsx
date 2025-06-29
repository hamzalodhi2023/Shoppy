import { Link } from "react-router-dom";

function ProductGrid({ products }) {
  return (
    <div className="gird-cols-1 sm:gird-cols-2 grid gap-6 lg:grid-cols-4">
      {products.map((product, index) => (
        <Link key={index} to={`/product/${product._id}`} className="block">
          <div className="rounded-lg bg-white p-4">
            <div className="mb-4 h-96 w-full">
              <img
                src={product.images[0].url}
                alt={product.images[0].altText || product.name}
                className="h-full w-full rounded-lg object-cover"
              />
            </div>
            <h3 className="mb-2 text-sm">{product.name}</h3>
            <p className="text-sm font-medium tracking-tighter text-gray-500">
              ${product.price}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ProductGrid;
