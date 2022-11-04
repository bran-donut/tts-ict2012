import React from "react";
import { useState } from "react";
import { DownOutlined, UpOutlined, ExclamationCircleOutlined, InfoCircleOutlined, CloseOutlined } from "@ant-design/icons";


export default function Dropdown({ menuHeader, menuItems }) {

const [selected, setSelected] = useState(false);
const [text, setText] = useState("");
const [addText, setAddText] = useState("");
const [showModal, setShowModal] = useState(false);
const [dropItem, setDropItem] = useState(menuItems);

  return (
    <>
    <div className="py-1 input-group">
        <div className="flex flex-row items-center justify-start pb-1">
            <h4 className="mr-2">{menuHeader}</h4>
            <InfoCircleOutlined style={{fontSize: '16px', color: 'rgb(107 114 128)' }}/>
        </div>

        <div className="relative flex items-center w-full p-2 border-2 rounded-md input-group">
            <input onClick={() => selected === true ? setSelected(false) : setSelected(true)} type="text" placeholder="Select" className="w-full outline-none" value={text.item} required />
            <UpOutlined onClick={() => selected === true ? setSelected(false) : setSelected(true)} className={`${selected === true ? "visible" : "hidden"}`} style={{fontSize: '13px', color: 'rgb(107 114 128)' }}/>
            <DownOutlined onClick={() => selected === true ? setSelected(false) : setSelected(true)} className={`${selected === true ? "hidden" : "visible"}`} style={{fontSize: '13px', color: 'rgb(107 114 128)' }}/>
            <div className={`${selected === true ? "visible" : "hidden"} absolute right-0 z-10 w-full bg-white divide-y divide-gray-100 rounded shado top-11 border-2 border-gray-100`}>
                <ul className="py-2 text-sm text-gray-700 rounded-t-sm">

                    {dropItem.map((item, i) => (
                        <React.Fragment key={i}>
                        <li>
                            <p onClick={() => (setSelected(false), setText({item}))} className="block px-2 py-2 cursor-pointer hover:bg-gray-100">{item}</p>
                        </li>
                        </React.Fragment>
                    ))}

                </ul>
                <div className="py-1">
                    <p onClick={() => setShowModal(true)} className="block px-2 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100 ">+ Add new</p>
                </div>
            </div>
        </div>
    </div>
        {showModal ? (
          <>
            <div
              className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none"
            >
              <div className="relative w-auto max-w-3xl mx-auto my-6">
                {/*content*/}
                <div className="relative flex flex-col w-full bg-white border-0 rounded-md shadow-lg outline-none focus:outline-none">
                    <button
                      className="float-right p-1 ml-auto text-3xl font-semibold leading-none text-black bg-transparent border-0 outline-none opacity-5 focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                    </button>
                  {/*body*/}
                  <div className="relative flex-auto py-6 px-7">
                    <div className="flex items-center justify-start">
                        <ExclamationCircleOutlined className="pr-4 align-center" style={{fontSize: '21px', color: 'gray' }}/>
                        <p className="inline my-2 text-lg font-medium leading-relaxed text-black">
                            Key in a new value
                        </p>
                    </div>
                    <input onChange={e => setAddText(e.target.value)} type="text" placeholder="Input" className="p-2 border-2 rounded-sm ml-9 w-72" required />
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end px-6 pb-6">
                    <button
                      className="px-5 py-2 mb-1 mr-1 text-sm font-bold border-[#D9D9D9] border-2 bg-white text-gray-500 rounded-sm transition-all duration-150 ease-linear outline-none background-transparent focus:outline-none"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                    <button
                      className="py-2 mb-1 ml-2 mr-1 text-sm text-white transition-all duration-150 ease-linear border-2 rounded-sm shadow outline-none px-7 border-tts-red bg-tts-red hover:bg-tts-red/80 border-tts-re hover:shadow-lg focus:outline-none"
                      type="button"
                      onClick={() => (setShowModal(false),setDropItem(dropItem => [...dropItem, addText]))}
                    >
                      Add
                    </button>
                  </div>    
                </div>
              </div>
            </div>
            <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
          </>
        ) : null}
    </>
  );
}