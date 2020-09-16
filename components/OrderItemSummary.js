import React from "react";
import Link from "next/link";
import formatMoney from "../lib/formatMoney";

export default function OrderItemSummary({ order }) {

  return (
    <div className="items rounded-lg">
      <table class="min-w-full leading-normal  rounded-lg">
        <thead>
          <tr>
            <th class="px-10 py-8 border-gray-100 bg-transparent text-left text-2xl font-semibold text-gray-700 w-1/2 tracking-wider">
              Item(s)
            </th>

            <th class="px-10 py-8 border-gray-100 bg-transparent text-left text-2xl font-semibold text-gray-700 capitalize tracking-wider">
              Price
            </th>
            <th class="px-10 py-8 border-gray-100 bg-transparent text-left text-2xl font-semibold text-gray-700 capitalize tracking-wider">
              Qty.
            </th>
          </tr>
        </thead>
        <tbody>
          {order.items.map((item) => (
            <tr class="rounded-lg border-t-2 border-white m-5 rounded-b-lg">
              <td class="px-10 py-10 bg-transparent h-auto  text-2xl">
                <div class="flex ">
                  <div
                    class="bg-cover bg-center relative  w-24 h-24"
                    style={{
                      backgroundImage: `url(${item.image})`,
                    }}
                  ></div>

                  <div class="ml-6">
                    <p class="text-blue-400 whitespace-no-wrap">{item.title}</p>
                  </div>
                </div>
              </td>

              <td class="px-12 py-5 bg-white text-2xl align-top pt-10">
                <p class="font-normal whitespace-no-wrap font-medium text-gray-700">
                  {formatMoney(item.price)}
                </p>
              </td>
              <td class="px-12 py-5 bg-white text-2xl align-top pt-10 rounded-lg">
                <span class="relative inline-block px-3 pl-1 font-semibold text-gray-900 leading-tight">
                  <span
                    aria-hidden
                    class="absolute inset-0 rounded-full"
                  ></span>
                  <span class="relative  font-normal font-medium text-gray-700">
                    {item.quantity}
                  </span>
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// <div
//   className="order-item bg-white p-8 rounded-lg shadow"
//   key={item.id}
// >
//   Items from {item.user.name} garden
//   <div className="item-details">
//     <Link
//       href={{
//         pathname: "/item",
//         query: { id: item.id },
//       }}
//     >
//       <h2>{item.title}</h2>
//     </Link>
//     <p>Qty: {item.quantity}</p>
//     <p>Each: {formatMoney(item.price)}</p>
//     <p>SubTotal: {formatMoney(item.price * item.quantity)}</p>

//     <span>item ID: {item.user.name}</span>
//   </div>
// </div>
