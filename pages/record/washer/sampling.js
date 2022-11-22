import Layout from "../../../layouts/Layout";
import { useState } from "react";
import Dropdown from "../../../components/Dropdown";
import MainHeader from "../../../components/MainHeader";
import SubHeader from "../../../components/SubHeader";
import Input from "../../../components/Input";
import DateInput from "../../../components/DateInput";
import PopupMessage from "../../../components/Modal";
import Link from "next/link";
import { equipments } from "../../../Constants";
import DisabledDropdown from "../../../components/DisabledDropdown";

export default function Sampling() {
  let equipmentIndex = window.localStorage.getItem('EQUIPMENT');
  const [charCount, setCharCount] = useState(0);
  const [showExitModal, setShowExitModal] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [equipmentData, setEquipmentData] = useState(equipments[equipmentIndex]);

  return (
    <Layout>
      <MainHeader heading="Record" description="Equipment Sampling Record" />
      <SubHeader
      heading={equipmentData.brand + " " + equipmentData.modelNumber}
      description="Record the details of equipment sampling"
      breadCrumbItems={["Home", "Schedule", "View", "Record Result"]}
      />

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
                tooltipText="Date of washer sampling result"
                />
                <Dropdown
                menuHeader="Fluid Result"
                menuItems={["Growth", "No Growth"]}
                tooltipText="Result of bacteria growth"
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
                tooltipText="The washer is required to be sent for quarantine if the fluid result comes back positive"
                repeatDateTooltip="Date for repeat sampling"
                />
                </div>

                <div className="p-5 bg-white">
                  <h3 className="pb-2 font-medium">Remarks</h3>
                  <hr></hr>
                </div>
                <div className="grid grid-cols-2 gap-4 px-5 py-1">
                <div className="py-1 input-group">
                  <h4 className="inline pb-1">Remarks</h4><p className="inline px-2 text-gray-400">(optional)</p>
                  <textarea placeholder="Remarks" maxLength="100" onChange={e => setCharCount(e.target.value.length)} className="w-full p-2 border-2 rounded-md" />
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
                  tooltipText="Personnel who circulated the equipment"
                  />
                  </div>
                  <div className="mb-10"></div>
                </div>
                </div>
            
            
                  <div className="flex flex-col items-center justify-end w-full gap-0 px-5 py-5 bg-white md:flex-row md:gap-3">
                    <Link href="/schedule">
                    <a className="text-black hover:text-black/80 hover:cursor-pointer hover:underline">
                      Back
                    </a>
                    </Link>
                    <button type="button" onClick={() => setShowExitModal(true)} className="px-10 py-2 ml-4 transition-colors duration-150 bg-white border-2 rounded-sm text-tts-red hover:bg-tts-red/80 border-tts-red">
                      Save & Exit
                    </button>
                    <button type="button" onClick={() => setShowModal(true)} className="px-10 py-2 text-white transition-colors duration-150 border-2 rounded-sm bg-tts-red hover:bg-tts-red/80 border-tts-red">
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
              link="/home"
              equipmentIndex={equipmentIndex}
            />
          : null)}

    </Layout>
  );
}
