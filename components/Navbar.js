import React, { useEffect, useReducer, useState } from "react";
import { Home, ChevronRight, ChevronLeft, ChevronUp, ChevronDown, Adjustments } from "heroicons-react";
import Link from "next/link";
import { useRouter } from 'next/router';

const navItems = [
    {
        icon: <Home />,
        text: "Home",
        link: "/"
    },
    {
        icon: <Home />,
        text: "Inventory",
        link: "/inventory",
        subItems: [
            {
                icon: <Adjustments />,
                text: "Equipment",
                link: "/inventory/eq"
            },
            {
                icon: <Adjustments />,
                text: "Micellaneous",
                link: "/inventory/misc"
            }
        ]
    },
    {
        icon: <Home />,
        text: "Schedule",
        link: "/schedule",
        subItems: [
            {
                icon: <Adjustments />,
                text: "View Schedule",
                link: "/schedule/view"
            },
            {
                icon: <Adjustments />,
                text: "Edit Schedule",
                link: "/schedule/edit"
            }
        ]
    }
]

export default function Navbar() {
    const [open, toggleOpen] = useReducer(
        open => !open,
        false
    );
    return (
        <div className={`bg-tts-darkblue fixed top-0 left-0 h-full transition-[width] ease-in-out duration-300 ${open ? 'w-[230px]' : 'w-[50px]'}`}>
            <div className="pt-14">
                {navItems.map((item, i) => (
                    <React.Fragment key={i}>
                        <NavItem
                            index={i}
                            link={item.link}
                            icon={item.icon}
                            text={item.text}
                            subItems={item.subItems}
                            expandAll={open}
                        />
                    </React.Fragment>
                ))}
            </div>
            <button className="expand-button text-white bg-tts-darkblue h-[70px] absolute top-1/2 translate-y-[-50%] right-[-24px]" onClick={toggleOpen}>
                {open ? <ChevronLeft /> : <ChevronRight />}
            </button>
        </div>
    )
}

export function NavItem({ index, link, icon, text, main = true, subItems = false, expandAll }) {
    const router = useRouter();

    const [expand, setExpand] = useState(false);
    const toggleExpand = () => setExpand(expand => !expand);

    useEffect(() => {
        setExpand(expandAll)
    }, [expandAll])
    return (
        <>
            <Link key={index} href={link} className="">
                <a className={`flex items-center overflow-hidden py-3 px-4 hover:text-white ${router.pathname == link ? 'bg-tts-red text-white' : 'text-gray-400'}`}>
                    <div>{icon}</div>
                    <span className={"pl-3 truncate " + (main ? 'uppercase font-bold' : '')}>{text}</span>
                    {subItems && (expand ?
                        <button className="ml-auto" onClick={toggleExpand}><ChevronDown /></button>
                        :
                        <button className="ml-auto" onClick={toggleExpand}><ChevronUp /></button>
                    )}
                </a>
            </Link>
            {subItems && expand &&
                <div className="px-4 bg-tts-black">
                    {
                        subItems.map((subItem, i) => (
                            <React.Fragment key={i}>
                                <NavItem
                                    index={i}
                                    link={subItem.link}
                                    active={router.pathname == subItem.link}
                                    icon={subItem.icon}
                                    text={subItem.text}
                                    main={false}
                                />
                            </React.Fragment>
                        ))
                    }
                </div>
            }
        </>
    )
}