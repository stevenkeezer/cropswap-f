import gql from "graphql-tag";
import PropTypes from "prop-types";
import { useQuery } from "@apollo/client";
import { useState, useEffect } from "react";

const CURRENT_USER_QUERY = gql`
  query {
    me {
      id
      name
      email
      permissions
      orders {
        id
        title
        price
        user {
          id
          name
        }
      }
      cart {
        id
        quantity
        item {
          id
          price
          image
          title
          description
          user {
            id
            name
          }
        }
      }
    }
  }
`;

function useUser() {
  const { data, loading, error } = useQuery(CURRENT_USER_QUERY);
  if (data) {
    return data.me;
  }
}

export { CURRENT_USER_QUERY, useUser };
