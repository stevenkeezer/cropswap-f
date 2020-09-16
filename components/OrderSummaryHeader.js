import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWallet,
  faUsers,
  faUserPlus,
  faServer,
  faTasks,
  faInbox,
  faCaretUp,
  faChevronRight,
  faEllipsisH,
} from "@fortawesome/free-solid-svg-icons";

export default function OrderSummaryHeader() {
  return (
    <main class="flex-1 overflow-x-hidden w-full mb-6 overflow-y-auto bg-gray-200 mx-auto border-transparent rounded-lg border shadow ">
      <div class="container mx-auto px-3 ">
        <div class="">
          <div class="flex flex-wrap -mx-6  ">
            <div class="w-full sm:w-1/2 xl:w-1/3 ">
              <div class="flex items-center px-3 py-8 border-r border-gray-400 ">
                <div class="mx-8">
                  <h4 class="text-2xl font-semibold ">
                    <div class="text-gray-700 tracking-widest captialise mb-6">
                      PRODUCTS
                    </div>
                  </h4>
                  <span class="text-gray-700 text-6xl">
                    {/* {allOrders && allOrders.length} */}
                    33
                  </span>
                  <br></br>
                  <button class="mt-6 bg-green-700 text-green-100 px-5 py-3 rounded-full">
                    <span class="mr-3 font-medium">View All</span>
                    <FontAwesomeIcon icon={faChevronRight} size="xs" />{" "}
                  </button>
                </div>
              </div>
            </div>

            <div class="w-full mt-6 sm:w-1/2 xl:w-1/3 sm:mt-0 ">
              <div class="flex items-center px-3 py-8 ">
                <div class="mx-6">
                  <h4 class="text-2xl font-semibold">
                    <div class="text-gray-700 tracking-widest captialise mb-6">
                      OPEN ORDERS{" "}
                    </div>
                  </h4>
                  <span class="text-gray-700 text-6xl">3</span>
                  <br></br>
                  <button class="mt-6 bg-green-700 text-green-100 px-5 py-3 rounded-full">
                    <span class="mr-3 font-medium">View All</span>
                    <FontAwesomeIcon icon={faChevronRight} size="xs" />{" "}
                  </button>
                </div>
              </div>
            </div>

            <div class="w-full mt-6  sm:w-1/2 xl:w-1/3 xl:mt-0 ">
              <div class="flex items-center px-3 py-8 border-l  border-gray-400">
                <div class="mx-6">
                  <h4 class="text-2xl font-semibold">
                    <div class="text-gray-700 tracking-widest captialise mb-6">
                      ITEMS SOLD
                    </div>
                  </h4>
                  <span class="text-gray-700 text-6xl">$122</span>
                  <br></br>
                  <button class="mt-6 bg-green-700 text-green-100 px-5 py-3 rounded-full">
                    <span class="mr-3 font-medium">View All</span>

                    <FontAwesomeIcon icon={faChevronRight} size="xs" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
