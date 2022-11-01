import Layout from "../layouts/Layout";
import { useState } from "react";
import EquipmentCard from "../components/EquipmentCard";
import Breadcrumb from "../components/Breadcrumb";


export default function Inventory() {

  const [equipmentData, setEquipmentData] = useState(
  [
    [{brand: "OLYMPUS", scopeType: "tracheal intubation", modelNumber: "TJF403", serialNumber: "21904890", status: "New"}],
    [{brand: "OLYMPUS", scopeType: "tracheal intubation", modelNumber: "TJF423", serialNumber: "12345231", status: "New"}],
    [{brand: "OLYMPUS", scopeType: "tracheal intubation", modelNumber: "TJF423", serialNumber: "12345231", status: "Repeat"}],
    [{brand: "OLYMPUS", scopeType: "tracheal intubation", modelNumber: "TJF423", serialNumber: "12345231", status: "Regular"}],
    [{brand: "OLYMPUS", scopeType: "tracheal intubation", modelNumber: "TJF423", serialNumber: "12345231", status: "Regular"}],
    [{brand: "OLYMPUS", scopeType: "tracheal intubation", modelNumber: "TJF423", serialNumber: "12345231", status: "Regular"}],
    [{brand: "OLYMPUS", scopeType: "tracheal intubation", modelNumber: "TJF423", serialNumber: "12345231", status: "Post Repair"}],
    [{brand: "OLYMPUS", scopeType: "tracheal intubation", modelNumber: "TJF423", serialNumber: "12345231", status: "Repeat"}]
  ]
  );
  
  const [header, setHeader] = useState(['Scope', 'Washer (AER)']);
  const [tab, setTab] = useState(['Scope', 'Washer (AER)']);
  const [index, setIndex] = useState(0);
  
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
        breadCrumbItems = {["Home", "Inventory"]}
        />
        <h2 className="pb-3 text-3xl font-medium">{`${header ? header[index] : "" }`}</h2>
        <p className="mt-2 text-sm text-gray-500 md:text-base">Displays all equipment inside the system</p>
        <div className="py-3">
            <button onClick={() => setIndex(0)} className={`${tab[index] == tab[0] ? "text-blue-600 font-bold border-b-2 border-indigo-500" : "text-black" } text-md md:text-base`}>{`${tab == 'null' ? "" : tab[0] }`}</button>
            <button onClick={() => setIndex(1)} className={`${tab[index] == tab[1] ? "text-blue-600 font-bold border-b-2 border-indigo-500" : "text-black" } mx-10 text-md md:text-base`}>{`${tab == 'null' ? "" : tab[1] }`}</button>
        </div>
      </div>

      <section className={`${ tab[index] == "Scope" ? "visible" : "invisible"} grid grid-cols-1 md:grid-cols-2 bg-#f0f2f5 py-14 px-48`}>
        {[...Array(equipmentData.length)].map((e, i) => <EquipmentCard equipmentData={equipmentData[i]} key={i}/>)}
      </section>

    </Layout>
  );
}
