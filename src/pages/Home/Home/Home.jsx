import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Products from "../Products/Products/Products";

const Home = () => {
    const data = useLoaderData();
    // console.log(data);
  return (
    <div>
      <Banner />
      <Products data={data}/>
    </div>
  );
};

export default Home;
