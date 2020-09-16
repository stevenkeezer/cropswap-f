import React, { useState } from "react";
import PropTypes from "prop-types";
import { Query } from "@apollo/client";
import { format } from "date-fns";
import Head from "next/head";
import gql from "graphql-tag";
import { useQuery } from "@apollo/client";
import formatMoney from "../lib/formatMoney";
import Error from "./ErrorMessage";
import OrderStyles from "./styles/OrderStyles";
import OrderDetails from "./OrderDetails";
import Footer from "./Footer";
import CarSvg from "./CarSvg";
import OrderConfirmation from "./OrderConfirmation";

const SINGLE_ORDER_QUERY = gql`
  query SINGLE_ORDER_QUERY($id: ID!) {
    order(id: $id) {
      id
      charge
      total
      createdAt
      brand
      funding
      user {
        id
        name
      }
      items {
        id
        title
        description
        price
        image
        quantity
        productCode
        user {
          id
          name
        }
      }
    }
  }
`;

// find if my seller item exists in this order,
//   if it does
//      Notify seller

function Order({ id }) {
  const { data, error, loading } = useQuery(SINGLE_ORDER_QUERY, {
    variables: { id },
  });
  const [showDetail, setShowDetail] = useState(false);
  if (error) return <Error error={error} />;
  if (loading) return <p>Loading...</p>;
  const order = data.order;

  //for each order item,
  // find user and alert them

  return (
    <OrderStyles data-testid="order">
      <Head>
        <title>Cropswap - Order {order.id}</title>
      </Head>
      {!showDetail ? (
        <OrderConfirmation order={order} setShowDetail={setShowDetail} />
      ) : (
        <OrderDetails order={order} />
      )}
      <Footer />
    </OrderStyles>
  );
}

Order.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Order;
export { SINGLE_ORDER_QUERY };
