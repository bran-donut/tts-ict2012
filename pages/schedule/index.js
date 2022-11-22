import Layout from "../../layouts/Layout";
import MainHeader from "../../components/MainHeader";
import SubHeader from "../../components/SubHeader";
import { useEffect, useRef, useState } from "react";
import { CalendarOutlined, FilterOutlined, FileTextOutlined } from "@ant-design/icons";
import { sampleSchedule } from "../../Constants";
import EquipmentCard, { ItemCard, ItemWrapper } from "../../components/EquipmentCard";
import Router, { useRouter } from "next/router";
import ActionButton from "../../components/ActionButton";
import { Calendar, Badge } from "antd";
import ContainerWrapper from "../../components/ContainerWrapper";

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
  const router = useRouter();
  const scrollRef = useRef();
  const todayRef = useRef();

  const [index, setIndex] = useState(0);
  const [equipmentData, setEquipmentData] = useState([]);
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

  const handleClickCard = (i) => {
    router.push("/inventory/details?index=" + i);
  }

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
    let step;
    if (equipmentData[i].scopeType) type = "scope";
    else type = "washer";

    let savedItems = JSON.parse(window.localStorage.getItem("savedstate"+i));
    savedItems["dryingFinished"] === "true" ? step = "/sampling" : step = "/cleaning";

    Router.push({
      pathname: "/record/" + type + step,
      query: { index: i },
    });
  };
  

  const scrollToToday = () => {
    scrollRef.current.scrollTo({
      top: todayRef.current.offsetTop - 490
    })
    // let scrollY = window.scrollY;
    // todayRef.current.scrollIntoView();
    // window.scrollTo({
    //   top: scrollY
    // });
  }

  useEffect(() => {
    let items = window.localStorage.getItem("equipments");
    setEquipmentData(JSON.parse(items));
  }, [])

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
            {index == 0 ?
              actions.map((action, i) => (
                <ActionButton
                  key={i}
                  index={i}
                  name={action}
                  // active={actionValues.includes(actions[i])}
                  onClickAction={handleClickAction}
                  // icon={i == 0 ? <RightOutlined /> : i == 1 ? <CalendarOutlined /> : <FilterOutlined />} 
                  icon={(i == 1 && <CalendarOutlined />) || (i == 2 && <FilterOutlined />)} // removed jump to date icon
                />
              ))
              :
              // only filter for off schedule
              <ActionButton
                name={actions[2]}
                onClickAction={handleClickAction}
                icon={<FilterOutlined />}
              />
            }
          </div>
        </div>
      </SubHeader>
      {index == 0 ?
        view == "View by: Day" ? (
          <div className="bg-gray-300 px-28">
            <div ref={scrollRef} className="max-h-screen px-8 py-4 overflow-y-auto bg-tts-background">
              {[...Array(30)].map((e, i) =>
                <div key={i}>
                  <div ref={i + 1 == 17 ? todayRef : null} className="w-full h-3 my-3 border-b border-gray-300">
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
        )
        :
        <ContainerWrapper>
          <ItemWrapper>
            <EquipmentCard key={1} index={1} equipmentData={equipmentData[1]} onClickCard={handleClickCard} />
            <EquipmentCard key={2} index={2} equipmentData={equipmentData[2]} onClickCard={handleClickCard} />
          </ItemWrapper>
        </ContainerWrapper>
      }
    </Layout>
  );
}