import { Link, NavLink, Outlet } from "react-router-dom";
import "../../src/styles/DashboardLayout.css";

const DashboardLayout = () => {
  return (
    <div className="min-h-screen grid grid-cols-12">
      {/* Sidebar */}
      <div className="col-span-12 lg:col-span-2 bg-gray-900 text-white p-4 lg:p-8 flex flex-col">
        <h2 className="text-3xl font-bold mb-8">Dashboard</h2>
        <ul className="space-y-4">
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `block py-3 px-5 rounded-md transition duration-200 ${
                  isActive
                    ? "bg-lime-500 text-gray-900"
                    : "bg-gray-700 hover:bg-gray-600"
                }`
              }
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/all-products"
              className={({ isActive }) =>
                `block py-3 px-5 rounded-md transition duration-200 ${
                  isActive
                    ? "bg-lime-500 text-gray-900"
                    : "bg-gray-700 hover:bg-gray-600"
                }`
              }
            >
              All Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block py-3 px-5 rounded-md transition duration-200 ${
                  isActive
                    ? "bg-lime-500 text-gray-900"
                    : "bg-gray-700 hover:bg-gray-600"
                }`
              }
            >
              Home
            </NavLink>
          </li>
        </ul>
      </div>
      {/* Main Content */}
      <div className="col-span-12 lg:col-span-10 bg-gray-100 p-4 lg:p-8">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
