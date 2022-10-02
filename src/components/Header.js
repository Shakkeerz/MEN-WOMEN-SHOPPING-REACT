import React from 'react'

function Header() {
  return (
    <div>
       <div
        class="flex justify-between md:flex-row h-14 items-center "
      >
        <div class="flex justify-center">
          <div
            class="bg-gradient-to-r from-purple-400 to-red-600 h-10 w-10 rounded-lg"
          ></div>
          <h1 class="text-3xl text-gray-600 ml-2">logo</h1>
        </div>

        <div class="flex items-center md:items-end md:overflow-hidden">
          <a href="#" class="text-2xl md:hidden"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </a>
          <a href="#" class="nav-link-style d-none md:inline-block">home</a>
          <a href="#" class="nav-link-style d-none md:inline-block">shop</a>
          <a href="#" class="nav-link-style d-none md:inline-block">blog</a>
          <a href="#" class="nav-link-style d-none md:inline-block">contact</a>
          <a
            href="#"
            class="bg-purple-600 hover:bg-purple-700 text-gray-50 px-2 md:px-5 py-1 md:py-3 rounded-full"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              class="flex-wrap h-6 w-6 inline-block"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span class="hidden md:inline-block">cart(0)</span></a
          >
        </div>
      </div>
    </div>
  )
}

export default Header