import React from 'react'

function Logo() {
  return (
    <div>
      <div className="bottom-0 right-0 fixed w-full">
        <div className="flex justify-center p-3 items-center ">
          <div className="flex justify-center items-center  p-2 rounded-full bg-black">
            <img
              src="/public/logo/imrabo-logo.png"
              alt=""
              className="h-6 mr-2"
            />
            <p className="mr-2 text-white">Imrabo</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Logo
