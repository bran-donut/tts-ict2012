import React from "react";
import { InfoCircleOutlined } from "@ant-design/icons";
import Tooltip from "../components/Tooltip";

export default function Input({ menuHeader, tooltipText }) {


  return (
      <div className="py-1 input-group">
        <div className="flex flex-row items-center justify-start pb-1"> 
            <h4 className="mr-2">{menuHeader}</h4>
            {tooltipText ? (
            <Tooltip tooltipText={tooltipText}>
              <InfoCircleOutlined style={{fontSize: '16px', color: 'rgb(107 114 128)' }}/>
            </Tooltip>) : (<p className="inline text-gray-400">(optional)</p>)}
        </div>
      <div className="relative flex items-center w-full p-2 border-2 rounded-md input-group">
      {tooltipText ? (<input type="text" placeholder="Input" className="w-full outline-none" required />) : (<input type="text" placeholder="Input" className="w-full outline-none"/>)}
      </div>
  </div>
  );
}