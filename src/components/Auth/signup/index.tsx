"use client"
import React from 'react'
import Link from 'next/link';
import { useState } from 'react';
import { styles } from '@/utils/styles';
import Image from 'next/image';
import img from "/public/whitelogo.PNG";
import { toast } from 'sonner';

type signupValues = {
  email: string 
  fullName: string
  companyName: string
  password: string
  confirmPassword: string
}

export default function SignUp() {

  const [enteredValues, setEnteredValues] = useState<signupValues>({
    email: "",
    password: "",
    fullName: "",
    companyName: "",
    confirmPassword: ""
  });
  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setEnteredValues({ ...enteredValues, [e.target.name]: value });
  };

  const formSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // if (
    //   enteredValues.email.trim().length === 0 ||
    //   enteredValues.password.trim().length === 0
    // ) {
    //   toast.error("Please fill empty field", {
    //     classNames: {
    //       toast: "bg-red-500",
    //       title: "text-white",
    //       description: "text-red-400",

    //       icon: "text-red-500",
    //     },
    //   });
    //   return;
    // }

    console.log(enteredValues);
  };
  return (
    <div>
      <div
        className={` bg-auth px-5 flex items-center justify-center min-h-screen`}
      >
        <div className="w-full  max-w-md p-5 md:p-8 space-y-0 rounded-lg">
          <div className="">
            <Image
              className="mx-auto"
              src={img}
              width="150"
              height="150"
              alt="logo"
            />
          </div>
          {/* <h1 className=" text-white text-center md:text-2xl mb-7 font-medium text-left">
            Sign Up 
          </h1> */}

          <form onSubmit={formSubmitHandler} className="space-y-6">
            {/* <div>
              <label className="block mb-1 text-sm font-medium text-white">
                Full Name
              </label>
              <input
                type="text"
                required
                placeholder="Your Name"
                className="w-full px-3 py-2 bg-transparent focus:ring-blue-500 focus:ring-[3px] text-white border   border-white rounded-md outline-none ease-linear duration-75"
              />
            </div> */}
            <div>
              <label className="block mb-2 text-sm font-medium text-white">
                Email
              </label>
              <input
                onChange={handleOnchange}
                type="email"
                name="email"
                placeholder="JohnDoe@gmail.com"
                className="w-full px-3 py-2 bg-transparent focus:ring-blue-500 focus:ring-[3px] text-white border   border-white rounded-md outline-none ease-linear duration-75"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-white">
                Company Name
              </label>
              <input
                type="text"
                name="companyName"
                onChange={handleOnchange}
                placeholder="Google"
                className="w-full px-3 py-2 bg-transparent focus:ring-blue-500 focus:ring-[3px] text-white border   border-white rounded-md outline-none ease-linear duration-75"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-white">
                Password
              </label>
              <input
                type="password"
                name='password'
                onChange={handleOnchange}
                placeholder="Tu64858$%^&"
                className="w-full px-3 py-2 bg-transparent focus:ring-blue-500 focus:ring-[3px] text-white border   border-white rounded-md outline-none ease-linear duration-75"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-white">
                Confirm Password
              </label>
              <input
                type="password"
                name='confirmPassword'
                onChange={handleOnchange}
                placeholder="Tu64858$%^&"
                className="w-full px-3 py-2 bg-transparent focus:ring-blue-500 focus:ring-[3px] text-white border   border-white rounded-md outline-none ease-linear duration-75"
              />
            </div>

            <div className="">
              <button
                type="submit"
                className="w-full px-4 py-2 text-white bg-btnColor rounded-md"
              >
                Sign Up
              </button>
            </div>
            {/* <div className="relative !my-1 flex justify-center text-sm text-gray-500">
              <span className="px-2 ">or</span>
            </div> */}
            {/* <div>
              <button
                type="button"
                className="w-full p-2 mb-1 text-white bg-black rounded-lg hover:bg-red-600"
              >
                Sign up with Google
              </button>
            </div> */}
            <div className="flex text-white flex-col justify-center text-sm">
              <div className="text-center mb-3">
                {" "}
                <Link href="/" legacyBehavior>
                  Already have an account? Sign In
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
