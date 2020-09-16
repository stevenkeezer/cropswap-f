import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import styled from "styled-components";
import Item from "./Item";
import Link from "next/link";

import Pagination from "./Pagination";
import { perPage } from "../config";
import { SelectBox1, SelectBox2, SelectBox3 } from "./SortBy";
import Skeleton from "../components/Skeleton";

const ALL_ITEMS_QUERY = gql`
  query ALL_ITEMS_QUERY($skip: Int= 0, $first: Int = ${perPage}) {
    items(first:$first, skip:$skip, orderBy: createdAt_DESC) {
      id
      title
      price
      description
      image
      largeImage
      quantity
      productCode
      user {
        id
        name
      }
      createdAt
    }
  }
`;

const Center = styled.div`
  /* text-align: center; */
`;

const ItemsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
  /* grid-gap: 20px;
  grid-row-gap: 40px; */
  /* max-width: ${(props) => props.theme.maxWidth}; */
  margin: 0 auto;
`;

const SortByList = styled.div`
  padding-bottom: 15px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 32px;
  grid-row-gap: 25px;
  /* max-width: ${(props) => props.theme.maxWidth}; */
  margin: 0 auto;
`;

class Items extends Component {
  render() {
    return (
      <Center>
        {/* <Pagination page={this.props.page} /> */}
        <Query
          fetchPolicy="network-only"
          query={ALL_ITEMS_QUERY}
          variables={{
            skip: this.props.page * perPage - perPage,
          }}
        >
          {({ data, error, loading }) => {
            if (loading) return <Skeleton />;
            if (error) return <p>Error: {error.message}</p>;
            return (
              <>
                <div class="flex justify-between items-baseline pt-6 mb-3 px-3">
                  <div class="text-4xl text-gray-800 font-medium">
                    Freshly picked for you
                  </div>

                  <Link href="/items">
                    <a class="text-gray-700 font-medium flex text-2xl items-center">
                      Explore all produce
                      <svg
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        class="chevron-right w-8 h-8"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </a>
                  </Link>
                </div>
                <ItemsList>
                  {data.items.map((item) => (
                    <Item key={item.id} item={item} />
                  ))}
                </ItemsList>
              </>
            );
          }}
        </Query>
        <br></br>
        {/* <Pagination page={this.props.page} /> */}
      </Center>
    );
  }
}

export default Items;
export { ALL_ITEMS_QUERY };
