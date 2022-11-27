import React from "react";
import { InfoCircleOutlined } from "@ant-design/icons";
import Tooltip from "../components/Tooltip";
import { useState, useEffect } from "react";

export default function Input({ menuHeader, tooltipText, saveState, index, inputValue }) {
  const [saveText, setSaveText] = useState('');

  const restrictDate = () => {
    var today = new Date();

    var month = today.getMonth() + 1;
    var day = today.getDate();
    var year = today.getFullYear();

    if(month < 10)
        month = '0' + month.toString();
    if(day < 10)
        day = '0' + day.toString();

    var maxDate = year + '-' + month + '-' + day; 
    return maxDate;
  }

  useEffect(() => {
    setSaveText(inputValue ? inputValue : '');
  }, [inputValue])

  useEffect(() => {
    if (saveState) {
      let savedItems = JSON.parse(window.localStorage.getItem("savedstate"+index));
      saveText ? savedItems[saveState] = saveText : setSaveText(savedItems[saveState]);
      window.localStorage.setItem("savedstate"+index, JSON.stringify(savedItems));
    }
  }, [saveText])

  return (
      <div className="py-1 input-group">
      <div className="flex flex-row items-center justify-start pb-1">
          <h4 className="mr-2 required">{ menuHeader }</h4>
          <Tooltip tooltipText={tooltipText}>
              <InfoCircleOutlined style={{fontSize: '16px', color: 'rgb(107 114 128)' }}/>
          </Tooltip>
      </div>
    <input onChange={e => setSaveText(e.target.value)} value={saveText} max={saveState == "cleanDateOfCollection" ? restrictDate() : ''} className="relative flex items-center w-full p-2 border-2 border-gray-300 rounded-md input-group" type="date" placeholder="Select"/>   
  </div>
  );
}