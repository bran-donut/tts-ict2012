import Layout from "../../../layouts/Layout";
import { useEffect, useState } from "react";
import Dropdown from "../../../components/Dropdown";
import MainHeader from "../../../components/MainHeader";
import SubHeader from "../../../components/SubHeader";
import Input from "../../../components/Input";
import DateInput from "../../../components/DateInput";
import PopupMessage from "../../../components/Modal";
import Link from "next/link";

export default function Washing() {
  const [showExitModal, setShowExitModal] = useState(false);
  const [showContinueModal, setShowContinueModal] = useState(false);
  const [equipmentData, setEquipmentData] = useState([]);

  useEffect(() => {
    let equipmentIndex = window.localStorage.getItem('EQUIPMENT');
    let items = JSON.parse(window.localStorage.getItem("equipments"));
    setEquipmentData(items[equipmentIndex]);
  }, [])

  return (
    <Layout>
      <MainHeader heading="Record" description="Equipment Sampling Record" />
      <SubHeader
      heading={equipmentData.brand + " " + equipmentData.modelNumber}
      description="Record the details of equipment sampling"
      breadCrumbItems={["Home", "Schedule", "View", "Record Detail"]}
      />

<div className="flex flex-col items-center justify-center min-w-full gap-0 px-5 py-5 bg-white md:flex-row md:gap-3">
          <ol className="items-center sm:flex ">
              <li className="relative mb-6 w-80 ml-36 sm:mb-0">
                  <div className="flex items-center">
                  <Link href="/record/washer/cleaning">
                      <div className="bg-[#1890FF] ml-[4.1rem] hover:bg-[#1890FF]/80 hover:cursor-pointer z-10 flex items-center justify-center w-4 h-4 rounded-full ring-0 ring-white sm:ring-8 shrink-0">
                      </div>
                  </Link>
                      <div className="bg-[#1890FF] hidden sm:flex w-full h-0.5"></div>
                  </div>
                  <div className="mt-3 sm:pr-8">
                  <h3 className="pl-2 text-lg font-normal text-gray-900">Manual Cleaning</h3>                    
                  </div>
              </li>
              <li className="relative mb-6 w-80 sm:mb-0">
                  <div className="flex items-center ">
                  <div className="bg-[#1890FF] hidden sm:flex w-8 h-0.5"></div>
                   <div className="bg-[#1890FF] z-10  flex items-center justify-center w-4 h-4 rounded-full ring-0 ring-white sm:ring-8 shrink-0">
                      </div>
                      <div className="bg-gray-200 hidden sm:flex w-full h-0.5"></div>
                  </div>
                  <div className="mt-3 sm:pr-8">
                  <h3 className="text-lg font-semibold text-gray-900">Washing</h3>                    
                  </div>
              </li>
              <li className="relative mb-6 w-80 sm:mb-0">
                  <div className="flex items-center">
                  <div className="bg-gray-200 hidden sm:flex w-[1.125rem] h-0.5"></div>
                    <div className="bg-[#8C8C8C] z-10 flex items-center justify-center w-2 h-2 rounded-full ring-0 ring-white sm:ring-8 shrink-0">
                      </div>
                  </div>
                  <div className="mt-3 sm:pr-8">
                  <h3 className="text-lg font-normal text-gray-900">Drying</h3>                
                  </div>
              </li>
          </ol>
      </div>

      <section className="grid grid-flow-row bg-#f0f2f5">
          <form>
            <div className="px-20 py-10">
              <div className="flex flex-col justify-center h-full min-w-full text-justify bg-white border-2 rounded-md">
              <div className="p-5 bg-white">
                  <h3 className="pb-2 font-medium">Disinfectant</h3>
                  <hr></hr>
                </div>
                <div className="grid grid-cols-2 gap-4 px-5 py-1">
                <Dropdown
                menuHeader="Disinfectant Used"
                menuItems={["RAPICIDE PA PART A & PART B", "ANIOXYDE 1000", "ACECIDE"]}
                drop="drop"
                tooltipText="Type of disinfectant used on the washer"
                />
                <Input
                menuHeader="Disinfectant LOT Number"
                status = "required"
                tooltipText = "The identification LOT number assigned to the disinfectant that can be found on the packaging"
                />
                <DateInput
                menuHeader="Disinfectant Changed"
                status = "required"
                tooltipText = "Disinfectant change date"
                />
                </div>
                <div className="p-5 bg-white">
                  <h3 className="pb-2 font-medium">Detergent</h3>
                  <hr></hr>
                </div>
                <div className="grid grid-cols-2 gap-4 px-5 py-1">
                <Dropdown
                menuHeader="Detergent Used"
                menuItems={["INTERCEPT PLUS", "CIDEZYME DETERGENT", "ENDORAPID"]}
                drop="drop"
                tooltipText="Type of detergent used on the washer"
                />
                <Input
                menuHeader="Detergent LOT Number"
                tooltipText = "The identification number assigned to the detergent that can be found on the packaging"
                />
                </div>
                <div className="p-5 bg-white">
                  <h3 className="pb-2 font-medium">Filter</h3>
                  <hr></hr>
                </div>
                <div className="grid grid-cols-2 gap-4 px-5 py-1">
                <DateInput
                menuHeader="Date of Filter Changed"
                tooltipText="The filter change date"
                />
                <div className="mb-28"></div>
                </div>
                </div>
                <div className="pb-5"></div>
                  </div>


                  <div className="flex flex-col items-center justify-end w-full gap-0 px-5 py-5 bg-white md:flex-row md:gap-3">
                    <Link href="/record/washer/cleaning">
                    <a className="text-black hover:text-black/80 hover:cursor-pointer hover:underline">
                      Previous Step
                    </a>
                    </Link>
                    <button type="button" onClick={() => setShowExitModal(true)} className="px-10 py-2 ml-4 transition-colors duration-150 bg-white border-2 rounded-sm text-tts-red hover:bg-tts-red/80 border-tts-red">
                      Save & Exit
                    </button>
                    <button type="button" onClick={() => setShowContinueModal(true)} className="px-10 py-2 text-white transition-colors duration-150 border-2 rounded-sm bg-tts-red hover:bg-tts-red/80 border-tts-red">
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
              type="/schedule"
            />
          : null)}

          {(showContinueModal ?
            <PopupMessage
              heading="Save & Continue ?"
              description="Are you sure you want to save and continue?"
              leftText="Cancel"
              rightText="Save & Continue"
              onClickClose={()=> setShowContinueModal(false)}
              link="/record/washer/drying"
            />
          : null)}

    </Layout>
  );
}
