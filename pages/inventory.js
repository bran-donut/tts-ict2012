import Layout from "../layouts/Layout";
import { useState } from "react";
import EquipmentCard from "../components/EquipmentCard";
import MainHeader from "../components/MainHeader";
import { equipments } from "../components/Constants";
import SubHeader from "../components/SubHeader";

export default function Inventory() {
  const [equipmentData, setEquipmentData] = useState(equipments);

  const [header, setHeader] = useState(["Scope", "Washer (AER)"]);
  const [tab, setTab] = useState(["Scope", "Washer (AER)"]);
  const [index, setIndex] = useState(0);

  return (
    <Layout>
      <MainHeader
        heading="Inventory"
        description="View all the equipment and miscellaneous inside the system"
        details={[{ title: "Total Equipment in Inventory", subtitle: "36" }]}
      />
      <SubHeader heading={header[index]} description="Displays all equipment inside the system" breadCrumbItems={["Home", "Inventory"]}>
        <div className="pt-3">
          <button
            onClick={() => setIndex(0)}
            className={`${tab[index] == tab[0] ? "text-blue-600 pb-4 font-bold border-b-2 border-indigo-500" : "text-black"} text-md md:text-base`}
          >{`${tab == "null" ? "" : tab[0]}`}</button>
          <button
            onClick={() => setIndex(1)}
            className={`${
              tab[index] == tab[1] ? "text-blue-600 pb-4 font-bold border-b-2 border-indigo-500" : "text-black"
            } mx-10 text-md md:text-base`}
          >{`${tab == "null" ? "" : tab[1]}`}</button>
        </div>
      </SubHeader>
      {/* <div className="flex flex-col items-start justify-start w-full px-10 pt-5 bg-white">
        <Breadcrumb
          breadCrumbItems={["Home", "Inventory"]}
        />
        <h2 className="pb-3 text-3xl font-medium">{`${header ? header[index] : ""}`}</h2>
        <p className="mt-2 text-sm text-gray-500 md:text-base">Displays all equipment inside the system</p>
        <div className="py-3">
          <button onClick={() => setIndex(0)} className={`${tab[index] == tab[0] ? "text-blue-600 font-bold border-b-2 border-indigo-500" : "text-black"} text-md md:text-base`}>{`${tab == 'null' ? "" : tab[0]}`}</button>
          <button onClick={() => setIndex(1)} className={`${tab[index] == tab[1] ? "text-blue-600 font-bold border-b-2 border-indigo-500" : "text-black"} mx-10 text-md md:text-base`}>{`${tab == 'null' ? "" : tab[1]}`}</button>
        </div>
      </div> */}

      <section className={`${tab[index] == "Scope" ? "visible" : "invisible"} bg-[#C1C1C1] px-20`}>
        <div className="grid grid-cols-1 overflow-y-scroll bg-[#F0F2F5] max-h-screen xl:grid-cols-2 px-10 gap-5 py-5">
          {equipmentData.map((e, i) => (
            <EquipmentCard equipmentData={equipmentData[i]} key={i} />
          ))}
        </div>
      </section>
    </Layout>
  );
}
