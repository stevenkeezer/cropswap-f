import React from "react";
import { Query } from "@apollo/client";
import { formatDistance } from "date-fns";
import Link from "next/link";
import styled from "styled-components";
import gql from "graphql-tag";
import { useQuery } from "@apollo/client";
import { useUser } from "./User";
import Error from "./ErrorMessage";
import Footer from "./Footer";
import Toolbar from "../components/Toolbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SummaryHeader from "./SummaryHeader";
import PaymentHistory from "../components/PaymentHistory";

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
import OrderSummaryHeader from "./OrderSummaryHeader.js";

const USER_ORDERS_QUERY = gql`
  query USER_ORDERS_QUERY {
    orders(orderBy: createdAt_DESC) {
      id
      total
      createdAt
      items {
        id
        title
        price
        description
        quantity
        authorName
        image
      }
    }
  }
`;

const OrderUl = styled.ul`
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(auto-fit, minmax(40%, 1fr));
`;

function OrderList() {
  const me = useUser();

  const { data, loading, error } = useQuery(USER_ORDERS_QUERY);
  if (loading) return <p>loading...</p>;
  if (error) return <Error error={error} />;
  const allOrders = data.orders.map((item) => item.items).flat(2);

  return (
    <div class="">
      <div class="mx-auto max-w-screen-xl  flex  mt-24 mb-24 ">
        <div class="lg:w-1/4  bg-transparent ">
          <Toolbar />
        </div>
        <div class="lg:w-full bg-transparent px-16 ">
          <div class=" mb-8 mt-5 text-gray-800 flex items-baseline justify-between gap-12">
            <span class="text-5xl font-medium">Orders</span>
            <div class="flex gap-3 items-center  ">
              <svg
                class="w-8 h-8 rotate-90 transform text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                ></path>
              </svg>
              <span class="font-semibold text-gray-600">Filters</span>
            </div>
          </div>
          {/* <OrderSummaryHeader /> */}
          {/* <SummaryHeader /> */}
          <div class="flex flex-col mx-auto max-w-screen-xl mt-16">
            <div class="rounded-t ">
              <div class="align-middle inline-block min-w-full   ">
                <table class="min-w-full  ">
                  <thead class="shadow-sm rounded-lg overflow-auto">
                    <tr class=" rounded-lg">
                      <th class="px-10  py-8 bg-white rounded-l-lg tracking-widest  text-left text-xl leading-6 font-normal text-gray-600 tracking-wider">
                        Items
                      </th>
                      <th class="px-10 py-6  bg-white tracking-widest text-left text-xl leading-6 font-normal text-gray-600 tracking-wider">
                        Quantity
                      </th>
                      <th class="px-10 py-6 bg-white tracking-widest  text-left text-xl leading-6 font-normal text-gray-600 tracking-wider">
                        Status
                      </th>
                      <th class="px-10 py-6  bg-white tracking-widest text-left text-xl leading-6 font-normal text-gray-600 tracking-wider">
                        Price
                      </th>
                      <th class="px-10 py-6  bg-white rounded-r-lg tracking-widest "></th>
                    </tr>
                  </thead>
                  <div class="h-8"></div>
                  <tbody
                    // style={{
                    //   boxShadow: "0 0 0 1px red",
                    //   borderRadius: "10px",
                    // }}
                    class="bg-transparent shadow-sm  "
                  >
                    {allOrders &&
                      allOrders.map((order, index) => {
                        return (
                          <tr
                            class={` border-b border-gray-100 rounded-t-lg ${
                              index === 0 && "rounded-lg"
                            } ${
                              allOrders.length === index + 1 &&
                              "rounded-bl-lg rounded-br-lg border-none"
                            } `}
                          >
                            <td
                              class={`px-10 whitespace-no-wrap bg-white  ${
                                index === 0 && "rounded-tl-lg"
                              } ${
                                allOrders.length === index + 1 &&
                                "rounded-bl-lg"
                              }`}
                            >
                              <div class="flex items-center gap-10">
                                <img
                                  class="border-2 border-white rounded-lg object-cover h-24 w-24 -mr-2"
                                  key={order.image}
                                  src={order.image}
                                  alt={order.title}
                                />
                                <div>
                                  <div class="text-2xl font-medium leading-6 pb-2 text-gray-900">
                                    {order.title}
                                  </div>
                                  <div class="text-xl leading-6 mt-3 capitalize text-gray-500">
                                    By {order.authorName}
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td
                              class={`px-10 py-16 whitespace-no-wrap bg-white `}
                            >
                              <div class="flex items-center">
                                <div class="flex flex-row-reverse justify-end mr-2">
                                  <span class="flex items-center justify-center text-sm text-grey-darker font-semibold rounded-lg h-10 w-10">
                                    +3
                                  </span>

                                  <img
                                    class="border-2 border-white rounded-full h-10 w-10 -mr-2"
                                    key={order.id}
                                    src={order.image}
                                    alt={order.title}
                                  />
                                </div>

                                <div class="ml-6">
                                  {/* <div class="text-xl leading-6 text-gray-500">
                               hi
                             </div> */}
                                </div>
                              </div>
                            </td>

                            <td
                              class={`px-10 py-12 whitespace-no-wrap bg-white`}
                            >
                              <span class="px-5 py-2 inline-flex text-xl leading-6 font-semibold rounded-lg cursor-pointer bg-orange-200 text-orange-500">
                                Ready for Pickup
                              </span>
                            </td>

                            <td
                              class={`px-10 py-12 whitespace-no-wrap font-medium text-gray-700 bg-white `}
                            >
                              {order.price}
                            </td>

                            <td
                              class={`px-10 py-12 whitespace-no-wrap bg-white ${
                                allOrders.length === index + 1 &&
                                "rounded-br-lg"
                              }
                              
                              ${index === 0 && "rounded-tr-lg"} `}
                            >
                              <a
                                href="#"
                                class="text-grey-300 hover:text-grey-500"
                              >
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
              {/* <Items /> */}

              <PaymentHistory />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default OrderList;
