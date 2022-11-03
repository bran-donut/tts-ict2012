import React from "react";
import { useState } from "react";
import { MobileOutlined, LoadingOutlined, ScanOutlined, InfoCircleOutlined, ExclamationCircleOutlined } from "@ant-design/icons";


export default function MobileScan({ menuHeader, menuItems }) {

const [selected, setSelected] = useState(false);
const [text, setText] = useState("");
const [showModal, setShowModal] = useState(false);


  return (
    <>
    <div className="py-1 input-group">
        <div className="flex flex-row items-center justify-start pb-1">
            <h4 className="mr-2">{menuHeader}</h4>
            <InfoCircleOutlined style={{fontSize: '16px', color: 'rgb(107 114 128)' }}/>
        </div>

        <div className="relative flex items-center w-full p-2 border-2 rounded-md input-group">
            <input onClick={() => showModal === true ? setShowModal(false) : setShowModal(true)} type="text" placeholder="Input" className="w-full outline-none" value={text} required />
            <ScanOutlined className="" onClick={() => selected === true ? setShowModal(false) : setShowModal(true)} style={{fontSize: '22px', color: 'gray-100' }}/>
        </div>
    </div>
        {showModal ? (
          <>
            <div onClick={() => (setShowModal(false), setText("21904890"))}
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
                  <div className="relative flex-auto px-16 py-6">
                    <div className="flex items-center justify-start">
                        <ExclamationCircleOutlined className="h-8 pr-2 align-center" style={{fontSize: '25px', color: '#1E88E5' }}/>
                        <p className="inline my-2 text-xl font-medium leading-relaxed text-black">
                            Scan the barcode with your phone
                        </p>
                    </div>
                    <MobileOutlined className="flex justify-center py-10 align-center" style={{fontSize: '100px', color: 'grey' }}/>
                    <LoadingOutlined className="flex justify-center py-2 align-center" style={{fontSize: '30px', color: '#1E88E5' }}/> 
                      <p className="flex justify-center py-2 text-black align-center">
                          Waiting for phone
                      </p> 
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