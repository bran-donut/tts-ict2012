import Layout from "../layouts/Layout";
import { useState } from "react";
import NavBar from "../components/NavBar";
import SubHeader from "../components/SubHeader";
import EquipmentCard from "../components/EquipmentCard";


export default function Inventory() {

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
      <SubHeader
        breadCrumbItems={['Home', 'Inventory', "Add new"]}
        header={['Add New Equipment']}
        description='Adding a new equipment into the system'
        tabContent= {['null']}
      />
      <section className="grid grid-flow-row bg-gray-100 edit-trip-grid-wrapper">
          <div className="px-20 py-10">
            <form className="flex flex-col justify-center h-full min-w-full text-justify bg-white border-2 rounded-md shadow-lg bs-gray-150">
              <div className="p-5 bg-gray-50">
                <h3 className="font-medium">Stop selected</h3>
              </div>
              <div className="flex-grow px-5 py-1">
                <div className="py-4 input-group">
                  <h4 className="pb-1">Stop Name</h4>
                  <input type="text" placeholder="Stop Name" className="w-full p-2 border-2 rounded-md focus:outline-sgg-blue" required />
                </div>
                <div className="py-4 input-group">
                  <div className="flex flex-row pb-1">
                    <h4 className="w-2/3">Event Name</h4>
                    <h4 className="w-1/3 pl-2">Time</h4>
                  </div>
                  <div className="flex flex-row gap-4 ">
                    <input type="text" placeholder="Event Name" className="w-2/3 p-2 border-2 rounded-md focus:outline-sgg-blue" required />
                    <div className="flex w-1/3 p-2 border-2 rounded-md input-group">
                    <input type="text" placeholder="Time" className="w-full focus:outline-sgg-blue" required />
                    <span>
                      <svg fill="rgb(209, 213, 219)" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M24 12c0 6.627-5.373 12-12 12s-12-5.373-12-12c0-.808.083-1.596.234-2.359h2.076c-.188.759-.31 1.543-.31 2.359 0 5.514 4.486 10 10 10s10-4.486 10-10-4.486-10-10-10c-2.234 0-4.292.744-5.957 1.989l2.049 2.049-7.012 1.354 1.354-7.013 2.183 2.183c2.036-1.598 4.594-2.562 7.383-2.562 6.627 0 12 5.373 12 12zm-13-6v8h7v-2h-5v-6h-2z" /></svg>
                    </span>
                    </div>
                  </div>
                </div>
                <div className="py-4 input-group">
                  <h4 className="pb-1">Vicinity</h4>
                  <textarea placeholder="Vicinity" maxlength="100" onChange={e => setCharCount(e.target.value.length)} className="w-full p-2 border-2 rounded-md focus:outline-sgg-blue" required />
                  <div className="text-right text-gray-300">{charCount} / 100</div>
                </div>
                <div className="py-4 input-group">
                  <div className="w-full h-3 border-b border-gray-300">
                    <div className="px-2 ml-4 bg-white w-fit">Additional Information</div>
                  </div>
                  <div className="flex flex-row pt-6 pb-3">
                    <div className="w-full">Price Level</div>
                    <div className="w-full">Contact</div>
                    <div className="w-full">Opening Hour</div>
                  </div>
                  <div className="flex flex-row text-gray-300">
                    <div className="w-full">string</div>
                    <div className="w-full">009009</div>
                    <div className="w-full">time</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-end gap-0 px-5 py-5 bg-gray-50 md:flex-row md:gap-3">
                <a href="/trip" className="text-sgg-blue hover:text-sgg-blue/80 hover:cursor-pointer">
                  Back
                </a>
                <button type="submit" className="px-10 py-2 transition-colors duration-150 bg-white border-2 rounded-sm text-sgg-blue hover:bg-sgg-blue/80 border-sgg-blue">
                  Create New Stop
                </button>
                <button type="submit" onClick={() => setStatus("edit")} className="px-10 py-2 text-white transition-colors duration-150 border-2 rounded-sm bg-sgg-blue hover:bg-sgg-blue/80 border-sgg-blue">
                  Save Edits
                </button>
              </div>
            </form>
          </div>
        </section>

    </Layout>
  );
}
