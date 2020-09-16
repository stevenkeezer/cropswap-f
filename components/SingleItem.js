import React, { Component } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import Error from "./ErrorMessage";
import styled from "styled-components";
import formatMoney from "../lib/formatMoney";
import Head from "next/head";
import Link from "next/link";
import DeleteItem from "./DeleteItem";
import AddToCart from "./AddToCart";
import BreadCrumb from "./BreadCrumb";
import SkeletonSingleItem from "./SkeletonSingleItem";

const SingleItemStyles = styled.div`
  /* max-width: 1246px; */

  /* max-width: 1200px;
  margin: 2rem auto;
  box-shadow: ${(props) =>
    props.theme
      .bs};
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
  min-height: 800px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  .details {
    margin: 3rem;
    font-size: 2rem;
  } */
`;

const SINGLE_ITEM_QUERY = gql`
  query SINGLE_ITEM_QUERY($id: ID!) {
    item(where: { id: $id }) {
      id
      title
      description
      largeImage
      quantity
      price
      user {
        id
        name
      }
    }
  }
`;

class SingleItem extends Component {
  render() {
    return (
      <Query query={SINGLE_ITEM_QUERY} variables={{ id: this.props.id }}>
        {({ error, loading, data }) => {
          if (error) return <Error error={error}>Error!</Error>;
          if (loading) return <SkeletonSingleItem />;
          if (!data.item) return <p>No item found for {this.props.id}</p>;
          const item = data.item;
          return (
            <SingleItemStyles>
              <Head>
                <title>Crop Trade | {item.title}</title>
              </Head>
              <BreadCrumb title={item.title} />
              <div class="mx-auto max-w-screen-xl">
                <section class="text-gray-700 body-font overflow-hidden ">
                  <div class="container  py-6 mx-auto">
                    <div class="lg:w-4/5 mx-auto flex flex-wrap px-10">
                      <div
                        class="lg:w-3/5 w-full h-auto  object-cover object-center rounded-lg  border border-gray-200 bg-cover relative shadow-md "
                        style={{
                          backgroundImage: `url(${item.largeImage})`,
                          maxHeight: "382px",
                          border: "20px solid white",
                          borderTop: "24px solid white",
                          borderBottom: "24px solid white",
                        }}
                      ></div>
                      <div class="lg:w-2/5 w-full lg:pl-8 lg:py-0 pb-6 mt-2 lg:mt-0">
                        <h1 class="text-gray-900 text-5xl title-font my-3 font-medium mb-4">
                          {item.title}
                        </h1>
                        <div class="w-full  bg-white mb-2 text-center px-10 py-6 rounded-lg shadow-md ">
                          <div class="text-gray-900 font-bold">
                            Unlimited Free Delivery with{" "}
                            <span class="font-bold text-3xl text-green-700">
                              Grubswap
                            </span>
                          </div>
                          <div class="mt-3 text-green-500 text-2xl">
                            Try 14 Days FREE
                          </div>
                        </div>
                        <div class="w-full  bg-white rounded-lg shadow-md mb-3">
                          <h2 class="text-2xl title-font text-gray-500 tracking-wide">
                            <div class="flex items-start px-4 py-4 ">
                              <img
                                class="w-24 h-24  rounded-full object-cover mr-4 shadow border"
                                src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                                alt="avatar"
                              />
                              <div class="ml-2 mt-2">
                                <div class="flex items-center justify-between">
                                  <h2 class="text-2xl font text-gray-900 -mt-1">
                                    Available from
                                  </h2>
                                </div>
                                <div class="mt-2 flex items-center">
                                  <div class="flex-col mr-2 text-gray-700 text-sm mr-4">
                                    <div class="font-medium text-gray-800  pb-3 text-3xl capitalize">
                                      {item.user.name}
                                    </div>
                                    <div class="flex justify-start">
                                      <div class="flex  mt-2 mb-4">
                                        <svg
                                          class="mx-1 w-4 h-4 fill-current text-yellow-500"
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 20 20"
                                        >
                                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                        </svg>
                                        <svg
                                          class="mx-1 w-4 h-4 fill-current text-yellow-500"
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 20 20"
                                        >
                                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                        </svg>
                                        <svg
                                          class="mx-1 w-4 h-4 fill-current text-yellow-500"
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 20 20"
                                        >
                                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                        </svg>
                                        <svg
                                          class="mx-1 w-4 h-4 fill-current text-yellow-500"
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 20 20"
                                        >
                                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                        </svg>
                                        <svg
                                          class="mx-1 w-4 h-4 fill-current text-gray-400"
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 20 20"
                                        >
                                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                        </svg>
                                      </div>
                                    </div>
                                    <span class="text-2xl items-center text-gray-600 pb-3 flex ">
                                      <svg
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        class="clock w-8 h-8 mr-3"
                                      >
                                        <path
                                          fill-rule="evenodd"
                                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                          clip-rule="evenodd"
                                        ></path>
                                      </svg>{" "}
                                      Get it by tomorrow
                                    </span>
                                  </div>
                                  <br></br>
                                </div>
                              </div>
                            </div>
                          </h2>
                        </div>

                        <p class="leading-relaxed text-3xl text-gray-900 justiy-center font-medium">
                          $2.99 each
                        </p>
                        <div class="flex items-center pb-5 border-b border-gray-400 mb-5">
                          <div class="flex ml-6 items-center">
                            <div class="relative">
                              <span class="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center"></span>
                            </div>
                          </div>
                        </div>
                        <div class="flex">
                          <div className="">
                            {/* <Link
                              href={{
                                pathname: "update",
                                query: { id: item.id },
                              }}
                              >
                              <a>Edit </a>
                            </Link> */}
                            <div class="bg-red-600 px-64 py-6 text-white mt-3 rounded-full">
                              <AddToCart id={item.id} />
                            </div>
                            {/* <DeleteItem id={item.id}>Delete</DeleteItem> */}
                            <div class="flex mb-4">
                              <span class="flex   py-12 font-normal text-gray-500 items-center  border-gray-200">
                                <span class="pr-2">SHARE</span>
                                <a class="text-gray-500">
                                  <svg
                                    fill="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    class="w-8 h-8"
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                  </svg>
                                </a>
                                <a class="ml-2 text-gray-500">
                                  <svg
                                    fill="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    class="w-8 h-8"
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                  </svg>
                                </a>
                                <a class="ml-2 text-gray-500">
                                  <svg
                                    fill="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    class="w-8 h-8"
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                  </svg>
                                </a>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* <section class="text-gray-700 body-font overflow-hidden bg-white">
                <div class="container px-5 py-24 mx-auto">
                <div class="lg:w-4/5 mx-auto flex flex-wrap">
                <img
                class="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
                src={item.largeImage}
                alt={item.title}
                />
                <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 class="text-lg title-font text-gray-500 tracking-widest">
                {item.user.name}
                </h2>
                <h1 class="text-gray-900 text-5xl title-font font-medium mb-1">
                {item.title}
                </h1>
                <div class="flex mb-6">
                <span class="flex items-center">
                <svg
                fill="currentColor"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            class="w-4 h-4 text-red-500"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                          </svg>
                          <svg
                            fill="currentColor"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            class="w-4 h-4 text-red-500"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                          </svg>
                          <svg
                            fill="currentColor"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            class="w-4 h-4 text-red-500"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                          </svg>
                          <svg
                            fill="currentColor"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            class="w-4 h-4 text-red-500"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                          </svg>
                          <svg
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            class="w-4 h-4 text-red-500"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                          </svg>
                          <span class="text-gray-600 ml-3">4 Reviews</span>
                        </span>
                        <span class="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                          <a class="text-gray-500">
                            <svg
                              fill="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              class="w-5 h-5"
                              viewBox="0 0 24 24"
                            >
                              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                            </svg>
                          </a>
                          <a class="ml-2 text-gray-500">
                            <svg
                              fill="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              class="w-5 h-5"
                              viewBox="0 0 24 24"
                            >
                              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                            </svg>
                          </a>
                          <a class="ml-2 text-gray-500">
                            <svg
                              fill="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              class="w-5 h-5"
                              viewBox="0 0 24 24"
                            >
                              <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                            </svg>
                          </a>
                        </span>
                      </div>
                      <p class="leading-relaxed">{item.description}</p>
                      <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                        <div class="flex">
                          <span class="mr-3">Color</span>
                          <button class="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                          <button class="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                          <button class="border-2 border-gray-300 ml-1 bg-red-500 rounded-full w-6 h-6 focus:outline-none"></button>
                        </div>
                        <div class="flex ml-6 items-center">
                          <span class="mr-3">Size</span>
                          <div class="relative">
                            <select class="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-red-500 text-base pl-3 pr-10">
                              <option>SM</option>
                              <option>M</option>
                              <option>L</option>
                              <option>XL</option>
                            </select>
                            <span class="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                              <svg
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                class="w-4 h-4"
                                viewBox="0 0 24 24"
                              >
                                <path d="M6 9l6 6 6-6"></path>
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div class="flex">
                        <span class="title-font font-medium text-4xl text-gray-900">
                          ${item.price}
                        </span>
                        <button class="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">
                          Button
                        </button>
                        <button class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                          <svg
                            fill="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            class="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </section> */}

                {/* <div class="bg-white">
                <main class="my-8">
                  <div class="container mx-auto px-6">
                    <div class="md:flex md:items-center">
                      <div class="w-full h-64 md:w-1/2 lg:h-96">
                        <img
                          class="h-full w-full rounded-md object-cover max-w-lg mx-auto"
                          src={item.largeImage}
                          alt={item.title}
                        />
                      </div>
                      <div class="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2">
                        <h3 class="text-gray-700 uppercase text-2xl">
                          {item.title}
                        </h3>
                        <a href="/" class="uppercase text-lg text-blue-400">
                          {item.user.name}
                        </a>
                        <br></br>
                        <span class="text-gray-500 mt-3">${item.price}</span>

                        <div class="mt-2">
                          <label class="text-gray-700lg" for="count">
                            Count:
                          </label>
                          <div class="flex items-center mt-1">
                            <button class="text-gray-500 focus:outline-none focus:text-gray-600">
                              <svg
                                class="h-5 w-5"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                              </svg>
                            </button>
                            <span class="text-gray-700 text-lg mx-2">
                              {item.quantity}
                            </span>
                            <button class="text-gray-500 focus:outline-none focus:text-gray-600">
                              <svg
                                class="h-5 w-5"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                              </svg>
                            </button>
                          </div>
                        </div>
                        <div class="mt-3">
                          <label class="text-gray-700 text-sm" for="count">
                            Tag:
                          </label>
                          <div class="flex items-center mt-1">
                            <button class="h-5 w-5 rounded-full bg-blue-600 border-2 border-blue-200 mr-2 focus:outline-none"></button>
                            <button class="h-5 w-5 rounded-full bg-teal-600 mr-2 focus:outline-none"></button>
                            <button class="h-5 w-5 rounded-full bg-pink-600 mr-2 focus:outline-none"></button>
                          </div>
                        </div>
                        <div class="flex items-center mt-6">
                          <button class="px-8 py-2 bg-indigo-600 text-white text-sm font-medium rounded hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500">
                            Order Now
                          </button>
                          <button class="mx-2 text-gray-600 border rounded-md p-2 hover:bg-gray-200 focus:outline-none">
                            <svg
                              class="h-5 w-5"
                              fill="none"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div class="mt-16">
                      <h3 class="text-gray-600 text-2xl font-medium">
                        More Products
                      </h3>
                      <div class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
                        <div class="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                          <div
                            class="flex items-end justify-end h-56 w-full bg-cover"
                            style={{
                              backgroundImage:
                                "url('https://images.unsplash.com/photo-1563170351-be82bc888aa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=376&q=80')",
                            }}
                          >
                            <button class="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-6 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                              <svg
                                class="h-5 w-5"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                              </svg>
                            </button>
                          </div>
                          <div class="px-5 py-3">
                            <h3 class="text-gray-700 uppercase">Chanel</h3>
                            <span class="text-gray-500 mt-2">$12</span>
                          </div>
                        </div>
                        <div class="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                          <div
                            class="flex items-end justify-end h-56 w-full bg-cover"
                            style={{
                              backgroundImage:
                                "url('https://images.unsplash.com/photo-1544441893-675973e31985?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80')",
                            }}
                          >
                            <button class="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-6 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                              <svg
                                class="h-5 w-5"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                              </svg>
                            </button>
                          </div>
                          <div class="px-5 py-3">
                            <h3 class="text-gray-700 uppercase">Man Mix</h3>
                            <span class="text-gray-500 mt-2">$12</span>
                          </div>
                        </div>
                        <div class="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                          <div
                            class="flex items-end justify-end h-56 w-full bg-cover"
                            style={{
                              backgroundImage:
                                "url('https://images.unsplash.com/photo-1532667449560-72a95c8d381b?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80')",
                            }}
                          >
                            <button class="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-6 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                              <svg
                                class="h-5 w-5"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                              </svg>
                            </button>
                          </div>
                          <div class="px-5 py-3">
                            <h3 class="text-gray-700 uppercase">
                              Classic watch
                            </h3>
                            <span class="text-gray-500 mt-2">$12</span>
                          </div>
                        </div>
                        <div class="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                          <div
                            class="flex items-end justify-end h-56 w-full bg-cover"
                            style={{
                              backgroundImage:
                                "url('https://images.unsplash.com/photo-1590664863685-a99ef05e9f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=345&q=80')",
                            }}
                          >
                            <button class="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-6 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                              <svg
                                class="h-5 w-5"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                              </svg>
                            </button>
                          </div>
                          <div class="px-5 py-3">
                            <h3 class="text-gray-700 uppercase">woman mix</h3>
                            <span class="text-gray-500 mt-2">$12</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </main>
              </div> */}

                {/* <img src={item.largeImage} alt={item.title} />
            <div className="details">
              <h2>Viewing {item.title} </h2>
              <p>{item.description}</p>
              <h2>Product ID:</h2>
              <p>{item.id}</p>
              <h2>Seller:</h2>
              <p>{item.user.name}</p>
              <h2>SellerID:</h2>
              <p>{item.user.id}</p>
              <h2>quantity:</h2>
              <p>{item.quantity}</p>
            </div> */}
              </div>
            </SingleItemStyles>
          );
        }}
      </Query>
    );
  }
}

export default SingleItem;
export { SINGLE_ITEM_QUERY };
