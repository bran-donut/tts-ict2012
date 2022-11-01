import Link from "next/link";
import { useState } from "react";
import React from "react";

export default function SubHeader({ breadCrumbItems, header, description, tabContent, children }) {

    const [tab, setTab] = useState(tabContent);
    const [index, setIndex] = useState(0);
    
    return (
        <div className="flex flex-col items-start justify-start w-full px-10 pt-5 bg-white">
            <div className="flex gap-3 pb-2">
                {breadCrumbItems.map((item, i, arr) =>
                    <React.Fragment key={i}>
                        <div className={`${arr.length - 1 === i ? 'text-black' : ''} text-[#BDBDBD]`}>{item}</div> 
                        {arr.length - 1 !== i && <span>/</span>}
                    </React.Fragment>
                )}
            </div>
            <h2 className="pb-3 text-3xl font-medium">{header[index]}</h2>
            <p className="mt-2 text-sm text-gray-500 md:text-base">{description}</p>
            <div className="py-3">
                <button onClick={() => setIndex(0)} className={`${tab[index] == tab[0] ? "text-blue-600 font-bold border-b-2 border-indigo-500" : "text-black" } text-md md:text-base`}>{tab[0]}</button>
                <button onClick={() => setIndex(1)} className={`${tab[index] == tab[1] ? "text-blue-600 font-bold border-b-2 border-indigo-500" : "text-black" } mx-10 text-md md:text-base`}>{tab[1]}</button>
                <button onClick={() => setIndex(2)} className={`${tab[index] == tab[2] ? "text-blue-600 font-bold border-b-2 border-indigo-500" : "text-black" } text-md md:text-base`}>{tab[2]}</button>
            </div>
            {children}
        </div>
    )
}