import React from "react";
import Paid from "../components/Paid";
import Unfulfilled from "../components/Unfulfilled";
import ContactInfo from "../components/ContactInfo";
import Notes from "../components/Notes";

export default function OrderUnfufilled() {
  return (
    <div>
      <div class="flex items-baseline gap-3  justify-between py-3  mt-3">
        <div>
          <h1 class="text-5xl font-medium text-gray-800">#342455</h1>
        </div>
        <div class="py-6 px-12 border bg-green-600  text-white rounded-lg">
          <button>Fufill order</button>
        </div>
      </div>
      <div class="flex gap-2 items-center">
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
        <span class="text-gray-600">Print order</span>
      </div>
      <div class="flex  gap-8 mt-3">
        <div class="w-2/3">
          <Unfulfilled />
          <Paid />
        </div>
        <div class="w-1/3">
          <Notes />
          <ContactInfo />
        </div>
      </div>
    </div>
  );
}
