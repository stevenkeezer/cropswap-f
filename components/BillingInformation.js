import React from "react";

export default function BillingInformation({ order }) {
  return (
    <>
      <div class="w-full h-auto bg-white shadow-sm rounded-lg  mt-6  ">
        <div class="mb-6">
          <div class="flex justify-between items-baseline border-b-2 border-white shadow-sm">
            <div class=" text-xl font-medium  text-gray-800 py-10 px-10 text-3xl">
              Billing Information
            </div>
          </div>
          <div class="mt-8 px-10">
            <span class="capitalize text-2xl  text-gray-700 font-medium">
              {order.funding} Card
            </span>
          </div>
          <a class="text-2xl text-gray-500 flex px-10 items-center">
            {" "}
            <svg
              height="100%"
              class="w-16 h-16"
              style={{
                fillRule: "evenodd",
                clipRule: "evenodd",
                strokeLinejoin: "round",
                strokeMiterlimit: "1.41421",
              }}
              version="1.1"
              viewBox="0 0 900 575"
              width="100%"
              xmlSpace="preserve"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <g transform="matrix(4.16667,0,0,4.16667,0,0)">
                <rect
                  height="137.21"
                  style={{ fill: "white", fillRule: "nonzero" }}
                  width="216"
                  x="0"
                  y="0.79"
                />
                <rect
                  height="18.72"
                  style={{ fill: "rgb(252,179,21)", fillRule: "nonzero" }}
                  width="208.802"
                  x="3.597"
                  y="115.705"
                />
                <rect
                  height="18.72"
                  style={{ fill: "rgb(13,53,127)", fillRule: "nonzero" }}
                  width="208.802"
                  x="3.597"
                  y="4.389"
                />
                <path
                  d="M106.197,43.734L95.191,95.189L81.879,95.189L92.886,43.734L106.197,43.734ZM162.201,76.959L169.209,57.636L173.24,76.959L162.201,76.959ZM177.061,95.189L189.369,95.189L178.615,43.734L167.261,43.734C164.701,43.734 162.545,45.218 161.59,47.506L141.615,95.189L155.596,95.189L158.371,87.504L175.447,87.504L177.061,95.189ZM142.309,78.39C142.367,64.811 123.537,64.058 123.662,57.991C123.703,56.147 125.461,54.183 129.307,53.681C131.213,53.435 136.473,53.237 142.436,55.984L144.768,45.068C141.564,43.91 137.443,42.794 132.316,42.794C119.156,42.794 109.898,49.784 109.824,59.802C109.74,67.21 116.438,71.34 121.473,73.807C126.664,76.329 128.404,77.947 128.379,80.2C128.343,83.652 124.238,85.18 120.418,85.238C113.721,85.342 109.84,83.428 106.746,81.986L104.33,93.266C107.445,94.692 113.186,95.933 119.129,95.997C133.119,95.997 142.268,89.088 142.309,78.39ZM87.176,43.734L65.607,95.189L51.537,95.189L40.922,54.124C40.279,51.599 39.718,50.671 37.761,49.604C34.56,47.865 29.275,46.239 24.629,45.227L24.943,43.734L47.595,43.734C50.48,43.734 53.076,45.654 53.736,48.977L59.343,78.754L73.191,43.734L87.176,43.734Z"
                  style={{ fill: "rgb(13,53,127)", fillRule: "nonzero" }}
                />
              </g>
            </svg>
            <span class="ml-8 py-12 text-gray-700 font-medium">
              {order.brand} ending in 4242
            </span>
          </a>
        </div>
      </div>
    </>
  );
}
