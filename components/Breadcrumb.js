import React from "react";

<<<<<<< HEAD
export default function Breadcrumb({ breadCrumbItems }) {    
    return (
        <div className="flex gap-3 pb-2 bg-white">
            {breadCrumbItems.map((item, i, arr) =>
                <React.Fragment key={i}>
                    <div className={`${arr.length - 1 === i ? 'text-black' : ''} text-[#BDBDBD]`}>{item}</div> 
                    {arr.length - 1 !== i && <span>/</span>}
                </React.Fragment>
            )}
        </div>
    )
}
=======
export default function Breadcrumb({ breadCrumbItems }) {
  return (
    <div className="flex gap-3 pb-2">
      {breadCrumbItems.map((item, i, arr) => (
        <React.Fragment key={i}>
          <div className={`${arr.length - 1 === i ? "text-black" : ""} text-[#BDBDBD]`}>{item}</div>
          {arr.length - 1 !== i && <span>/</span>}
        </React.Fragment>
      ))}
    </div>
  );
}
>>>>>>> 21276f70ad2b27489f83a71db867d0937ae12f80
