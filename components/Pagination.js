import React from "react";
import PaginationStyles from "./styles/PaginationStyles";
import Link from "next/link";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { perPage } from "../config";
import Head from "next/head";

const PAGINATION_QUERY = gql`
  query PAGINATIONM_QUERY {
    itemsConnection {
      aggregate {
        count
      }
    }
  }
`;

const Pagination = (props) => (
  <Query query={PAGINATION_QUERY}>
    {({ data, loading, error }) => {
      if (loading) return <p>Loading...</p>;
      const count = data.itemsConnection.aggregate.count;
      const pages = Math.ceil(count / perPage);
      const page = props.page;
      return (
        <PaginationStyles data-test="pagination">
          <Head>
            <title>
              Cropswap - page {page} of {pages}
            </title>
          </Head>
          <ul class="flex mx-auto list-reset border border-grey-light rounded">
            <Link
              prefetch
              href={{
                pathname: "items",
                query: { page: page - 1 },
              }}
            >
              <a
                className="prev block px-3 py-2 text-blue-700 hover:text-white hover:bg-indigo-500 border-r border-grey-light"
                aria-disabled={page <= 1}
              >
                ← Prev
              </a>
            </Link>
            <a class=" block px-3 py-2 text-blue-700 hover:text-white hover:bg-indigo-500 border-r border-grey-light">
              {props.page} of <span className="totalPages ">{pages}</span>
            </a>
            {/* <p>{count} items total</p> */}
            <Link
              prefetch
              href={{
                pathname: "items",
                query: { page: page + 1 },
              }}
            >
              <a
                className="next block px-3 py-2 text-blue-700 hover:text-white hover:bg-indigo-500"
                aria-disabled={page >= pages}
              >
                Next →
              </a>
            </Link>
          </ul>
        </PaginationStyles>
      );
    }}
  </Query>
);

export default Pagination;
export { PAGINATION_QUERY };
