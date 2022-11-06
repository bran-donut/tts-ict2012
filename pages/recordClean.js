import Layout from "../layouts/Layout";
import { InfoCircleOutlined } from "@ant-design/icons";
import { useState } from "react";
import Dropdown from "../components/Dropdown";
import MainHeader from "../components/MainHeader";
import SubHeader from "../components/SubHeader";
import DateInput from "../components/DateInput";
import PopupMessage from "../components/Modal";
import Link from "next/link";
import Input from "../components/Input";

export default function RecordClean() {

  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
  ];

  const d = new Date();
  const [showExitModal, setShowExitModal] = useState(false);
  const [showContinueModal, setShowContinueModal] = useState(false);
  const [equipmentData, setEquipmentData] = useState(
    {
        brand: "Olympus", scopeType: "tracheal intubation", modelNumber: "TJF403", serialNumber: "21904890", status: "New"
    }
  );

  return (
    <Layout>
      <MainHeader heading="Record" description="Equipment Sampling Record" />
      <SubHeader
      heading={equipmentData.brand + " " + equipmentData.modelNumber + " " + equipmentData.serialNumber}
      description="Record the details of equipment sampling"
      breadCrumbItems={["Home", "Schedule", "View", "Record"]}
      />

        <div className="flex flex-col items-center justify-center min-w-full gap-0 px-5 py-5 bg-white md:flex-row md:gap-3">
          <ol className="items-center sm:flex ">
              <li className="relative w-64 mb-6 ml-36 sm:mb-0">
                  <div className="flex items-center">
                      <div className="bg-[#1890FF] ml-[4.1rem] z-10 flex items-center justify-center w-4 h-4 rounded-full ring-0 ring-white sm:ring-8 shrink-0">
                      </div>
                      <div className="bg-gray-200 hidden sm:flex w-full h-0.5"></div>
                  </div>
                  <div className="mt-3 sm:pr-8">
                  <h3 className="pl-2 text-lg font-semibold text-gray-900">Manual Cleaning</h3>                    
                  </div>
              </li>
              <li className="relative w-64 mb-6 sm:mb-0">
                  <div className="flex items-center ">
                  <div className="bg-gray-200 hidden sm:flex w-8 h-0.5"></div>
                   <div className="bg-[#8C8C8C] z-10  flex items-center justify-center w-2 h-2 rounded-full ring-0 ring-white sm:ring-8 shrink-0">
                      </div>
                      <div className="bg-gray-200 hidden sm:flex w-full h-0.5"></div>
                  </div>
                  <div className="mt-3 sm:pr-8">
                  <h3 className="text-lg text-gray-300">Washing</h3>                    
                  </div>
              </li>
              <li className="relative w-64 mb-6 sm:mb-0">
                  <div className="flex items-center">
                  <div className="bg-gray-200 hidden sm:flex w-[1.125rem] h-0.5"></div>
                    <div className="bg-[#8C8C8C] z-10 flex items-center justify-center w-2 h-2 rounded-full ring-0 ring-white sm:ring-8 shrink-0">
                      </div>
                      <div className="bg-gray-200 hidden sm:flex w-full h-0.5"></div>
                  </div>
                  <div className="mt-3 sm:pr-8">
                  <h3 className="text-lg text-gray-300">Drying</h3>                
                  </div>
              </li>
              <li className="relative w-64 mb-6 sm:mb-0">
                  <div className="flex items-center">
                  <div className="bg-gray-200 hidden sm:flex w-7 h-0.5"></div>
                  <div className="bg-[#8C8C8C] z-10 flex items-center justify-center w-2 h-2 rounded-full ring-0 ring-white sm:ring-8 shrink-0">
                      </div>
                      <div></div>
                  </div>
                  <div className="mt-3">
                      <h3 className="text-lg text-gray-300">Sampling</h3>                
                  </div>
              </li>
          </ol>
      </div>

      <section className="grid grid-flow-row bg-#f0f2f5">
          <form>
            <div className="px-20 py-10">
              <div className="flex flex-col justify-center h-full min-w-full text-justify bg-white border-2 rounded-md">
                <div className="p-5 bg-white">
                  <h3 className="pb-2 font-medium">Form Details</h3>
                  <hr></hr>
                </div>
                <div className="grid grid-cols-2 gap-4 px-5 py-1">

                  <div className="py-1 input-group">
                    <div className="flex flex-row items-center justify-start pb-1"> 
                        <h4 className="mr-2">Month</h4>
                    </div>
                    <div className="relative flex items-center w-full p-2 border-2 rounded-md input-group">
                    <input type="text" value={monthNames[d.getMonth()]} className="w-full outline-none" disabled />
                    </div>
                  </div>
                <DateInput
                menuHeader="Date of Collection"
                />
                <div className="py-1 input-group">
                    <div className="flex flex-row items-center justify-start pb-1">
                        <h4 className="mr-2">Accession Number</h4>
                        <InfoCircleOutlined style={{fontSize: '16px', color: 'rgb(107 114 128)' }}/>
                    </div>
                  <div className="relative flex items-center w-full p-2 border-2 rounded-md input-group">
                    <input type="text" value={Math.floor(Math.random() * 100000000)} className="w-full outline-none" disabled />
                  </div>
                </div>
                </div>

                <div className="p-5 bg-white">
                  <h3 className="pb-2 font-medium">Scope Details</h3>
                  <hr></hr>
                </div>
                <div className="grid grid-cols-2 gap-4 px-5 py-1">
                <Dropdown
                menuHeader="Scope Status"
                menuItems={["1", "2"]}
                />
                </div>
                <div className="p-5 bg-white">
                  <h3 className="pb-2 font-medium">Personnel Performed</h3>
                  <hr></hr>
                </div>
                <div className="grid grid-cols-2 gap-4 px-5 py-1">
                <Dropdown
                menuHeader="Washed by"
                menuItems={["Jia Xin", "Mandy"]}
                type="drop"
                />
                <Dropdown
                menuHeader="Collected by"
                menuItems={["Nina", "Gan"]}
                type="drop"
                />
                <div className="mb-5"></div>
                </div>
                </div>
                <div className="pb-5"></div>
                  </div>

                  <div className="flex flex-col items-center justify-end w-full gap-0 px-5 py-5 bg-white md:flex-row md:gap-3">
                    <Link href="/view">
                    <a className="text-black hover:text-black/80 hover:cursor-pointer hover:underline">
                      Back
                    </a>
                    </Link>
                    <button type="submit" onClick={() => setShowExitModal(true)} className="px-10 py-2 ml-4 transition-colors duration-150 bg-white border-2 rounded-sm text-tts-red hover:bg-tts-red/80 border-tts-red">
                      Save & Exit
                    </button>
                    <button type="submit" onClick={() => setShowContinueModal(true)} className="px-10 py-2 text-white transition-colors duration-150 border-2 rounded-sm bg-tts-red hover:bg-tts-red/80 border-tts-red">
                      Save & Continue
                    </button>
                  </div>
            </form>
          </section>

          {(showExitModal ?
            <PopupMessage
              heading="Save & Exit ?"
              description="Are you sure you want to save and Exit?"
              leftText="Cancel"
              rightText="Save & Exit"
              onClickClose={()=> setShowExitModal(false)}
              link="/view"
            />
          : null)}

          {(showContinueModal ?
            <PopupMessage
              heading="Save & Continue ?"
              description="Are you sure you want to save and continue?"
              leftText="Cancel"
              rightText="Save & Continue"
              onClickClose={()=> setShowContinueModal(false)}
              link="/recordWash"
            />
          : null)}
    </Layout>
  );
}
