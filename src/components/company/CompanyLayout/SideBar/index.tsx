"use client";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
// import logo from "../../../../../public/logo1.png";
import Image from "next/image";
import { useAllContx } from "@/store/AllContext";
import React from "react";
import Link from "next/link";

const LINKS = [
  {
    name: "Dashboard",
    url: "/dashboard",
    icon: (
      <svg
        className="fill-current"
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.7499 2.9812H14.2874V2.36245C14.2874 2.02495 14.0062 1.71558 13.6405 1.71558C13.2749 1.71558 12.9937 1.99683 12.9937 2.36245V2.9812H4.97803V2.36245C4.97803 2.02495 4.69678 1.71558 4.33115 1.71558C3.96553 1.71558 3.68428 1.99683 3.68428 2.36245V2.9812H2.2499C1.29365 2.9812 0.478027 3.7687 0.478027 4.75308V14.5406C0.478027 15.4968 1.26553 16.3125 2.2499 16.3125H15.7499C16.7062 16.3125 17.5218 15.525 17.5218 14.5406V4.72495C17.5218 3.7687 16.7062 2.9812 15.7499 2.9812ZM1.77178 8.21245H4.1624V10.9968H1.77178V8.21245ZM5.42803 8.21245H8.38115V10.9968H5.42803V8.21245ZM8.38115 12.2625V15.0187H5.42803V12.2625H8.38115ZM9.64678 12.2625H12.5999V15.0187H9.64678V12.2625ZM9.64678 10.9968V8.21245H12.5999V10.9968H9.64678ZM13.8374 8.21245H16.228V10.9968H13.8374V8.21245ZM2.2499 4.24683H3.7124V4.83745C3.7124 5.17495 3.99365 5.48433 4.35928 5.48433C4.7249 5.48433 5.00615 5.20308 5.00615 4.83745V4.24683H13.0499V4.83745C13.0499 5.17495 13.3312 5.48433 13.6968 5.48433C14.0624 5.48433 14.3437 5.20308 14.3437 4.83745V4.24683H15.7499C16.0312 4.24683 16.2562 4.47183 16.2562 4.75308V6.94683H1.77178V4.75308C1.77178 4.47183 1.96865 4.24683 2.2499 4.24683ZM1.77178 14.5125V12.2343H4.1624V14.9906H2.2499C1.96865 15.0187 1.77178 14.7937 1.77178 14.5125ZM15.7499 15.0187H13.8374V12.2625H16.228V14.5406C16.2562 14.7937 16.0312 15.0187 15.7499 15.0187Z"
          fill=""
        />
      </svg>
    ),
  },
  {
    name: "Vehicles",
    url: "/vehicles",
    icon: (
      <svg
        className="fill-current"
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        style={{ marginLeft: "-4px" }}
      >
        <path
          fill="currentColor"
          d="m5 11l1.5-4.5h11L19 11m-1.5 5a1.5 1.5 0 0 1-1.5-1.5a1.5 1.5 0 0 1 
        1.5-1.5a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5m-11 0A1.5 1.5 0 0 1 
        5 14.5A1.5 1.5 0 0 1 6.5 13A1.5 1.5 0 0 1 8 14.5A1.5 1.5 0 0 1 6.5 
        16M18.92 6c-.2-.58-.76-1-1.42-1h-11c-.66 0-1.22.42-1.42 1L3 12v8a1 1 0 0 0 1 
        1h1a1 1 0 0 0 1-1v-1h12v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-8z"
        />
      </svg>
    ),
  },

  {
    name: "Clients",
    url: "/clients",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 32 32"
        style={{ marginLeft: "-4px" }}
      >
        <path
          fill="currentColor"
          d="M28.523 23.813c-.518-.51-6.795-2.938-7.934-3.396c-1.133-.45-1.585-1.697-1.585-1.697s-.51.282-.51-.51c0-.793.51.51 1.02-2.548c0 0 1.415-.397 1.134-3.68h-.34s.85-3.51 0-4.698c-.853-1.188-1.187-1.98-3.06-2.548c-1.87-.567-1.19-.454-2.548-.396c-1.36.057-2.492.793-2.492 1.188c0 0-.85.057-1.188.397c-.34.34-.906 
        1.924-.906 2.32s.283 3.06.566 3.624l-.337.11c-.283 3.284 1.132 3.682 1.132 3.682c.51 
        3.058 1.02 1.755 1.02 2.548c0 .792-.51.51-.51.51s-.453 1.246-1.585 1.697c-1.132.453-7.416 
        2.887-7.927 3.396c-.51.52-.453 2.896-.453 2.896h12.036l.878-3.46l-.78-.78l1.343-1.345l1.343 
        1.344l-.78.78l.878 3.46h12.036s.063-2.378-.453-2.897z"
        />
      </svg>
    ),
  },
  {
    name: "Routes",
    url: "/routes",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        style={{ marginLeft: "-4px" }}
      >
        <path
          fill="currentColor"
          d="M11 10H5L3 8l2-2h6V3l1-1l1 1v1h6l2 2l-2 2h-6v2h6l2 2l-2 
        2h-6v6a2 2 0 0 1 2 2H9a2 2 0 0 1 2-2z"
        />
      </svg>
    ),
  },
  {
    name: "Staff",
    url: "/staff",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 36 36"
        style={{ marginLeft: "-4px" }}
      >
        <path
          fill="currentColor"
          d="M16.43 16.69a7 7 0 1 1 7-7a7 7 0 0 1-7 
        7m0-11.92a5 5 0 1 0 5 5a5 5 0 0 0-5-5M22 17.9a25.41 25.41 0 
        0 0-16.12 1.67a4.06 4.06 0 0 0-2.31 3.68v5.95a1 1 0 1 0 2 0v-5.95a2 
        2 0 0 1 1.16-1.86a22.91 22.91 0 0 1 9.7-2.11a23.58 23.58 
        0 0 1 5.57.66Zm.14 9.51h6.14v1.4h-6.14z"
        />
        <path
          fill="currentColor"
          d="M33.17 21.47H28v2h4.17v8.37H18v-8.37h6.3v.42a1 
        1 0 0 0 2 0V20a1 1 0 0 0-2 0v1.47H17a1 1 0 0 0-1 
        1v10.37a1 1 0 0 0 1 1h16.17a1 1 0 0 0 1-1V22.47a1 1 0 0 0-1-1"
        />
      </svg>
    ),
  },

  {
    name: "Alarms",
    url: "/alarms",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        style={{ marginLeft: "-4px" }}
      >
        <path
          fill="currentColor"
          d="M10.146 3.248a2 2 0 0 1 3.708 0A7.003 
        7.003 0 0 1 19 10v4.697l1.832 2.748A1 1 0 0 1 20 19h-4.535a3.501 3.501 
        0 0 1-6.93 0H4a1 1 0 0 1-.832-1.555L5 
        14.697V10c0-3.224 2.18-5.94 5.146-6.752M10.586 
        19a1.5 1.5 0 0 0 2.829 0zM12 5a5 5 0 0 0-5 5v5a1 
        1 0 0 1-.168.555L5.869 17H18.13l-.963-1.445A1 
        1 0 0 1 17 15v-5a5 5 0 0 0-5-5"
        />
      </svg>
    ),
  },

  {
    name: "Billing",
    url: "/bill",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 576 512"
        style={{ marginLeft: "-4px" }}
      >
        <path
          fill="currentColor"
          d="M64 64C28.7 64 0 92.7 
        0 128v256c0 35.3 28.7 64 64 64h448c35.3 0 64-28.7 
        64-64V128c0-35.3-28.7-64-64-64zm64 320H64v-64c35.3 0 
        64 28.7 64 64M64 192v-64h64c0 35.3-28.7 64-64 64m384 192c0-35.3 
        28.7-64 64-64v64zm64-192c-35.3 0-64-28.7-64-64h64zm-224-32a96 
        96 0 1 1 0 192a96 96 0 1 1 0-192"
        />
      </svg>
    ),
  },
  {
    name: "Reports",
    url: "/reports",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        style={{ marginLeft: "-4px" }}
      >
        <path
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 0 
        1-2-2V5a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l5.414 5.414a1 
        1 0 0 1 .293.707V19a2 2 0 0 1-2 2"
        />
      </svg>
    ),
  },
];


export default function SideBar() {
  const pathname = usePathname();

  const { sidebarOpen, setSidebarOpen } = useAllContx();

  const trigger = useRef<any>(null);
  const sidebar = useRef<any>(null);

  // const storedSidebarExpanded = localStorage.getItem("sidebar-expanded");

  // const [sidebarExpanded, setSidebarExpanded] = useState(
  //   storedSidebarExpanded === null ? false : storedSidebarExpanded === "true"
  // );

  // close on click outside
  // useEffect(() => {
  //   const clickHandler = ({ target }: MouseEvent) => {
  //     if (!sidebar.current || !trigger.current) return;
  //     if (
  //       !sidebarOpen ||
  //       sidebar.current.contains(target) ||
  //       trigger.current.contains(target)
  //     )
  //       return;
  //     setSidebarOpen(false);
  //   };
  //   document.addEventListener("click", clickHandler); 
  //   return () => document.removeEventListener("click", clickHandler);
  // });

  // close if the esc key is pressed
  // useEffect(() => {
  //   const keyHandler = ({ keyCode }: KeyboardEvent) => {
  //     if (!sidebarOpen || keyCode !== 27) return;
  //     setSidebarOpen(false);
  //   };
  //   document.addEventListener("keydown", keyHandler);
  //   return () => document.removeEventListener("keydown", keyHandler);
  // });

  // useEffect(() => {
  //   localStorage.setItem("sidebar-expanded", sidebarExpanded.toString());
  //   if (sidebarExpanded) {
  //     document.querySelector("body")?.classList.add("sidebar-expanded");
  //   } else {
  //     document.querySelector("body")?.classList.remove("sidebar-expanded");
  //   }
  // }, [sidebarExpanded]);
  return (
    <div>
      <aside
        className={`absolute font-roboto  bg-primary
         left-0 top-0 z-50 flex h-screen  w-72.5 flex-col  overflow-y-hidden  duration-300 ease-linear  lg:static lg:translate-x-0 ${
           sidebarOpen ? "translate-x-0" : "-translate-x-full"
         }`}
      >
        <div className="flex items-center justify-between gap-2 px-10 py-7 lg:py-6">
          {/* { <Link href="/">
            <Image
              src="/whitelogo.png"
              className="w-[70px] md:w-[150px]"
              width="150"
              height="100"
              alt=""
            />
       
          </Link> } */}
          <div className="">
            <h1 className=" text-white text-4xl font-semibold">SIGHT</h1>
          </div>

          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls="sidebar"
            className="block lg:hidden"
          >
            <svg
              className="fill-white"
              width="17"
              height="18"
              viewBox="0 0 20 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
                fill=""
              />
            </svg>
          </button>
        </div>

        <div className="  flex flex-col overflow-y-auto ">
          <nav className="mt-5 py-5 px-4 lg:mt-9 lg:px-7">
            <ul className="mb-6  flex flex-col gap-5">
              {LINKS.map((item, index) => (
                <li key={index}>
                  {" "}
                  <Link
                    href={item.url}
                    className={`roup relative flex items-center gap-2.5 rounded-sm px-4 py-2  text-white duration-300 ease-in-out hover:bg-white hover:text-black ${
                      pathname === item.url && "!text-black bg-white"
                    } `}
                  >
                    <span className="">{item.icon}</span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>
    </div>
  );
}
