import React from "react";
import { Query } from "@apollo/client";
import { formatDistance } from "date-fns";
import Link from "next/link";
import styled from "styled-components";
import gql from "graphql-tag";
import { useQuery } from "@apollo/client";
import Error from "./ErrorMessage";
import formatMoney from "../lib/formatMoney";
import OrderItemStyles from "./styles/OrderItemStyles";
import { perPage } from "../config";
import { useUser } from "./User";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Toolbar from "../components/Toolbar";
// shoudl be querying director
const ALL_ITEMS_QUERY = gql`
  query ALL_ITEMS_QUERY {
    items {
      id
      title
      price
      image
      createdAt
      user {
        id
      }
    }
  }
`;

const ORDER_ITEMS_QUERY = gql`
  query ORDER_ITEMS_QUERY {
    orders {
      id
      total
      charge
      user {
        name
      }
      items {
        id
        title
        image
        productCode
      }
    }
  }
`;

const OrderUl = styled.ul`
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(auto-fit, minmax(40%, 1fr));
`;

function Account() {
  const me = useUser();
  console.log("alllsdfasdf", me);
  const { loading: loadingR, error: errorR, data: dataR } = useQuery(
    ORDER_ITEMS_QUERY
  );

  const { loading, error, data } = useQuery(ALL_ITEMS_QUERY);

  if (loading) return <p>loading...</p>;
  if (error) return <Error error={error} />;
  if (loadingR) return <p>loading...</p>;
  if (errorR) return <Error error={error} />;

  const itemsListed = me && data.items.filter((item) => item.user.id === me.id);
  const ordersReceived = me && dataR.orders;

  console.log("ordere reeceived ", itemsListed);
  return (
    <div class="flex max-w-screen-xl mx-auto mt-24">
      <div class="w-1/4">
        <Toolbar />
      </div>
      <div class="w-full px-16">
        <form class="">
          <div class="text-5xl  font-semibold mx-auto pt-5 pb-10 border-b  mb-8 max-w-screen-lg">
            Account Settings
          </div>
          <div class="w-full flex  mx-auto  max-w-screen-lg">
            <div class="w-2/5 ">
              <span class="text-4xl ">Basics</span>
              <p class="w-11/12  pt-6 text-gray-600 text-2xl leading-8">
                Having an up-to-date email address attached to your account is a
                great way toward improved account security.
              </p>
            </div>

            <div class="w-3/5">
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                  <label
                    class="block tracking-wide text-gray-900 text-2xl font-normal mb-6 mt-1"
                    for="grid-password"
                  >
                    Email address
                  </label>
                  <input
                    class="h-20 appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="email"
                    type="email"
                  />
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                  <label
                    class="block tracking-wide text-gray-900 text-2xl font-normal mb-6"
                    for="grid-password"
                  >
                    Password{" "}
                  </label>
                  <button class="px-6 py-6 bg-gray-700 text-white rounded-lg">
                    Change your password
                  </button>
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full pt-3 px-3">
                  <label
                    class="block tracking-wide text-gray-900 text-2xl font-normal mb-6"
                    for="grid-password"
                  >
                    Language
                  </label>
                  <select
                    class="h-20 appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="email"
                    type="email"
                  >
                    <option value="volvo">English</option>
                    <option value="saab">Spanish</option>
                  </select>
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                  <label
                    class="block tracking-wide text-gray-900 text-2xl font-normal mb-6"
                    for="grid-password"
                  >
                    Country
                  </label>
                  <select
                    class="h-20 appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="email"
                    type="email"
                  >
                    <option value="volvo">USA</option>
                    <option value="saab">Mexico</option>
                  </select>
                </div>
              </div>
              <div class="md:flex md:items-center">
                <div class="md:w-1/3"></div>
                <div class="md:w-2/3"></div>
              </div>
            </div>
          </div>

          <div class="border mx-auto dark:border-gray-700 transition duration-500 mt-6 mb-6 ease-in-out  max-w-screen-lg"></div>
          <div class="w-full flex mx-auto  max-w-screen-lg">
            <div class="w-2/5 ">
              <span class="text-4xl ">Profile</span>
              <p class="w-11/12  pt-6 text-gray-600 text-2xl leading-8">
                This information will be shown publicly so be careful what
                information you provide.
              </p>
            </div>

            <div class="w-3/5">
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                  <label
                    class="block tracking-wide text-gray-900 text-2xl font-normal  mt-1 mb-6"
                    for="grid-password"
                  >
                    First Name{" "}
                  </label>
                  <input
                    class="h-20 appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="email"
                    type="email"
                  />
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                  <label
                    class="block tracking-wide text-gray-900 text-2xl font-normal mb-6"
                    for="grid-password"
                  >
                    Last Name{" "}
                  </label>
                  <input
                    class="h-20 appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="email"
                    type="email"
                  />
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                  <label
                    class="block tracking-wide text-gray-900 text-2xl font-normal mb-6"
                    for="grid-password"
                  >
                    Picture
                  </label>
                  <button class="px-6 py-6 border-2 text-gray-700 rounded-lg font-medium">
                    Change picture{" "}
                  </button>{" "}
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                  <label
                    class="block tracking-wide text-gray-900 text-2xl font-normal mb-6"
                    for="grid-password"
                  >
                    About you
                  </label>
                  <textarea
                    class="h-48 appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="email"
                    type="email"
                  />
                </div>
              </div>
              <div class="md:flex md:items-center">
                <div class="md:w-1/3"></div>
                <div class="md:w-2/3"></div>
              </div>
            </div>
          </div>

          <div class="border mx-auto dark:border-gray-700 transition duration-500 mt-6 mb-6 ease-in-out  max-w-screen-lg"></div>
          <div class="w-full flex mx-auto  max-w-screen-lg">
            <div class="w-2/5 ">
              <span class="text-4xl ">Billing</span>
              <p class="w-11/12  pt-6 text-gray-600 text-2xl leading-8">
                This information will be shown publicly so be careful what
                information you provide.
              </p>
            </div>

            <div class="w-3/5">
              <div class="flex flex-wrap -mx-3 mb-3 ">
                <div class="w-full px-3">
                  <div class="flex">
                    <label
                      class="block tracking-wide text-gray-900 text-2xl w-1/2 font-normal"
                      for="grid-password"
                    >
                      Change Plan
                    </label>
                    <button class="flex-end text-2xl text-blue-600 w-1/2 justify-center text-right font-medium rounded-lg">
                      Cancel Subscription{" "}
                    </button>
                  </div>
                  <br></br>
                  <div class="flex flex-row gap-8 justify-center items-center ">
                    <div class="md:w-1/3 sm:w-full rounded-lg shadow-inner bg-white my-3">
                      <div class="px-10 py-5 text-gray-700 font-bold uppercase">
                        Basic
                        <div>1 box</div>monthly
                      </div>
                    </div>

                    <div class="md:w-1/3 sm:w-full border-green-500 border-2 rounded-lg shadow-inner bg-white my-3">
                      <div class="px-10 py-5  text-gray-700 font-bold  uppercase">
                        Essential
                        <div>1 box</div>weekly
                      </div>
                    </div>

                    <div class="md:w-1/3 sm:w-full rounded-lg shadow-inner bg-white my-3">
                      <div class="px-10 py-5  text-gray-700 font-bold uppercase">
                        Pro
                        <div>1 box</div>daily
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="text-2xl text-gray-900 mt-8 font-normal">
                Payment method
              </div>
              <div class="flex border-2 border-gray-300 rounded-lg mt-6 shadow-inner bg-gray-100 mb-6 p-6">
                <div class="w-full px-3 text-2xl leading-9 w-1/2">
                  <div class="text-2xl text-gray-900 font-medium">
                    Visa ending in 5555
                  </div>
                  <div class="text-xl text-gray-600">expires 1/2019</div>
                </div>
                <div class="w-1/2 text-right">
                  <button class="px-6 py-6 border-2  text-2xl  border-2 border-gray-300 text-gray-900 font-medium rounded-lg">
                    Update
                  </button>
                </div>
              </div>
              <div class="md:flex md:items-center">
                <div class="md:w-1/3"></div>
                <div class="md:w-2/3"></div>
              </div>
            </div>
          </div>

          <div class="border mx-auto dark:border-gray-700 transition duration-500 mt-6 mb-6 ease-in-out  max-w-screen-lg"></div>
          <div class="w-full flex mx-auto  max-w-screen-lg">
            <div class="w-2/5">
              <span class="text-4xl ">Notifications</span>
              <p class="w-11/12  pt-6 text-gray-600 text-2xl leading-8">
                Get notified of activity going on with your account.
                Notifications will be sent to the email that you have provided.
              </p>
            </div>

            <div class="w-3/5">
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3 p-5">
                  <label class="custom-label flex items-center ">
                    <div class="bg-transparent border border-green-600 shadow-inner w-12 h-12 p-1 cursor-pointer rounded-lg flex justify-center items-center mr-2">
                      <input
                        type="checkbox"
                        class="hidden"
                        //   checked={check}
                        // onClick={() => setChecked(!check)}
                      />
                      <svg
                        // class={` w-12 h-12 text-green-700 pointer-events-none ${
                        //   !check && "hidden"
                        // }`}
                        viewBox="0 0 172 172"
                      >
                        <g
                          fill="none"
                          strokeWidth="none"
                          strokeMiterlimit="10"
                          fontFamily="none"
                          fontWeight="none"
                          fontSize="none"
                          textAnchor="none"
                          style={{ mixBlendmode: "normal" }}
                        >
                          <path d="M0 172V0h172v172z" />
                          <path
                            d="M145.433 37.933L64.5 118.8658 33.7337 88.0996l-10.134 10.1341L64.5 139.1341l91.067-91.067z"
                            fill="currentColor"
                            stroke-width="1"
                          />
                        </g>
                      </svg>
                    </div>
                    <span class="select-none pl-3">All all notifications</span>
                  </label>
                </div>
                <div class="w-full px-3 p-5">
                  <label class="custom-label flex items-center ">
                    <div class="bg-transparent border border-green-600 shadow-inner w-12 h-12 p-1 cursor-pointer rounded-lg flex justify-center items-center mr-2">
                      <input
                        type="checkbox"
                        class="hidden"
                        //   checked={check}
                        // onClick={() => setChecked(!check)}
                      />
                      <svg
                        // class={` w-12 h-12 text-green-700 pointer-events-none ${
                        //   !check && "hidden"
                        // }`}
                        viewBox="0 0 172 172"
                      >
                        <g
                          fill="none"
                          strokeWidth="none"
                          strokeMiterlimit="10"
                          fontFamily="none"
                          fontWeight="none"
                          fontSize="none"
                          textAnchor="none"
                          style={{ mixBlendmode: "normal" }}
                        >
                          <path d="M0 172V0h172v172z" />
                          <path
                            d="M145.433 37.933L64.5 118.8658 33.7337 88.0996l-10.134 10.1341L64.5 139.1341l91.067-91.067z"
                            fill="currentColor"
                            stroke-width="1"
                          />
                        </g>
                      </svg>
                    </div>
                    <span class="select-none pl-3">
                      This is a sample checkbox. All the text will toggle the
                      state
                    </span>
                  </label>
                </div>
                <div class="w-full px-3 p-5">
                  <label class="custom-label flex items-center ">
                    <div class="bg-transparent border border-green-600 shadow-inner w-12 h-12 p-1 cursor-pointer rounded-lg flex justify-center items-center mr-2">
                      <input
                        type="checkbox"
                        class="hidden"
                        //   checked={check}
                        // onClick={() => setChecked(!check)}
                      />
                      <svg
                        // class={` w-12 h-12 text-green-700 pointer-events-none ${
                        //   !check && "hidden"
                        // }`}
                        viewBox="0 0 172 172"
                      >
                        <g
                          fill="none"
                          strokeWidth="none"
                          strokeMiterlimit="10"
                          fontFamily="none"
                          fontWeight="none"
                          fontSize="none"
                          textAnchor="none"
                          style={{ mixBlendmode: "normal" }}
                        >
                          <path d="M0 172V0h172v172z" />
                          <path
                            d="M145.433 37.933L64.5 118.8658 33.7337 88.0996l-10.134 10.1341L64.5 139.1341l91.067-91.067z"
                            fill="currentColor"
                            stroke-width="1"
                          />
                        </g>
                      </svg>
                    </div>
                    <span class="select-none pl-3">
                      This is a sample checkbox. All the text will toggle the
                      state
                    </span>
                  </label>
                </div>{" "}
                <div class="w-full px-3 p-5">
                  <label class="custom-label flex items-center ">
                    <div class="bg-transparent border border-green-600 shadow-inner w-12 h-12 p-1 cursor-pointer rounded-lg flex justify-center items-center mr-2">
                      <input
                        type="checkbox"
                        class="hidden"
                        //   checked={check}
                        // onClick={() => setChecked(!check)}
                      />
                      <svg
                        // class={` w-12 h-12 text-green-700 pointer-events-none ${
                        //   !check && "hidden"
                        // }`}
                        viewBox="0 0 172 172"
                      >
                        <g
                          fill="none"
                          strokeWidth="none"
                          strokeMiterlimit="10"
                          fontFamily="none"
                          fontWeight="none"
                          fontSize="none"
                          textAnchor="none"
                          style={{ mixBlendmode: "normal" }}
                        >
                          <path d="M0 172V0h172v172z" />
                          <path
                            d="M145.433 37.933L64.5 118.8658 33.7337 88.0996l-10.134 10.1341L64.5 139.1341l91.067-91.067z"
                            fill="currentColor"
                            stroke-width="1"
                          />
                        </g>
                      </svg>
                    </div>
                    <span class="select-none pl-3">
                      This is a sample checkbox. All the text will toggle the
                      state
                    </span>
                  </label>
                </div>{" "}
                <div class="w-full px-3 p-5">
                  <label class="custom-label flex items-center ">
                    <div class="bg-transparent border border-green-600 shadow-inner w-12 h-12 p-1 cursor-pointer rounded-lg flex justify-center items-center mr-2">
                      <input
                        type="checkbox"
                        class="hidden"
                        //   checked={check}
                        // onClick={() => setChecked(!check)}
                      />
                      <svg
                        // class={` w-12 h-12 text-green-700 pointer-events-none ${
                        //   !check && "hidden"
                        // }`}
                        viewBox="0 0 172 172"
                      >
                        <g
                          fill="none"
                          strokeWidth="none"
                          strokeMiterlimit="10"
                          fontFamily="none"
                          fontWeight="none"
                          fontSize="none"
                          textAnchor="none"
                          style={{ mixBlendmode: "normal" }}
                        >
                          <path d="M0 172V0h172v172z" />
                          <path
                            d="M145.433 37.933L64.5 118.8658 33.7337 88.0996l-10.134 10.1341L64.5 139.1341l91.067-91.067z"
                            fill="currentColor"
                            stroke-width="1"
                          />
                        </g>
                      </svg>
                    </div>
                    <span class="select-none pl-3">
                      This is a sample checkbox. All the text will toggle the
                      state
                    </span>
                  </label>
                </div>
              </div>

              <div class="md:flex md:items-center">
                <div class="md:w-1/3"></div>
                <div class="md:w-2/3"></div>
              </div>
            </div>
          </div>
          <div class="border mx-auto dark:border-gray-700 transition duration-500 mt-6 mb-6 ease-in-out  max-w-screen-lg"></div>

          <div class="w-full flex mx-auto  max-w-screen-lg">
            <div class="w-1/3 "></div>

            <div class="w-2/3">
              <div class="flex flex-wrap lg-mx-3 mb-6 gap-6">
                <button class="px-6 py-6 border-2  text-2xl bg-green-500 border-2  text-white font-medium rounded-lg">
                  Save Settings
                </button>
                <button class="px-6 py-6 border-2  text-2xl  border-2 border-green-300 text-green-600 font-medium rounded-lg">
                  Cancel
                </button>
              </div>

              <div class="md:flex md:items-center">
                <div class="md:w-1/3"></div>
                <div class="md:w-2/3"></div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Account;
