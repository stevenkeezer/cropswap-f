import React from "react";
import formatMoney from "../lib/formatMoney";

export default function OrderPaidSummary({ order }) {
  return (
    <div class="w-full h-auto bg-white shadow-sm rounded-lg ">
      <div class="flex justify-between items-baseline  pb-8 pt-10 px-10 border-white shadow-sm">
        <div class=" text-xl font-medium text-gray-600  text-gray-800 text-3xl">
          Order Summary{" "}
        </div>
      </div>

      <div class="pt-6">
        <div class="flex justify-between py-3 px-10">
          <span class="font-semibold text-gray-700">Subtotal:</span>
          <span class="font-medium text-gray-700">
            {formatMoney(order.total)}
          </span>
        </div>
        <div class="flex justify-between  pb-4 px-10">
          <span class="text-gray-500 text-2xl">{order.items.length} items</span>
        </div>

        <div class="flex justify-between py-3 px-10 ">
          <span class="font-semibold text-gray-700 ">Shipping:</span>
          <span class="font-medium text-gray-700">$0.00</span>
        </div>
        <div class="flex justify-between py-3 px-10 mb-8">
          <span class="font-semibold text-gray-700 ">Estimated Tax:</span>
          <span class="font-medium text-gray-700">$0.00</span>
        </div>

        <div class="border-t-2 border-white shadow-sm "></div>
        <div class="flex justify-between pt-10 px-10 pb-10 text-gray-800 ">
          <span class="text-gray-700 font-semibold ">Total:</span>
          <span class="font-medium text-gray-700">
            {formatMoney(order.total)}
          </span>
        </div>
      </div>
    </div>
  );
}
