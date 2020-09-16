import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function SummaryHeader() {
  return (
    <div
      // style={{
      //   backgroundColor: "#f5f5f5",
      //   backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23cbd5e0' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E")`,
      // }}
      class="  rounded-lg  rounded-t-lg "
    >
      <div class="md:flex  items-center ">
        <div class=" my-auto w-full">
          {/* <h2 class="text-xl md:text-4xl font-bold text-gray-800 mb-4 leading-tight">
            Buy and sell farm fresh goods
          </h2> */}

          {/*       
          <div class="flex gap-24 justify-start text-center my-auto my-3">
            <div class="flex row bg-white shadow-sm w-full  px-12 py-12 rounded-lg">
              <div class="w-1/2 w-1/2 h-1/2">
                <svg
                  class="w-12 h-12 bg-gray-100  rounded-lg"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                  ></path>
                </svg>
              </div>
              <div class="w-1/2">
                <div class="text-5xl"> 0</div>
                <div class="text-2xl text-blue-400 font-medium mt-3">
                  In Stock
                </div>
              </div>
            </div>
            <div class="flex-col bg-white shadow-sm px-12 py-12 rounded-lg">
              <div class="text-5xl"> 0</div>
              <div class="text-2xl text-blue-400 font-medium mt-3">
                {" "}
                All Sold
              </div>
            </div>{" "}
            <div class="flex-col bg-white shadow-sm px-12 py-12 rounded-lg">
              <div class="text-5xl"> 0</div>
              <div class="text-2xl text-blue-400 font-medium mt-3">Unsold</div>
            </div>
          </div>
        
         */}

          <div class="mt-4">
            <div class="sm:flex  sm:gap-16">
              <div class="w-full sm:w-1/2 xl:w-1/3">
                <div class="flex items-center px-10 py-12 shadow-sm rounded-lg bg-white">
                  <div class="p-3  rounded-lg bg-gray-300 bg-opacity-75 shadow-inner mr-2">
                    <svg
                      class="w-12 h-12 text-green-500  rounded-lg"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                      ></path>
                    </svg>
                  </div>

                  <div class="mx-5">
                    <h4 class="text-3xl font-semibold text-gray-700">0</h4>
                    <div class="text-gray-500 mt-4 font-medium whitespace-no-wrap font-medium">
                      Orders
                    </div>
                  </div>
                </div>
              </div>

              <div class="w-full mt-6  sm:w-1/2 xl:w-1/3 sm:mt-0">
                <div class="flex items-center px-10 py-12 shadow-sm rounded-md bg-white">
                  <div class="p-3 rounded-lg bg-gray-300 bg-opacity-75 shadow-inner mr-2  shadow-inner">
                    <svg
                      class="w-12 h-12 text-yellow-600  rounded-lg"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                      ></path>
                    </svg>
                  </div>

                  <div class="mx-5">
                    <h4 class="text-3xl font-semibold text-gray-700">0</h4>
                    <div class="text-gray-500 mt-4 font-medium text-xl whitespace-no-wrap">
                      On its way
                    </div>
                  </div>
                </div>
              </div>

              <div class="w-full sm:w-1/2 xl:w-1/3">
                <div class="flex items-center px-10 py-12 shadow-sm rounded-md bg-white">
                  <div class="p-3 rounded-lg bg-gray-300 bg-opacity-75 shadow-inner mr-2">
                    <svg
                      class="w-12 h-12 text-gray-700  rounded-lg"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                  </div>

                  <div class="mx-5">
                    <h4 class="text-3xl font-semibold text-gray-700">0</h4>
                    <div class="text-gray-500 mt-4">Delivered</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <button class="shadow-sm inline-flex items-center bg-green-600 hover:bg-green-700 focus:outline-none focus:shadow-outline text-white font-semibold py-3 px-8 rounded-lg">
            Take a Tour
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="ml-2 text-gray-300"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <rect x="0" y="0" width="24" height="24" stroke="none"></rect>
              <circle cx="12" cy="12" r="9" />
              <line x1="16" y1="12" x2="8" y2="12" />
              <line x1="16" y1="12" x2="12" y2="16" />
              <line x1="16" y1="12" x2="12" y2="8" />
            </svg>
          </button> */}
        </div>
      </div>
    </div>
  );
}
