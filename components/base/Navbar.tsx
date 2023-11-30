import React from "react";
import BrandLogo from "./BrandLogo";
import { Search } from "lucide-react";
import NavMenu from "./NavMenu";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-10 border-b-[1px] ">
      <div>
        <BrandLogo />
      </div>
      <div className="flex items-center space-x-2 border rounded-3xl p-2 ">
        <span className="text-sm pl-2">AnyWhere</span>
        <span>|</span>
        <span className="text-sm">Any Week</span>
        <span>|</span>
        <span className="text-sm p-2 text-gray-400">Add Guests</span>
        <span className="bg-brand text-white p-2 rounded-full">
          <Search />
        </span>
      </div>
      <div className="flex items-center space-x-4">
        <span>Add your home</span>
        <NavMenu />
      </div>
    </div>
  );
};

export default Navbar;
