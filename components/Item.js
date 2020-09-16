import React from "react";
import PropTypes from "prop-types";
import { formatDistance } from "date-fns";

import Link from "next/link";
import Title from "./styles/Title";
import ItemStyles from "./styles/ItemStyles";
import PriceTag from "./styles/PriceTag";
import formatMoney from "../lib/formatMoney";
import DeleteItem from "./DeleteItem";
import AddToCart from "./AddToCart";

export default function Item({ item }) {
  return (
    <div class="container my-6 mx-auto  px-4 lg:px-8">
      <div class="flex flex-wrap sm-mx-1 lg:-mx-4">
        <div
          class="my-1  w-full bg-white rounded-b-lg shadow-sm
"
        >
          <article class="overflow-hidden ">
            <Link
              href={{
                pathname: "/item",
                query: { id: item.id },
              }}
            >
              <a>
                <div
                  class="bg-cover bg-center relative  h-64 w-full rounded-t-lg"
                  style={{
                    backgroundImage: `url(${item.image})`,
                  }}
                >
                  <div
                    onClick={(e) => e.preventDefault()}
                    class="absolute bottom-0 right-0 px-3 py-4"
                  >
                    <AddToCart id={item.id} />
                  </div>
                </div>
              </a>
            </Link>

            <header class="flex items-center px-3 justify-between leading-tight border-b border-white shadow-sm py-4">
              <div class="text-gray-500 flex items-center ">
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="heart w-10 h-10 pr-3 "
                >
                  <path
                    fill-rule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                Like
              </div>
            </header>
            <h1 class="text-lg px-3 pt-3">
              <Link
                href={{
                  pathname: "/item",
                  query: { id: item.id },
                }}
              >
                <a class="no-underline hover:underline text-2xl font-bold capitalize truncate leading-tight text-gray-800">
                  {item.title}
                </a>
              </Link>
            </h1>

            <div class="flex items-center">
              <p class="text-gray-600 py-3 px-3 font-medium">
                {/* <span class="font-medium">{item.quantity} </span>left in stock */}
                <div class="text-2xl">{item.user.name}</div>
              </p>
              <p class="text-lg underline text-gray-600">Details</p>
            </div>
            <footer class="flex items-center justify-between  leading-none  ">
              <a
                class="flex items-center no-underline hover:underline mt-3 text-black "
                href="#"
              >
                {/* <img
                  alt="Placeholder"
                  class="block rounded-full"
                  src="https://picsum.photos/32/32/?random"
                /> */}

                {/* <Link
                  href={{
                    pathname: "/profile",
                    query: { id: item.user.id },
                  }}
                >
                  <p class=" text-xl  text-gray-700">{item.user.name}</p>
                </Link>
                <p class="text-xl text-gray-700 px-1">•</p>
                <p class=" font-boldrounded-full text-gray-700 text-xl">
                  {formatDistance(new Date(item.createdAt), new Date())} ago
                </p> */}
              </a>

              {/* <div className="">
                <Link
                  href={{
                    pathname: "update",
                    query: { id: item.id },
                  }}
                >
                  <a>Edit </a>
                </Link>
                <DeleteItem id={item.id}>Delete</DeleteItem>
              </div> */}
            </footer>
            <div class="py-3 text-gray-800 px-3  flex justify-start items-baseline text-2xl  mb-3 font-normal">
              {formatMoney(item.price)} each
            </div>
          </article>
        </div>
      </div>
    </div>

    // <ItemStyles>
    //   {item.image && <img src={item.image} alt={item.name} />}

    //   <Title>
    //     <Link
    //       href={{
    //         pathname: "/item",
    //         query: { id: item.id },
    //       }}
    //     >
    //       <a>{item.title}</a>
    //     </Link>
    //   </Title>
    //   <PriceTag>{formatMoney(item.price)}</PriceTag>
    //   <p>{item.description}</p>

    //   <div className="buttonList">
    //     <Link
    //       href={{
    //         pathname: "update",
    //         query: { id: item.id },
    //       }}
    //     >
    //       <a>Edit ✏️</a>
    //     </Link>
    //     <AddToCart id={item.id} />
    //     <DeleteItem id={item.id}>Delete This Item</DeleteItem>
    //   </div>
    // </ItemStyles>
  );
}

Item.propTypes = {
  item: PropTypes.object.isRequired,
};
