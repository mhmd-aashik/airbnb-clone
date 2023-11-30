import { categories } from "@/config/categories";
import Image from "next/image";
import React from "react";

const Categories = () => {
  return (
    <div className="flex items-center space-x-8 whitespace-nowra px-10 py-3 overflow-x-auto pb-4">
      {categories.map((item) => (
        <div className="flex items-center flex-col">
          <Image src={item.icon} alt={item.name} width={40} height={40} />
          <span>{item.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Categories;
