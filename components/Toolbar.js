import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useUser } from "./User";

export default function Toolbar() {
  const me = useUser();
  const router = useRouter();

  return (
    <>
      <div class="flex w-full px-3 py-3 bg-white  shadow-sm rounded-lg">
        <ul class="flex flex-col w-full">
          <li class="my-px">
            <Link
              href={{
                pathname: "/mcs/summary",
              }}
            >
              <a
                class={`flex flex-row items-center h-16 px-3 rounded-lg text-gray-600 hover:bg-gray-100 ${
                  (router.pathname === "/mcs/summary" && "bg-gray-100") ||
                  (router.pathname === "/mcs" && "bg-gray-100")
                } `}
              >
                <span class="flex items-center justify-center text-xl text-gray-500 opacity-50">
                  <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="home  h-10 w-10 mr-2"
                  >
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                  </svg>
                </span>
                <span class="ml-3">My Farm</span>
                {/* <span class="flex items-center justify-center text-lg text-gray-500 font-semibold bg-gray-200 h-6 px-2 rounded-full ml-auto"></span> */}
              </a>
            </Link>
          </li>
          <li class="my-px">
            <Link
              href={{
                pathname: "/mcs/orders",
              }}
            >
              <a
                class={`flex flex-row items-center h-16 px-3 rounded-lg text-gray-600 hover:bg-gray-100 ${
                  router.pathname === "/mcs/orders" && "bg-gray-100"
                } `}
              >
                <span class="flex items-center justify-center text-xl text-gray-500 opacity-50">
                  <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="clipboard-list h-10 w-10 mr-2"
                  >
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                    <path
                      fill-rule="evenodd"
                      d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
                <span class="ml-3">Buying</span>
              </a>
            </Link>
          </li>
          <li class="my-px">
            <Link
              href={{
                pathname: "/mcs/selling",
              }}
            >
              <a
                class={`flex flex-row items-center h-16 px-3 rounded-lg text-gray-600 hover:bg-gray-100 ${
                  router.pathname === "/mcs/selling" && "bg-gray-100"
                } `}
              >
                <span class="flex items-center justify-center text-xl text-gray-500 opacity-50">
                  <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="user-group h-10 w-10 mr-2"
                  >
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                  </svg>
                </span>
                <span class="ml-3">Selling</span>
                <span class="flex items-center justify-center text-lg text-gray-500 font-semibold bg-gray-200 h-6 px-4 py-4 rounded-full  ml-auto">
                  1
                </span>
              </a>
            </Link>
          </li>
          <li class="my-px">
            <Link
              href={{
                pathname: "/compose",
              }}
            >
              <a
                class={`flex flex-row items-center h-16 px-3 rounded-lg text-gray-600 hover:bg-gray-100 ${
                  router.pathname === "/compose" && "bg-gray-100"
                } `}
              >
                <span class="flex items-center justify-center text-xl text-green-600 opacity-50">
                  <svg
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    class="h-10 w-10 mr-2"
                  >
                    <path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </span>
                <span class="ml-3">Add new</span>
              </a>
            </Link>
          </li>
          <li class="my-px mt-6">
            <span class="flex font-medium text-xl text-gray-600 opacity-50 px-4 ml-1 my-1 mt-6 uppercase">
              Garden Tips
            </span>
          </li>
          {/* <li class="my-px">
            <Link
              href={{
                pathname: "/profile",
              }}
            >
              <a
                href="#"
                class={`flex flex-row items-center h-16 px-3 rounded-lg text-gray-600 ${
                  router.pathname === "/profile" && "bg-gray-100"
                } `}
              >
                <span class="flex items-center justify-center text-xl text-gray-500 opacity-50">
                  <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="user  h-10 w-10 mr-2"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
                <span class="ml-3">Profile</span>
              </a>
            </Link>
          </li> */}
          {/* <li class="my-px">
            <a
              href="#"
              class="flex flex-row items-center h-16 px-3 rounded-lg text-gray-600 hover:bg-gray-100"
            >
              <span class="flex items-center justify-center text-xl text-gray-500 opacity-50">
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="bell h-10 w-10 mr-2"
                >
                  <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path>
                </svg>
              </span>
              <span class="ml-3">Notifications</span>
              <span class="flex items-center justify-center text-lg text-gray-500 font-semibold bg-gray-200 h-6 px-2 rounded-full ml-auto">
                10
              </span>
            </a>
          </li> */}
          {/* <li class="my-px">
            <Link
              href={{
                pathname: "/me",
              }}
            >
              <a
                class={`flex flex-row items-center h-16 px-3 rounded-lg text-gray-600 ${
                  router.pathname === "/me" && "bg-gray-100"
                } `}
              >
                <span class="flex items-center justify-center text-xl text-gray-500 opacity-50">
                  <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="cog h-10 w-10 mr-2"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
                <span class="ml-3">Settings</span>
              </a>
            </Link>
          </li> */}
          <li class="my-px pt-3">
            <a
              href="#"
              class="flex flex-row items-center h-12 my-1 px-3  rounded-lg text-gray-600 hover:bg-gray-100"
            >
              <span class="ml-2">Vertical cropping</span>
            </a>
          </li>
          <li class="my-px">
            <a
              href="#"
              class="flex flex-row items-center h-12 my-1 px-3 rounded-lg text-gray-600 hover:bg-gray-100"
            >
              <span class="ml-2">Composting & Teas</span>
            </a>
          </li>{" "}
          <li class="my-px">
            <a
              href="#"
              class="flex flex-row items-center h-12 my-1 px-3 rounded-lg text-gray-600 hover:bg-gray-100"
            >
              <span class="ml-2">How to: Pruning</span>
            </a>
          </li>
          <li class="my-px">
            <a
              href="#"
              class="flex flex-row items-center h-12 my-1 px-3 rounded-lg text-gray-600 hover:bg-gray-100"
            >
              <span class="ml-2">Raised beds</span>
            </a>
          </li>
          <li class="flex flex-row items-center relative justify-start  p-2 rounded mt-32">
            <div class="relative flex-shrink-0">
              <a href="#" class="flex rounded-full w-16 h-16 ml-2">
                <img
                  src="https://lh3.googleusercontent.com/ogw/ADGmqu_VprfazmMc0tDZLFDt1vmr9s-8P4ZCHeDgCxiy=s83-c-mo"
                  alt
                  class="w-full h-full rounded-full"
                />
              </a>
            </div>
            <div class="flex flex-col flex-grow ml-6">
              <h3 class="font-semibold text-2xl capitalize">{me.name}</h3>
              <Link
                href={{
                  pathname: "/profile",
                }}
              >
                <p class="text-xl text-gray-600 font-medium mt-3 cursor-pointer">
                  View Profile
                </p>
              </Link>
            </div>
            <Link
              href={{
                pathname: "/me",
              }}
            >
              <div class="flex items-center justify-center text-xl text-gray-500 opacity-50 cursor-pointer">
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="cog h-10 w-10"
                >
                  <path
                    fill-rule="evenodd"
                    d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
