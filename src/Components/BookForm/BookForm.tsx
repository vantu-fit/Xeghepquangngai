import React from "react";

function BookForm() {
  return (
    <section className="w-full my-4">
      <div className="w-[90%]  bg-gradient-to-r from-blue-900 to-slate-800 mx-auto rounded-3xl py-5 sm:px-10 lg:px-10 text-slate-300">
        <h2 className="ml-3 lg:ml-0 uppercase font-semibold text-cyan-400">
          đặt xe ghép giá rẻ
        </h2>
        <p className="my-3 ml-3 lg:ml-0">
          Xe ghép quảng ngãi , nơi đặt vé giá rẻ nhất , nhanh nhất
        </p>
        <form action="" className="w-full lg:w-[90%] grid grid-cols-2 mx-auto">
          <div className="mx-2 my-3 col-span-2 sm:col-span-1 lg:col-span-1">
            <input
              type="text"
              id="name"
              className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Họ và tên"
              required
            />
          </div>
          <div className="mx-2 my-3 col-span-2 sm:col-span-1 lg:col-span-1">
            <input
              type="text"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Điểm đi"
              required
            />
          </div>
          <div className="mx-2 my-3 col-span-2 sm:col-span-1 lg:col-span-1">
            <input
              type="text"
              id="name"
              className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Số điện thoại"
              required
            />
          </div>
          <div className="mx-2 my-3 col-span-2 sm:col-span-1 lg:col-span-1">
            <input
              type="text"
              id="name"
              className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Điểm đến"
              required
            />
          </div>

          <div className="mx-2 my-3 col-span-2">
            <textarea
              id="message"
              rows={4}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Các yêu cầu khác , ví dụ , ngày đón , giờ đón , số lượng người , số lượng hành lý , ..."
              defaultValue={""}
            />
          </div>
          <div className="mx-2 my-3 col-span-1">
            <select
              id="countries"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option defaultValue="7 chỗ">7 Chỗ</option>
              <option value="4 Chỗ">4 Chỗ</option>
            </select>
          </div>

          <button className="mx-2 my-3 col-span-1 px-4 py-2 bg-teal-600 rounded-full">
            Đặt xe
          </button>
        </form>
      </div>
    </section>
  );
}

export default BookForm;
