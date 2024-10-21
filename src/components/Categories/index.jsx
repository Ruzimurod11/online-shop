import React, { useEffect, useState } from "react";
import FeatureCard from "../FeatureCard";

const Categories = () => {
   const [categories, setCategories] = useState([]);
   useEffect(() => {
      const fetchCategories = async () => {
         const response = await fetch(
            "https://api.escuelajs.co/api/v1/categories"
         );
         const data = await response.json();
         // console.log(data);
         const result = data.filter((word) => word.name !== "New Category");
         setCategories(result);
      };
      fetchCategories();
   }, []);

   if (categories.length === 0) return <div>Loading.....</div>;

   return <FeatureCard cards={categories} />;
};

export default Categories;
