import Layout from "../layouts/Layout";
import { useState } from "react";
import EquipmentCard from "../components/EquipmentCard";
import MainHeader from "../components/MainHeader";
import { equipments } from "../Constants";
import SubHeader from "../components/SubHeader";

const tabs = ["Scope", "Washer (AER)"];

export default function Inventory() {
  const [equipmentData, setEquipmentData] = useState(equipments);
  const [index, setIndex] = useState(0);

  return (
    <Layout>
      <MainHeader
        heading="Inventory"
        description="View all the equipment and miscellaneous inside the system"
        details={[{ title: "Total Equipment in Inventory", subtitle: "36" }]}
      />
      <SubHeader heading={tabs[index]} description="Displays all equipment inside the system" breadCrumbItems={["Home", "Inventory"]}>
        <div className="pt-3">
          <button
            onClick={() => setIndex(0)}
            className={`${index == 0 ? "text-blue-600 pb-4 font-bold border-b-2 border-indigo-500" : "text-black"} text-md md:text-base`}
          >{tabs[0]}</button>
          <button
            onClick={() => setIndex(1)}
            className={`${
              index == 1 ? "text-blue-600 pb-4 font-bold border-b-2 border-indigo-500" : "text-black"
            } mx-10 text-md md:text-base`}
          >{tabs[1]}</button>
        </div>
      </SubHeader>
      <section className={`${tabs[index] == "Scope" ? "visible" : "invisible"} bg-[#C1C1C1] px-20`}>
        <div className="grid grid-cols-1 gap-y-0 overflow-y-scroll bg-[#F0F2F5] max-h-screen xl:grid-cols-2 px-10 gap-5 py-5">
          {equipmentData.map((e, i) => (
            <EquipmentCard equipmentData={equipmentData[i]} key={i} />
          ))}
        </div>
      </section>
    </Layout>
  );
}
