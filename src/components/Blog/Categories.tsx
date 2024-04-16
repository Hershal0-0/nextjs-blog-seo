import React from "react";
import Category from "./Category";
import { slug } from "github-slugger";

interface CategoriesProps {
  categories: string[];
  currentSlug: string;
}
const Categories = ({ categories, currentSlug }: CategoriesProps) => {
  return (
    <div className="px-20 mt-10 border-t-2  text-dark border-b-2 border-solid border-dark py-4 flex items-start flex-wrap font-medium mx-10">
      {categories.map((cat) => (
        <Category
          key={cat}
          link={`/categories/${cat}`}
          className=""
          active={currentSlug === slug(cat)}
          name={cat}
        />
      ))}
    </div>
  );
};

export default Categories;
