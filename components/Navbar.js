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
        bg-tts-darkblue fixed cursor-pointer top-12 z-40 left-0 h-full transition-[width] ease-in-out duration-300 
        ${open ? "w-[260px]" : "w-[48px]"}
      `}
      onClick={() => !open ? setOpen(true) : null}
      onMouseLeave={handleMouseLeave}
    >
      <div className="pt-14 flex flex-col h-full">
        {navItems.map((item, i) =>
          <NavItem key={i} index={i} link={item.link} icon={item.icon} text={item.text} subItems={item.subItems} closeAll={!open} />
        )}
        <div className="flex-grow" onClick={toggleOpen} />
      </div>
      <button
        className="w-4 expand-button flex items-center text-white bg-tts-darkblue h-[70px] absolute top-1/2 translate-y-[-50%] right-[-17px]"
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
        className={`text-sm flex items-center overflow-hidden hover:text-white ${className ? className : ''} ${router.pathname == link || router.pathname.includes(text.toLowerCase()) ? "bg-tts-red text-white" : "text-gray-400"
          }`}
      >
        {subItems ?
          <>
            <button className="flex items-center p-4 gap-5 flex-grow" onClick={toggleExpand}>
              <div className="inline-flex shrink-0">{icon}</div>
              <span className={"truncate shrink-0 " + (main ? "uppercase font-bold" : "")}>{text}</span>
              <div className="flex ml-auto">
                {expand ? <UpOutlined /> : <DownOutlined />}
              </div>
            </button>
          </>
          :
          <Link href={link}>
            <a className="flex items-center p-[0.95rem] gap-5 flex-grow">
              <div className="inline-flex shrink-0">{icon}</div>
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
