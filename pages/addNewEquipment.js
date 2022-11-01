import Layout from "../layouts/Layout";
import { useState } from "react";
import Breadcrumb from "../components/Breadcrumb";


export default function addNewEquipment() {

  const [equipmentData, setEquipmentData] = useState(
  [
    [{brand: "OLYMPUS", scopeType: "tracheal intubation", modelNumber: "TJF403", serialNumber: "21904890", status: "New"}]
  ]
  );

  const [charCount, setCharCount] = useState(0);
  
  return (
    <Layout>
      <section className="p-5 text-white from-[#10141A] to-[#171D26] bg-gradient-to-br">
        <div className="p-5 text-white">
          <h2 className="text-5xl font-semibold">Inventory</h2>
          <p className="text-[#BDBDBD] mt-2">View all the equipment and miscellaneous inside the system</p>
          <p className="mt-10 text-[#E0E0E0]">Total Equipment in Inventory</p>
          <p className="text-[#BDBDBD]">36</p>
        </div>
      </section>

      <div className="flex flex-col items-start justify-start w-full px-10 pt-5 bg-white">
        <Breadcrumb
        breadCrumbItems = {["Home", "Inventory", "Add New"]}
        />
        <h2 className="pb-3 text-3xl font-medium">Add / Edit Equipment</h2>
        <p className="pb-3 mt-2 text-sm text-gray-500 md:text-base">Adding a new equipment into the system</p>
      </div>

      <section className="grid grid-flow-row bg-gray-100 edit-trip-grid-wrapper">
          <div className="px-20 py-10">
            <form className="flex flex-col justify-center h-full min-w-full text-justify bg-white border-2 rounded-md shadow-lg bs-gray-150">
              <div className="p-5 bg-gray-50">
                <h3 className="font-medium">Equipment Type</h3>
              </div>
              <div className="flex-grow px-5 py-1">
                <div className="py-4 input-group">
                  <div className="flex flex-row pb-1">
                    <h4 className="w-1/2">Brand</h4>
                    <h4 className="w-1/2 pl-2">Scope Type</h4>
                  </div>
                  <div className="flex flex-row gap-4 ">
                    <input type="text" placeholder="Select" className="w-1/2 p-2 border-2 rounded-md focus:outline-sgg-blue" required />
                    <div className="flex w-1/2 p-2 border-2 rounded-md input-group">
                      <input type="text" placeholder="Select" className="w-full focus:outline-sgg-blue" required />
                    </div>
                  </div>
                </div>

                <div className="py-4 input-group">
                  <div className="flex flex-row pb-1">
                    <h4 className="w-1/2">Model Number</h4>
                    <h4 className="w-1/2 pl-2">Frequency</h4>
                  </div>
                  <div className="flex flex-row gap-4 ">
                    <input type="text" placeholder="Select" className="w-1/2 p-2 border-2 rounded-md focus:outline-sgg-blue" required />
                    <div className="flex w-1/2 p-2 border-2 rounded-md input-group">
                      <input type="text" placeholder="Input" className="w-full focus:outline-sgg-blue" required />
                    </div>
                  </div>
                </div>
                
                <div className="py-4 input-group">
                  <div className="flex flex-row pb-1">
                    <h4 className="w-1/2">Serial Number</h4>
                  </div>
                  <div className="flex flex-row gap-4 ">
                    <input type="text" placeholder="Input" className="w-1/2 p-2 border-2 rounded-md focus:outline-sgg-blue" required />
                  </div>
                </div>
              </div>
                <div className="flex flex-col items-center justify-end gap-0 px-5 py-5 bg-gray-50 md:flex-row md:gap-3">
                  <a href="/trip" className="text-sgg-blue hover:text-sgg-blue/80 hover:cursor-pointer">
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
            </div>
          </section>

    </Layout>
  );
}
