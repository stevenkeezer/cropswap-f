import React from "react";
import gql from "graphql-tag";
import { useMutation } from "@apollo/client";
import { CURRENT_USER_QUERY } from "./User";

const ADD_TO_CART_MUTATION = gql`
  mutation addToCart($id: ID!) {
    addToCart(id: $id) {
      id
      quantity
    }
  }
`;

function AddToCart({ id }) {
  const [addToCart, { loading }] = useMutation(ADD_TO_CART_MUTATION, {
    variables: {
      id,
    },
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });
  return (
    <button
      type="button "
      disabled={loading}
      onClick={addToCart}
      class={`text-2xl text-white  ${
        loading && "scale-110 shadow-lg"
      } focus:outline-none whitespace-no-wrap bg-green-600 rounded-full flex transition duration-200 ease-in-out bg-green-500 hover:bg-green-500 transform hover:-translate-y-1 hover:scale-80 ...`}
    >
      {/* Add{loading && "ing"} to basket{" "} */}
      <svg
        viewBox="0 0 20 20"
        fill="currentColor"
        class="plus-circle w-12 h-12 hover:scale-100  "
      >
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </button>
  );
}

export default AddToCart;
export { ADD_TO_CART_MUTATION };
