"use client"
import React from 'react'
import Link from 'next/link';
import { useState } from 'react';
import { styles } from '@/utils/styles';
import Image from 'next/image';
//import img from "/public/whitelogo.PNG";
import { toast } from 'sonner';
import Input from '@/components/UI/input';
import Button from '@/components/UI/buton';

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
    const [isLoading, setIsLoading] = useState<boolean>(false);
  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setEnteredValues({ ...enteredValues, [e.target.name]: value });
  };

  const formSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      enteredValues.email.trim().length === 0 ||
      enteredValues.password.trim().length === 0 || enteredValues.companyName.trim().length === 0
    ) {
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
    <div>
      <div
        className={` bg-auth px-5 flex items-center justify-center min-h-screen`}
      >
        <div className="w-full  max-w-md p-5 md:p-8 space-y-0 rounded-lg">
          <div className="">
            <Image
              className="mx-auto"
              src="/whitelogo.PNG"
              width="150"
              height="150"
              alt="logo"
            />
          </div>
          {/* <h1 className=" text-white text-center md:text-2xl mb-7 font-medium text-left">
            Sign Up 
          </h1> */}

          <form onSubmit={formSubmitHandler} className="space-y-6">
         
            <div>
              <Input
                onChange={handleOnchange}
                name="email"
                label="Email"
              />
            </div>

            <div>
              <Input
                onChange={handleOnchange}
                name="companyName"
                label="Company Name"
              />
            </div>
            <div>
              <Input
                onChange={handleOnchange}
                name="password"
                label="Password"
                isPassword={true}
              />
            </div>

            <div>
              <Input
                onChange={handleOnchange}
                name="confirmPassword"
                label="Confirm Password"
                isPassword={true}
              />
            </div>

            <div className="">
              <Button
              disabled={isLoading}
                isLoading={isLoading}
                type="submit"
                className="w-full px-4 py-2 text-white bg-btnColor rounded-md"
              >
                Sign Up
              </Button>
            </div>

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
