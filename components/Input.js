import React from "react";
import { InfoCircleOutlined } from "@ant-design/icons";
import Tooltip from "../components/Tooltip";
import { useState, useEffect } from "react";

export default function Input({ menuHeader, tooltipText, saveState, index, onChange, inputValue }) {
  const [saveText, setSaveText] = useState('');

  useEffect(() => {
    setSaveText(inputValue ? inputValue : '');
  }, [inputValue])

  useEffect(() => {
    if (saveState) {
      let savedItems = JSON.parse(window.localStorage.getItem("savedstate"+index));
      saveText ? savedItems[saveState] = saveText : setSaveText(savedItems[saveState]);
      window.localStorage.setItem("savedstate"+index, JSON.stringify(savedItems));
    }
    onChange ? onChange(saveText) : null;
  }, [saveText])
  return (
      <div className="py-1 input-group">
        <div className="flex flex-row items-center justify-start pb-1"> 
            <h4 className={"mr-2 " + (tooltipText ? 'required' : '')}>{menuHeader}</h4>
            {tooltipText ? (
            <Tooltip tooltipText={tooltipText}>
              <InfoCircleOutlined style={{fontSize: '16px', color: 'rgb(107 114 128)' }}/>
            </Tooltip>) : ''}
        </div>
      <div className="relative flex items-center w-full p-2 border-2 rounded-md input-group">
      {tooltipText ? (<input onChange={e => setSaveText(e.target.value)} value={saveText} type="text" placeholder="Input" className="w-full outline-none" required />) : (<input value={saveText} onChange={e => setSaveText(e.target.value)} type="text" placeholder="Input" className="w-full outline-none"/>)}
      </div>
  </div>
  );
}