import React from "react";

export default function Paid() {
  return (
    <div class="w-full h-auto bg-white shadow rounded-lg  mt-10 py-10 ">
      <span class="flex text-4xl mb-10 items-center px-10">
        <span class="border-4 border-green-500 rounded-full p-1">
          <svg
            viewBox="0 0 20 20"
            fill="currentColor"
            class="check-circle w-10 h-10 text-green-500  "
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </span>
        <span class="ml-4 text-3xl font-medium">Paid</span>
      </span>
      <div class="px-10">
        <div class="flex justify-between py-3 ">
          <span>Subtotal</span>
          <span>33.00</span>
        </div>
        <div class="flex justify-between py-3 ">
          <span>Shipping</span>
          <span>33.00</span>
        </div>
        <div class="flex justify-between py-3 ">
          <span>Tax</span>
          <span>33.00</span>
        </div>
        <div class="flex justify-between font-bold text-gray-800 py-3 pb-8">
          <span>Total</span>
          <span>33.00</span>
        </div>
        <div class="border-t  "></div>
        <div class="flex justify-between py-8 text-gray-800 ">
          <span>Paid by customer</span>
          <span>33.00</span>
        </div>
      </div>
      <div class="border-t"></div>
      <div class="flex justify-end mt-12 px-10">
        <button class="py-6 px-12 border bg-gray-100 rounded-lg">Refund</button>
      </div>
    </div>
  );
}
