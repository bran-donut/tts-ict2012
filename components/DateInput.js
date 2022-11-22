import React from "react";
import { InfoCircleOutlined } from "@ant-design/icons";
import Tooltip from "../components/Tooltip";
import { useState, useEffect } from "react";

export default function Input({ menuHeader, tooltipText, saveState, index }) {
  const [saveText, setSaveText] = useState();

  useEffect(() => {
    let savedItems = JSON.parse(window.localStorage.getItem("savedstate"+index));
    saveText ? savedItems[saveState] = saveText : setSaveText(savedItems[saveState]);
    window.localStorage.setItem("savedstate"+index, JSON.stringify(savedItems));
  }, [saveText])

  return (
      <div className="py-1 input-group">
      <div className="flex flex-row items-center justify-start pb-1">
          <h4 className="mr-2">{ menuHeader }</h4>
          <Tooltip tooltipText={tooltipText}>
              <InfoCircleOutlined style={{fontSize: '16px', color: 'rgb(107 114 128)' }}/>
          </Tooltip>
      </div>
    <input onChange={e => setSaveText(e.target.value)} defaultValue={saveText} className="relative flex items-center w-full p-2 border-2 border-gray-300 rounded-md input-group" type="date" placeholder="Select"/>   
  </div>
  );
}