import Layout from "../../../layouts/Layout";
import { useState } from "react";
import Dropdown from "../../../components/Dropdown";
import MainHeader from "../../../components/MainHeader";
import SubHeader from "../../../components/SubHeader";
import Input from "../../../components/Input";
import DateInput from "../../../components/DateInput";
import PopupMessage from "../../../components/Modal";
import Link from "next/link";

import DisabledDropdown from "../../../components/DisabledDropdown";

export default function Sampling() {

  const [showExitModal, setShowExitModal] = useState(false);
  const [showModal, setShowModal] = useState(false);
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
                  <Link href="/record/scope/cleaning">
                      <div className="bg-[#1890FF]  hover:bg-[#1890FF]/80 hover:cursor-pointer ml-[4.1rem] z-10 flex items-center justify-center w-4 h-4 rounded-full ring-0 ring-white sm:ring-8 shrink-0">
                      </div>
                  </Link>
                      <div className="bg-[#1890FF] hidden sm:flex w-full h-0.5"></div>
                  </div>
                  <div className="mt-3 sm:pr-8">
                  <h3 className="pl-2 text-lg font-normal text-gray-900">Manual Cleaning</h3>                    
                  </div>
              </li>
              <li className="relative w-64 mb-6 sm:mb-0">
                  <div className="flex items-center ">
                  <div className="bg-[#1890FF] hidden sm:flex w-8 h-0.5"></div>
                  <Link href="/record/scope/washing">
                   <div className="bg-[#1890FF] z-10  hover:bg-[#1890FF]/80 hover:cursor-pointer flex items-center justify-center w-4 h-4 rounded-full ring-0 ring-white sm:ring-8 shrink-0">
                      </div>
                  </Link>
                      <div className="bg-[#1890FF] hidden sm:flex w-full h-0.5"></div>
                  </div>
                  <div className="mt-3 sm:pr-8">
                  <h3 className="text-lg font-normal text-gray-900">Washing</h3>                    
                  </div>
              </li>
              <li className="relative w-64 mb-6 sm:mb-0">
                  <div className="flex items-center">
                  <div className="bg-[#1890FF] hidden sm:flex w-[1.125rem] h-0.5"></div>
                  <Link href="/record/scope/drying">
                    <div className="bg-[#1890FF] hover:bg-[#1890FF]/80 hover:cursor-pointer z-10 flex items-center justify-center w-4 h-4 rounded-full ring-0 ring-white sm:ring-8 shrink-0">
                      </div>
                  </Link>
                      <div className="bg-[#1890FF] hidden sm:flex w-full h-0.5"></div>
                  </div>
                  <div className="mt-3 sm:pr-8">
                  <h3 className="text-lg font-normal text-gray-900">Drying</h3>                
                  </div>
              </li>
              <li className="relative w-64 mb-6 sm:mb-0">
                  <div className="flex items-center">
                  <div className="bg-[#1890FF] hidden sm:flex w-7 h-0.5"></div>
                  <div className="bg-[#1890FF] z-10 flex items-center justify-center w-4 h-4 rounded-full ring-0 ring-white sm:ring-8 shrink-0">
                      </div>
                      <div></div>
                  </div>
                  <div className="mt-3">
                      <h3 className="text-lg font-semibold text-gray-900">Sampling</h3>                
                  </div>
              </li>
          </ol>
      </div>

      <section className="grid grid-flow-row bg-#f0f2f5">
          <form>
            <div className="px-20 py-10">
              <div className="flex flex-col justify-center h-full min-w-full text-justify bg-white border-2 rounded-md">
                <div className="p-5 bg-white">
                  <h3 className="pb-2 font-medium">Fluid Result</h3>
                  <hr></hr>
                </div>
                <div className="grid grid-cols-2 gap-4 px-5 py-1">
                <DateInput
                menuHeader="Date of Result"
                />
                <Dropdown
                menuHeader="Fluid Result"
                menuItems={["Growth", "No Growth"]}
                />
                <Input
                menuHeader="Culture Comment"
                status="optional"
                />
                <Input
                menuHeader="Action"
                status="optional"
                />
                </div>
                <div className="p-5 bg-white">
                  <h3 className="pb-2 font-medium">Repeat Details</h3>
                  <hr></hr>
                </div>
                <div className="grid grid-cols-2 gap-4 px-5 py-1">
                <DateInput
                menuHeader="Date of Result"
                />
                <Dropdown
                menuHeader="Fluid Result"
                menuItems={["Growth", "No Growth"]}         
                />

                <Input
                menuHeader="Culture Comment"
                status="optional"
                />
                <Input
                menuHeader="Action"
                status="optional"
                />
                <Dropdown
                menuHeader="Room to Perform"
                menuItems={["ENDO MS ROOM", "CLEAN", "REPROCESSING ROOM", "2B ENDO", "OTHERS"]}   
                />
                </div>
                <div className="p-5 bg-white">
                  <h3 className="pb-2 font-medium">Repeat of MS</h3>
                  <hr></hr>
                </div>
                <div className="grid grid-cols-2 gap-4 px-5 py-1">
                  <DisabledDropdown
                    menuHeader="Quarantine Required"
                    menuItems={["Yes", "No"]}  
                    />
                {/* <Dropdown
                menuHeader="Quarantine Required"
                menuItems={["Yes", "No"]}   
                />
                <DateInput
                menuHeader="Repeat Date"
                />
               <Dropdown
                menuHeader="Borescope"
                menuItems={["Yes", "No"]}   
                /> */}
                </div>
                <div className="p-5 bg-white">
                  <h3 className="pb-2 font-medium">Repeat of MS</h3>
                  <hr></hr>
                </div>
                <div className="grid grid-cols-2 gap-4 px-5 py-1">
                <Dropdown
                menuHeader="Circulated By"
                menuItems={["Janice", "Nina"]}  
                drop="drop"
                />
                <div className="mb-28"></div>
                </div>
                </div>
              </div>
            
            
                  <div className="flex flex-col items-center justify-end w-full gap-0 px-5 py-5 bg-white md:flex-row md:gap-3">
                    <Link href="/record/scope/drying">
                    <a className="text-black hover:text-black/80 hover:cursor-pointer hover:underline">
                      Previous Step
                    </a>
                    </Link>
                    <button type="submit" onClick={() => setShowExitModal(true)} className="px-10 py-2 ml-4 transition-colors duration-150 bg-white border-2 rounded-sm text-tts-red hover:bg-tts-red/80 border-tts-red">
                      Save & Exit
                    </button>
                    <button type="submit" onClick={() => setShowModal(true)} className="px-10 py-2 text-white transition-colors duration-150 border-2 rounded-sm bg-tts-red hover:bg-tts-red/80 border-tts-red">
                      Submit
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
              link="/schedule"
            />
          : null)}

          {(showModal ?
            <PopupMessage
              heading="Submit"
              description="Are you sure you want to submit?"
              leftText="Cancel"
              rightText="Submit"
              onClickClose={()=> setShowModal(false)}
              link="/schedule"
            />
          : null)}

    </Layout>
  );
}
