import React, { useState } from "react";
import Link from "next/link";
import { useUser } from "./User";
import NavStyles from "./styles/NavStyles";
import { useCart } from "./LocalState";
import CartCount from "./CartCount";
import Signout from "./Signout";
import styled from "styled-components";

function Nav() {
  const Logo = styled.h1`
    font-size: 1.8rem;
    /* margin-bottom: 1rem; */

    position: relative;
    font-weight: bold;
    display: flex;
    z-index: 2;
    a {
      padding: 0.5rem 1rem;
      /* color: ${(props) => props.theme.red}; */
      text-decoration: none;
    }
    /* @media (max-width: 1300px) {
    display: block;
    margin: 0;
    text-align: center;
  } */
  `;

  const SubLogo = styled.h1`
    transform: skew(-7deg);
    font-size: 3rem;
  `;

  const [open, setOpen] = useState(false);
  const me = useUser();
  const { toggleCart } = useCart();
  return (
    <div class="w-full  bg-white sm:px-12  pb-1 shadow">
      <header class="mx-auto max-w-screen-xl px-8">
        <nav class="flex justify-between z-40 w-full py-3 bg-white dark-mode:bg-gray-900 sticky  items-center text-white">
          <div class="flex flex-row items-center justify-between">
            <div class="relative inline-block text-left">
              <div>
                <span class="rounded-md ">
                  <div class="relative inline-block text-left">
                    <div>
                      <div className="flex-initial items-center">
                        <Link href="/">
                          <Logo>
                            <img
                              width="32px"
                              height="32px"
                              className=""
                              src="https://i.imgur.com/K4SMB4S.png"
                            />
                            <SubLogo>
                              <a class="text-orange-700">cropswap</a>
                            </SubLogo>
                          </Logo>
                        </Link>
                      </div>
                    </div>
                  </div>
                </span>
              </div>
            </div>
          </div>
          <div class="md:items-center md:w-auto flex">
            <div class="md:flex hidden">
              <NavStyles data-testid="nav">
                {/* <Link href="/items">
                  <a>Shop</a>
                </Link> */}
                {me && (
                  <>
                    <div class="flex gap-6">
                      {/* <Link href="/orders">
                        <a>Sell</a>
                      </Link> */}
                      <Link href="/mcs">
                        <a>My Farm</a>
                      </Link>

                      <Signout />
                      <div class=" bg-white rounded-lg hover:border-green-600 border border-white transition-all ease-in-out duration-500">
                        <button
                          type="button"
                          class="bg-green-500 focus:outline-none p-1 border-white"
                          onClick={toggleCart}
                        >
                          <div class="bg-green-500 py-3 px-6 rounded-l-lg pl-6">
                            <svg
                              class="w-10 h-10"
                              version="1.1"
                              id="Layer_1"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              x="0px"
                              y="0px"
                              width="512px"
                              height="512px"
                              viewBox="0 0 512 512"
                              enable-background="new 0 0 512 512"
                              xmlSpace="preserve"
                            >
                              <g id="shopping_basket_1_">
                                <polygon
                                  fill="#48bb78"
                                  points="34.879,234 92.879,464 417.879,469.344 474.879,234 	"
                                />
                                <rect
                                  x="11.215"
                                  y="191.328"
                                  fill="#ffffff"
                                  width="490.008"
                                  height="42.672"
                                />
                                <g>
                                  <path
                                    fill="#ffffff"
                                    d="M512.004,181.328h-70.031l-135.5-145.922l0,0C304.52,33.312,301.754,32,298.66,32c-5.891,0-10.656,4.766-10.656,10.656
			c0,2.812,1.078,5.344,2.844,7.25l0,0l122.031,131.422H99.121L221.145,49.906h-0.008c1.766-1.906,2.859-4.438,2.859-7.25
			c0-5.891-4.773-10.656-10.664-10.656c-3.094,0-5.859,1.312-7.812,3.406h-0.008l-135.5,145.922H-0.004v64h29.016L85.332,480H426.66
			l56.312-234.672h29.031V181.328z M409.848,458.656H102.145L50.949,245.328h410.086L409.848,458.656z M490.66,224H21.332v-21.344
			H490.66V224z"
                                  />
                                  <path
                                    fill="#ffffff"
                                    d="M181.332,416c5.891,0,10.664-4.781,10.664-10.672V298.656c0-5.891-4.773-10.656-10.664-10.656
			s-10.672,4.766-10.672,10.656v106.672C170.66,411.219,175.441,416,181.332,416z"
                                  />
                                  <path
                                    fill="#ffffff"
                                    d="M255.996,416c5.883,0,10.664-4.781,10.664-10.672V298.656c0-5.891-4.781-10.656-10.664-10.656
			c-5.891,0-10.664,4.766-10.664,10.656v106.672C245.332,411.219,250.105,416,255.996,416z"
                                  />
                                  <path
                                    fill="#ffffff"
                                    d="M330.66,416c5.891,0,10.672-4.781,10.672-10.672V298.656c0-5.891-4.781-10.656-10.672-10.656s-10.656,4.766-10.656,10.656
			v106.672C320.004,411.219,324.77,416,330.66,416z"
                                  />
                                </g>
                              </g>
                            </svg>
                          </div>
                          <div class=" px-6 py-5 bg-green-600 rounded-r-lg ">
                            <CartCount
                              count={me.cart.reduce(
                                (tally, cartItem) => tally + cartItem.quantity,
                                0
                              )}
                            ></CartCount>
                          </div>
                        </button>
                      </div>
                    </div>
                  </>
                )}
                {!me && (
                  <Link href="/signup">
                    <a>Sign In</a>
                  </Link>
                )}
              </NavStyles>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Nav;
