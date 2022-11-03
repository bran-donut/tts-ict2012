import React, { useEffect, useReducer, useState } from "react";
import { HomeFilled, LeftOutlined, RightOutlined, UpOutlined, DownOutlined } from "@ant-design/icons";
import Link from "next/link";
import { useRouter } from "next/router";

const navItems = [
  {
    //<HomeFilled className="w-6 h-6" />
    icon: (
      <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
      </svg>
    ),
    text: "Home",
    link: "/main",
  },
  {
    icon: (
      <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
      </svg>
    ),
    text: "Inventory",
    link: "/inventory",
    subItems: [
      {
        icon: (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
              clipRule="evenodd"
            />
          </svg>
        ),
        text: "Equipment",
        link: "/inventory/eq",
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
              clipRule="evenodd"
            />
          </svg>
        ),
        text: "Micellaneous",
        link: "/inventory/misc",
      },
    ],
  },
  {
    icon: (
      <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
      </svg>
    ),
    text: "Schedule",
    link: "/schedule",
    subItems: [
      {
        icon: (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
              clipRule="evenodd"
            />
          </svg>
        ),
        text: "View Schedule",
        link: "/schedule/view",
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
              clipRule="evenodd"
            />
          </svg>
        ),
        text: "Edit Schedule",
        link: "/schedule/edit",
      },
    ],
  },
];

export default function NavBar() {
  const [open, toggleOpen] = useReducer((open) => !open, false);
  return (
    <div className={`bg-tts-darkblue fixed top-10 z-40 left-0 h-full transition-[width] ease-in-out duration-300 ${open ? "w-[230px]" : "w-[50px]"}`}>
      <div className="pt-14">
        {navItems.map((item, i) => (
          <React.Fragment key={i}>
            <NavItem index={i} link={item.link} icon={item.icon} text={item.text} subItems={item.subItems} expandAll={open} />
          </React.Fragment>
        ))}
      </div>
      <button className="expand-button flex items-center text-white bg-tts-darkblue h-[70px] absolute top-1/2 translate-y-[-50%] right-[-21px] px-0.5" onClick={toggleOpen}>
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
      <li
        className={`flex items-center overflow-hidden hover:text-white ${router.pathname == link ? "bg-tts-red text-white" : "text-gray-400"
          }`}
      >
        <Link href={link}>
          <a className="flex items-center p-3 flex-grow">
            <div>{icon}</div>
            <span className={"pl-4 truncate shrink-0 " + (main ? "uppercase font-bold" : "")}>{text}</span>
          </a>
        </Link>
        {subItems &&
          (
            <button className="ml-auto flex p-3" onClick={toggleExpand}>
              {expand ? <DownOutlined /> : <UpOutlined />}
            </button>
          )
        }
      </li>

      {subItems && expand && (
        <div className="px-4 bg-tts-black">
          {subItems.map((subItem, i) => (
            <React.Fragment key={i}>
              <NavItem link={subItem.link} active={router.pathname == subItem.link} icon={subItem.icon} text={subItem.text} main={false} />
            </React.Fragment>
          ))}
        </div>
      )}
    </>
  );
}
