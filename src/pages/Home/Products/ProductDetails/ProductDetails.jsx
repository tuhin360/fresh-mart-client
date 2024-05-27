import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
  const product = useLoaderData();
  console.log(product);

  const { brand, description, image_url, price, title } = product;

  return (
    <div className="mt-20 md:mt-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mb-20">
        <div className="flex flex-col lg:flex-row items-center lg:items-start ">
          <img
            className="w-full lg:w-1/2 object-cover rounded-lg shadow-md mt-10 md:mt-0"
            src={image_url}
            alt={title}
          />
          <div className="mt-6 lg:mt-0 lg:ml-8 w-full lg:w-1/2">
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            <h3 className="text-xl text-gray-700 mb-4">{brand}</h3>
            <h3 className="text-lg font-semibold mb-4  text-lime-600">${price}</h3>
            <p className="text-gray-600">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
