import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Menu } from "lucide-react";
import Image from "next/image";
import LoginModel from "../auth/LoginModel";
import SignUpModel from "../auth/SignUpModel";

const NavMenu = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Menu className="cursor-pointer" />
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
          <LoginModel />
          <SignUpModel />
        </ul>
      </PopoverContent>
    </Popover>
  );
};

export default NavMenu;
