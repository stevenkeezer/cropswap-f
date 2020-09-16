import React from "react";
import OrderItemSummary from "./OrderItemSummary";
import ShippingInformation from "./ShippingInformation";
import BillingInformation from "./BillingInformation";
import DeliveryInformation from "./DeliveryInformation";
import OrderPaidSummary from "./OrderPaidSummary";
import { useRouter } from "next/router";

export default function OrderDetails({ order }) {
  return (
    <div class="max-w-screen-xl mx-auto">
      <div class="flex justify-between mt-24 ">
        <a class="text-blue-400 font-semibold">Back To Account</a>
      </div>
      <div class="flex justify-center items-baseline mt-4  mx-auto border-b-2 border-gray-300">
        {/* <Link
          href={{
            pathname: "/order/detail",
            query: { page: page - 1 },
          }}
        > */}
        <h2 class="flex-col w-full py-6 text-gray-800  text-4xl font-medium">
          Order Details
        </h2>
        {/* </Link> */}

        <div class="flex items-center ">
          <div class="whitespace-no-wrap text-gray-600 font-medium">
            Order placed on {order.createdAt} to be delivered on 8/13/20
          </div>
          <div class="flex gap-3 items-center justify-end   pl-12  ">
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              class="printer w-10 h-10 text-gray-500"
            >
              <path
                fill-rule="evenodd"
                d="M5 4v3H4a2 2 0 00-2 2v3a2 2 0 002 2h1v2a2 2 0 002 2h6a2 2 0 002-2v-2h1a2 2 0 002-2V9a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H7a2 2 0 00-2 2zm8 0H7v3h6V4zm0 8H7v4h6v-4z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="text-gray-600 whitespace-no-wrap ">Print</span>
          </div>
        </div>
        <div class="flex items-baseline"></div>
      </div>

      <div class="grid grid-cols-3 gap-16 max-w-screen-xl mt-12  mx-auto">
        <div class="col-span-2 bg-transparent h-auto w-full shadow-sm bg-white rounded-lg">
          <div class="flex justify-between px-10 py-10 border-b items-baseline border-white ">
            <div class=" text-xl font-medium  text-gray-800 text-3xl">
              Items from blahs garden
            </div>
            <div class="font-semibold text-gray-700">
              Order <span class="text-blue-400">#{order.id}</span>
            </div>
          </div>
          <OrderItemSummary order={order} />
        </div>
        <div class="col-span-1 bg-transparent h-auto w-full">
          <OrderPaidSummary order={order} />
        </div>
      </div>
      <div class="border-t-2 mt-16 pt-6 flex gap-16 border-gray-300">
        <div class="col-span-1 bg-transparent h-auto w-full">
          <BillingInformation order={order} />
        </div>
        <div class="col-span-1 bg-transparent h-auto w-full">
          <ShippingInformation />
        </div>
        <div class="col-span-1 bg-transparent h-auto w-full">
          <DeliveryInformation />
        </div>
      </div>
    </div>
  );
}
