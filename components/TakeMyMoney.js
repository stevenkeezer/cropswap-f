import React from "react";
import { CURRENT_USER_QUERY, useUser } from "./User";
import StripeCheckout from "react-stripe-checkout";
import { Mutation } from "react-apollo";
import Router from "next/router";
import NProgress from "nprogress";
import PropTypes from "prop-types";
import gql from "graphql-tag";
import calcTotalPrice from "../lib/calcTotalPrice";
import Error from "./ErrorMessage";

const CREATE_ORDER_MUTATION = gql`
  mutation createOrder($token: String!) {
    createOrder(token: $token) {
      id
      charge
      total
      items {
        id
        title
        productCode
        author
        authorName
      }
    }
  }
`;

function totalItems(cart) {
  return cart.reduce((tally, cartItem) => tally + cartItem.quantity, 0);
}

export default function TakeMyMoney(props) {
  const me = useUser();

  const onToken = async (res, createOrder) => {
    NProgress.start();
    // manually call the mutation once we have the stripe token
    const order = await createOrder({
      variables: {
        token: res.id,
      },
    }).catch((err) => {
      alert(err.message);
    });
    Router.push({
      pathname: "/order",
      query: { id: order.data.createOrder.id },
    });
    console.log("order!!!", order);
  };

  return (
    <div>
      <Mutation
        mutation={CREATE_ORDER_MUTATION}
        refetchQueries={[{ query: CURRENT_USER_QUERY }]}
      >
        {(createOrder) => (
          <StripeCheckout
            amount={calcTotalPrice(me.cart)}
            name="Crop Trader"
            description={`Order of ${totalItems(me.cart)} items`}
            image={me.cart.length && me.cart[0].item && me.cart[0].item.image}
            stripeKey="pk_test_51H5jbSHZ4obo60ZD4j3385VovugMfyAAmcYjadhO6ycQnSHdjg2eGot6PcJgQXG82cwKbaQp3GWd334o1wOrAVeo00kWX1we5V"
            currency="USD"
            email={me.email}
            token={(res) => onToken(res, createOrder)}
          >
            {props.children}
          </StripeCheckout>
        )}
      </Mutation>
    </div>
  );
}

export { CREATE_ORDER_MUTATION };
