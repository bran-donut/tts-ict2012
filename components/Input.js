import React from "react";
import { InfoCircleOutlined } from "@ant-design/icons";

export default function Input({ inputValue, menuHeader, status }) {


  return (
      <div className="py-1 input-group">
        <div className="flex flex-row items-center justify-start pb-1"> 
            <h4 className="mr-2">{menuHeader}</h4>
            {status == "optional" ? (<p className="inline text-gray-400">(optional)</p>) : (<InfoCircleOutlined style={{fontSize: '16px', color: 'rgb(107 114 128)' }}/>)}
        </div>
      <div className="relative flex items-center w-full p-2 border-2 rounded-md input-group">
      {status == "optional" ? (<input type="text" placeholder="Input" value={inputValue ? inputValue : ''} className="w-full outline-none"/>) : (<input type="text" placeholder="Input" value={inputValue ? inputValue : ''} className="w-full outline-none" required />)}
      </div>
  </div>
  );
}