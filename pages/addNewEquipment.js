import Layout from "../layouts/Layout";
import { InfoCircleOutlined } from "@ant-design/icons";
import { useState } from "react";
import Dropdown from "../components/Dropdown";
import MainHeader from "../components/MainHeader";
import SubHeader from "../components/SubHeader";
import MobileScan from "../components/MobileScan";

export default function addNewEquipment() {

  const [equipmentType, setEquipmentType] = useState("Scope");
  const [equipmentData, setEquipmentData] = useState(
  [
    [{brand: "OLYMPUS", scopeType: "tracheal intubation", modelNumber: "TJF403", serialNumber: "21904890", status: "New"}]
  ]
  );
  
  return (
    <Layout>
      <MainHeader
      heading="Inventory"
      description="View all the equipment and miscellaneous inside the system"
      details={[{ title: 'Total Equipment in Inventory', subtitle: '36' }]}
      />
      <SubHeader
      heading="Add / Edit Equipment"
      description="Adding a new equipment into the system"
      breadCrumbItems={["Home", "Inventory", "Add New"]}
      />
    {equipmentType == "Scope" ? (
      <section className="grid grid-flow-row bg-#f0f2f5">
          <form>
            <div className="px-20 py-10">
              <div className="flex flex-col justify-center h-full min-w-full text-justify bg-white border-2 rounded-md">
                <div className="p-5 bg-white">
                  <h3 className="pb-3 font-medium">Equipment Type</h3>
                    <span>
                      <input onClick={() => setEquipmentType("Scope")} type="radio" name="equipment" value="Scope" checked></input>
                      <label for="equipment"> Scope </label>
                    </span>
                    <span className="ml-2">
                      <input onClick={() => setEquipmentType("Washer")} type="radio"name="equipment" value="Washer"></input>
                      <label for="equipment"> Washer (AER) </label>
                    </span>
                </div>
                <div className="grid grid-cols-2 gap-4 px-5 py-1">
                <Dropdown
                menuHeader="Brand"
                menuItems={["Olympus"]}
                />
                <Dropdown
                menuHeader="Scope Type"
                menuItems={["tracheal intubation"]}
                />
                <Dropdown
                menuHeader="Model Number"
                menuItems={["TJF423"]}
                />
                
                <div className="py-1 input-group">
                    <div className="flex flex-row items-center justify-start pb-1">
                        <h4 className="mr-2">Frequency</h4>
                        <InfoCircleOutlined style={{fontSize: '16px', color: 'rgb(107 114 128)' }}/>
                    </div>
                  <div className="relative flex items-center w-full p-2 border-2 rounded-md input-group">
                    <input type="text" placeholder="Input" className="w-full outline-none" required />
                  </div>
                </div>

                <MobileScan
                menuHeader="Serial Number"
                />

                <Dropdown
                menuHeader="Status"
                menuItems={["Regular", "Loan"]}
                />

                    <div className="py-1 input-group">
                        <div className="flex flex-row items-center justify-start pb-1">
                            <h4 className="mr-2">Scheduling Option</h4>
                            <InfoCircleOutlined style={{fontSize: '16px', color: 'rgb(107 114 128)' }}/>
                        </div>
                      <div className="relative flex items-center w-full p-2 align-middle rounded-md input-group">
                        <input type="checkbox" className="float-left outline-none" required />
                        <p className="ml-2">Include in schedule</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

                  <div className="flex flex-col items-center justify-end w-full gap-0 px-5 py-5 bg-white md:flex-row md:gap-3">
                    <a href="/trip" className="text-black hover:text-black/80 hover:cursor-pointer hover:underline">
                      Back
                    </a>
                    <button type="submit" className="px-10 py-2 ml-4 transition-colors duration-150 bg-white border-2 rounded-sm text-tts-red hover:bg-tts-red/80 border-tts-red">
                      Add new
                    </button>
                    <button type="submit" onClick={() => setStatus("edit")} className="px-10 py-2 text-white transition-colors duration-150 border-2 rounded-sm bg-tts-red hover:bg-tts-red/80 border-tts-red">
                      Submit
                    </button>
                  </div>
            </form>
          </section>
          ): null}

        {equipmentType == "Washer" ? (
          <section className="grid grid-flow-row bg-#f0f2f5">
          <form>
            <div className="px-20 py-10">
              <div className="flex flex-col justify-center h-full min-w-full text-justify bg-white border-2 rounded-md">
                <div className="p-5 bg-white">
                  <h3 className="pb-3 font-medium">Equipment Type</h3>
                    <span>
                      <input onClick={() => setEquipmentType("Scope")} type="radio" name="equipment" value="Scope"></input>
                      <label for="equipment"> Scope </label>
                    </span>
                    <span className="ml-2">
                      <input onClick={() => setEquipmentType("Washer")} type="radio"name="equipment" value="Washer" checked></input>
                      <label for="equipment"> Washer (AER) </label>
                    </span>
                </div>
                <div className="grid grid-cols-2 gap-4 px-5 py-1">
                <Dropdown
                menuHeader="AER Model Number"
                menuItems={["Olympus"]}
                />
                <div className="py-1 input-group">
                    <div className="flex flex-row items-center justify-start pb-1">
                        <h4 className="mr-2">Frequency</h4>
                        <InfoCircleOutlined style={{fontSize: '16px', color: 'rgb(107 114 128)' }}/>
                    </div>
                  <div className="relative flex items-center w-full p-2 border-2 rounded-md input-group">
                    <input type="text" placeholder="Input" className="w-full outline-none" required />
                  </div>
                </div>
                <MobileScan
                menuHeader="AER Serial Number"
                />
                <div></div>
                    <div className="py-1 input-group">
                        <div className="flex flex-row items-center justify-start pb-1">
                            <h4 className="mr-2">Scheduling Option</h4>
                            <InfoCircleOutlined style={{fontSize: '16px', color: 'rgb(107 114 128)' }}/>
                        </div>
                      <div className="relative flex items-center w-full p-2 align-middle rounded-md input-group">
                        <input type="checkbox" className="float-left outline-none" required />
                        <p className="ml-2">Include in schedule</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

                  <div className="flex flex-col items-center justify-end w-full gap-0 px-5 py-5 bg-white md:flex-row md:gap-3">
                    <a href="/trip" className="text-black hover:text-black/80 hover:cursor-pointer hover:underline">
                      Back
                    </a>
                    <button type="submit" className="px-10 py-2 ml-4 transition-colors duration-150 bg-white border-2 rounded-sm text-tts-red hover:bg-tts-red/80 border-tts-red">
                      Add new
                    </button>
                    <button type="submit" onClick={() => setStatus("edit")} className="px-10 py-2 text-white transition-colors duration-150 border-2 rounded-sm bg-tts-red hover:bg-tts-red/80 border-tts-red">
                      Submit
                    </button>
                  </div>
            </form>
          </section>
        ): null}
    </Layout>
  );
}
