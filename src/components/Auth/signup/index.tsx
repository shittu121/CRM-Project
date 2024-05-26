"use client"
import React from 'react'
import Link from 'next/link';
import { useState } from 'react';
import { styles } from '@/utils/styles';

type enteredValuesProp = {
  email: string
  password: string
}

export default function SignUp() {

  const [enteredValues, setEnteredValues] = useState<enteredValuesProp> ({
    email: "",
    password: ""

  })
  return (
    <div>
      <div className={` px-5 flex items-center justify-center min-h-screen bg-gray-100`}>
        <div className="w-full max-w-md p-5 md:p-8 space-y-3 shadow-md bg-white rounded-lg">
          <h1 className="text-xl mb-7 font-semibold text-center">Sign Up</h1>

          <form className="space-y-6">
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                required
                placeholder="JohnDoe@gmail.com"
                className="w-full px-3 py-2 border rounded-md hover:border hover:border-primary outline-none focus:border-primary ease-linear duration-75"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Company Name
              </label>
              <input
                type="text"
                required
                placeholder="Your Company"
                className="w-full px-3 py-2 border rounded-md hover:border hover:border-primary outline-none focus:border-primary ease-linear duration-75"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                required
                placeholder="Tu64858$%^&"
                className="w-full px-3 py-2 border rounded-md hover:border hover:border-primary outline-none focus:border-primary ease-linear duration-75"
              />
            </div>
            <div className="">
              <button
                type="submit"
                className="w-full px-4 py-2 text-white bg-primary rounded-md hover:bg-blue-600"
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
            <div className="flex flex-col justify-center text-sm">
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
