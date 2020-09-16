import React, { useState } from "react";
import Items from "../components/Items";
import Footer from "../components/Footer";
import { StyledPage } from "../components/Page";
import Link from "next/link";
import styled from "styled-components";
import Search from "../components/Search";
import Location from "../components/Location";
import Carousel from "../components/Carousel";
import SvgHero from "../components/SvgHero";
import GrubswapCheckbox from "../components/GrubswapCheckbox";

const Logo = styled.h1`
  font-size: 1.8rem;
  margin-bottom: 1rem;

  position: relative;
  font-weight: bold;
  display: flex;
  z-index: 2;
  a {
    margin-left: 0.6rem;
    padding: 0.5rem 1rem;
    color: ${(props) => props.theme.red};
    text-decoration: none;
  }
  /* @media (max-width: 1300px) {
    display: block;
    margin: 0;
    text-align: center;
  } */
`;

const SubLogo = styled.h1`
  transform: skew(-7deg);
  font-size: 3rem;
  margin-top: 0.8rem;
`;
const Home = (props) => (
  <>
    <div class="font-sans leading-tight bg-white">
      <div class="mx-auto bg-transparent  overflow-hidden ">
        <div
          // style={{
          //   backgroundImage: `url("https://images.unsplash.com/photo-1519995672084-d21490e86ba6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80")`,
          // }}
          class="bg-cover  text-center  pt-24 pb-40 bg-green-600"
        >
          <h1 class="mx-auto justify-center text-6xl font-medium text-white">
            Find and sell produce near you.
          </h1>
          <h1 class="mx-auto justify-center text-4xl  pt-3 text-green-200">
            Buy fresh, buy local produce, less headaches.
          </h1>
        </div>
        <div class=" ">
          <div class="text-center sm:text-left  mx-auto justify-center mb-3">
            <article class="w-1/2 z-40 p-6 rounded-lg absolute m-auto inset-x-0 border-white bg-white shadow-lg -mt-24">
              <header class="flex items-center justify-between leading-tight md:p-6">
                <h1 class="text-lg"></h1>
                <div className="flex-grow max-w-screen-xl">
                  <Search />
                </div>
              </header>
            </article>
          </div>
        </div>
      </div>
    </div>
    <section class="h-full bg-white pt-32 pb-12">
      <div class="max-w-screen-xl px-24 mx-auto">
        <Carousel />
      </div>
      <div class="relative inline-block text-left justify-center flex">
        <div class="flex items-center">
          <div class="w-full px-3 p-5 ml-3">
            <GrubswapCheckbox />
          </div>
          <span class="flex whitespace-no-wrap items-center border-l ml-6 pl-8  box-border">
            <label class="text-gray-700 text-2xl ">Sort by</label>
            <div class="hover:border-green-600 ml-6 border-2 hover:translate-y-px  bg-gray-300  transform ease-in-out duration-150 border-white rounded-lg">
              <button
                type="button"
                class="inline-flex justify-center w-full  items-center bg-gray-200 tracking-normal shadow-inner py-4 px-6 
                      rounded-lg  border-green-700  bg-white text-2xl  text-gray-800 font-normal  
                      focus:outline-none focus:shadow-outline-blue "
                id="options-menu"
                aria-haspopup="true"
                aria-expanded="true"
              >
                Popularity
                <svg
                  class="-mr-1 ml-32 h-8 w-8"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </span>
        </div>

        <div class="origin-top-right absolute hidden right-0 mt-2 w-56 rounded-md shadow-lg">
          <div class="rounded-md bg-white shadow-xs">
            <div
              class="py-1"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              <a
                href="#"
                class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                role="menuitem"
              >
                Account settings
              </a>
              <a
                href="#"
                class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                role="menuitem"
              >
                Support
              </a>
              <a
                href="#"
                class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                role="menuitem"
              >
                License
              </a>
              <form method="POST" action="#">
                <button
                  type="submit"
                  class="block w-full text-left px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                  role="menuitem"
                >
                  Sign out
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="font-sans bg-transparent flex flex-col min-h-screen w-full">
      <div class="shadow-lg">
        <div class="mx-auto mt-16 mb-32 max-w-screen-xl">
          <div className="">
            <Items page={parseFloat(props.query.page) || 1} />
          </div>
        </div>

        {/* <-- steps --> */}
        <section>
          <SvgHero />
        </section>

        <Footer />
      </div>
    </div>
  </>
);

export default Home;
