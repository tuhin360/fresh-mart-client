import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-gray-800 text-white mx-auto max-w-7xl px-4">
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-800 rounded-box w-52"
              >
                <li>
                  <NavLink exact to="/" activeClassName="bg-lime-500">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/products" activeClassName="bg-lime-500">
                    Products
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about" activeClassName="bg-lime-500">
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard" activeClassName="bg-lime-500">
                    Dashboard
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact" activeClassName="bg-lime-500">
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
            <NavLink to="/" className="btn btn-ghost text-xl">
              Fresh Mart
            </NavLink>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <NavLink exact to="/" activeClassName="bg-lime-500">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/products" activeClassName="bg-lime-500">
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" activeClassName="bg-lime-500">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard" activeClassName="bg-lime-500">
                  Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" activeClassName="bg-lime-500">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <NavLink
              to="/login"
              className="  bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-500 hover:text-white transition duration-300"
            >
              Login
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
