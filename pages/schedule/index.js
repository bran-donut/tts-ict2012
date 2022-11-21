import Layout from "../../layouts/Layout";
import MainHeader from "../../components/MainHeader";
import SubHeader from "../../components/SubHeader";
import { useRef, useState } from "react";
import { RightOutlined, CalendarOutlined, FilterOutlined, FileTextOutlined } from "@ant-design/icons";
import ContainerWrapper from "../../components/ContainerWrapper";
import { equipments, sampleSchedule } from "../../Constants";
import { ItemCard, ItemWrapper } from "../../components/EquipmentCard";
import Router from "next/router";
import ActionButton from "../../components/ActionButton";
import { Calendar, Badge } from "antd";

const tabs = ["Sample Schedule", "Off Schedule"];
const actions = ["Jump to date", "View by: Day", "Filter By"];

const headerDetails = [
  {
    title: "Today",
    subtitle: "4",
  },
  {
    title: "This Week",
    subtitle: "28",
  },
  {
    title: "This Month",
    subtitle: "120",
  },
];

export default function ViewSchedule() {
  const scrollRef = useRef();
  const todayRef = useRef();

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
      case "Jump to date":
        scrollToToday();
        break;
    }
  };

  const handleEdit = (i) => {
    let type;
    if (equipmentData[i].scopeType) type = "scope";
    else type = "washer";

    let formSubmitted = window.localStorage.getItem('FORM_SUBMITTED' + i);
    let step;
    window.localStorage.setItem('EQUIPMENT', i);
    formSubmitted === "true" ? step = "/sampling" : step = "/cleaning";

    Router.push({
      pathname: "/record/" + type + step,
      query: { index: i },
    });
  };

  const scrollToToday = () => {
    scrollRef.current.scrollTo({
      top: todayRef.current.offsetTop - 480
    })
  }

  return (
    <Layout>
      <MainHeader heading="Schedule" description="Displaying all equipment inside the sampling schedule calendar" details={headerDetails} />
      <SubHeader
        heading="View Schedule"
        description="Display all the equipment under the regular sampling schedule"
        breadCrumbItems={["Home", "Schedule"]}
      >
        <div className="flex items-center justify-between w-full pt-1">
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
                // active={actionValues.includes(actions[i])}
                onClickAction={handleClickAction}
                // icon={i == 0 ? <RightOutlined /> : i == 1 ? <CalendarOutlined /> : <FilterOutlined />} 
                icon={(i == 1 && <CalendarOutlined />) || (i == 2 && <FilterOutlined />)} // removed jump to date icon
              />
            ))}
          </div>
        </div>
      </SubHeader>

      {view == "View by: Day" ? (
        <div className="bg-gray-300 px-28">
          <div ref={scrollRef} className="py-4 px-8 bg-tts-background overflow-y-auto max-h-screen">
            {[...Array(30)].map((e, i) =>
              <div key={i}>
                <div ref={i + 1 == 17 ? todayRef : null} className="w-full my-3 h-3 border-b border-gray-300">
                  <div className={`pl-2 pr-4 ml-4 bg-tts-background w-fit ${i + 1 == 17 ? 'text-tts-red font-bold' : ''}`}>{(i + 1 == 16 && 'Yesterday,') || (i + 1 == 17 && 'Today,')} {i + 1} Nov 22</div>
                </div>
                <ItemWrapper className="px-4">
                  {[...Array(4)].map((e, i) =>
                    <ItemCard data={sampleSchedule} key={i} isSchedule={true} icon={<FileTextOutlined />} onClickEdit={() => handleEdit(1)} />
                  )}
                </ItemWrapper>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="relative px-40 pt-2 pb-32 bg-tts-background">
          <div className="absolute flex gap-10 ml-4 top-6">
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
