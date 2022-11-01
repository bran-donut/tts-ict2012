import Layout from "../layouts/Layout";
import { useState } from "react";
import NavBar from "../components/NavBar";
import SubHeader from "../components/SubHeader";
import EquipmentCard from "../components/EquipmentCard";


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
  
  const [tab, setTab] = useState(['Scope', 'Washer (AER)', 'Miscellaneous']);
  const [tabIndex, setTabIndex] = useState(0);
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
        breadCrumbItems={['Home', 'Inventory']}
        headerContent= {['Scope', 'Washer (AER)', 'Miscellaneous']}
        description='Displays all the equipment inside the system'
        tabContent= {['Scope', 'Washer (AER)', 'Miscellaneous']}
      />
      {/* <NavBar /> */}
      <section className={`${ tab[tabIndex] == "Scope" ? "visible" : "invisible"} grid grid-cols-1 md:grid-cols-2 bg-#f0f2f5 py-14 px-48`}>
        {[...Array(equipmentData.length)].map((e, i) => <EquipmentCard equipmentData={equipmentData[i]} key={i}/>)}
      </section>

    </Layout>
  );
}
