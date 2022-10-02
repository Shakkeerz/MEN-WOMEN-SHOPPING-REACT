import React from 'react'

function Mens_collection() {
  return (
    <div>
      <div class="my-20">
        <div class="flex justify-between items-center ">

          <h2 class="text-3xl">men's collections</h2>
          <a href="#" class="flex items-center text-xl"
            >view all<svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              /></svg></a>
        </div>

        {/* <!-- here is loooping --> */}
        <div  class="show_products grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">

        <div class="shadow-2xl">
            <a href="#">
            <img src="images/products/men/product1.jpg" alt="" class="rounded-tl-lg rounded-tr-lg" />

            </a>
            <div class="p-5">
              <h3>men's t-shirts</h3>
              <div class="flex my-3">
                <div class="h-5 w-5 mr-2 shadow-md rounded-full bg-red-700 "></div>
                <div class="h-5 w-5 mr-2 shadow-md rounded-full bg-black "></div>
                <div class="h-5 w-5 mr-2 shadow-md rounded-full bg-white "></div>
                <div class="h-5 w-5 mr-2 shadow-md rounded-full bg-green-700 "></div>
                <div class="h-5 w-5 mr-2 shadow-md rounded-full bg-blue-700 "></div>
              </div>

              <div class="flex my-3">
                <div class="border-2 text-xs rounded border-slate-300 text-gray-400 hover:text-gray-800 p-2 mr-2 cursor-pointer">xl</div>
                <div class="border-2 text-xs rounded border-slate-300 text-gray-400 hover:text-gray-800 p-2 mr-2 cursor-pointer">xxl</div>
                <div class="border-2 text-xs rounded border-slate-300 text-gray-400 hover:text-gray-800 p-2 mr-2 cursor-pointer">l</div>
                <div class="border-2 text-xs rounded border-slate-300 text-gray-400 hover:text-gray-800 p-2 mr-2 cursor-pointer">m</div>
                <div class="border-2 text-xs rounded border-slate-300 text-gray-400 hover:text-gray-800 p-2 mr-2 cursor-pointer">s</div>
              </div>

              <div class="flex gap-1 flex-col md:flex-row lg:flex-col 2xl:flex-row justify-between">
               <a href="#"  class="bg-gradient-to-r from-red-600 to-pink-500 hover:from-pink-500 hover:to-red-600 py-2 px-4 rounded-full text-gray-50  flex items-center justify-center cursor-pointer text-sm" >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 " fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    add to cart  
               </a>
               <a href="#"  class="bg-purple-600 hover:bg-purple-800  py-2 px-4 rounded-full text-gray-50  flex items-center justify-center cursor-pointer text-sm" >
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      details  
               </a>
               
              </div>


            </div>
            
            
           
          </div>
        </div>

      </div>
    </div>
  )
}

export default Mens_collection