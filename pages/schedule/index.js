import Layout from "../../layouts/Layout";
import MainHeader from "../../components/MainHeader";
import SubHeader from "../../components/SubHeader";
import { useEffect, useRef, useReducer, useState } from "react";
import { CalendarOutlined, FilterOutlined, FileTextOutlined } from "@ant-design/icons";
import { sampleSchedule } from "../../Constants";
import EquipmentCard, { ItemCard, ItemWrapper } from "../../components/EquipmentCard";
import Router, { useRouter } from "next/router";
import ActionButton from "../../components/ActionButton";
import { Calendar, Badge } from "antd";
import ContainerWrapper from "../../components/ContainerWrapper";
import Dropdown from "../../components/Dropdown";

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

  const [equipmentData, setEquipmentData] = useState([]);
  const [sortedData, setSortedData] = useState([]);
  const [index, setIndex] = useState(0);
  const [actionValues, setActionValues] = useState([]);
  const [view, setView] = useState("View by: Day");
  const [clearFilter, setClearFilter] = useState(false);
  const [filterValues, setFilterValues] = useState({
    0: '',
    1: '',
    2: ''
  });
  const [showFilterOptions, toggleShowFilterOptions] = useReducer(
    showFilterOptions => !showFilterOptions,
    false
  );

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

  const handleClickFilter = (filterBy, filter) => {
    setClearFilter(false);
    switch (filterBy) {
      case 0:
        setFilterValues({
          ...filterValues,
          0: filter
        })
        break;
      case 1:
        setFilterValues({
          ...filterValues,
          1: filter
        })
        break;
      case 2:
        setFilterValues({
          ...filterValues,
          2: filter
        })
        break;
      default:
        setFilterValues({
          0: '',
          1: '',
          2: ''
        })
        setClearFilter(true);
    }
  }

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
    let items = JSON.parse(window.localStorage.getItem("equipments"));
    setEquipmentData(items);
    setSortedData(items);
  }, [])

  useEffect(() => {
    if (showFilterOptions) toggleShowFilterOptions();
  }, [index])

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
          <div className="flex items-center gap-4 relative">
            {index == 0 ?
              actions.slice(0, -1).map((action, i) => (
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
              <>
                <ActionButton
                  name={actions[2]}
                  onClickAction={toggleShowFilterOptions}
                  icon={<FilterOutlined />}
                />
                {showFilterOptions &&
                  <div className="absolute w-[200%] top-10 right-0 bg-white pb-2">
                    <div className="p-2">
                      <h3 className="px-4 pb-2 font-medium">Filter By</h3>
                      <hr></hr>
                    </div>
                    <div className="px-4">
                      <Dropdown
                        placeHolder="Brand"
                        menuItems={['FUJINON', 'OLYMPUS', 'PENTAX', 'STORZ']}
                        onClickSelect={(filter) => handleClickFilter(0, filter)}
                        clearValue={clearFilter}
                      />
                      <Dropdown
                        placeHolder="Scope Type"
                        menuItems={['OGD', 'OGD THERAPEUTIC', 'COLONOSCOPE', 'TRACHEAL INTUBATION']}
                        onClickSelect={(filter) => handleClickFilter(1, filter)}
                        clearValue={clearFilter}
                      />
                      <Dropdown
                        placeHolder="Status"
                        menuItems={['Regular', 'Loan', 'Post Repair', 'Repeat', 'New']}
                        onClickSelect={(filter) => handleClickFilter(2, filter)}
                        clearValue={clearFilter}
                      />
                      <button className="rounded-md bg-tts-red text-white w-1/2 mt-2 py-1" onClick={handleClickFilter}>Clear</button>
                    </div>
                  </div>
                }
              </>
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
            {sortedData.slice(0, 2).map(
              (item, i) => {
                // scope type determines which is scope / washer. Washer does not have scopeType
                let display = false;
                // filters
                if (filterValues[0] || filterValues[1] || filterValues[2]) {
                  if (
                    (!filterValues[0] || (filterValues[0] && item.brand == filterValues[0])) &&
                    (!filterValues[1] || (filterValues[1] && item.scopeType == filterValues[1].toLowerCase())) &&
                    (!filterValues[2] || (filterValues[2] && item.status == filterValues[2]))
                  ) {
                    display = true;
                  }
                  else display = false;
                }
                else display = true;
                if (display)
                  return <EquipmentCard key={i} index={i} equipmentData={sortedData[i]} onClickCard={handleClickCard} />
              }
            )}
          </ItemWrapper>
        </ContainerWrapper>
      }
    </Layout>
  );
}