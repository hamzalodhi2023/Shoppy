import {
  FaBoxOpen,
  FaClipboardList,
  FaSignOutAlt,
  FaStore,
  FaUser,
} from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router-dom";

function AdminSidebar() {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/");
  };
  return (
    <div className="p-6">
      <div className="mb-6">
        <Link to="/admin" className="text-2xl font-medium">
          Shoppy
        </Link>
      </div>
      <h2 className="mb-6 text-center text-xl font-medium">Admin Dashboard</h2>
      <nav className="flex flex-col space-y-2">
        <NavLink
          to="/admin/users"
          className={({ isActive }) =>
            isActive
              ? "flex items-center space-x-2 rounded bg-gray-700 px-4 py-3 text-white"
              : "flex items-center space-x-2 rounded px-4 py-3 text-gray-300 hover:bg-gray-700 hover:text-white"
          }
        >
          <FaUser />
          <span>Users</span>
        </NavLink>
        <NavLink
          to="/admin/products"
          className={({ isActive }) =>
            isActive
              ? "flex items-center space-x-2 rounded bg-gray-700 px-4 py-3 text-white"
              : "flex items-center space-x-2 rounded px-4 py-3 text-gray-300 hover:bg-gray-700 hover:text-white"
          }
        >
          <FaBoxOpen />
          <span>Products</span>
        </NavLink>
        <NavLink
          to="/admin/orders"
          className={({ isActive }) =>
            isActive
              ? "flex items-center space-x-2 rounded bg-gray-700 px-4 py-3 text-white"
              : "flex items-center space-x-2 rounded px-4 py-3 text-gray-300 hover:bg-gray-700 hover:text-white"
          }
        >
          <FaClipboardList />
          <span>Orders</span>
        </NavLink>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "flex items-center space-x-2 rounded bg-gray-700 px-4 py-3 text-white"
              : "flex items-center space-x-2 rounded px-4 py-3 text-gray-300 hover:bg-gray-700 hover:text-white"
          }
        >
          <FaStore />
          <span>Shop</span>
        </NavLink>
        <div className="mt-6">
          <button
            onClick={handleLogout}
            className="flex w-full items-center justify-center space-x-2 rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600"
          >
            <FaSignOutAlt />
            <span>Logout</span>
          </button>
        </div>
      </nav>
    </div>
  );
}
export default AdminSidebar;
