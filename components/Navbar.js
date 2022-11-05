import React, { useEffect, useState } from "react";
import { LeftOutlined, RightOutlined, UpOutlined, DownOutlined } from "@ant-design/icons";
import Link from "next/link";
import { useRouter } from "next/router";
import { navItems } from "../Constants";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen(open => !open);

  const handleMouseLeave = () => {
    if (open) setTimeout(() => setOpen(false), 300);
  }

  return (
    <div
      className={`
        bg-tts-darkblue fixed cursor-pointer top-16 z-40 left-0 h-full transition-[width] ease-in-out duration-300 
        ${open ? "w-[260px]" : "w-[60px]"}
      `}
      onMouseLeave={handleMouseLeave}
    >
      <div className="pt-14 flex flex-col h-full">
        {navItems.map((item, i) =>
          <NavItem key={i} index={i} link={item.link} icon={item.icon} text={item.text} subItems={item.subItems} closeAll={!open} />
        )}
        <div className="flex-grow" onClick={toggleOpen} />
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

export function NavItem({ className, link, icon, text, main = true, subItems = false, closeAll }) {
  const router = useRouter();

  const [expand, setExpand] = useState(false);
  const toggleExpand = () => setExpand((expand) => !expand);

  useEffect(() => {
    if (closeAll) setExpand(false);
  }, [closeAll])

  return (
    <>
      <li
        className={`flex items-center overflow-hidden hover:text-white ${className} ${router.pathname == link ? "bg-tts-red text-white" : "text-gray-400"
          }`}
      >
        {subItems ?
          <>
            <button className="flex items-center p-5 gap-5 flex-grow" onClick={toggleExpand}>
              <div className="inline-flex">{icon}</div>
              <span className={"truncate shrink-0 " + (main ? "uppercase font-bold" : "")}>{text}</span>
            </button>
            <button className="flex p-3 pr-5">
              {expand ? <DownOutlined /> : <UpOutlined />}
            </button>
          </>
          :
          <Link href={link}>
            <a className="flex items-center p-5 gap-5 flex-grow">
              <div className="inline-flex">{icon}</div>
              <span className={"truncate shrink-0 " + (main ? "uppercase font-bold" : "")}>{text}</span>
            </a>
          </Link>
        }
      </li>

      {subItems && expand && (
        <div className="bg-tts-black">
          {subItems.map((subItem, i) => (
            <NavItem key={i} className="px-4" link={subItem.link} active={router.pathname == subItem.link} icon={subItem.icon} text={subItem.text} main={false} />
          ))}
        </div>
      )}
    </>
  );
}
