import Layout from "../../layouts/Layout";
import { useEffect, useReducer, useState } from "react";
import EquipmentCard, { ItemWrapper } from "../../components/EquipmentCard";
import MainHeader from "../../components/MainHeader";
import SubHeader, { SubHeaderButton } from "../../components/SubHeader";
import { AlignLeftOutlined, FilterOutlined, SortAscendingOutlined, SortDescendingOutlined } from "@ant-design/icons";
import { exportCSVFile } from "../../Helpers";
import { useRouter } from "next/router";
import ContainerWrapper from "../../components/ContainerWrapper";
import ActionButton from "../../components/ActionButton";
import Link from "next/link";
import Dropdown from "../../components/Dropdown";

const tabs = ["Scope", "Washer (AER)"];
const actions = ["Filter By", "Sort By"];
const sortings = ['Brand', 'Scope Type', 'Model No.', 'Serial No.', 'Status', 'AER Model', 'AER Serial No.'];
const dataKeys = ['brand', 'scopeType', 'modelNumber', 'serialNumber', 'status'];

export default function ViewInventory() {
  const router = useRouter();

  const [equipmentData, setEquipmentData] = useState([]);
  const [sortedData, setSortedData] = useState([]);
  const [index, setIndex] = useState(0);
  const [sortIndex, setSortIndex] = useState(0);
  const [actionValues, setActionValues] = useState([]);
  const [clearFilter, setClearFilter] = useState(false);
  const [sortValues, setSortValues] = useState(sortings);
  const [filterValues, setFilterValues] = useState({
    0: '',
    1: '',
    2: ''
  });
  const [ascending, toggleAscending] = useReducer(
    ascending => !ascending,
    false
  );
  const [showFilterOptions, toggleShowFilterOptions] = useReducer(
    showFilterOptions => !showFilterOptions,
    false
  );
  const [showSortOptions, toggleShowSortOptions] = useReducer(
    showSortOptions => !showSortOptions,
    false
  );

  const handleClickAction = (i) => {
    const value = actions[i];
    setActionValues((prev) => prev.concat(value));
    if (value.includes('Filter')) {
      toggleShowFilterOptions();
      if (showSortOptions) toggleShowSortOptions();
    }
    else if (value.includes('Sort')) {
      toggleShowSortOptions();
      if (showFilterOptions) toggleShowFilterOptions();
    }
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
    exportCSVFile(headers, equipmentData, "");
  };

  const handleClickCard = (i) => {
    router.push("/inventory/details?index=" + i);
  }

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

  useEffect(() => {
    let items = window.localStorage.getItem("equipments");
    setEquipmentData(JSON.parse(items));
    setIndex(router.query.view ? tabs.indexOf(router.query.view) : 0);
  }, [])

  useEffect(() => {
    router.push("/inventory?view=" + tabs[index], undefined, { shallow: true });
    if (index == 0) setSortValues(sortings.slice(0, -2));
    else setSortValues(sortings.slice(-2));
    if (showSortOptions) toggleShowSortOptions();
    if (showFilterOptions) toggleShowFilterOptions();
  }, [index])

  useEffect(() => {
    const sortBy = dataKeys[sortIndex];
    const sortedData = [...equipmentData].sort((a, b) => {
      // ascendingy
      if (ascending) return a[sortBy] > b[sortBy] ? 1 : -1;
      // descending
      else return a[sortBy] < b[sortBy] ? 1 : -1;
    });
    setSortedData(sortedData);
  }, [equipmentData, ascending, sortIndex])

  return (
    <Layout>
      <MainHeader
        heading="Inventory"
        description="View all the equipment and miscellaneous inside the system"
        details={[{ title: "Total Equipment in Inventory", subtitle: equipmentData.length }]}
      />
      <SubHeader
        heading={tabs[index]}
        description="Displays all equipment inside the system"
        breadCrumbItems={["Home", "Inventory"]}
        button={<SubHeaderButton text="Export Inventory as CSV" onClickAction={handleClickExport} />}
      >
        <div className="flex items-center justify-between w-full pt-1">
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
          <div className="flex items-center gap-4 relative">
            {index == 0 && <ActionButton
              key={0}
              index={0}
              // active={actionValues.includes(actions[i])}
              name={actions[0]}
              icon={<FilterOutlined />}
              onClickAction={handleClickAction}
            />
            }
            <ActionButton
              key={1}
              index={1}
              // active={actionValues.includes(actions[i])}
              name={actions[1]}
              icon={<AlignLeftOutlined />}
              onClickAction={handleClickAction}
            />
            {showFilterOptions && index == 0 &&
              <div className="absolute w-full top-10 bg-white pb-2">
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
            {showSortOptions &&
              <div className="absolute w-full top-10 bg-white pb-2">
                <div className="p-2 px-4 flex items-center gap-1">
                  <h3 className="font-medium">Sort By</h3>
                  <button className="flex" onClick={toggleAscending}>
                    {ascending ? <SortAscendingOutlined style={{ color: 'gray' }} /> : <SortDescendingOutlined style={{ color: 'gray' }} />}
                  </button>
                </div>
                <hr></hr>
                <div className="px-4 py-2">
                  <div className="flex flex-col items-start gap-2">
                    {sortValues.map((val, i) =>
                      <div key={i} className="flex items-center gap-2">
                        <input onClick={() => setSortIndex(i)} type="radio" name={val} value={val} checked={sortIndex == i}></input>
                        <label htmlFor={val}>{val}</label>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            }
          </div>
        </div>
      </SubHeader>

      <ContainerWrapper>
        <ItemWrapper>
          {sortedData.map(
            (item, i) => {
              // scope type determines which is scope / washer. Washer does not have scopeType
              if ((index == 0 && item.scopeType) || (index == 1 && !item.scopeType)) {
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
            }
          )}
        </ItemWrapper>
      </ContainerWrapper>
      <div className="flex flex-col items-center justify-end w-full gap-10 px-5 py-5 bg-white md:flex-row">
        <Link href={`/inventory/add?view=${tabs[index]}`}>
          <a className="px-5 py-2 text-white transition-colors duration-150 border-2 rounded-sm bg-tts-red hover:bg-tts-red/80 border-tts-red">Add New</a>
        </Link>
      </div>
    </Layout>
  );
}
