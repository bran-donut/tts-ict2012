import Logo from "../assets/logo.svg";
import Image from "next/image";
import Link from "next/link";
import NotificationList from "./Notification";

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
          className="w-full px-2 pr-10 border-2 border-gray-300 rounded-sm peer focus:outline-none focus:border-tts-red placeholder:text-sm"
        />
        <button className="absolute top-0 right-0 flex items-center justify-center h-full px-2 text-gray-400 border-l-2 border-gray-300 peer-focus:border-tts-red peer-focus:text-tts-red">
          <SearchOutlined />
        </button>
      </div>
      <div className="flex flex-row items-center gap-10">
      <NotificationList notificationCount={props.notificationCount} />
        <UserOutlined className="scale-150" />
      </div>
    </div>
  );
}
