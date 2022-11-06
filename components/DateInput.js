import React from "react";
import { InfoCircleOutlined } from "@ant-design/icons";

export default function Input({ menuHeader }) {
  return (
      <div className="py-1 input-group">
      <div className="flex flex-row items-center justify-start pb-1">
          <h4 className="mr-2">{ menuHeader }</h4>
          <InfoCircleOutlined style={{fontSize: '16px', color: 'rgb(107 114 128)' }}/>
      </div>
    <input className="relative flex items-center w-full p-2 border-2 border-gray-300 rounded-md input-group" type="date" placeholder="Select"/>   
  </div>
  );
}