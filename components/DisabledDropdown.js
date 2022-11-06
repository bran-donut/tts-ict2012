import React from "react";
import { useState } from "react";
import { DownOutlined, UpOutlined, InfoCircleOutlined} from "@ant-design/icons";


export default function DisabledDropdown({ menuHeader }) {

const [selectedQuarantine, setSelectedQuarantine] = useState(false);
const [selectedBorescope, setSelectedBorescope] = useState(false);
const [textQuarantine, setTextQuarantine] = useState("");
const [textBorescope, setTextBorescope] = useState("");
const [dropItem, setDropItem] = useState(["Yes", "No"]);
const [choice, setChoice] = useState(["Yes", "No"]);

  return (
    <>
      <div className="py-1 input-group">
        <div className="flex flex-row items-center justify-start pb-1">
          <h4 className="mr-2">{menuHeader}</h4>
          <InfoCircleOutlined style={{ fontSize: '16px', color: 'rgb(107 114 128)' }} />
        </div>

        <div className="relative flex items-center w-full p-2 border-2 rounded-md input-group">
          <input onClick={() => selectedQuarantine === true ? setSelectedQuarantine(false) : setSelectedQuarantine(true)} type="text" placeholder="Select" className="w-full outline-none" value={textQuarantine  .item} required />
          <UpOutlined onClick={() => selectedQuarantine === true ? setSelectedQuarantine(false) : setSelectedQuarantine(true)} className={`${selectedQuarantine === true ? "visible" : "hidden"}`} style={{ fontSize: '13px', color: 'rgb(107 114 128)' }} />
          <DownOutlined onClick={() => selectedQuarantine === true ? setSelectedQuarantine(false) : setSelectedQuarantine(true)} className={`${selectedQuarantine === true ? "hidden" : "visible"}`} style={{ fontSize: '13px', color: 'rgb(107 114 128)' }} />
          <div className={`${selectedQuarantine === true ? "visible" : "hidden"} absolute right-0 z-10 w-full bg-white divide-y divide-gray-100 rounded shado top-11 border-2 border-gray-100`}>
            <ul className="py-2 text-sm text-gray-700 rounded-t-sm">

                    {choice.map((item, i) => (
                        <React.Fragment key={i}>
                        <li className="py-1">
                            <p onClick={() => (setSelectedQuarantine(false), setTextQuarantine({item}))} className="items-center inline-block w-full px-2 py-2 cursor-pointer hover:bg-gray-100">{item}</p>
                        </li>
                        </React.Fragment>
                    ))}

                </ul>
            </div>
          </div>
        </div>

        <div className="py-1 input- group">
        <div className="flex flex-row items-center justify-start pb-1">
            <h4 className="mr-2">Repeat Date</h4>
            <InfoCircleOutlined style={{fontSize: '16px', color: 'rgb(107 114 128)' }}/>
        </div>
          {textQuarantine.item == "Yes" ? (<input className="relative flex items-center w-full p-2 border-2 border-gray-300 rounded-md input-group" type="date" placeholder="Select"/>) :
          <input className="relative flex items-center w-full p-2 border-2 border-gray-300 rounded-md input-group" type="text" placeholder="Quarantine Required" disabled/>}
        </div>
        
        <div className="py-1 input-group">
        <div className="flex flex-row items-center justify-start pb-1">
          <h4 className="mr-2">Borescope</h4>
          <InfoCircleOutlined style={{ fontSize: '16px', color: 'rgb(107 114 128)' }} />
        </div>

        {textQuarantine.item == "Yes" ? (
        <div className="relative flex items-center w-full p-2 border-2 rounded-md input-group">
        <input onClick={() => selectedBorescope  === true ? setSelectedBorescope(false) : setSelectedBorescope(true)} type="text" placeholder="Select" className="w-full outline-none" value={textBorescope.item} required />
          <UpOutlined onClick={() => selectedBorescope === true ? setSelectedBorescope(false) : setSelectedBorescope(true)} className={`${selectedBorescope === true ? "visible" : "hidden"}`} style={{ fontSize: '13px', color: 'rgb(107 114 128)' }} />
          <DownOutlined onClick={() => selectedBorescope === true ? setSelectedBorescope(false) : setSelectedBorescope(true)} className={`${selectedBorescope === true ? "hidden" : "visible"}`} style={{ fontSize: '13px', color: 'rgb(107 114 128)' }} />
          <div className={`${selectedBorescope === true ? "visible" : "hidden"} absolute right-0 z-10 w-full bg-white divide-y divide-gray-100 rounded shado top-11 border-2 border-gray-100`}>
            <ul className="py-2 text-sm text-gray-700 rounded-t-sm">

                    {dropItem.map((item, i) => (
                        <React.Fragment key={i}>
                        <li className="py-1">
                            <p onClick={() => (setSelectedBorescope(false), setTextBorescope({item}))} className="items-center inline-block w-full px-2 py-2 cursor-pointer hover:bg-gray-100">{item}</p>
                        </li>
                        </React.Fragment>
                    ))}
                </ul>
            </div>
          </div>) :
          (<div className="relative flex items-center w-full p-2 border-2 rounded-md input-group">
          <input type="text" placeholder="Quarantine Required" className="w-full outline-none" value={textBorescope.item} disabled />
            </div>)}

        </div>             
    </>
  );
}