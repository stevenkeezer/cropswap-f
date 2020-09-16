import React from "react";
import formatMoney from "../lib/formatMoney.js";

export default function Unfulfilled({ items }) {
  console.log("FUK", items);
  return (
    <div class="lg:w-full bg-transparent  ">
      {/* <OrderSummaryHeader /> */}
      <div class="flex flex-col mx-auto max-w-screen-xl ">
        <div class=" rounded-t  ">
          <div class="align-middle inline-block min-w-full mt-12  ">
            <table class="min-w-full  table-auto  border-collapse">
              {/* <thead class="border-b  border-gray-100 rounded-lg"> */}
              <tr class=" shadow-sm border-t border-b border-opacity-50 border-gray-200">
                <th class="px-10 py-6 bg-white text-left text-xl leading-6 font-semibold text-gray-600 tracking-wider">
                  <div class="flex">
                    <div class="  w-auto  bg-white rounded-t-lg w-full text-gray-900 font-medium pt-12 text-3xl  pb-12">
                      Unfulfilled orders
                    </div>{" "}
                  </div>
                </th>
                <th class="px-6  bg-white text-left text-xl leading-6 font-semibold text-gray-600 tracking-wider">
                  <div class="flex">
                    Total
                    <svg
                      class="w-6 h-6 ml-2 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                      ></path>
                    </svg>
                  </div>
                </th>
                <th class="px-6  bg-white text-left text-xl leading-6 font-semibold text-gray-600 tracking-wider">
                  <div class="flex">
                    Payment Method
                    <svg
                      class="w-6 h-6 ml-2 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                      ></path>
                    </svg>
                  </div>
                </th>
                <th class="px-6  bg-white  text-left text-xl leading-6 font-semibold text-gray-600 tracking-wider">
                  <div class="flex">
                    Status
                    <svg
                      class="w-6 h-6 ml-2 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                      ></path>
                    </svg>
                  </div>
                </th>
                <th class="px-6  bg-white   text-left text-xl leading-6  text-gray-600 tracking-wider"></th>
              </tr>
              {/* </thead> */}
              {/* <div class="bg-transparent h-2 w-full"></div> */}
              <tbody class="shadow-sm p-3 rounded-lg">
                {items &&
                  items.map((order, index) => {
                    return (
                      <tr
                        class={` border-gray-100 border-b ${
                          items.length !== index + 1 && "border-0"
                        } `}
                      >
                        <td
                          class={`px-10 whitespace-no-wrap py-10 bg-white ${
                            index === null && "rounded-tl-lg"
                          } ${items.length === index + 1 && "rounded-bl-lg"} `}
                        >
                          <div class="flex items-center gap-10 ">
                            <img
                              class=" border-white rounded-lg object-cover h-24 w-24 -mr-2 relative"
                              key={order.image}
                              src={order.image}
                              alt={order.title}
                            />
                            <div
                              class={`absolute text-orange-100 bg-orange-500 p-0 px-3 py-2 text-lg border-white border font-medium ml-20 mt-20 rounded-full ${
                                order.quantity === 1 && `hidden`
                              }`}
                            >
                              {order.quantity}
                            </div>
                            <div>
                              <div class="text-2xl leading-6 pb-2 font-medium text-gray-900">
                                {order.title}
                              </div>
                              <div class="text-1xl leading-6 mt-3  text-gray-500">
                                {/* {order.items .length} items */}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td class={`px-6 py-10 whitespace-no-wrap bg-white`}>
                          <div class="flex items-center">
                            <div class="flex flex-row-reverse justify-end mr-2">
                              <span class="flex items-center justify-start text-xl text-gray-700 font-semibold rounded-lg h-10 w-10">
                                {order && formatMoney(order.price)}
                                {/* ${order.price} X{" "}
                                {order.quantity} = S
                                {order.quantity * order.price} */}
                              </span>
                              {/* {order.items.map((order) => (
                                <img
                                  class="border-2 border-white rounded-full h-10 w-10 -mr-2"
                                  key={order.id}
                                  src={order.image}
                                  alt={order.title}
                                />
                              ))} */}
                            </div>

                            <div class="ml-6">
                              {/* <div class="text-xl leading-6 text-gray-500">
                         hi
                       </div> */}
                            </div>
                          </div>
                        </td>

                        <td class={`px-6 py-10 whitespace-no-wrap bg-white`}>
                          <div class="flex items-center mt-8 mb-8">
                            <svg
                              class="w-10 h-10 text-green-400 bg-gray-300 p-1  rounded-full  mr-3"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                              ></path>
                            </svg>
                            <div class="font-semibold text-xl text-gray-700">
                              Cash on delivery
                            </div>
                          </div>
                        </td>

                        <td class={`px-6 py-12 whitespace-no-wrap bg-white`}>
                          <span class="px-5 py-2 inline-flex text-xl leading-6 font-semibold hover:bg-green-600 hover:text-green-100 rounded-lg cursor-pointer bg-gray-300 bg-opacity-75 border text-gray-600">
                            Arrange delivery
                          </span>
                        </td>

                        <td
                          class={`px-6 py-12 whitespace-no-wrap bg-white ${
                            index === null && "rounded-tr-lg"
                          } ${items.length === index + 1 && "rounded-br-lg"} `}
                        >
                          <a href="#" class="text-grey-300 hover:text-grey-500">
                            <svg
                              class="w-10 h-10 text-gray-600"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                              ></path>
                            </svg>
                          </a>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    // <div class="w-full h-auto bg-white shadow rounded-lg  py-10  mt-6 ">
    //   <span class="flex text-4xl mb-10 items-center px-10">
    //     <span class="border-4 border-yellow-300 rounded-full p-1">
    //       <svg
    //         viewBox="0 0 20 20"
    //         fill="currentColor"
    //         class="sun w-12 h-12 text-orange-400"
    //       >
    //         <path
    //           fill-rule="evenodd"
    //           d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
    //           clip-rule="evenodd"
    //         ></path>
    //       </svg>
    //     </span>
    //     <span class="ml-4 text-3xl font-medium">Unfulfilled</span>
    //   </span>

    //   <ul class="">
    //     <div>You have {items && items.length} new orders!</div>
    //     {items &&
    //       items.map((item) => (
    //         <li class="flex bg-white p-5 rounded-lg px-10 mb-5">
    //           <img
    //             src="https://purepng.com/public/uploads/large/purepng.com-birthday-cakefood-chocolate-cake-sweet-tasty-birthday-eat-delicious-941524600851xxygd.png"
    //             class="w-32"
    //           />
    //           <div class="flex-grow flex flex-col md:flex-row items-center justify-center md:justify-between">
    //             <p class="title font-semibold text-sm md:text-lg mb-5 md:mb-0 md:pl-5">
    //               {item.title}
    //             </p>
    //             <div class="flex">
    //               <button class="fa fa-minus rounded-lg bg flex justify-center items-center p-3 z-10"></button>
    //               <input
    //                 type="number"
    //                 value="1"
    //                 class="text-center text-md font-semibold p-2 rounded w-20 focus:outline-none"
    //               />
    //               <button class="fa fa-plus rounded-lg bg flex justify-center items-center p-3 z-10"></button>
    //             </div>
    //             <p class="value font-bold text-sm mt-5 md:mt-0">$12.80</p>
    //           </div>
    //         </li>
    //       ))}
    //   </ul>
    //   <div class="border-t"></div>
    //   <div class="flex justify-end mt-10 px-10">
    //     <button class="py-6 px-12 border bg-white text-gray-800 bg-gray-100 mr-8 rounded-lg">
    //       Mark as fufilled
    //     </button>
    //     <button class="py-6 px-12 border bg-green-600  text-white rounded-lg">
    //       Arrange Customer Pickup
    //     </button>
    //   </div>
    // </div>
  );
}
