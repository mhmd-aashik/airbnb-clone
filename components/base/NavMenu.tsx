import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Menu } from "lucide-react";
import Image from "next/image";

const NavMenu = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Menu />
      </PopoverTrigger>
      <PopoverContent className="mr-10">
        <Image
          src="/images/logo.png"
          alt="logo"
          width={100}
          height={50}
          className="m-auto"
        />
        <ul className="text-center">
          <li className="hover:bg-brand rounded-md p-2 cursor-pointer">
            Login
          </li>
          <li className="hover:bg-brand rounded-md p-2 cursor-pointer">
            Sign Up
          </li>
        </ul>
      </PopoverContent>
    </Popover>
  );
};

export default NavMenu;
