import React from 'react'

function Footer() {
  return (
    <div>
      <div class="border-t-2 border-gray-700 flex items-center flex-col lg:flex-row lg:justify-between  text-sm">
        <div class="mb-4">
          <a href="#" class="max-2.5 mr-2">about</a>
          <a href="#" class="max-2.5 mr-2">privacy policy</a>
          <a href="#" class="max-2.5 mr-2">terms of services</a>
        </div>
        <div>copyright @ reserved 2021</div>
      </div>
    </div>
  )
}

export default Footer