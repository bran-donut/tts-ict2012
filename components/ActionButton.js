import { useState } from "react";

export default function ActionButton({ index, active, name, icon, onClickAction, disable = false, subHeaderButton = false }) {
    const [hover, setHover] = useState(false);
  
    return (
      <button
        className={`
                  px-2 flex items-center gap-2 border 
                  ${subHeaderButton ? "border-[#FF9193] text-tts-red" : ""}
                  ${(active && !disable) || hover ? "border-[#FF9193] text-tts-red bg-[#FF9193]/30" : "border-gray-400 text-black"}
                  ${disable ? "border-gray-400 text-gray-400 cursor-default" : ""}
              `}
        onClick={() => onClickAction(index)}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {icon}
        <span>{name}</span>
      </button>
    );
  }