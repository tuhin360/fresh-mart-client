import { NavLink } from "react-router-dom";
import errorImg from "../../../src/assets/error-img.jpg";

const ErrorPage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 text-center">
        <img className="mx-auto mb-8 sm:h-80" src={errorImg} alt="Error" />

        <button className="btn btn-success">
          <NavLink exact to="/" className="font-bold text-white">
            Go to Home Page
          </NavLink>
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
