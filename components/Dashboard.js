import React, { useState } from "react";
import Summary from "./Summary";
import Toolbar from "./Toolbar";
import Footer from "./Footer";

function Dashboard() {
  return (
    <>
      <div class="container mx-auto md:py-6 lg:pt-24 lg:pb-16  px-8 lg:px-0 relative">
        {/* <div class="bg-transparent pb-8">
          <nav class="flex flex-col border-b text-2xl sm:flex-row">
            <button class="  mr-12 block hover:text-s-500 focus:outline-none text-gray-600 border-b border-gray-400 font-medium ">
              <span class=" px-3 py-3 text-2xl rounded-lg">Summary</span>
            </button>
            <button class="text-gray-600 py-6  mb-1 mr-12 block hover:text-blue-500 focus:outline-none">
              Buying
            </button>
            <button class="text-gray-600  mb-1 mr-12 block hover:text-blue-500 focus:outline-none">
              Dashboard
            </button>
          </nav>
        </div> */}
        <div class="flex w-full rounded-lg  lg:flex-row flex-col  ">
          <div class="lg:w-1/4 bg-transparent ">
            <Toolbar />
          </div>

          <div class="lg:w-full  px-16 text-gray-800 rounded-lg h-auto  pb-6">
            <Summary />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Dashboard;
