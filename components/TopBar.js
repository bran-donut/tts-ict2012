import Logo from "../assets/logo.svg";
import Image from "next/image";
import Link from "next/link";
import NotificationList from "./Notification";

import { SearchOutlined, UserOutlined, ScanOutlined } from "@ant-design/icons";
import QrScanner from "./QrScanner";
import { SuccessMessage } from "./Modal";
import { useState } from "react";
import { useRouter } from "next/router";

export default function TopBar(props) {
  let randomSerial = Math.floor(Math.random() * 100000000);
  const router = useRouter();

  const [scannedValue, setScannedValue] = useState();
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showScanner, setShowScanner] = useState(false);

  const handleCloseSuccessModal = () => {
    setShowSuccessModal(false);
    setShowScanner(false);
  }

  const handleScanResult = (decodedText, decodedResult) => {
      if (decodedText) {
          setScannedValue(randomSerial);
          setShowSuccessModal(true);
          setTimeout(() => {
            navigate();
          }, 1000);
      }
  }
  
  const navigate = () => {
      router.push("/inventory/details?index=1");
  }

  return (
    <div className="flex flex-row items-center justify-between py-5 pl-5 pr-10 bg-[#F0F2F5]">
      <Link href="/home">
        <Image className="hover:cursor-pointer" src={Logo} alt="logo" width={100} height={30} />
      </Link>
      <div className="relative flex items-center w-1/2 sm:flex">
        <div className="relative flex items-center w-full border-2 rounded-md input-group bg-white px-2">
          <input type="text" placeholder="Search by Serial Number" className="w-full outline-none text-sm" style={{ fontSize: '14px' }} defaultValue={scannedValue} />
          <ScanOutlined className="absolute top-0.5 right-10" onClick={() => setShowScanner(true)} style={{ fontSize: '18px', color: 'gray' }} />
          {/* <ScanOutlined className="" onClick={() => selected === true ? setShowModal(false) : setShowModal(true)} style={{fontSize: '22px', color: 'gray-100' }}/> */}
        </div>
        {showScanner &&
          <QrScanner
            fps={10}
            qrbox={250}
            disableFlip={false}
            qrCodeSuccessCallback={handleScanResult}
            closeModal={() => setShowScanner(false)}
          />
        }

        {showSuccessModal &&
          <SuccessMessage text="Serial Number has been added" onClose={handleCloseSuccessModal} />
        }

        {/* <input
          type="text"
          placeholder="Search by Serial Number"
          className="w-full px-2 pr-10 border-2 border-gray-300 rounded-sm peer focus:outline-none focus:border-tts-red placeholder:text-sm"
        />
        <ScanOutlined className="" onClick={() => openScan ? openScan() : null} style={{fontSize: '22px', color: 'gray-100' }}/> */}
        <button onClick={navigate} className="absolute top-0 right-0 flex items-center justify-center h-full px-2 text-gray-400 border-l-2 border-gray-300 peer-focus:border-tts-red peer-focus:text-tts-red">
          <SearchOutlined />
        </button>
      </div>
      <div className="flex flex-row items-center gap-10">
        <NotificationList notificationCount={props.notificationCount} />
        <UserOutlined className="scale-150" />
      </div>
    </div>
  );
}
