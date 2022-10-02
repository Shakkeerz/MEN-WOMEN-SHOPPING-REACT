import React from 'react'

function Hero() {
  return (
    <div>
      <div class="flex flex-col md:flex-row items-center justify-center mt-20">
        <div
          class="w-full h- md:w-2/5 flex flex-col justify-center text-center md:text-start"
        >
          {/* <!--w-2/5 :all section is 5 parts & this section allocated 2/5--> */}
          <h2 class="font-serif text-5xl text-gray-600 mb-4">
            some catchy title here
          </h2>
          <p class="hero-p-style">our brand tagline goes here</p>
          <p class="hero-p-style">our brand motto goes here</p>
          <a
            href="#"
            class="md:self-start bg-gradient-to-r from-red-600 to-purple-600 py-2 px-5 mt-16 rounded-full text-white text-xl uppercase"
            >shop now</a
          >
        </div>

        <div class="w-full mt-9 md:w-3/5">
          <img src="images/hero-img.svg" alt="hero image" class="w-full" />
        </div>
      </div>
    </div>
  )
}

export default Hero