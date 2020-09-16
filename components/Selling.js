import React from "react";
import Toolbar from "../components/Toolbar";
import Paid from "../components/Paid";
import Unfulfilled from "../components/Unfulfilled";
import ContactInfo from "../components/ContactInfo";
import { useUser } from "./User";
import Notes from "../components/Notes";
import PaymentHistory from "../components/PaymentHistory";
import gql from "graphql-tag";
import { useQuery } from "@apollo/client";
import ListedItems from "./ListedItems";
import { perPage } from "../config";
import Link from "next/link";
import Footer from "./Footer";
import SoldNotification from "./SoldNotification";

const USER_ITEMS_QUERY = gql`
  query USER_ITEMS_QUERY {
    me {
      id
      items {
        id
        title
        quantity
      }
    }
  }
`;

// const USER_SOLD_QUERY = gql`
//   query USER_SOLD_QUERY {
//     users {
//       id
//       orders {
//         id
//         title
//         authorName
//       }
//     }
//   }
// `;

const USER_SOLD_QUERY = gql`
  query USER_SOLD_QUERY {
    sold {
      id
      total
      charge
      user {
        name
      }
      items {
        id
        quantity
        price
        title
        image
        productCode
        user {
          id
          name
        }
        author
        authorName
      }
      createdAt
    }
  }
`;

// find items on orderlist that have a product that belongs to me

export default function Selling() {
  const me = useUser();

  const { data, loading, error } = useQuery(USER_ITEMS_QUERY);
  const { data: dataR, loading: loadingR, error: errorR } = useQuery(
    USER_SOLD_QUERY
  );

  if (loading) return <p>loading...</p>;
  if (error) return <Error error={error} />;
  const listedItems = data && data;
  const soldItems = dataR && dataR;
  const AllSoldItems =
    soldItems &&
    soldItems.sold
      .map((item) => item.items)
      .flat(2)
      .filter((id) => id.author === me.id);

  return (
    <>
      <div class="flex h-auto pb-12  max-w-screen-xl mx-auto mt-24">
        <div class="w-1/4">
          <Toolbar />
        </div>
        <div class="w-full px-16 ">
          <div class="flex mt-5 text-gray-800 text-5xl justify-between  font-medium items-baseline">
            <span>Selling</span>
            <Link href={{ pathname: "/compose" }}>
              <button class=" inline-flex  items-center text-2xl bg-opacity-50 hover:bg-green-600 hover:text-white focus:outline-none focus:shadow-outline text-green-600 font-medium  rounded-lg">
                <svg
                  class="w-8 h-8 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <div>Add new</div>
              </button>
            </Link>
          </div>
          <SoldNotification items={AllSoldItems} />
          <div class="flex gap-10 mb-12">
            <div class="w-full">
              <Unfulfilled items={AllSoldItems} />
            </div>
            {/* <div class="w-1/4">
              <Notes />
            </div> */}
          </div>

          <ListedItems items={listedItems} />
          <PaymentHistory />
        </div>
      </div>
      <Footer />
    </>
  );
}
