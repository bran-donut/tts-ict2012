import { BellOutlined } from "@ant-design/icons";
import { useState } from "react";
import Link from "next/link";

export default function NotificationList(props) {
    const [showNotifications, setShowNotifications] = useState(false);

  return (
    <>
            <span className="relative flex flex-row items-center">
            <BellOutlined onClick={()=> showNotifications ? setShowNotifications(false) : setShowNotifications(true)} className="scale-150 hover:cursor-pointer" />
            {props.notificationCount ? (
                <p className="select-none absolute inline-flex items-center justify-center w-4 h-4 text-xs text-white bg-[#FF4D4F] rounded-full left-2 -top-2">
                {props.notificationCount}
                </p>
            ) : null}
            </span>

            {showNotifications?(
            <div className="absolute z-20 w-full max-w-sm bg-white divide-y divide-gray-100 rounded shadow right-24 top-12" aria-labelledby="dropdownNotificationButton">
            <div className="block px-4 py-2 font-medium text-center text-gray-700 select-none bg-gray-50">
                Notifications
            </div>
            <div className="divide-y divide-gray-100">
                <Link href="/schedule" >
                <a className="flex px-4 py-3 hover:bg-gray-100">
                <div className="flex-shrink-0">
                    <div className="absolute flex items-center justify-center w-5 h-5 ml-6 -mt-5">
                    </div>
                </div>
                <div className="w-full pl-3">
                    <div className="text-gray-500 text-sm mb-1.5">Reminder to sample: <span className="font-semibold text-gray-900">OLYMPUS tracheal intubation TJF403•21904890</span></div>
                    <div className="text-xs text-blue-600">a few moments ago</div>
                </div>
                </a>
                </Link>
                <Link href="/schedule" >
                <a className="flex px-4 py-3 hover:bg-gray-100">
                <div className="flex-shrink-0">
                    <div className="absolute flex items-center justify-center w-5 h-5 ml-6 -mt-5">
                    </div>
                </div>
                <div className="w-full pl-3">
                    <div className="text-gray-500 text-sm mb-1.5">Results of sampling for <span className="font-semibold text-gray-900">MEDIVATOR 1A 21904908</span>
                    <span className="text-gray-500 "> by </span>
                    <span className="font-semibold text-gray-900">Brandon</span>
                    <span className="text-gray-500"> returned </span>
                    <span className="font-semibold text-gray-900">Negative!</span></div>
                    
                    <div className="text-xs text-blue-600">11 minutes ago</div>
                </div>
                </a>
                </Link>
                <Link href="/inventory" >
                <a className="flex px-4 py-3 hover:bg-gray-100">
                <div className="flex-shrink-0">
                    <div className="absolute flex items-center justify-center w-5 h-5 ml-6 -mt-5">
                    </div>
                </div>
                <div className="w-full pl-3">
                    <div className="text-gray-500 text-sm mb-1.5"><span className="font-semibold text-gray-900">Janice Ng</span> added <span className="font-medium text-gray-900"> 2 new equipments</span> to the inventory.</div>
                    <div className="text-xs text-blue-600">44 minutes ago</div>
                </div>
                </a>
                </Link>
            </div>
            <a className="block py-2 text-sm font-medium text-center text-gray-900 bg-gray-50 hover:bg-gray-100">
                <div className="inline-flex items-center ">
                <svg className="w-4 h-4 mr-2 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path><path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"></path></svg>
                View all
                </div>
            </a>
            </div>
            ): null}
    </>
  );
}
