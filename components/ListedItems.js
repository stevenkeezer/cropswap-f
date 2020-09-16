import React from "react";

export default function ListedItems({ items }) {
  const allItems = items && items.me.items;
  console.log(allItems);
  return (
    <>
      <div class="w-full h-auto bg-white shadow  rounded-lg mt-6 py-2 mb-8 ">
        <div class="px-10 py-6 mb-6  ">
          <div class="flex justify-between items-baseline">
            <div class=" text-xl font-medium  text-gray-800 py-4 mb-6 text-3xl">
              Your listed items
            </div>

            <a class="text-xl text-blue-500">Edit</a>
          </div>
        </div>

        {allItems &&
          allItems.map((item) => (
            <div class="w-64  ">
              {item.title}
              <span>QTY {item.quantity}</span>
            </div>
          ))}
      </div>
    </>
  );
}
