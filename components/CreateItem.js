import React, { Component } from "react";
import Router from "next/router";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import Form from "./styles/Form";
import formatMoney from "../lib/formatMoney";
import Error from "./ErrorMessage";

const CREATE_ITEM_MUTATION = gql`
  mutation CREATE_ITEM_MUTATION(
    $title: String!
    $description: String!
    $price: Int!
    $image: String
    $largeImage: String
    $quantity: Int!
    $productCode: String!
  ) {
    createItem(
      title: $title
      description: $description
      price: $price
      image: $image
      largeImage: $largeImage
      quantity: $quantity
      productCode: $productCode
    ) {
      id
      quantity
      user {
        id
        name
      }
    }
  }
`;

class CreateItem extends Component {
  state = {
    title: "",
    description: "",
    image: "",
    largeImage: "",
    price: 0,
    quantity: 1,
    productCode: new Date().valueOf(),
  };

  handleChange = (e) => {
    const { name, type, value } = e.target;
    const val = type === "number" ? parseFloat(value) : value;
    this.setState({ [name]: val });
  };

  uploadFile = async (e) => {
    console.log("uploadingfile...");
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "croptrader");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dna1o7hrm/image/upload",
      {
        method: "Post",
        body: data,
      }
    );
    const file = await res.json();
    this.setState({
      image: file.secure_url,
      largeImage: file.eager[0].secure_url,
    });
  };

  render() {
    return (
      <Mutation mutation={CREATE_ITEM_MUTATION} variables={this.state}>
        {(createItem, { loading, error }) => (
          <Form
            onSubmit={async (e) => {
              //stop form from submitting
              e.preventDefault();
              // call mutation
              const res = await createItem();
              // change them to single item page
              Router.push({
                pathname: "/item",
                query: { id: res.data.createItem.id },
              });
              console.log("createItemReturn", res);
            }}
          >
            <div class="h-screen">
              <h1 class="mx-auto text-5xl mt-16 max-w-screen-lg">
                Create Item
              </h1>
              <div class="border mx-auto dark:border-gray-700 transition duration-500 mt-12 mb-6 ease-in-out max-w-screen-lg"></div>
              <Error error={error} />

              <div
                class="bg-white border-t border-b rounded-lg sm:border-l sm:border-r sm:rounded-lg shadow-md mb-6 mx-auto py-6 px-20 max-w-screen-lg"
                x-data="invoices()"
                x-init="generateInvoiceNumber(111111, 999999);"
                x-cloak
              >
                <div class="flex justify-between">
                  <h2 class="text-2xl font-bold mb-6 pb-3 tracking-wider uppercase">
                    Add sale item
                  </h2>
                  <div>
                    <div class="relative mr-6 inline-block">
                      <div class="text-gray-500 cursor-pointer w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-300 inline-flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="icon icon-tabler icon-tabler-printer"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <rect
                            x="0"
                            y="0"
                            width="24"
                            height="24"
                            stroke="none"
                          ></rect>
                          <path d="M17 17h2a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h2" />
                          <path d="M17 9v-4a2 2 0 0 0 -2 -2h-6a2 2 0 0 0 -2 2v4" />
                          <rect x="7" y="13" width="10" height="8" rx="2" />
                        </svg>
                      </div>
                    </div>

                    <div class="relative inline-block">
                      <div class="text-gray-500 cursor-pointer w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-300 inline-flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="icon icon-tabler icon-tabler-refresh"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <rect
                            x="0"
                            y="0"
                            width="24"
                            height="24"
                            stroke="none"
                          ></rect>
                          <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -5v5h5" />
                          <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 5v-5h-5" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="flex mb-6 justify-between">
                  <div class="w-2/4">
                    <div class="mb-3 md:mb-3 md:flex items-center">
                      <label class="w-32 text-gray-700 block font-bold text-sm uppercase tracking-wide">
                        Product Name
                      </label>
                      <span class="mr-6 inline-block hidden md:block">:</span>
                      <div class="flex-1">
                        <input
                          class="bg-white appearance-none border-2 border-gray-200 rounded-lg w-48 py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                          id="inline-full-name"
                          type="text"
                          placeholder="Zucchini"
                          id="title"
                          name="title"
                          required
                          onChange={this.handleChange}
                          x-model="invoiceNumber"
                        />
                      </div>
                    </div>

                    <div class="mb-3 md:mb-3 md:flex items-center">
                      <label class="w-32 text-gray-700 block font-bold text-sm uppercase tracking-wide">
                        Price
                      </label>
                      <span class="mr-6 inline-block hidden md:block">:</span>
                      <div class="flex-1">
                        <input
                          class="bg-gray-200 appearance-none border-2 border-gray-200 rounded-lg w-48 py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500 js-datepicker"
                          type="text"
                          id="datepicker1"
                          placeholder="$2.00"
                          x-model="invoiceDate"
                          autoComplete="off"
                          type="nuber"
                          id="price"
                          name="price"
                          required
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>

                    <div class="mb-3 md:mb-3 md:flex items-center">
                      <label class="w-32 text-gray-800 block font-bold text-sm uppercase tracking-wide">
                        Quantity
                      </label>
                      <span class="mr-6 inline-block hidden md:block">:</span>
                      <div class="flex-1">
                        <input
                          class="bg-gray-200 appearance-none border-2 border-gray-200 rounded-lg w-48 py-3 px-3 text-gray-800 leading-tight focus:outline-none focus:bg-white focus:border-blue-500 js-datepicker-2"
                          id="datepicker2"
                          type="text"
                          placeholder="3"
                          x-model="invoiceDueDate"
                          autoComplete="off"
                          id="quantity"
                          name="quantity"
                          required
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-800 border border-gray-200 rounded-lg py-3 px-3 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mt-3"
                      type="file"
                      id="file"
                      name="file"
                      placeholder="Upload an image"
                      required
                      onChange={this.uploadFile}
                    />
                    {this.state.image && (
                      <img
                        width="200"
                        src={this.state.image}
                        alt="Upload Preview"
                      />
                    )}
                    <div class="w-32 h-32 mb-3 border rounded-lg overflow-hidden relative bg-gray-100">
                      <img
                        id="image"
                        class="object-cover w-full h-32"
                        src="https://placehold.co/300x300/e2e8f0/e2e8f0"
                      />

                      <div
                        class="absolute top-0 left-0 right-0 bottom-0 w-full block cursor-pointer flex items-center justify-center"
                        onClick="document.getElementById('fileInput').click()"
                      >
                        <button
                          type="button"
                          // style="background-color: rgba(255, 255, 255, 0.65)"
                          class="hover:bg-gray-100 text-gray-800 font-semibold py-3 px-3 text-sm border border-gray-300 rounded-lg shadow-sm"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="icon icon-tabler icon-tabler-camera"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            stroke-width="2"
                            stroke="currentColor"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <rect
                              x="0"
                              y="0"
                              width="24"
                              height="24"
                              stroke="none"
                            ></rect>
                            <path d="M5 7h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2" />
                            <circle cx="12" cy="13" r="3" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <input
                      name="photo"
                      id="fileInput"
                      accept="image/*"
                      class="hidden"
                      type="file"
                    />
                  </div>
                </div>

                <div class="flex flex-wrap justify-between mb-6">
                  <div class="w-full md:w-1/3 mb-3 md:mb-0">
                    <label class="text-gray-800 block mb-3 font-bold text-sm uppercase tracking-wide mb-6">
                      Category:
                    </label>

                    <div>
                      <div class="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-3 bg-blue-200 text-blue-700 rounded-full mb-3 ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="feather feather-bell-off mr-3"
                        >
                          <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                          <path d="M18.63 13A17.89 17.89 0 0 1 18 8"></path>
                          <path d="M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14"></path>
                          <path d="M18 8a6 6 0 0 0-9.33-5"></path>
                          <line x1="1" y1="1" x2="23" y2="23"></line>
                        </svg>
                        Organic
                      </div>

                      <div class="ml-6 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-3 bg-green-200 text-green-700 rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="feather feather-arrow-right mr-3"
                        >
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                        No Pesticides
                      </div>

                      <div class="ml-6 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-3 bg-orange-200 text-orange-700 rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="feather feather-activity mr-3"
                        >
                          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                        </svg>
                        Picked Early
                      </div>

                      <div class="ml-6 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-3 bg-red-200 text-red-700 rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="feather feather-archive mr-3"
                        >
                          <polyline points="21 8 21 21 3 21 3 8"></polyline>
                          <rect x="1" y="3" width="22" height="5"></rect>
                          <line x1="10" y1="12" x2="14" y2="12"></line>
                        </svg>
                        Low Nitrogen Fert
                      </div>

                      <div class="ml-6 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-3 rounded-full bg-white text-gray-800 border">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="feather feather-hard-drive mr-3"
                        >
                          <line x1="22" y1="12" x2="2" y2="12"></line>
                          <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
                          <line x1="6" y1="16" x2="6.01" y2="16"></line>
                          <line x1="10" y1="16" x2="10.01" y2="16"></line>
                        </svg>
                        No Till
                      </div>
                    </div>
                  </div>
                </div>

                <div class="flex -mx-1 border-b py-3 items-start">
                  <div class="flex-1 px-3">
                    <p class="text-gray-800 uppercase tracking-wide text-sm font-bold">
                      Description
                    </p>
                    <textarea
                      className="no-resize appearance-none block w-full bg-gray-200 text-gray-800 border border-gray-200 rounded py-3 px-3 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none mt-3"
                      id="description"
                      name="description"
                      required
                      onChange={this.handleChange}
                    />
                  </div>
                </div>

                <template x-for="invoice in items">
                  <div class="flex -mx-1 py-3 border-b">
                    <div class="flex-1 px-3">
                      <p class="text-gray-800" x-text="invoice.name"></p>
                    </div>

                    <div class="px-3 w-20 text-right">
                      <p class="text-gray-800" x-text="invoice.qty"></p>
                    </div>

                    <div class="px-3 w-32 text-right">
                      <p
                        class="text-gray-800"
                        x-text="numberFormat(invoice.rate)"
                      ></p>
                    </div>

                    <div class="px-3 w-32 text-right">
                      <p
                        class="text-gray-800"
                        x-text="numberFormat(invoice.total)"
                      ></p>
                    </div>

                    <div class="px-3 w-20 text-right">
                      <a
                        href="#"
                        class="text-red-500 hover:text-red-600 text-sm font-semibold"
                      />
                    </div>
                  </div>
                </template>

                <button
                  type="submit"
                  class="mt-6 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-3 px-3 text-sm border border-gray-300 rounded shadow-sm"
                >
                  Add Product
                </button>

                <div class="py-3 ml-auto mt-6 w-full sm:w-2/4 lg:w-1/4">
                  <div class="flex justify-between mb-3">
                    <div class="text-gray-800 text-right flex-1">
                      Total incl. GST
                    </div>
                    <div class="text-right w-40">
                      <div
                        class="text-gray-800 font-medium"
                        x-html="netTotal"
                      ></div>
                    </div>
                  </div>
                  <div class="flex justify-between mb-6">
                    <div class="text-sm text-gray-600 text-right flex-1">
                      GST(18%) incl. in Total
                    </div>
                    <div class="text-right w-40">
                      <div
                        class="text-sm text-gray-600"
                        x-html="totalGST"
                      ></div>
                    </div>
                  </div>

                  <div class="py-3 border-t border-b">
                    <div class="flex justify-between">
                      <div class="text-xl text-gray-600 text-right flex-1">
                        Amount due
                      </div>
                      <div class="text-right w-40">
                        <div
                          class="text-xl text-gray-800 font-bold"
                          x-html="netTotal"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  id="js-print-template"
                  x-ref="printTemplate"
                  class="hidden"
                >
                  <div class="mb-6 flex justify-between">
                    <div>
                      <h2 class="text-3xl font-bold mb-6 pb-3 tracking-wider uppercase">
                        Invoice
                      </h2>

                      <div class="mb-3 flex items-center">
                        <label class="w-32 text-gray-800 block font-bold text-xs uppercase tracking-wide">
                          Invoice No.
                        </label>
                        <span class="mr-6 inline-block">:</span>
                        <div x-text="invoiceNumber"></div>
                      </div>

                      <div class="mb-3 flex items-center">
                        <label class="w-32 text-gray-800 block font-bold text-xs uppercase tracking-wide">
                          Invoice Date
                        </label>
                        <span class="mr-6 inline-block">:</span>
                        <div x-text="invoiceDate"></div>
                      </div>

                      <div class="mb-3 flex items-center">
                        <label class="w-32 text-gray-800 block font-bold text-xs uppercase tracking-wide">
                          Due date
                        </label>
                        <span class="mr-6 inline-block">:</span>
                        <div x-text="invoiceDueDate"></div>
                      </div>
                    </div>
                    <div class="pr-5">
                      <div class="w-32 h-32 mb-3 overflow-hidden">
                        <img id="image2" class="object-cover w-20 h-20" />
                      </div>
                    </div>
                  </div>

                  <div class="flex justify-between mb-30">
                    <div class="w-1/2">
                      <label class="text-gray-800 block mb-3 font-bold text-xs uppercase tracking-wide">
                        Category Tag:
                      </label>
                    </div>
                    <div class="w-1/2">
                      <label class="text-gray-800 block mb-3 font-bold text-xs uppercase tracking-wide">
                        From:
                      </label>
                    </div>
                  </div>

                  <div class="flex flex-wrap -mx-1 border-b py-3 items-start">
                    <div class="flex-1 px-3">
                      <p class="text-gray-600 uppercase tracking-wide text-xs font-bold">
                        Description
                      </p>
                    </div>

                    <div class="px-3 w-32 text-right">
                      <p class="text-gray-600 uppercase tracking-wide text-xs font-bold">
                        Units
                      </p>
                    </div>

                    <div class="px-3 w-32 text-right">
                      <p class="leading-none">
                        <span class="block uppercase tracking-wide text-xs font-bold text-gray-600">
                          Unit Price
                        </span>
                        <span class="font-medium text-xs text-gray-500">
                          (Incl. GST)
                        </span>
                      </p>
                    </div>

                    <div class="px-3 w-32 text-right">
                      <p class="leading-none">
                        <span class="block uppercase tracking-wide text-xs font-bold text-gray-600">
                          Amount
                        </span>
                        <span class="font-medium text-xs text-gray-500">
                          (Incl. GST)
                        </span>
                      </p>
                    </div>
                  </div>
                  <template x-for="invoice in items">
                    <div class="flex flex-wrap -mx-1 py-3 border-b">
                      <div class="flex-1 px-3">
                        <p class="text-gray-800" x-text="invoice.name"></p>
                      </div>

                      <div class="px-3 w-32 text-right">
                        <p class="text-gray-800" x-text="invoice.qty"></p>
                      </div>

                      <div class="px-3 w-32 text-right">
                        <p
                          class="text-gray-800"
                          x-text="numberFormat(invoice.rate)"
                        ></p>
                      </div>

                      <div class="px-3 w-32 text-right">
                        <p
                          class="text-gray-800"
                          x-text="numberFormat(invoice.total)"
                        ></p>
                      </div>
                    </div>
                  </template>

                  <div class="py-3 ml-auto mt-20" style={{ width: "320px" }}>
                    <div class="flex justify-between mb-3">
                      <div class="text-gray-800 text-right flex-1">
                        Total incl. GST
                      </div>
                      <div class="text-right w-40">
                        <div
                          class="text-gray-800 font-medium"
                          x-html="netTotal"
                        ></div>
                      </div>
                    </div>
                    <div class="flex justify-between mb-6">
                      <div class="text-sm text-gray-600 text-right flex-1">
                        GST(18%) incl. in Total
                      </div>
                      <div class="text-right w-40">
                        <div
                          class="text-sm text-gray-600"
                          x-html="totalGST"
                        ></div>
                      </div>
                    </div>

                    <div class="py-3 border-t border-b">
                      <div class="flex justify-between">
                        <div class="text-xl text-gray-600 text-right flex-1">
                          Amount due
                        </div>
                        <div class="text-right w-40">
                          <div
                            class="text-xl text-gray-800 font-bold"
                            x-html="netTotal"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Mutation>
    );
  }
}

export default CreateItem;
export { CREATE_ITEM_MUTATION };
