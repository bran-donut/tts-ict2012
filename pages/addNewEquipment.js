import Layout from "../layouts/Layout";
import { useState } from "react";
import Breadcrumb from "../components/Breadcrumb";
<<<<<<< HEAD
import Dropdown from "../components/Dropdown";
=======
import MainHeader from "../components/MainHeader";
>>>>>>> 3125e8de0af0a38774d69a89e3d9efaa9caa73ca


export default function addNewEquipment() {

  const [equipmentType, setEquipmentType] = useState("Scope");
  const [equipmentData, setEquipmentData] = useState(
  [
    [{brand: "OLYMPUS", scopeType: "tracheal intubation", modelNumber: "TJF403", serialNumber: "21904890", status: "New"}]
  ]
  );
  
  return (
    <Layout>
      <MainHeader heading="Inventory" description="View all the equipment and miscellaneous inside the system" details={[{ title: 'Total Equipment in Inventory', subtitle: '36' }]} />

      <div className="flex flex-col items-start justify-start w-full px-10 pt-5 bg-white">
        <Breadcrumb
        breadCrumbItems = {["Home", "Inventory", "Add New"]}
        />
        <h2 className="pb-3 text-3xl font-medium">Add / Edit Equipment</h2>
        <p className="pb-3 mt-2 text-sm text-gray-500 md:text-base">Adding a new equipment into the system</p>
      </div>

      <section className="grid grid-flow-row bg-#f0f2f5">
          <div className="px-20 py-10">
            <form className="flex flex-col justify-center h-full min-w-full text-justify bg-white border-2 rounded-md">
              <div className="p-5 bg-white">
                <h3 className="pb-3 font-medium">Equipment Type</h3>
                  <span>
                    <input onClick={() => setEquipmentData("Scope")} type="radio" name="equipment" value="Scope" checked></input>
                    <label for="equipment"> Scope </label>
                  </span>
                  <span className="ml-2">
                    <input onClick={() => setEquipmentData("Washer")} type="radio"name="equipment" value="Washer"></input>
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
                  <div className="flex flex-row pb-1">
                      <h4 className="w-2/3">Frequency</h4>
                  </div>
                <div className="relative flex items-center w-full p-2 border-2 rounded-md input-group">
                  <input type="text" placeholder="Input" className="w-full outline-none" required />
                </div>
              </div>
              <Dropdown
              menuHeader="Serial Number"
              menuItems={["21904890"]}
              />
              </div>
                <div className="flex flex-col items-center justify-end gap-0 px-5 py-5 bg-gray-50 md:flex-row md:gap-3">
                  <a href="/trip" className="text-black hover:text-black/80 hover:cursor-pointer">
                    Back
                  </a>
                  <button type="submit" className="px-10 py-2 ml-4 transition-colors duration-150 bg-white rounded-sm text-tts-red hover:bg-tts-red/80 border-tts-red">
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
