/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import SingleProduct from "../../../SingleProduct/SingleProduct";

 

/* eslint-disable react/jsx-key */
const Products = ({ data }) => {
  return (
    <div className="my-16 px-4 sm:px-6 lg:px-8">
      <h1 className="font-bold text-center text-3xl mb-12">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {data.slice(0,6).map((product) => (
          <SingleProduct key={product.id} product={product}></SingleProduct>
        ))}
      </div>
    </div>
  );
};

export default Products;
