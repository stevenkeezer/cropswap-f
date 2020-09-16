import React from "react";

export default function SkeletonSingleItem() {
  const count = 12;

  return (
    <>
      <div class="flex  mx-auto mt-8  pb-6 space-x-2 max-w-screen-xl ">
        <div class="h-4 bg-gray-300 rounded w-6 h-5"></div>
        <div class="h-4 bg-gray-300 rounded w-32 h-5"></div>
        <div class="h-4 bg-gray-300 rounded w-56 h-5"></div>
        <div class="h-4 bg-gray-300 rounded w-48 h-5"></div>
      </div>
      <div class="flex mx-auto max-w-screen-lg mt-8">
        <div class="  rounded  max-w-screen-sm  px-12 -mr-6 w-full mx-auto">
          <div class="animate-pulse  space-x-0 ">
            <div class="rounded bg-gray-300 h-auto w-full shadow ">
              <div class="h-64"></div>
              <div class="h-64"></div>
            </div>
          </div>
        </div>
        <div class="flex-1 space-y-2 ml-2  mt-5 py-1">
          <div class="h-16 bg-gray-300 rounded w-2/4"></div>
          <div class="">
            <div class="h-24 bg-gray-300 rounded w-11/12 "></div>
            <div class="h-48 mt-3 bg-gray-300 rounded w-11/12"></div>
            <div class="h-10 mt-3 bg-gray-300 rounded w-48"></div>
            <div class="h-6 mt-3 bg-transparent rounded w-48"></div>
          </div>

          <div class="h-24 bg-gray-300  mt-8 rounded-full w-11/12"></div>
        </div>
      </div>
    </>
  );
}
