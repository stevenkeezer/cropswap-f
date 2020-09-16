import React from "react";
import Downshift, { resetIdCounter } from "downshift";
import Router from "next/router";
import { ApolloConsumer } from "react-apollo";
import gql from "graphql-tag";
import debounce from "lodash.debounce";
import { DropDown, DropDownItem, SearchStyles } from "./styles/DropDown";

const SEARCH_ITEMS_QUERY = gql`
  query SEARCH_ITEMS_QUERY($searchTerm: String!) {
    items(
      where: {
        OR: [
          { title_contains: $searchTerm }
          { description_contains: $searchTerm }
        ]
      }
    ) {
      id
      image
      title
    }
  }
`;

function routeToItem(item) {
  Router.push({
    pathname: "/item",
    query: {
      id: item.id,
    },
  });
}

class Location extends React.Component {
  state = {
    items: [],
    loading: false,
  };
  onChange = debounce(async (e, client) => {
    console.log("Searching...");
    // turn loading on
    this.setState({ loading: true });
    // Manually query apollo client
    const res = await client.query({
      query: SEARCH_ITEMS_QUERY,
      variables: { searchTerm: e.target.value },
    });
    this.setState({
      items: res.data.items,
      loading: false,
    });
  }, 350);
  render() {
    resetIdCounter();
    return (
      <SearchStyles>
        <Downshift
          onChange={routeToItem}
          itemToString={(item) => (item === null ? "" : item.title)}
        >
          {({
            getInputProps,
            getItemProps,
            isOpen,
            inputValue,
            highlightedIndex,
          }) => (
            <div>
              <ApolloConsumer>
                {(client) => (
                  <div class=" flex-col mt-2 ">
                    <label class=" text-gray-700 text-xl">Location</label>

                    <div class=" rounded-lg border-gray-300 border flex bg-gray-200 items-center mt-3 px-6 py-4 w-full">
                      <span class="w-auto flex justify-end  rounded-lg items-center text-gray-600 font-bold bg-gray-200">
                        <svg
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          class="location-marker w-8 h-8"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </span>
                      <input
                        {...getInputProps({
                          type: "search",
                          placeholder: "Fresh tomatoes",
                          id: "search",
                          className: this.state.loading
                            ? "loading bg-gray-200 pl-3"
                            : "bg-gray-200 pl-3",
                          onChange: (e) => {
                            e.persist();
                            this.onChange(e, client);
                          },
                        })}
                      />
                    </div>

                    {/* <button class="bg-red-600 hover:bg-red-300 rounded text-white ml-2 px-12 ">
                      <p class="font-semibold text-xl px-12">Search</p>
                    </button> */}
                  </div>
                )}
              </ApolloConsumer>
              {isOpen && (
                <DropDown>
                  {this.state.items.map((item, index) => (
                    <DropDownItem
                      {...getItemProps({ item })}
                      key={item.id}
                      highlighted={index === highlightedIndex}
                    >
                      <img width="50" src={item.image} alt={item.title} />
                      {item.title}
                    </DropDownItem>
                  ))}
                  {!this.state.items.length && !this.state.loading && (
                    <DropDownItem> Nothing Found {inputValue}</DropDownItem>
                  )}
                </DropDown>
              )}
            </div>
          )}
        </Downshift>
      </SearchStyles>
    );
  }
}

export default Location;
