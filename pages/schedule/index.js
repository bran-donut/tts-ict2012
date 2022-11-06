import Layout from "../../layouts/Layout";
import MainHeader from "../../components/MainHeader";
import SubHeader from "../../components/SubHeader";
import { useState } from "react";
import { ActionButton } from "./manage";
import { RightOutlined, CalendarOutlined, AlignLeftOutlined, FilterOutlined } from "@ant-design/icons";
import ContainerWrapper from "../../components/ContainerWrapper";
import { equipments } from "../../Constants";
import EquipmentCard from "../../components/EquipmentCard";

const tabs = ["Sample Schedule", "Off Schedule"];
const actions = ["Jump to date", "View by: Day", "Filter By"];

const headerDetails = [
  {
    title: "Today",
    subtitle: "2",
  },
  {
    title: "This Week",
    subtitle: "7",
  },
  {
    title: "This Month",
    subtitle: "20",
  },
];

export default function ViewSchedule() {
  const [index, setIndex] = useState(0);
  const [equipmentData, setEquipmentData] = useState(equipments);

  return (
    <Layout>
      <MainHeader heading="Schedule" description="Displaying all equipment inside the sampling schedule calendar" details={headerDetails} />
      <SubHeader
        heading="View Schedule"
        description="Display all the equipment under the regular sampling schedule"
        breadCrumbItems={["Home", "Schedule"]}
      >
        <div className="flex items-center justify-between w-full pt-3">
          <div className="mt-2">
            {tabs.map((tab, i) => (
              <button
                key={i}
                className={`${i == index ? "text-blue-600 pb-4 font-bold border-b-2 border-indigo-500" : "text-black"} mr-10 text-lg`}
                onClick={() => setIndex(i)}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-4 ">
            {actions.map((action, i) => (
              <ActionButton key={i} index={i} name={action} icon={i == 0 ? <RightOutlined /> : i == 1 ? <CalendarOutlined /> : <FilterOutlined />} />
            ))}
          </div>
        </div>
      </SubHeader>
      <ContainerWrapper>
        <div className="grid grid-cols-1 gap-4 gap-y-0 bg-tts-background xl:grid-cols-2">
          {equipmentData.map(
            (e, i) =>
              // scope type determines which is scope / washer. Washer does not have scopeType
              ((index == 0 && e.scopeType) || (index == 1 && !e.scopeType)) && <EquipmentCard equipmentData={equipmentData[i]} key={i} /> //: <EquipmentCard equipmentData={equipmentData[i]} key={i} />
          )}
        </div>
        {/* <ItemWrapper
          items={equipments}
          currentAction={tabs[index]}
        /> */}
      </ContainerWrapper>
    </Layout>
  );
}
