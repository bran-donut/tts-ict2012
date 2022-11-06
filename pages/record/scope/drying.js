import Layout from "../../../layouts/Layout";
import { useState } from "react";
import Dropdown from "../../../components/Dropdown";
import MainHeader from "../../../components/MainHeader";
import SubHeader from "../../../components/SubHeader";
import PopupMessage from "../../../components/Modal";
import Link from "next/link";

export default function Drying() {
  const [showExitModal, setShowExitModal] = useState(false);
  const [showContinueModal, setShowContinueModal] = useState(false);
  const [charCount, setCharCount] = useState(0);
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
                      <div className="bg-[#1890FF] hover:cursor-pointer hover:bg-[#1890FF]/80 ml-[4.1rem] z-10 flex items-center justify-center w-4 h-4 rounded-full ring-0 ring-white sm:ring-8 shrink-0">
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
                    <div className="bg-[#1890FF] hover:bg-[#1890FF]/80 hover:cursor-pointer z-10 flex items-center justify-center w-4 h-4 rounded-full ring-0 ring-white sm:ring-8 shrink-0">
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
                    <div className="bg-[#1890FF] z-10 flex items-center justify-center w-4 h-4 rounded-full ring-0 ring-white sm:ring-8 shrink-0">
                      </div>
                      <div className="bg-gray-200 hidden sm:flex w-full h-0.5"></div>
                  </div>
                  <div className="mt-3 sm:pr-8">
                  <h3 className="text-lg font-semibold text-gray-900">Drying</h3>                
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
                  <h3 className="pb-2 font-medium">Drying Cabinet</h3>
                  <hr></hr>
                </div>
                <div className="grid grid-cols-2 gap-4 px-5 py-1">
                <Dropdown
                menuHeader="Scope Dryer"
                menuItems={["Dryer 1", "Dryer 2", "Dryer 3", "Dryer 4"]}
                drop="drop"
                />
                <Dropdown
                menuHeader="Dryer Level"
                menuItems={["Level 1", "Level 2", "Level 3", "Level 4"]}
                />

                <div className="py-1 input-group">
                  <h4 className="inline pb-1">Remarks</h4><p className="inline px-2 text-gray-400">(optional)</p>
                  <textarea placeholder="Remarks" maxlength="100" onChange={e => setCharCount(e.target.value.length)} className="w-full p-2 border-2 rounded-md" />
                  <div className="text-right text-gray-300">{charCount} / 100</div>
                </div>

                <div className="pb-5"></div>
                  </div>
                </div>
              </div>

                  <div className="flex flex-col items-center justify-end w-full gap-0 px-5 py-5 bg-white md:flex-row md:gap-3">
                    <Link href="/record/scope/washing">
                    <a className="text-black hover:text-black/80 hover:cursor-pointer hover:underline">
                      Previous Step
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
              link="/schedule"
            />
          : null)}

          {(showContinueModal ?
            <PopupMessage
              heading="Save & Continue ?"
              description="Are you sure you want to save and continue?"
              leftText="Cancel"
              rightText="Save & Continue"
              onClickClose={()=> setShowContinueModal(false)}
              link="/record/scope/sampling"
            />
          : null)}

    </Layout>
  );
}
