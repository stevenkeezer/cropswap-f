import React, { Component, useState } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import { CURRENT_USER_QUERY } from "./User";
import Link from "next/link";

const SIGN_OUT_MUTATION = gql`
  mutation SIGN_OUT_MUTATION {
    signout {
      message
    }
  }
`;

const Signout = (props) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <Mutation
      mutation={SIGN_OUT_MUTATION}
      refetchQueries={[{ query: CURRENT_USER_QUERY }]}
    >
      {(signout) => (
        <div class="relative inline-block text-left my-auto ">
          <div onClick={() => setOpen(!isOpen)}>
            <button
              type="button"
              class="inline-flex justify-center border border-red-900 w-full rounded-md border border-gray-300 bg-white text-2xl leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition ease-in-out duration-150"
              id="options-menu"
              aria-haspopup="true"
              aria-expanded="true"
            >
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                class="user w-10 h-10"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>

          <div>
            <div
              class={`dropdown-menu absolute ${
                !isOpen
                  ? "opacity-0  translate-y-1 scale-95 ease-in duration-200 shadow-lg"
                  : "opacity-100 translate-y-0 scale-100 ease-out duration-150 shadow-lg"
              } origin-top-right  right-0  mt-6  w-64 trasition-opacity scale-100  rounded-md shadow-lg`}
            >
              <div class="rounded-lg shadow-lg">
                <div class="rounded-lg shadow-xs overflow-hidden">
                  <div class="z-20 relative space-y-8 bg-white p-8">
                    <Link href="/profile">
                      <a
                        href="#"
                        class="block  py-3 text-2xl leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                        role="menuitem"
                        onClick={() => setOpen(!isOpen)}
                      >
                        Profile
                      </a>
                    </Link>
                    <Link href="/me">
                      <a
                        href="#"
                        class="block  py-3 text-2xl leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                        role="menuitem"
                        onClick={() => setOpen(!isOpen)}
                      >
                        Account settings
                      </a>
                    </Link>
                    <Link href="/faq">
                      <a
                        href="#"
                        class="block  py-3 text-2xl leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                        role="menuitem"
                        onClick={() => setOpen(!isOpen)}
                      >
                        FAQ
                      </a>
                    </Link>

                    <Link href="/terms">
                      <a
                        href="#"
                        class="block  py-3 text-2xl leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                        role="menuitem"
                        onClick={() => setOpen(!isOpen)}
                      >
                        Terms & Conditions
                      </a>
                    </Link>
                    <form method="POST" action="#">
                      <button
                        onClick={() => setOpen(!isOpen)}
                        onClick={signout}
                        type="submit"
                        class="block w-full text-left  py-3 text-2xl leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                        role="menuitem"
                      >
                        Sign out
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Mutation>
  );
};

export default Signout;
