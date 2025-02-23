"use client";
import Link from "next/link";
import React from "react";
//import img from "/public/whitelogo.PNG";
import Image from "next/image";
import { useState } from "react";
import { toast } from "sonner";
import Button from "@/components/UI/buton";
import Input from "@/components/UI/input";
interface loginValues {
  email: "";
  password: "";
}
export default function Login() {
  const [enteredValues, setEnteredValues] = useState<loginValues>({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setEnteredValues({ ...enteredValues, [e.target.name]: value });
  };

  const formSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true)

    if (
      enteredValues.email.trim().length === 0 ||
      enteredValues.password.trim().length === 0
    ) {

      setIsLoading(false)
      toast.error("Please fill empty field", {
        classNames: {
          toast: "bg-red-500",
          title: "text-white",
          description: "text-red-400",
        
          icon: "text-red-500",
        },
      });
      return;
    }
  
   

    console.log(enteredValues);
  };
  return (
    <div className=" bg-auth px-3 md:px-5 flex items-center justify-center min-h-screen ">
      <div className="w-full max-w-md p-5 md:p-8 space-y-0   rounded-lg">
        <div className="">
          <Image
            className="mx-auto"
            src="/whitelogo.PNG"
            width="150"
            height="100"
            alt="logo"
          />
        </div>
        {/* <h1 className="text-2xl text-white mb-7 font-semibold text-center">
          Sign in
        </h1> */}

        {/* Add more social login buttons here */}

        <form onSubmit={formSubmitHandler} className="space-y-6">
          <div>
            {/* <label className="block mb-2 text-sm font-medium text-white">
              Email
            </label>
            <input
              type="email"
              onChange={handleOnchange}
              name="email"
              placeholder="JohnDoe@gmail.com"
              className="w-full px-3 py-2 bg-transparent focus:ring-blue-500 focus:ring-[3px] text-white border   border-white rounded-md outline-none ease-linear duration-75"
            /> */}
            <Input
              className="border-stroke text-white"
              onChange={handleOnchange}
              name="email"
              label="Email"
            />
          </div>
          <div className="">
            <Input
              className="border-stroke text-white"
              name="password"
              onChange={handleOnchange}
              isPassword={true}
              label="Password"
            />
          </div>
          <div className="">
            <Button
              disabled={isLoading}
              isLoading={isLoading}
              type="submit"
              className="w-full px-4 py-2 text-white bg-btnColor rounded-md "
            >
              Sign in
            </Button>
          </div>
          <div className="relative  flex justify-center text-sm text-gray-50">
            <span className="px-2 text-white ">or</span>
          </div>
          <div>
            <Button
              type="button"
              className="w-full p-2 mb-1 text-white bg-black rounded-md hover:bg-red-600"
            >
              Sign in with Google
            </Button>
          </div>
          <div className="flex flex-col justify-center text-sm">
            <div className="text-center hover:underline text-white mb-3">
              <Link className=" " href="/sign-up" legacyBehavior>
                Sign Up
              </Link>
            </div>
            <div className="text-center">
              <p className="text-[rgb(254,249,249)]">
                Forgot password?{" "}
                <span className="underline">
                  <Link className="" href="/" legacyBehavior>
                    Reset
                  </Link>
                </span>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
