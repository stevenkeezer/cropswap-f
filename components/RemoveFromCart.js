import React from "react";
import { useMutation } from "@apollo/client";
import styled from "styled-components";
import gql from "graphql-tag";
import { CURRENT_USER_QUERY, useUser } from "./User";

const REMOVE_FROM_CART_MUTATION = gql`
  mutation removeFromCart($id: ID!) {
    removeFromCart(id: $id) {
      id
    }
  }
`;

const BigButton = styled.button`
  display: flex;
  background: none;
  border: 0;
  &:hover {
    color: ${(props) => props.theme.red};
    cursor: pointer;
  }
`;

// This gets called as soon as we get a response back from the server after a mutation has been performed
function updateCart(cache, payload) {
  // 1. first read the cache
  const data = cache.readQuery({ query: CURRENT_USER_QUERY });
  // 2. remove that item from the cart
  const cartItemId = payload.data.removeFromCart.id;
  const updatedCart = data.me.cart.filter(
    (cartItem) => cartItem.id !== cartItemId
  );
  // 3. write it back to the cache
  // WE have do do it in this weird way because the readQuery is immutable. We could also do a deep clone with lodash
  cache.writeQuery({
    query: CURRENT_USER_QUERY,
    data: {
      ...data,
      me: {
        ...data.me,
        cart: updatedCart,
      },
    },
  });
}

function RemoveFromCart({ id }) {
  const [removeFromCart, { loading }] = useMutation(REMOVE_FROM_CART_MUTATION, {
    variables: { id },
    update: updateCart,
    optimisticResponse: {
      __typename: "Mutation",
      removeFromCart: {
        __typename: "CartItem",
        id,
      },
    },
  });
  return (
    <BigButton
      disabled={loading}
      onClick={() => {
        removeFromCart().catch((err) => alert(err.message));
      }}
      title="Remove Item From Cart"
    >
      <svg viewBox="0 0 20 20" fill="currentColor" class="trash w-6 h-6">
        <path
          fill-rule="evenodd"
          d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
          clip-rule="evenodd"
        ></path>
      </svg>
      <span class="underline"> Remove</span>
    </BigButton>
  );
}

export default RemoveFromCart;
export { REMOVE_FROM_CART_MUTATION };
