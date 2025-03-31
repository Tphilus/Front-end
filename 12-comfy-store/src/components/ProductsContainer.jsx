import { useLoaderData } from "react-router-dom";
import ProductsGrid from "./ProductsGrid";
import ProductsList from "./ProductsList";

const ProductsContainer = () => {
  const {meta} = useLoaderData()
  // console.log("Meta data", meta);
  
  return (
    <>
      <ProductsList />
      <ProductsGrid />
    </>
  );
};

export default ProductsContainer;
