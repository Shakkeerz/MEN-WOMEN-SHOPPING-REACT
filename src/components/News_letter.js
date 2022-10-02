import React from 'react'
function News_letter() {
  return (
    <div>
      <div class="rounded-lg shadow-lg my-20 flex text-gray-100 ">
        <div class="w-full  bg-gradient-to-r from-black to-puple-600 bg-purple-600 lg:from-black lg:via-purple-900 lg:to-transparent rounded-lg p-12">
            <div class="w-full ">
              <h2 class="text-2xl font-extrabold mb-4">subscribe to get offers first</h2>
              <p class="mb-4 leading-relaxed">want to hear from us we have new offers? sign up for our newsletter and we'll email you every time we have new sale offers.</p>
              <div>
                <input type="email" placeholder="enter your email" class="bg-gray-600 text-gray-200 placeholder-gray-400 px-4 py-3 w-full rounded-lg focus:outline-none mb-4" />
                <button type="submit" class="bg-red-600 py-3 rounded-lg px-4 w-full">submit</button>
              </div>
            </div>
            
        </div>
        <div class="hidden lg:w-2/5 lg:flex h-96">
          <img src="../images/subscribe-banner.png" alt="" class=" w-full h-full " />
        </div>
      </div>
    </div>
  )
}

export default News_letter