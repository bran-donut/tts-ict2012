import Layout from "../layouts/Layout";
import { InfoCircleOutlined } from "@ant-design/icons";
import { useState } from "react";
import Dropdown from "../components/Dropdown";
import MainHeader from "../components/MainHeader";
import SubHeader from "../components/SubHeader";
import MobileScan from "../components/MobileScan";

export default function Record() {

  const [equipmentType, setEquipmentType] = useState("Scope");
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
      <section className="grid grid-flow-row bg-#f0f2f5">
          <form>
            <div className="px-20 py-10">
              <div className="flex flex-col justify-center h-full min-w-full text-justify bg-white border-2 rounded-md">
                <div className="p-5 bg-white">
                  <h3 className="pb-2 font-medium">Form Details</h3>
                  <hr></hr>
                </div>
                <div className="grid grid-cols-2 gap-4 px-5 py-1">
                <Dropdown
                menuHeader="Month"
                menuItems={["Jan", "Feb"]}
                />
                <div className="py-1 input-group">
                    <div className="flex flex-row items-center justify-start pb-1">
                        <h4 className="mr-2">Date of Collection</h4>
                        <InfoCircleOutlined style={{fontSize: '16px', color: 'rgb(107 114 128)' }}/>
                    </div>
                  <input className="relative flex items-center w-full p-2 border-2 border-gray-300 rounded-md input-group" type="date" placeholder="Select"/>   
                </div>

                <div className="py-1 input-group">
                    <div className="flex flex-row items-center justify-start pb-1">
                        <h4 className="mr-2">Accession Number</h4>
                        <InfoCircleOutlined style={{fontSize: '16px', color: 'rgb(107 114 128)' }}/>
                    </div>
                  <div className="relative flex items-center w-full p-2 border-2 rounded-md input-group">
                    <input type="text" placeholder="Input" className="w-full outline-none" required />
                  </div>
                </div>

                <div></div>

                <div className="flex flex-row items-center justify-start pb-1">
                    <h3 className="pb-2 mr-2 font-medium">Scope Details</h3>
                </div>
                <div></div>
                <Dropdown
                menuHeader="Scope Status"
                menuItems={["1", "2"]}
                />
                <div></div>
                <div className="flex flex-row items-center justify-start pb-1">
                    <h3 className="pb-2 mr-2 font-medium">Personnel Performed</h3>
                </div>
                <div></div>
                <Dropdown
                menuHeader="Washed by"
                menuItems={["Jia Xin", "Mandy"]}
                />
                <Dropdown
                menuHeader="Collected by"
                menuItems={["Nina", "Gan"]}
                />
                <div className="pb-5"></div>
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
    </Layout>
  );
}
