import Layout from "../../layouts/Layout";
import MainHeader from "../../components/MainHeader";
import SubHeader from "../../components/SubHeader";
import { useState } from "react";
import { RightOutlined, CalendarOutlined, FilterOutlined, FileTextOutlined } from "@ant-design/icons";
import ContainerWrapper from "../../components/ContainerWrapper";
import { equipments } from "../../Constants";
import { ItemCard, ItemWrapper } from "../../components/EquipmentCard";
import Router from "next/router";
import ActionButton from "../../components/ActionButton";
import { Calendar, Badge } from "antd";

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
  const [actionValues, setActionValues] = useState([]);
  const [view, setView] = useState("View by: Day");

  const getListData = (value) => {
    let listData;
    switch (value.date()) {
      case 8:
        listData = [
          {
            type: 'warning',
            content: 'Scope',
          },
          {
            type: 'success',
            content: 'Scope',
          },
        ];
        break;
      case 10:
        listData = [
          {
            type: 'warning',
            content: 'Scope',
          },
          {
            type: 'success',
            content: 'Scope',
          },
          {
            type: 'error',
            content: 'Scope',
          },
        ];
        break;
      case 15:
        listData = [
          {
            type: 'warning',
            content: 'Scope',
          },
          {
            type: 'success',
            content: 'Washer (AER)',
          },
          {
            type: 'error',
            content: 'Washer (AER)',
          },
          {
            type: 'error',
            content: 'Washer (AER)',
          },
          {
            type: 'error',
            content: 'Scope',
          },
          {
            type: 'error',
            content: 'Scope',
          },
        ];
        break;
      default:
    }
    return listData || [];
  };
  const getMonthData = (value) => {
    if (value.month() === 8) {
      return 1394;
    }
  };

  const monthCellRender = (value) => {
    const num = getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  };
  const dateCellRender = (value) => {
    const listData = getListData(value);
    return (
      <ul className="events">
        {listData.map((item) => (
          <li key={item.content}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))}
      </ul>
    );
  };

  const handleClickAction = (i) => {
    const value = actions[i];
    setActionValues((prev) => prev.concat(value));
    switch (value) {
      case "View by: Day":
        actions[1] = "View by: Month";
        setView(() => "View by: Month");
        break;
      case "View by: Month":
        actions[1] = "View by: Day";
        setView(() => "View by: Day");
        break;
    }
  };

  const handleEdit = (i) => {
    let type;
    if (equipmentData[i].scopeType) type = "scope";
    else type = "washer";

    Router.push({
      pathname: "/record/" + type + "/cleaning",
      query: { index: i },
    });
  };

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
                className={`${i == index ? "text-tts-blue pb-4 font-bold border-b-2 border-tts-blue" : "text-black"} text-md md:text-base mr-10`}
                onClick={() => setIndex(i)}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-4 ">
            {actions.map((action, i) => (
              <ActionButton
                key={i}
                index={i}
                name={action}
                active={actionValues.includes(actions[i])}
                onClickAction={handleClickAction}
                icon={i == 0 ? <RightOutlined /> : i == 1 ? <CalendarOutlined /> : <FilterOutlined />}
              />
            ))}
          </div>
        </div>
      </SubHeader>

      {view == "View by: Day" ? (
        <ContainerWrapper>
          <ItemWrapper>
            {equipmentData.map((e, i) => (
              <ItemCard data={equipmentData[i]} key={i} isSchedule={true} icon={<FileTextOutlined />} onClickEdit={() => handleEdit(i)} />
            ))}
          </ItemWrapper>
        </ContainerWrapper>
      ) : (
        <div className="pt-2 pb-32 px-40 relative bg-tts-background">
          <div className="flex gap-10 absolute top-6 ml-4">
            <Badge status="error" text="Awaiting Sample" />
            <Badge status="warning" text="Pending Result" />
            <Badge status="success" text="Regular" />
          </div>
          <Calendar dateCellRender={dateCellRender} monthCellRender={monthCellRender} />
        </div>
      )}

    </Layout>
  );
}
