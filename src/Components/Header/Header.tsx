import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";

function Header() {
  const [menuHidden, setMenuHidden] = useState<boolean>(false);
  return (
    <header className="w-full bg-white grid gap-3">
      {/* laptop */}
      <div className="col-span-12 py-1 flex-row hidden lg:block sm:block bg-slate-900 ">
        <span className="uppercase text-gray-200 font-bold text-sm px-3">
          333 Nguyễn trãi , TP Quảng Ngãi{" "}
        </span>
        <span className="uppercase text-gray-200 font-bold text-sm pl">
          hotline : 03.8668.7696{" "}
        </span>
      </div>
      <div className="lg:grid sm:grid grid-cols-12 hidden mb-2">
        <div className="col-span-3 px-3">
          <img
            src={`${(import.meta as any).env.VITE_SERVER}/asset/logomain.jpg`}
            alt="Xe Ghép Quảng Ngãi Đà Nẵng"
            className=""
          />
        </div>
        <div className="col-start-4 col-span-9 flex text-slate-600 font-semibold justify-between mx-5 my-auto text-[18px]">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive ? `border-b-[3px] border-sky-500 pb-5` : ""
            }
          >
            Trang chủ
          </NavLink>
          <NavLink
            to={"/dich-vu-xe-quang-ngai-da-nang"}
            className={({ isActive }) =>
              isActive ? `border-b-[3px] border-sky-500 pb-5` : ""
            }
          >
            Dịch vụ xe
          </NavLink>
          <NavLink
            to={"/bang-gia-thue-xe-quang-ngai-da-nang"}
            className={({ isActive }) =>
              isActive ? `border-b-[3px] border-sky-500 pb-5` : ""
            }
          >
            Bảng giá xe
          </NavLink>
          <NavLink
            to={"/lien-he"}
            className={({ isActive }) =>
              isActive ? `border-b-[3px] border-sky-500 pb-5` : ""
            }
          >
            Liên hệ
          </NavLink>
        </div>
      </div>
      {/* mobile */}
      <div className="flex justify-between px-5 sm:hidden lg:hidden my-1">
        <svg
          width="64px"
          height="64px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 my-auto "
          onClick={() => setMenuHidden(!menuHidden)}
        >
          <g id="SVGRepo_bgCarrier" strokeWidth={0} />
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M4 6H20M4 12H20M4 18H20"
              stroke="#151313"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />{" "}
          </g>
        </svg>
        <img
          src={`${(import.meta as any).env.VITE_SERVER}/asset/logomain.jpg`}
          alt="Xe Ghép Quảng Ngãi Đà Nẵng"
          className="max-h-[70px] max-w-[180px]"
        />
        <svg
          fill="#141313"
          height="64px"
          width="64px"
          version="1.2"
          baseProfile="tiny"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 256 256"
          xmlSpace="preserve"
          stroke="#1d1b1b"
          className="w-6 h-6 my-auto"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth={0} />
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path d="M256,229.484l-81.427-81.427c9.903-14.981,15.679-32.917,15.679-52.181C190.253,43.562,147.691,1,95.376,1 S0.5,43.562,0.5,95.876s42.562,94.876,94.876,94.876c19.521,0,37.683-5.929,52.783-16.077L229.484,256L256,229.484z M20.5,95.876 C20.5,54.589,54.089,21,95.376,21c41.287,0,74.876,33.589,74.876,74.876c0,41.287-33.59,74.876-74.876,74.876 C54.089,170.753,20.5,137.163,20.5,95.876z" />{" "}
          </g>
        </svg>
      </div>
      {menuHidden && (
        <div
          className={`w-[60%] h-full fixed bg-white opacity-90 pl-5 pt-[60px] menutransition`}
        >
          <svg
            fill="#0e1148a6"
            width="64px"
            height="64px"
            viewBox="0 0 32 32"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 my-auto absolute top-0 right-0 mr-5 mt-5"
            onClick={() => setMenuHidden(!menuHidden)}
          >
            <g id="SVGRepo_bgCarrier" strokeWidth={0} />
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g id="SVGRepo_iconCarrier">
              {" "}
              <title>cross-checkbox</title>{" "}
              <path d="M0 26.016q0 2.496 1.76 4.224t4.256 1.76h20q2.464 0 4.224-1.76t1.76-4.224v-20q0-2.496-1.76-4.256t-4.224-1.76h-20q-2.496 0-4.256 1.76t-1.76 4.256v20zM4 26.016v-20q0-0.832 0.576-1.408t1.44-0.608h20q0.8 0 1.408 0.608t0.576 1.408v20q0 0.832-0.576 1.408t-1.408 0.576h-20q-0.832 0-1.44-0.576t-0.576-1.408zM9.76 20.256q0 0.832 0.576 1.408t1.44 0.608 1.408-0.608l2.816-2.816 2.816 2.816q0.576 0.608 1.408 0.608t1.44-0.608 0.576-1.408-0.576-1.408l-2.848-2.848 2.848-2.816q0.576-0.576 0.576-1.408t-0.576-1.408-1.44-0.608-1.408 0.608l-2.816 2.816-2.816-2.816q-0.576-0.608-1.408-0.608t-1.44 0.608-0.576 1.408 0.576 1.408l2.848 2.816-2.848 2.848q-0.576 0.576-0.576 1.408z" />{" "}
            </g>
          </svg>
          <ul className="font-semibold leading-10">
            <li className="my-4">
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  `py-2 px-4 rounded-lg ${
                    isActive ? "bg-sky-400 text-slate-900" : "text-slate-600"
                  }`
                }
              >
                Trang chủ
              </NavLink>
            </li>
            <li className="my-4">
              <NavLink
                to={"/dich-vu-xe-quang-ngai-da-nang"}
                className={({ isActive }) =>
                  `py-2 px-4 rounded-lg ${
                    isActive ? "bg-sky-400 text-slate-900" : "text-slate-600"
                  }`
                }
              >
                {" "}
                Dịch vụ xe
              </NavLink>
            </li>
            <li className="my-4">
              <NavLink
                to={"/bang-gia-thue-xe-quang-ngai-da-nang"}
                className={({ isActive }) =>
                  `py-2 px-4 rounded-lg ${
                    isActive ? "bg-sky-400 text-slate-900" : "text-slate-600"
                  }`
                }
              >
                {" "}
                Bảng giá xe
              </NavLink>
            </li>
            <li className="my-4">
              <NavLink
                to={"/lien-he"}
                className={({ isActive }) =>
                  `py-2 px-4 rounded-lg ${
                    isActive ? "bg-sky-400 text-slate-900" : "text-slate-600"
                  }`
                }
              >
                Chi tiết
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
