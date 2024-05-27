"use client"
import Image from "next/image";
import Link  from "next/link";
// import logo from "../../../../../public/logo1.png";
import DropDownUser from "../DropDownUser";
import { useAllContx } from "@/store/AllContext";
import DropdownNotification from "../DropdownNotification";
// interface headerProps {
//   sidebarOpen: string | boolean | undefined;
//   setSidebarOpen: (arg0: boolean) => void;
// }

const Header = () => {

    const { sidebarOpen, setSidebarOpen } = useAllContx();

  return (
    <header className="sticky  font-roboto top-0 z-999 flex w-full  bg-white  drop-shadow-1 ">
      <div className="flex flex-grow items-center justify-between px-4 py-5 shadow-2 md:px-6 2xl:px-11">
        <form action="" className="hidden md:block"></form>
        <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSidebarOpen(!sidebarOpen);
            }}
            className="z-99999 block rounded-sm   p-1  lg:hidden"
          >
            <span className="relative block h-6 w-6 cursor-pointer">
              <span className="du-block absolute right-0 h-full w-full">
                <span
                  className={`relative top-0 left-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-[0] duration-200 ease-in-out  ${
                    !sidebarOpen && "!w-full delay-300"
                  }`}
                ></span>
                <span
                  className={`relative top-0 left-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-150 duration-200 ease-in-out  ${
                    !sidebarOpen && "delay-400 !w-full"
                  }`}
                ></span>
                <span
                  className={`relative top-0 left-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-200 duration-200 ease-in-out  ${
                    !sidebarOpen && "!w-full delay-500"
                  }`}
                ></span>
              </span>
              <span className="absolute right-0 h-full w-full rotate-45">
                <span
                  className={`absolute left-2 top-0 block h-full w-0.1 rounded-sm bg-black delay-300 duration-200 ease-in-out  ${
                    sidebarOpen && "!h-0 !delay-[0]"
                  }`}
                ></span>
                <span
                  className={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-black duration-200 ease-in-out  ${
                    !sidebarOpen && "!h-0 !delay-200"
                  }`}
                ></span>
              </span>
            </span>
          </button>

          {/* <Link className="block flex-shrink-0 lg:hidden" href="/">
            <Image src={logo} width="70" height="70" alt="" />
          </Link> */}
        </div>

        <div className="flex items-center gap-3 2xsm:gap-7">
          <ul className="flex items-center gap-2 2xsm:gap-4">
         
            {/* <!-- Dark Mode Toggler --> */}
            {/* <DarkModeSwitcher /> */}
            {/* <!-- Dark Mode Toggler --> */}

            {/* <!-- Notification Menu Area --> */}
            <DropdownNotification />
            {/* <!-- Notification Menu Area --> */}

            {/* <!-- Chat Notification Area --> */}
            {/* <DropdownMessage /> */}
            {/* <!-- Chat Notification Area --> */}
          </ul>

          {/* <!-- User Area --> */}
          <DropDownUser />
          {/* <!-- User Area --> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
