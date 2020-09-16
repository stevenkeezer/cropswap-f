import React from "react";

export default function ContactInfo() {
  return (
    <>
      <div class="w-full h-auto bg-white shadow rounded-lg   py-2 mb-12 ">
        <div class="px-10 py-8">
          <span class="flex text-3xl mb-12 font-medium items-center">
            Customer
          </span>
          <div class="text-blue-500">Ima Persen</div>
          <div class="py-3">1 order</div>
        </div>
        <div class="border-b"></div>
        <div class="px-10 py-6 mb-6">
          <div class="flex justify-between items-center">
            <div class=" text-xl font-bold  text-gray-800 py-4 uppercase">
              Contact Information
            </div>
            <a class="text-xl text-blue-500">Edit</a>
          </div>
          <a class="text-xl text-blue-500 ">stevengkeezer@gmail.com</a>
        </div>

        <div class="border-b"></div>
        <div class="px-10 py-8 pb-10">
          <div class="flex justify-between items-center">
            <div class=" text-xl font-bold  text-gray-800 py-3 uppercase">
              Shipping Address
            </div>
            <a class="text-xl text-blue-500">Edit</a>
          </div>
          <div class="py-2 pt-6">Ima Persen</div>
          <div class="py-2">150 Elgin Street</div>
          <div class="py-2">Floor 8</div>
          <div class="py-2">Ottawa ON k2p 1L4</div>
          <div class="py-2">Canaada</div>
          <div class="mt-8">
            <a class="mt-12 text-blue-500">View map</a>
          </div>
        </div>

        <div class="border-b"></div>
        <div class="px-10 py-8">
          <div class="flex justify-between items-center">
            <div class=" text-xl font-bold  text-gray-800 py-3 uppercase">
              Billing Address
            </div>
            <a class="text-xl text-blue-500">Edit</a>
          </div>
          <div class="py-2 mt-3">Same</div>
        </div>
      </div>
    </>
  );
}
