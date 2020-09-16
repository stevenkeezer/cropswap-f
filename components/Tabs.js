import React from "react";

const Tabs = ({ color }) => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className="flex bg-white rounded-lg px-6  flex-wrap">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap  flex-row"
            role="tablist"
          >
            <li className="-mb-px  last:mr-0 bg-gray-100  rounded-t-lg w-1/3 text-center">
              <a
                className={
                  `text-2xl font-bold   py-3 
                  ${openTab === 3 ? "rounded-br-none" : "rounded-br-lg"}
                  rounded-t-lg block leading-normal ` +
                  (openTab === 1
                    ? "text-gray-700 rounded-none  bg-" + color
                    : "text-" + color + "-600 bg-white ")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Active
              </a>
            </li>
            <li className="-mb-px  last:mr-0 bg-gray-100 rounded-t-lg w-1/3 text-center">
              <a
                className={
                  `text-2xl font-bold   py-3  rounded-t-lg block 
                  ${openTab === 3 && "rounded-bl-none"}
                   ${openTab === 1 && "rounded-br-none"} 
                   leading-normal ` +
                  (openTab === 2
                    ? "text-gray-700 rounded-b-lg bg-" + color
                    : "text-" + color + `-600 bg-white rounded-b-lg`)
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                Sold
              </a>
            </li>
            <li className="-mb-px  last:mr-0 bg-gray-100 rounded-t-lg  w-1/3 text-center">
              <a
                className={
                  `text-2xl font-bold   py-3 rounded-t-lg block false leading-normal tracking-wide                   
                   ${openTab === 1 ? "rounded-bl-none" : "rounded-bl-lg"} 
                  ` +
                  (openTab === 3
                    ? "ext-gray-700 bg-" + color
                    : "text-" + color + "-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                Unsold
              </a>
            </li>
          </ul>
          <div
            className={
              openTab === 1
                ? `relative flex flex-col min-w-0 break-words h-auto bg-gray-100 w-full rounded-tl-none rounded-lg`
                : `relative flex flex-col min-w-0 break-words h-auto bg-gray-100 w-full ${
                    openTab === 3 && "rounded-tr-none"
                  } rounded-lg`
            }
          >
            <div className="px-6 py-12  flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <div class="flex-1 ">
                    Nothing to see here..
                    {/* <div class="flex mb-8">
                      <svg
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        class="flag w-6 h-6 mr-3"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>{" "}
                      <div class="flex-grow">
                        <h3 class="text-2xl text-gray-700 mb-1 ">
                          You sold 4 lbs of cherries!
                        </h3>
                        <h4 class="text-xl text-red-900 mt-3 italic">
                          38 min ago
                        </h4>
                      </div>
                      <button class="text-red-900 flex-shrink-0 ml-2">
                        <svg
                          stroke="currentColor"
                          stroke-width="2"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="w-6 h-6"
                          viewBox="0 0 24 24"
                        >
                          <circle cx="12" cy="12" r="1" />
                          <circle cx="19" cy="12" r="1" />
                          <circle cx="5" cy="12" r="1" />
                        </svg>
                      </button>
                    </div>
                    <div class="flex">
                      <svg
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        class="flag w-6 h-6 mr-6"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <div class="flex-grow">
                        <h3 class="text-2xl text-gray-700 mb-1">
                          You sold 12 peaches & 3 other items!
                        </h3>
                        <h4 class="text-xl text-red-900 mt-3 italic">
                          38 min ago
                        </h4>
                      </div>
                      <button class="text-red-900 flex-shrink-0 ml-2">
                        <svg
                          stroke="currentColor"
                          stroke-width="2"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="w-6 h-6"
                          viewBox="0 0 24 24"
                        >
                          <circle cx="12" cy="12" r="1" />
                          <circle cx="19" cy="12" r="1" />
                          <circle cx="5" cy="12" r="1" />
                        </svg>
                      </button>
                    </div>
                 */}
                  </div>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <p>
                    Completely synergize resource taxing relationships via
                    premier niche markets. Professionally cultivate one-to-one
                    customer service with robust ideas.
                    <br />
                    <br />
                    Dynamically innovate resource-leveling customer service for
                    state of the art customer service.
                  </p>
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  <p>
                    Efficiently unleash cross-media information without
                    cross-media value. Quickly maximize timely deliverables for
                    real-time schemas.
                    <br />
                    <br /> Dramatically maintain clicks-and-mortar solutions
                    without functional solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function TabsRender() {
  return (
    <>
      <Tabs color="gray" />
    </>
  );
}
