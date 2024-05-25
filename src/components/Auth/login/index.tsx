"use client"
import Link from 'next/link';
import React from 'react'

export default function Login() {
  return (
    <div className=" px-5 flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-5 md:p-8 space-y-3 shadow-md bg-white rounded-lg">
        <h1 className="text-xl mb-7 font-semibold text-center">Sign in</h1>

        {/* Add more social login buttons here */}

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
              Sign in
            </button>
          </div>
          <div className="relative  flex justify-center text-sm text-gray-500">
            <span className="px-2 ">or</span>
          </div>
          <div>
            <button
              type="button"
              className="w-full p-2 mb-1 text-white bg-black rounded-md hover:bg-red-600"
            >
              Sign in with Google
            </button>
          </div>
          <div className="flex flex-col justify-center text-sm">
            <div className="text-center mb-3">
         
              <Link className='cursor-pointer' href="/sign-up" legacyBehavior>
          
                  Sign Up
            
              </Link>
            </div>
            <div className="text-center">
              <p className="text-[#525252]">
                Forgot password?{" "}
                <span className='underline'>
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
