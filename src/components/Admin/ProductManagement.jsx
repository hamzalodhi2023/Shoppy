import { Link } from "react-router-dom";

function ProductManagement() {
  const products = [
    {
      _id: 123123,
      name: "Shirt",
      price: 100,
      sku: "123123",
    },
  ];

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      console.log("Delete Product with id:", id);
    }
  };
  return (
    <div className="mx-auto max-w-7xl p-6">
      <h2 className="mb-6 text-2xl font-bold">Product Management</h2>
      <div className="overflow-x-auto shadow-md md:rounded-lg">
        <table className="min-w-full text-left text-gray-500">
          <thead className="bg-gray-100 text-xs text-gray-700 uppercase">
            <tr>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Price</th>
              <th className="px-4 py-3">SKU</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.length > 0 ? (
              products.map((product) => (
                <tr
                  key={products._id}
                  className="cursor-pointer border-b hover:bg-gray-50"
                >
                  <td className="p-4 font-medium whitespace-nowrap text-gray-900">
                    {product.name}
                  </td>
                  <td className="p-4">${product.price}</td>
                  <td className="p-4">${product.sku}</td>
                  <td className="p-4">
                    <Link
                      to={`/admin/products/${product._id}/edit`}
                      className="mr-2 rounded bg-yellow-500 px-2 py-1 text-white hover:bg-yellow-600"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(product._id)}
                      className="rounded bg-red-500 px-2 py-1 text-white hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="p-4 text-center text-gray-500">
                  No Product found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default ProductManagement;
