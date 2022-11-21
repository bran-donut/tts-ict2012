import Logo from "../assets/logo.svg";
import Image from "next/image";
import Link from "next/link";

import { SearchOutlined, BellOutlined, UserOutlined } from "@ant-design/icons";

export default function TopBar(props) {
  return (
    <div className="flex flex-row items-center justify-between py-5 pl-5 pr-10 bg-[#F0F2F5]">
      <Link href="/home">
      <Image className="hover:cursor-pointer" src={Logo} alt="logo" width={100} height={30} />
      </Link>
      <div className="relative flex-row items-center hidden w-1/2 sm:flex">
        <input
          type="text"
          placeholder="Search by Serial Number"
          className="w-full px-2 pr-10 border-2 border-gray-300 rounded-sm peer focus:outline-none focus:border-tts-red"
        />
        <button className="absolute top-0 right-0 flex items-center justify-center h-full px-2 text-gray-400 border-l-2 border-gray-300 peer-focus:border-tts-red peer-focus:text-tts-red">
          <SearchOutlined />
        </button>
      </div>
      <div className="flex flex-row items-center gap-10">
        <span className="relative flex flex-row items-center">
          <BellOutlined className="scale-150" />
          {props.notificationCount ? (
            <p className="absolute inline-flex items-center justify-center w-4 h-4 text-xs text-white bg-[#FF4D4F] rounded-full left-2 -top-2">
              {props.notificationCount}
            </p>
          ) : null}
        </span>
        <UserOutlined className="scale-150" />
      </div>
    </div>
  );
}
