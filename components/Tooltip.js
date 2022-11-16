import React from "react";

export default function Tooltip({ children, tooltipText }) {
    const tipRef = React.createRef(null);
    function handleMouseEnter() {
        tipRef.current.style.opacity = 1;
        tipRef.current.style.marginLeft = "20px";
    }
    function handleMouseLeave() {
        tipRef.current.style.opacity = 0;
        tipRef.current.style.marginLeft = "10px";
    }
    return (
        <div
            className="relative flex items-center"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div
                className="absolute z-50 flex items-center w-56 px-4 py-2 text-white whitespace-no-wrap transition-all duration-150 rounded bg-gradient-to-r from-black to-gray-700"
                style={{ left: "100%", opacity: 0 }}
                ref={tipRef}
            >
                <div
                    className="absolute w-3 h-3 bg-black"
                    style={{ left: "-6px", transform: "rotate(45deg)" }}
                />
                {tooltipText}
            </div>
            {children}
        </div>
    );
}