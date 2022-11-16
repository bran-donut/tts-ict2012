import Layout from "../../layouts/Layout";
import { useEffect, useState } from "react";
import EquipmentCard, { ItemWrapper } from "../../components/EquipmentCard";
import MainHeader from "../../components/MainHeader";
import { equipments } from "../../Constants";
import SubHeader, { SubHeaderButton } from "../../components/SubHeader";
import { AlignLeftOutlined, FilterOutlined } from "@ant-design/icons";
import { exportCSVFile } from "../../Helpers";
import { useRouter } from "next/router";
import ContainerWrapper from "../../components/ContainerWrapper";
import ActionButton from "../../components/ActionButton";

const tabs = ["Scope", "Washer (AER)"];
const actions = ["Filter By", "Sort By"];

export default function ViewInventory() {
  const router = useRouter();

  const [equipmentData, setEquipmentData] = useState(equipments);
  const [index, setIndex] = useState(0);
  const [actionValues, setActionValues] = useState([]);

  const handleClickAction = (i) => {
    const value = actions[i];
    setActionValues((prev) => prev.concat(value));
  };

  const handleClickExport = () => {
    console.log("exporting...");
    let headers = {
      brand: "brand",
      scopeType: "scopeType",
      modelNumber: "modelNumber",
      serialNumber: "serialNumber",
      status: "status",
      frequency: "frequency",
      sampleDate: "sampleDate",
    };
    exportCSVFile(headers, equipments, "");
  };

  const handleClickCard = (i) => {
    router.push("/inventory/details?index=" + i);
  }

  useEffect(() => {
    console.log(router.query.view);
    setIndex(router.query.view ? tabs.indexOf(router.query.view) : 0);
  }, [router.query.view]);

  useEffect(() => {
    console.log(index);
    router.push("/inventory?view=" + tabs[index], undefined, { shallow: true });
  }, [index]);

  return (
    <Layout>
      <MainHeader
        heading="Inventory"
        description="View all the equipment and miscellaneous inside the system"
        details={[{ title: "Total Equipment in Inventory", subtitle: equipments.length }]}
      />
      <SubHeader
        heading={tabs[index]}
        description="Displays all equipment inside the system"
        breadCrumbItems={["Home", "Inventory"]}
        button={<SubHeaderButton text="Export Inventory as CSV" onClickAction={handleClickExport} />}
      >
        <div className="flex items-center justify-between w-full pt-3">
          <div className="mt-2">
            <button
              onClick={() => setIndex(0)}
              className={`${index == 0 ? "text-tts-blue pb-4 font-bold border-b-2 border-tts-blue" : "text-black"} text-md md:text-base`}
            >{tabs[0]}</button>
            <button
              onClick={() => setIndex(1)}
              className={`${index == 1 ? "text-tts-blue pb-4 font-bold border-b-2 border-tts-blue" : "text-black"
                } mx-10 text-md md:text-base`}
            >{tabs[1]}</button>
          </div>
          <div className="flex items-center gap-4 ">
            {actions.map((action, i) => (
              <ActionButton
                key={i}
                index={i}
                active={actionValues.includes(actions[i])}
                name={action}
                icon={i == 0 ? <FilterOutlined /> : <AlignLeftOutlined />}
                onClickAction={handleClickAction}
              />
            ))}
          </div>
        </div>
      </SubHeader>
      {/* <section className={`${tabs[index] == "Scope" ? "visible" : "invisible"} bg-[#C1C1C1] px-20`}>
        <div className="grid grid-cols-1 gap-y-0 overflow-y-scroll bg-[#F0F2F5] max-h-screen xl:grid-cols-2 px-10 gap-5 py-5">
          {equipmentData.map((e, i) => (
            <EquipmentCard equipmentData={equipmentData[i]} key={i} />
          ))}
        </div>
      </section> */}
      <ContainerWrapper>
        <ItemWrapper>
          {equipmentData.map(
            (e, i) =>
              // scope type determines which is scope / washer. Washer does not have scopeType
              ((index == 0 && e.scopeType) || (index == 1 && !e.scopeType)) && <EquipmentCard key={i} index={i} equipmentData={equipmentData[i]} onClickCard={handleClickCard} /> //: <EquipmentCard equipmentData={equipmentData[i]} key={i} />
          )}
        </ItemWrapper>
        {/* <ItemWrapper
          items={equipments}
          currentAction={tabs[index]}
        /> */}
      </ContainerWrapper>
      <div className="flex flex-col items-center justify-end w-full gap-10 px-5 py-5 bg-white md:flex-row"></div>
    </Layout>
  );
}
