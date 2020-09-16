import React from "react";

export default function DeliveryInformation() {
  return (
    <>
      <div class="w-full h-auto bg-white shadow-sm rounded-lg  mt-6 ">
        <div class="mb-6 ">
          <div class="flex justify-between items-baseline border-b-2 border-white shadow-sm">
            <div class=" text-xl font-medium  text-gray-800 py-10 px-10 text-3xl">
              Delivery Information
            </div>
          </div>
          <div class="py-8">
            <a class="text-2xl text-gray-500 px-10  ">
              No notes from the customer
            </a>
          </div>
        </div>
        <div class="px-10 pb-8">
          <button class="w-full py-8 bg-green-600  rounded-lg text-white">
            Track Package
          </button>
        </div>
      </div>
    </>
  );
}
