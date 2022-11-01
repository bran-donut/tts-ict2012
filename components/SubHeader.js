import { useState } from "react";
import React from "react";
import Breadcrumb from "./Breadcrumb";

export default function SubHeader({ breadCrumbItems, headerContent, description, tabContent, children }) {

    const [tab, setTab] = useState(tabContent);
    const [header, setHeader] = useState(headerContent);
    const [index, setIndex] = useState(0);
    
    return (
        <div className="flex flex-col items-start justify-start w-full px-10 pt-5 bg-white">
            <Breadcrumb breadCrumbItems = {breadCrumbItems}/>
            <h2 className="pb-3 text-3xl font-medium">{`${header ? header[index] : "" }`}</h2>
            <p className="mt-2 text-sm text-gray-500 md:text-base">{description}</p>
            <div className="py-3">
                <button onClick={() => setIndex(0)} className={`${tab[index] == tab[0] ? "text-blue-600 font-bold border-b-2 border-indigo-500" : "text-black" } text-md md:text-base`}>{`${tab == 'null' ? "" : tab[0] }`}</button>
                <button onClick={() => setIndex(1)} className={`${tab[index] == tab[1] ? "text-blue-600 font-bold border-b-2 border-indigo-500" : "text-black" } mx-10 text-md md:text-base`}>{`${tab == 'null' ? "" : tab[1] }`}</button>
                <button onClick={() => setIndex(2)} className={`${tab[index] == tab[2] ? "text-blue-600 font-bold border-b-2 border-indigo-500" : "text-black" } text-md md:text-base`}>{`${tab == 'null' ? "" : tab[2] }`}</button>
            </div>
            {children}
        </div>
    )
}