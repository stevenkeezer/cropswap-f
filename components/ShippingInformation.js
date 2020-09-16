import React from "react";

export default function ShippingInformation() {
  return (
    <>
      <div class="w-full h-auto bg-white shadow-sm rounded-lg  mt-6 mb-8 ">
        <div class=" mb-6">
          <div class="flex justify-between items-baseline border-b-2 py-10 px-10 border-white shadow-sm">
            <div class=" text-xl font-medium  text-gray-800 text-3xl">
              Shipping Information
            </div>
          </div>
          <div class="px-10 py-10">
            <div class="flex justify-between items-center">
              <div class=" text-xl font-bold  text-gray-800 py-1">Sent to:</div>
            </div>
            <div class="py-2 font-semibold text-gray-700 pt-6">Ima Persen</div>
            <div class="py-2 font-semibold text-gray-700">150 Elgin Street</div>
            <div class="py-2 font-semibold text-gray-700">Floor 8</div>
            <div class="py-2 font-semibold text-gray-700">
              Ottawa ON k2p 1L4
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
