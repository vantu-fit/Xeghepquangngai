import { useMutation } from "@tanstack/react-query";
import React from "react";
import { useState } from "react";
import { sendEmail } from "../../utils/email";
interface FormType {
  name: string;
  phone: string;
  from: string;
  to: string;
  note: string;
  type: string;
}

const formInit: FormType = {
  name: "",
  phone: "",
  from: "",
  to: "",
  note: "",
  type: "7 chỗ",
};

function BookForm() {
  const [form, setForm] = useState<FormType>(formInit);
  const [success, setSuccess] = useState<boolean>(false);
  const sendFormMutation = useMutation({
    mutationFn: (data: FormType) => sendEmail(data),
    onSuccess: () => {
      setSuccess(true)
    }
  });
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);
    sendFormMutation.mutate(form);
  };
  return (
    <section className="w-full my-4">
      <div className="w-[90%]  bg-gradient-to-r from-blue-900 to-slate-800 mx-auto rounded-3xl py-5 sm:px-10 lg:px-10 text-slate-300">
        <h2 className="ml-3 lg:ml-0 uppercase font-semibold text-cyan-400">
          đặt xe ghép giá rẻ
        </h2>
        <p className="my-3 ml-3 lg:ml-0">
          Xe ghép quảng ngãi , nơi đặt vé giá rẻ nhất , nhanh nhất
        </p>
        <form
          action=""
          className="w-full lg:w-[90%] grid grid-cols-2 mx-auto"
          onSubmit={handleSubmit}
        >
          <div className="mx-2 my-3 col-span-2 sm:col-span-1 lg:col-span-1">
            <input
              type="text"
              id="name"
              className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Họ và tên"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </div>
          <div className="mx-2 my-3 col-span-2 sm:col-span-1 lg:col-span-1">
            <input
              type="text"
              id="form"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Điểm đi"
              required
              value={form.from}
              onChange={(e) => setForm({ ...form, from: e.target.value })}
            />
          </div>
          <div className="mx-2 my-3 col-span-2 sm:col-span-1 lg:col-span-1">
            <input
              type="text"
              id="phone"
              className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Số điện thoại"
              required
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />
          </div>
          <div className="mx-2 my-3 col-span-2 sm:col-span-1 lg:col-span-1">
            <input
              type="text"
              id="to"
              className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Điểm đến"
              required
              value={form.to}
              onChange={(e) => setForm({ ...form, to: e.target.value })}
            />
          </div>

          <div className="mx-2 my-3 col-span-2">
            <textarea
              id="note"
              rows={4}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Các yêu cầu khác , ví dụ ,Số ghế ,ngày đón , giờ đón , số lượng người , số lượng hành lý , ..."
              value={form.note}
              onChange={(e) => setForm({ ...form, note: e.target.value })}
            />
          </div>
          <div className="mx-2 my-3 col-span-1">
            <select
              id="type"
              value={form.type}
              onChange={(e) => setForm({ ...form, type: e.target.value })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option defaultValue="7 chỗ">7 Chỗ</option>
              <option value="4 Chỗ">4 Chỗ</option>
            </select>
          </div>

          <button
            className="mx-2 my-3 col-span-1 px-4 py-2 bg-teal-600 rounded-full"
            type="submit"
          >
            Đặt xe
          </button>
          {success && <div className="col-span-2">
            <p className="w-full text-center text-green-700 font-bold my-3 text-[20px]"> Đã Đặt xe thành công  </p>
          </div>}
        </form>
      </div>
    </section>
  );
}

export default BookForm;

