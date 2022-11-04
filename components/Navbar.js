import React, { useEffect, useReducer, useState } from "react";
import { LeftOutlined, RightOutlined, UpOutlined, DownOutlined } from "@ant-design/icons";
import Link from "next/link";
import { useRouter } from "next/router";
import { navItems } from "../Constants";

export default function NavBar() {
  const [open, toggleOpen] = useReducer((open) => !open, false);
  return (
    <div className={`bg-tts-darkblue fixed top-10 z-40 left-0 h-full transition-[width] ease-in-out duration-300 ${open ? "w-[230px]" : "w-[50px]"}`}>
      <div className="pt-14">
        {navItems.map((item, i) => (
          <NavItem key={i} index={i} link={item.link} icon={item.icon} text={item.text} subItems={item.subItems} expandAll={open} />
        ))}
      </div>
      <button
        className="expand-button flex items-center text-white bg-tts-darkblue h-[70px] absolute top-1/2 translate-y-[-50%] right-[-21px] px-0.5"
        onClick={toggleOpen}
      >
        {open ? <LeftOutlined /> : <RightOutlined />}
      </button>
    </div>
  );
}

export function NavItem({ link, icon, text, main = true, subItems = false, expandAll }) {
  const router = useRouter();

  const [expand, setExpand] = useState(false);
  const toggleExpand = () => setExpand((expand) => !expand);

  useEffect(() => {
    setExpand(expandAll);
  }, [expandAll]);

  return (
    <>
      <li className={`flex items-center overflow-hidden hover:text-white ${router.pathname == link ? "bg-tts-red text-white" : "text-gray-400"}`}>
        <Link href={link}>
          <a className="flex items-center flex-grow p-3">
            <div>{icon}</div>
            <span className={"pl-4 truncate shrink-0 " + (main ? "uppercase font-bold" : "")}>{text}</span>
          </a>
        </Link>
        {subItems && (
          <button className="flex p-3 ml-auto" onClick={toggleExpand}>
            {expand ? <DownOutlined /> : <UpOutlined />}
          </button>
        )}
      </li>

      {subItems && expand && (
        <div className="px-4 bg-tts-black">
          {subItems.map((subItem, i) => (
            <NavItem key={i} link={subItem.link} active={router.pathname == subItem.link} icon={subItem.icon} text={subItem.text} main={false} />
          ))}
        </div>
      )}
    </>
  );
}
