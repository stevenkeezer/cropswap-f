import React, { useState } from "react";

export default function GrubswapCheckbox() {
  const [check, setChecked] = useState(false);
  return (
    <label class="custom-label flex items-center ">
      <div class="bg-white border border-green-600 shadow-inner w-12 h-12 p-1 cursor-pointer rounded-lg flex justify-center items-center mr-2">
        <input
          type="checkbox"
          class="hidden"
          //   checked={check}
          onClick={() => setChecked(!check)}
        />
        <svg
          class={` w-12 h-12 text-green-700 pointer-events-none ${
            !check && "hidden"
          }`}
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
      <span class="select-none text-gray-800 pl-3  font-medium">
        Free Delivery with{" "}
        <span class="font-bold text-3xl text-green-700">Grubswap</span>
      </span>
    </label>
  );
}
