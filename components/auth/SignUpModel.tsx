"use client";
import React, { useState } from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Image from "next/image";

const SignUpModel = () => {
  const [open, setOpen] = useState(false);
  return (
    <AlertDialog open={open}>
      <AlertDialogTrigger asChild onClick={() => setOpen(true)}>
        <li className="hover:bg-brand rounded-md p-2 cursor-pointer">
          Sign Up
        </li>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle asChild>
            <div className="flex items-center justify-between">
              <span>Sign Up</span>
              <X
                className="cursor-pointer hover:text-red-500"
                onClick={() => setOpen(false)}
              />
            </div>
          </AlertDialogTitle>
          <AlertDialogDescription>
            <form>
              <h1 className="text-lg font-bold">Welcome to Airbnb</h1>
              <div className="mt-5">
                <Label htmlFor="email">Name</Label>
                <Input placeholder="Enter your name" id="name" />
                <span className="text-red-400"></span>
              </div>
              <div className="mt-5">
                <Label htmlFor="email">Email</Label>
                <Input placeholder="Enter your email" id="email" />
                <span className="text-red-400"></span>
              </div>
              <div className="mt-5">
                <Label htmlFor="password">Password</Label>
                <Input placeholder="Enter your Password" id="password" />
                <span className="text-red-400"></span>
              </div>
              <div className="mt-5">
                <Label htmlFor="cpassword">Confirm Password</Label>
                <Input placeholder="Confirm your Password" id="cpassword" />
                <span className="text-red-400"></span>
              </div>
              <div className="mt-5">
                <Button className="bg-brand w-full">Continue</Button>
              </div>
              <h1 className="text-xl font-bold text-center my-2">--OR--</h1>
              <Button variant="outline" className="w-full">
                <Image
                  src="/images/google.png"
                  alt="google logo"
                  height={25}
                  width={25}
                  className="mr-5"
                />
                Continue with Google
              </Button>
              <Button variant="outline" className="w-full mt-5">
                <Image
                  src="/images/github.png"
                  alt="google logo"
                  height={25}
                  width={25}
                  className="mr-5"
                />
                Continue with Github
              </Button>
            </form>
          </AlertDialogDescription>
        </AlertDialogHeader>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default SignUpModel;
