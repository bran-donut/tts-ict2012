import Layout from "../layouts/Layout";
import { useState } from "react";
import Dropdown from "../components/Dropdown";
import MainHeader from "../components/MainHeader";
import SubHeader from "../components/SubHeader";
import DateInput from "../components/DateInput";
import Input from "../components/Input";
import Modal from "../components/Modal";

export default function RecordSample() {

  const [showExitModal, setShowExitModal] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [equipmentData, setEquipmentData] = useState(
    {
        brand: "Olympus", scopeType: "tracheal intubation", modelNumber: "TJF403", serialNumber: "21904890", status: "New"
    }
  );

  return (
    <Layout>
      <MainHeader heading="Inventory" description="View all the equipment and miscellaneous inside the system" details={[{ title: 'Total Equipment in Inventory', subtitle: '36' }]} />
      <SubHeader
      heading={equipmentData.brand + " " + equipmentData.modelNumber + " " + equipmentData.serialNumber}
      description="Record the details of equipment sampling"
      breadCrumbItems={["Home", "Inventory", "View", "Record"]}
      />

        <div className="flex flex-col items-center justify-center min-w-full gap-0 px-5 py-5 bg-white md:flex-row md:gap-3">
          <ol className="items-center sm:flex ">
              <li className="relative w-64 mb-6 ml-36 sm:mb-0">
                  <div className="flex items-center">
                      <div className="bg-[#1890FF] z-10 flex items-center justify-center w-4 h-4 rounded-full ring-0 ring-white sm:ring-8 shrink-0">
                      </div>
                      <div className="bg-[#1890FF] hidden sm:flex w-full h-0.5"></div>
                  </div>
                  <div className="mt-3 sm:pr-8">
                  <h3 className="text-lg font-normal text-gray-900">Manual Cleaning</h3>                    
                  </div>
              </li>
              <li className="relative w-64 mb-6 sm:mb-0">
                  <div className="flex items-center">
                   <div className="bg-[#1890FF] z-10 flex items-center justify-center w-4 h-4 rounded-full ring-0 ring-white sm:ring-8 shrink-0">
                      </div>
                      <div className="bg-[#1890FF] hidden sm:flex w-full h-0.5"></div>
                  </div>
                  <div className="mt-3 sm:pr-8">
                  <h3 className="text-lg font-normal text-gray-900">Washing</h3>                    
                  </div>
              </li>
              <li className="relative w-64 mb-6 sm:mb-0">
                  <div className="flex items-center">
                    <div className="bg-[#1890FF] z-10 flex items-center justify-center w-4 h-4 rounded-full ring-0 ring-white sm:ring-8 shrink-0">
                      </div>
                      <div className="bg-[#1890FF] hidden sm:flex w-full h-0.5"></div>
                  </div>
                  <div className="mt-3 sm:pr-8">
                  <h3 className="text-lg font-normal text-gray-900">Drying</h3>                
                  </div>
              </li>
              <li className="relative w-64 mb-6 sm:mb-0">
                  <div className="flex items-center">
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
                  <h3 className="pb-2 font-medium">ATP</h3>
                  <hr></hr>
                </div>
                <div className="grid grid-cols-2 gap-4 px-5 py-1">
                <Dropdown
                menuHeader="Month"
                menuItems={["Jan", "Feb"]}
                />
                <Input
                menuHeader="ATP Water RLU"
                status="required"
                />
                <Input
                menuHeader="ATP Swab RLU"
                status="required"
                />
                <div></div>
                <div className="flex flex-row items-center justify-start pt-1">
                    <h3 className="pt-4 mr-2 font-medium">Fluid Result</h3>
                </div>
                <div></div>
                <DateInput
                menuHeader="Date of Result"
                />
                <Dropdown
                menuHeader="Fluid Result"
                menuItems={["1", "2"]}
                />
                <Input
                menuHeader="Culture Comment"
                status="optional"
                />
                <Input
                menuHeader="Action"
                status="optional"
                />
                <div className="flex flex-row items-center justify-start pt-1">
                    <h3 className="pt-4 mr-2 font-medium">Swab Result</h3>
                </div>
                <div></div>
                <DateInput
                menuHeader="Date of Result"
                />
                <Dropdown
                menuHeader="Fluid Result"
                menuItems={["1", "2"]}         
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
                menuItems={["1", "2"]}   
                />
                <div></div>
                <div className="flex flex-row items-center justify-start pt-1">
                    <h3 className="pt-4 mr-2 font-medium">Repeat of MS</h3>
                </div>
                <Dropdown
                menuHeader="Quarantine Required"
                menuItems={["Yes", "No"]}   
                />
                <DateInput
                menuHeader="Repeat Date"
                />
               <Dropdown
                menuHeader="Borescope"
                menuItems={["1", "2"]}   
                />

                <div className="flex flex-row items-center justify-start pt-1">
                    <h3 className="pt-4 mr-2 font-medium">After Action</h3>
                </div>
                <div></div>

                <Dropdown
                menuHeader="Circulated By"
                menuItems={["1", "2"]}   
                />

                <div className="mb-28 "></div>
                  </div>
                </div>
              </div>

                  <div className="flex flex-col items-center justify-end w-full gap-0 px-5 py-5 bg-white md:flex-row md:gap-3">
                    <a className="text-black hover:text-black/80 hover:cursor-pointer hover:underline">
                      Previous Step
                    </a>
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
            <Modal
              heading="Save & Exit ?"
              description="Are you sure you want to save and Exit?"
              leftText="Cancel"
              rightText="Save & Exit"
              onClickClose={()=> setShowExitModal(false)}
            />
          : null)}

          {(showModal ?
            <Modal
              heading="Submit"
              description="Are you sure you want to submit?"
              leftText="Cancel"
              rightText="Submit"
              onClickClose={()=> setShowModal(false)}
            />
          : null)}

    </Layout>
  );
}
