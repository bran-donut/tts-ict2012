import { useEffect, useState } from "react";
import MainHeader from "../components/MainHeader";
import SubHeader from "../components/SubHeader";
import Layout from "../layouts/Layout";
import { useRouter } from 'next/router';
import { FilterOutlined, AlignLeftOutlined } from "@ant-design/icons";
import React from "react";

const tabs = ['Edit', 'Add', 'Remove'];
const actions = ['Scope', 'Washer', 'Filter By', 'Sort By'];

export default function Schedule() {
    const router = useRouter();

    const [index, setIndex] = useState(0);
    const [actionIndex, setActionIndex] = useState();

    const handleClickAction = (i) => {
        setActionIndex(i);
    }

    useEffect(() => {
        setIndex(router.query.action ? tabs.indexOf(router.query.action) : 0);
    }, [router.query.action])

    useEffect(() => {
        router.push('/schedule?action=' + tabs[index], undefined, { shallow: true })
    }, [index])

    return (
        <Layout>
            <MainHeader heading="Schedule" description="Equipment sampling forecast" />
            <SubHeader heading="Add to Sample Schedule" description="Displays equipment to be added to the schedule" breadCrumbItems={['Home', 'Schedule', tabs[index]]}>
                <div className="pt-3 w-full flex items-center justify-between">
                    <div className="mt-2">
                        {tabs.map((tab, i) => (
                            <button
                                key={i}
                                className={`${i == index ? "text-blue-600 pb-4 font-bold border-b-2 border-indigo-500" : "text-black"} mr-10 text-lg`}
                                onClick={() => setIndex(i)}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                    {/* <button onClick={() => setIndex(0)} className={`${tab[index] == tab[0] ? "text-blue-600 pb-3 font-bold border-b-2 border-indigo-500" : "text-black"} text-md md:text-base`}>{`${tab == 'null' ? "" : tab[0]}`}</button>
                    <button onClick={() => setIndex(1)} className={`${tab[index] == tab[1] ? "text-blue-600 pb-3 font-bold border-b-2 border-indigo-500" : "text-black"} mx-10 text-md md:text-base`}>{`${tab == 'null' ? "" : tab[1]}`}</button> */}
                    <div className="flex items-center gap-4 ">
                        {actions.map((action, i) => (
                            <React.Fragment key={i}>
                                <ActionButton
                                    index={i}
                                    active={i == actionIndex}
                                    name={action}
                                    icon={i >= 2 && (i == 2 ? <FilterOutlined /> : <AlignLeftOutlined />)}
                                    onClickAction={handleClickAction}
                                />
                            </React.Fragment>
                        ))}
                        {/* <button className={`p-1 px-2 border ${true ? 'border-[#FF9193] text-tts-red bg-[#FF9193]/30' : 'border-gray-400 text-black'}`}>Scope</button>
                <button className={`p-1 px-2 border ${false ? 'border-tts-red text-tts-red' : 'border-gray-400 text-black'}`}>Washer</button>
                <button className={`p-1 px-2 border ${false ? 'border-tts-red text-tts-red' : 'border-gray-400 text-black'}`}>Filter By</button>
                <button className={`p-1 px-2 border ${false ? 'border-tts-red text-tts-red' : 'border-gray-400 text-black'}`}>Sort By</button> */}
                    </div>
                </div>
            </SubHeader>

            <div className="h-[1000px]"></div>
        </Layout>
    )
}

export function ActionButton({ index, active, name, icon, onClickAction, disable = false }) {
    return (
        <button
            className={`
                px-2 flex items-center gap-2 border 
                ${active && !disable ? 'border-[#FF9193] text-tts-red bg-[#FF9193]/30' : 'border-gray-400 text-black'}
                ${disable ? 'border-gray-400 text-gray-400 cursor-default' : ''}
            `}
            onClick={() => onClickAction(index)}
        >
            {icon}
            <span>{name}</span>
        </button>
    )
}