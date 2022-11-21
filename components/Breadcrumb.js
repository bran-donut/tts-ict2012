import React from "react";

export default function Breadcrumb({ breadCrumbItems }) {
  return (
    <div className="flex gap-3 pb-2">
      {breadCrumbItems.map((item, i, arr) => (
        <React.Fragment key={i}>
          <div className={`${arr.length - 1 === i ? "text-black" : "text-gray-400"} `}>{item}</div>
          {arr.length - 1 !== i && <span>/</span>}
        </React.Fragment>
      ))}
    </div>
  );
}
