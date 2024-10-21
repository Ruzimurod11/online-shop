import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/ProductCard";
import FeatureCard from "../../components/FeatureCard";

const CategoryProducts = () => {
   const { id } = useParams();
   const [products, setProducts] = useState([]);
   useEffect(() => {
      const fetchProducts = async () => {
         const response = await fetch(
            `https://api.escuelajs.co/api/v1/categories/${id}/products`
         );
         const data = await response.json();
         console.log(data);
         setProducts(data);
      };

      fetchProducts();
   }, []);

   if (products.length === 0) return <div>Loading....</div>;
   console.log(products);

   return <ProductCard products={products} />;
};

export default CategoryProducts;
