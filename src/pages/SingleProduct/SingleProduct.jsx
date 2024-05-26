/* eslint-disable no-unused-vars */

import { NavLink } from "react-router-dom";

/* eslint-disable react/prop-types */
const SingleProduct = ({ product }) => {
    const { id,title, brand, price, description, image_url } = product;
    return (
      <div className="flex justify-center">
        <div className="card w-full sm:w-80 md:w-72 lg:w-80 bg-base-100 shadow-xl">
          <figure className="px-4 pt-4">
            <img
              src={image_url}
              alt={title}
              className="rounded-xl object-cover h-48 w-full"
            />
          </figure>
          <div className="card-body p-4">
            <h2 className="card-title text-lg font-semibold">{title}</h2>
            <p className="text-xl font-bold text-lime-600">${price}</p>
            <p className="text-sm text-gray-500">{description}</p>
            <div className="card-actions justify-end">
              <button className="btn bg-lime-500 hover:bg-lime-600 text-white transition duration-200">
                 <NavLink to={`/products/${id}`}>See Details</NavLink>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default SingleProduct;
  