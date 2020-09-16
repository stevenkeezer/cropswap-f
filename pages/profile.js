import React from "react";
import Footer from "../components/Footer";

export default function profile(props) {
  return (
    <body class="bg-gray-200">
      <div class="w-full mx-auto h-auto bg-green-600 flex-col  flex">
        <div class="top-icons">
          <div class="h-4 text-white pr-2">
            <div class="inline float-right text-xs mt-1">
              <i class="fas fa-signal mr-1 fa-xs"></i>
              <i class="fas fa-battery-three-quarters mr-1 fa-sx"></i>
              <i class="fas fa-wifi mr-1 fa-xs"></i>
            </div>
          </div>
        </div>

        <div class="h-6 mt-4">
          <i class="fas fa-arrow-left mr-1 fa-sm text-white pl-4"></i>
        </div>

        <div class="h-32">
          <div class="wrapper flex-column items-center">
            <div class="h-32 w-32 rounded-full bg-white border border-green-300 mx-auto">
              <img
                src="https://i0.wp.com/zblogged.com/wp-content/uploads/2019/02/FakeDP.jpeg?resize=567%2C580&ssl=1"
                class="rounded-full"
                alt=""
              />
            </div>
            <div class="text-white font-semibold text-2xl mt-3 content-center text-center">
              Jonys Smith
            </div>
            <div class="text-white text-xl mt-3 text-center text-gray-300">
              Sao Paulo, Brazil
            </div>
            <div class="text-xs text-center">
              <i class="fas fa-star fa-xs text-white"></i>
              <i class="fas fa-star fa-xs text-white"></i>
              <i class="fas fa-star fa-xs text-white"></i>
              <i class="fas fa-star fa-xs text-white"></i>
              <i class="fas fa-star fa-xs text-white"></i>
            </div>
          </div>
        </div>

        <div
          class="h-24 mx-auto relative shadow-lg bg-white rounded-lg mt-24 p-2 flex w-1/2"
          style={{ top: "1em" }}
        >
          <div class="w-1/2 ml-2 flex my-auto">
            <i class="fas my-auto fa-star-of-life fa-lg text-indigo-500 "></i>
            <div class="flex-column ml-4 mt-1">
              <div class="font-bold">35</div>
              <div
                class="text-gray-500 text-xs relative"
                style={{ top: "-0.5em" }}
              >
                Assistencies
              </div>
            </div>
          </div>
          <div class="w-1/2 flex my-auto pl-5 border-l-2 border-gray-300">
            <i class="fas my-auto fa-ambulance fa-lg text-indigo-500 "></i>
            <div class="flex-column ml-4 mt-1">
              <div class="font-bold">20</div>
              <div
                class="text-gray-500 text-xs relative"
                style={{ top: "-0.5em" }}
              >
                Deliveries
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="max-w-screen-xl mx-auto flex gap-8 mt-24">
        <div class="w-1/3 bg-white rounded-lg w-64 h-64 shadow py-12 px-8">
          <span class="text-xl font-medium text-gray-600  text-gray-800 text-3xl ">
            {" "}
            Contact Info
          </span>
          <div class="flex">
            <div class="w-1/2 mb-6 mt-10">
              <dt class="text-xl font-medium  text-gray-500">
                Name
                <span class="text-xl text-blue-400 ml-12">Steven Keezer</span>
              </dt>
            </div>
            <div class="w-1/2 mb-6"></div>
          </div>

          <div class="flex flex-row">
            <div class="w-1/2 mb-6">
              <dt class="text-xl font-medium text-gray-500">
                Email
                <span class="text-xl text-blue-400 ml-12">
                  richardocooper@example.com
                </span>
              </dt>
            </div>
            <div class="w-1/2 mb-6"></div>
          </div>

          <div class="flex">
            <div class="w-1/2 mb-6">
              <dt class="text-xl font-medium text-gray-500">
                Phone
                <span class="text-xl text-blue-400 ml-12">// 805123144</span>
              </dt>
            </div>
            <div class="w-1/2 mb-6"></div>
          </div>
        </div>
        <div class="  w-2/3">
          {/* <h1 class=" py-2 pb-8 text-4xl">Steven's Garden</h1> */}
          <div class="rounded-lg shadow bg-white">
            <dl>
              <div class=" flex justify-between items-baseline border-b-2 py-12 px-8 border-gray-100">
                <div class="w-1/2 ">
                  <dt class=" text-xl font-medium text-gray-600  text-gray-800 text-3xl ">
                    Steven's Garden
                  </dt>
                </div>
              </div>
            </dl>
          </div>

          <div class="mt-12">
            <div class="bg-white rounded-lg shadow  text-gray-600">
              <div class=" flex justify-between items-baseline border-b-2 py-12 px-8 border-gray-100">
                <div class="w-1/2 ">
                  <dt class=" text-xl font-medium text-gray-600  text-gray-800 text-3xl ">
                    Customer Feedback
                  </dt>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </body>
    // <div class="bg-gray-100">
    //   <div class="bg-transparent shadow">
    //     <div class="container mx-auto px-6">
    //       <div class="flex items-center justify-between py-5">
    //         <div class="flex items-center">
    //           <button class="h-9 border border-gray-200 px-3 py-2 text-2xl font-medium rounded-lg text-gray-700 shadow">
    //             Disqualify
    //           </button>
    //           <button class="h-9 ml-3 px-3 py-2 text-2xl font-medium rounded-lg bg-indigo-600 text-white shadow">
    //             Advance to Offer
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div class="container mx-auto p-6">
    //     <div class="flex -mx-2">
    //       <div class="w-3/5 px-6">
    //         <div class="mb-6">
    //           <h2 class="text-4xl font-medium text-gray-900 pb-6">
    //             View Profile
    //           </h2>
    //           <div class="flex items-center pb-12">
    //             <img
    //               class="h-32 w-32 rounded-full"
    //               src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    //               alt=""
    //             />
    //             <div class="flex flex-col ">
    //               <h1 class="px-6 text-2xl py-3 text-gray-900 font-extrabold">
    //                 Ricardo Cooper
    //               </h1>
    //               <div class="px-6 py-3">blah</div>
    //             </div>
    //           </div>
    //           <div class="bg-white rounded-lg shadow ">
    //             <div class="px-6 py-5">
    //               <dl>
    //                 <div class="flex">
    //                   <div class="w-1/2 mb-6">
    //                     <dt class="text-2xl font-medium text-gray-600">
    //                       Profile Details
    //                     </dt>
    //                     <dd class="text-xl pt-6 py-6 font-normal text-gray-900">
    //                       Backend Developer
    //                     </dd>
    //                   </div>
    //                   <div class="w-1/2 mb-6"></div>
    //                 </div>
    //                 <div class="flex">
    //                   <div class="w-1/2 mb-6">
    //                     <dt class="text-xl font-medium  text-gray-500">
    //                       Name
    //                       <span class="text-xl text-blue-400 ml-12">
    //                         Steven Keezer{" "}
    //                       </span>
    //                     </dt>
    //                   </div>
    //                   <div class="w-1/2 mb-6"></div>
    //                 </div>
    //                 <div class="flex flex-row">
    //                   <div class="w-1/2 mb-6">
    //                     <dt class="text-xl font-medium text-gray-500">
    //                       Email{" "}
    //                       <span class="text-xl text-blue-400 ml-12">
    //                         richardocooper@example.com
    //                       </span>
    //                     </dt>
    //                   </div>
    //                   <div class="w-1/2 mb-6"></div>
    //                 </div>
    //                 <div class="flex">
    //                   <div class="w-1/2 mb-6">
    //                     <dt class="text-xl font-medium text-gray-500">
    //                       Phone
    //                       <span class="text-xl text-blue-400 ml-12">
    //                         805123144{" "}
    //                       </span>
    //                     </dt>
    //                   </div>
    //                   <div class="w-1/2 mb-6"></div>
    //                 </div>
    //               </dl>
    //             </div>
    //           </div>
    //         </div>
    //         <div>
    //           <h2 class="text-3xl font-medium text-gray-900 pb-6">Notes</h2>
    //           <div class="bg-white rounded-lg shadow  text-gray-600">
    //             <div class="flex border-b">
    //               <div class="w-1/6 p-6">
    //                 <img
    //                   class="h-12 w-12 rounded-full"
    //                   src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    //                   alt=""
    //                 />
    //               </div>
    //               <div class="w-5/6 py-8 pr-8">
    //                 <span class="font-semibold text-gray-900 block">
    //                   Emilia Gates
    //                 </span>
    //                 Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    //                 Quod aut a neque optio provident temporibus nam rerum dolor
    //                 hic vero et
    //                 <span class="block text-2xl mt-1">
    //                   4 days ago &middot; <a href="">Reply</a>
    //                 </span>
    //               </div>
    //             </div>
    //             <div class="flex">
    //               <div class="w-1/6 p-6">
    //                 <img
    //                   class="h-12 w-12 rounded-full"
    //                   src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    //                   alt=""
    //                 />
    //               </div>
    //               <div class="w-5/6 py-8 pr-8">
    //                 <span class="font-semibold text-gray-900 block">
    //                   Emilia Gates
    //                 </span>
    //                 Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    //                 Quod aut a neque optio provident temporibus nam rerum dolor
    //                 hic vero et
    //                 <span class="block text-2xl mt-1">
    //                   4 days ago &middot; <a href="">Reply</a>
    //                 </span>
    //               </div>
    //             </div>
    //             <div class="bg-gray-100 p-6">
    //               <label for="note" class="text-2xl font-semibold block">
    //                 Add a note
    //               </label>
    //               <textarea
    //                 name="note"
    //                 id="note"
    //                 class="w-full rounded-lg border"
    //               ></textarea>
    //               <div class="flex justify-end">
    //                 <button class="text-white bg-indigo-600 py-2 px-3 rounded">
    //                   Post Note
    //                 </button>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div class="w-2/5 px-6">
    //         <h2 class="text-3xl font-medium text-gray-900 pb-6">Timeline</h2>
    //         <div class="bg-white rounded-lg shadow  text-gray-600">
    //           <div>
    //             <div class="flex pt-6">
    //               <div class="w-1/6 pb-6 mb-6">
    //                 <i class="far fa-user-circle"></i>
    //               </div>
    //               <div class="w-4/6 pb-6 mb-6 border-b">
    //                 <span class="font-semibold text-gray-900">Applied</span> to{" "}
    //                 <span class="font-semibold text-gray-900">
    //                   Front-end Developer
    //                 </span>
    //               </div>
    //               <div class="w-1/6 pb-6 mb-6 border-b">
    //                 <span class="text-2xl text-gray-500">Aug 26</span>
    //               </div>
    //             </div>
    //             <div class="flex">
    //               <div class="w-1/6 pb-6 mb-6">
    //                 <i class="far fa-arrow-alt-circle-right"></i>
    //               </div>
    //               <div class="w-4/6 pb-6 mb-6 border-b">
    //                 <span class="font-semibold text-gray-900">Advanced</span> to
    //                 phone screening by Bethany Blake
    //               </div>
    //               <div class="w-1/6 pb-6 mb-6 border-b">
    //                 <span class="text-2xl text-gray-500">Aug 26</span>
    //               </div>
    //             </div>
    //             <div class="flex">
    //               <div class="w-1/6 pb-6 mb-6">
    //                 <i class="far fa-check-circle"></i>
    //               </div>
    //               <div class="w-4/6 pb-6 mb-6 border-b">
    //                 <span class="font-semibold text-gray-900">Completed</span>{" "}
    //                 phone screening with Martha Gardner
    //               </div>
    //               <div class="w-1/6 pb-6 mb-6 border-b">
    //                 <span class="text-2xl text-gray-500">Sep 2</span>
    //               </div>
    //             </div>
    //             <div class="flex">
    //               <div class="w-1/6 pb-6 mb-6">
    //                 <i class="far fa-arrow-alt-circle-right"></i>
    //               </div>
    //               <div class="w-4/6 pb-6 mb-6 border-b">
    //                 <span class="font-semibold text-gray-900">Advanced</span> to
    //                 interview by Bethany Blake
    //               </div>
    //               <div class="w-1/6 pb-6 mb-6 border-b">
    //                 <span class="text-2xl text-gray-500">Sep 2</span>
    //               </div>
    //             </div>
    //             <div class="flex">
    //               <div class="w-1/6 pb-4">
    //                 <i class="far fa-arrow-alt-circle-right"></i>
    //               </div>
    //               <div class="w-4/6 pb-4">
    //                 <span class="font-semibold text-gray-900">Completed</span>{" "}
    //                 interview with Katherine Snyden
    //               </div>
    //               <div class="w-1/6 pb-4">
    //                 <span class="text-2xl text-gray-500">Sep 2</span>
    //               </div>
    //             </div>
    //             <div class="flex bg-white px-6 py-4 border-t">
    //               <button class="w-full justify-center px-6 py-2 bg-indigo-600 rounded">
    //                 <span class="text-white">Advance to Offer</span>
    //               </button>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
