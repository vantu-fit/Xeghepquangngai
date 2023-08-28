import React from 'react'

function OnePrice(props : {location: string , priceOne: any, priceAll: any, note: string }) {
  return (
    <div className="flex flex-col w-5/6 lg:w-[30%] mx-auto lg:mx-3 rounded-none lg:rounded-l-lg bg-white mt-4">
    <div className="flex-1 bg-white text-gray-600 rounded-t rounded-b-none overflow-hidden shadow">
      <div className="p-8 text-3xl font-bold text-center border-b-4">
        {props.location}
      </div>
      <ul className="w-full text-center text-sm">
        <li className="border-b py-4">{props.priceOne}k / Ghế</li>
        <li className="border-b py-4">{props.priceAll}k / Xe</li>
        <li className="border-b py-4">{props.note}</li>
      </ul>
    </div>
    <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
      <div className="w-full pt-6 text-3xl text-gray-600 font-bold text-center">
        £0
        <span className="text-base">for one user</span>
      </div>
      <div className="flex items-center justify-center">
        <button className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
          Sign Up
        </button>
      </div>
    </div>
  </div>
  )
}

export default OnePrice