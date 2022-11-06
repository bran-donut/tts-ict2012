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
  const [charCount, setCharCount] = useState(0);
  const [showExitModal, setShowExitModal] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [equipmentData, setEquipmentData] = useState(
    {
        brand: "Medivator", modelNumber: "1A", serialNumber: "21904890", status: "New"
    }
  );

  return (
    <Layout>
      <MainHeader heading="Record" description="Equipment Sampling Record" />
      <SubHeader
      heading={equipmentData.brand + " " + equipmentData.modelNumber}
      description="Record the details of equipment sampling"
      breadCrumbItems={["Home", "Schedule", "View", "Record"]}
      />

<div className="flex flex-col items-center justify-center min-w-full gap-0 px-5 py-5 bg-white md:flex-row md:gap-3">
          <ol className="items-center sm:flex ">
              <li className="relative w-64 mb-6 ml-36 sm:mb-0">
                  <div className="flex items-center">
                  <Link href="/record/washer/cleaning">
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
                  <Link href="/record/washer/washing">
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
                  <Link href="/record/washer/drying">
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
                menuHeader="Analysis"
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
                <DisabledDropdown
                menuHeader="Quarantine Required"
                />
                </div>

                <div className="p-5 bg-white">
                  <h3 className="pb-2 font-medium">Remarks</h3>
                  <hr></hr>
                </div>
                <div className="grid grid-cols-2 gap-4 px-5 py-1">
                <div className="py-1 input-group">
                  <h4 className="inline pb-1">Remarks</h4><p className="inline px-2 text-gray-400">(optional)</p>
                  <textarea placeholder="Remarks" maxlength="100" onChange={e => setCharCount(e.target.value.length)} className="w-full p-2 border-2 rounded-md" />
                  <div className="text-right text-gray-300">{charCount} / 100</div>
                </div>
                </div>
                <div className="px-5 bg-white">
                  <h3 className="pb-2 font-medium">After Action</h3>
                  <hr></hr>
                </div>
                  <div className="grid grid-cols-2 gap-4 px-5 py-1">
                  <Dropdown
                  menuHeader="Circulated By"
                  menuItems={["Janice", "Nina"]}  
                  drop="drop"
                  />
                  </div>
                  <div className="mb-10"></div>
                </div>
                </div>
            
            
                  <div className="flex flex-col items-center justify-end w-full gap-0 px-5 py-5 bg-white md:flex-row md:gap-3">
                    <Link href="/record/washer/drying">
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
