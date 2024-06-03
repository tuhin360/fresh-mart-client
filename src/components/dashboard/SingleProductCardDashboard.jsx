import Swal from "sweetalert2";
/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const SingleProductCardDashboard = ({ product, onDelete }) => {
  const { _id, title, brand, price, description, image_url } = product;

  const handleDelete = async () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await fetch(`http://localhost:5000/products/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            onDelete(_id);
            Swal.fire("Deleted!", "Your product has been deleted.", "success");
          });
      }
    });
  };

  return (
    <div className="flex justify-center p-4">
      <div className="card w-full sm:w-80 md:w-72 lg:w-80 bg-base-100 shadow-xl">
        <figure className="px-4 pt-4">
          <img
            src={image_url}
            alt={title}
            className="rounded-xl object-cover h-48 w-full"
          />
        </figure>
        <div className="card-body p-4">
          <h2 className="card-title text-lg font-bold">{title}</h2>
          <h3 className="text-sm font-semibold">{brand}</h3>
          <p className="text-xl font-bold text-lime-600">${price}</p>
          <p className="text-sm text-gray-500">{description}</p>
          <div className="card-actions flex flex-col md:flex-row gap-2 mt-4">
            <NavLink to={`/products/${_id}`} className="w-full md:w-auto">
              <button className="btn bg-lime-500 hover:bg-lime-600 text-white transition duration-200 w-full">
                See Details
              </button>
            </NavLink>
            <NavLink to={`edit-products/${_id}`} className="w-full md:w-auto">
              <button className="btn bg-blue-500 hover:bg-blue-600 text-white transition duration-200 w-full">
                Edit
              </button>
            </NavLink>
            <button
              onClick={handleDelete}
              className="btn bg-red-500 hover:bg-red-600 text-white transition duration-200 w-full md:w-auto"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductCardDashboard;
