import Layout from "../../layouts/Layout";
import { useEffect, useReducer, useState } from "react";
import { ItemCard, ItemWrapper } from "../../components/EquipmentCard";
import MainHeader from "../../components/MainHeader";
import SubHeader, { SubHeaderButton } from "../../components/SubHeader";
import { AlignLeftOutlined, FilterOutlined, SortAscendingOutlined, SortDescendingOutlined } from "@ant-design/icons";
import { exportCSVFile, findIndex } from "../../Helpers";
import Router, { useRouter } from "next/router";
import ContainerWrapper from "../../components/ContainerWrapper";
import PopupMessage, { LoadingMessage, SuccessMessage } from "../../components/Modal";
import ActionButton from "../../components/ActionButton";
import Dropdown from "../../components/Dropdown";
import Link from "next/link";

const tabs = ["Scope", "Washer (AER)"];
const actions = ["Filter By", "Sort By"];
const mainActions = ['Edit', 'Remove'];
const sortings = ['Brand', 'Scope Type', 'Model No.', 'Serial No.', 'Status', 'AER Model', 'AER Serial No.'];
const dataKeys = ['brand', 'scopeType', 'modelNumber', 'serialNumber', 'status'];

export default function ManageInventory() {
  const router = useRouter();

  const [equipmentData, setEquipmentData] = useState([]);
  const [sortedData, setSortedData] = useState([]);
  const [showRemoveModal, setShowRemoveModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showLoadingModal, setShowLoadingModal] = useState(false);
  const [removeConfirmation, setRemoveConfirmation] = useState(false);
  const [index, setIndex] = useState(0);
  const [sortIndex, setSortIndex] = useState(0);
  const [mainActionIndex, setMainActionIndex] = useState(0);
  const [actionIndexes, setActionIndexes] = useState([]);
  const [removeItem, setRemoveItem] = useState([]);
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
    // setActionIndexes((prev) => prev.concat(i));
    if (i == 0) {
      toggleShowFilterOptions();
      if (showSortOptions) toggleShowSortOptions();
    }
    else if (i == 1) {
      toggleShowSortOptions();
      if (showFilterOptions) toggleShowFilterOptions();
    }
  };

  const handleClickMainAction = (i) => {
    setMainActionIndex(i);
  };

  const handleEdit = (i) => {
    Router.push({
      pathname: '/inventory/edit',
      query: { index: i }
    })
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

  // remove
  const handleSelect = (e) => {
    const { value, checked } = e.target;
    if (checked) setRemoveItem((prev) => prev.concat(value));
    else setRemoveItem((prev) => prev.filter((val) => val !== value));
  };

  const handleCloseModal = (confirm) => {
    // close change modal and open loading message
    setShowRemoveModal(false);
    setRemoveConfirmation(confirm);
    if (confirm) {
      setShowLoadingModal(true);
    } else {
      // ...
    }
  };

  const handleCloseSuccessModal = () => {
    setShowSuccessModal(false);
    setRemoveItem([]);
    setMainActionIndex(0);
  }

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

  useEffect(() => {
    let items = window.localStorage.getItem("equipments");
    setEquipmentData(JSON.parse(items));
    setIndex(router.query.view ? tabs.indexOf(router.query.view) : 0);
    setMainActionIndex(router.query.action ? mainActions.indexOf(router.query.action) : 0);
  }, [])

  useEffect(() => {
    router.push("/inventory/manage?view=" + tabs[index] + "&action=" + mainActions[mainActionIndex], undefined, { shallow: true });
    if (index == 0) setSortValues(sortings.slice(0, -2));
    else setSortValues(sortings.slice(-2));
    if (showSortOptions) toggleShowSortOptions();
    if (showFilterOptions) toggleShowFilterOptions();
    // reset array
    setRemoveItem([]);
  }, [index, mainActionIndex]);

  useEffect(() => {
    console.log("removing", removeItem);
  }, [removeItem]);

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

  useEffect(() => {
    // display success modal after loading modal is closed
    if (removeConfirmation && !showLoadingModal) {
      setShowSuccessModal(true);
    }
  }, [removeConfirmation, showLoadingModal])

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
            {tabs.map((tab, i) => (
              <button
                key={i}
                className={`${i == index ? "text-tts-blue pb-4 font-bold border-b-2 border-tts-blue" : "text-black"} mr-10 text-lg`}
                onClick={() => setIndex(i)}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-4 relative">
            {mainActions.map((action, i) => (
              <ActionButton
                key={i}
                index={i}
                active={i == mainActionIndex}
                name={action}
                onClickAction={handleClickMainAction}
              />
            ))}
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
                <div className="p-2 px-4 flex items-center justify-between">
                  <h3 className="font-medium">Sort By</h3>
                  <button className="flex" onClick={toggleAscending}>
                  {ascending ? <SortAscendingOutlined style={{ fontSize: '20px', color: 'gray' }} /> : <SortDescendingOutlined style={{ fontSize: '20px', color: 'gray' }} />}
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
                if (display) {
                  let originalIndex = findIndex(equipmentData, item.serialNumber); 
                  return (
                    <ItemCard
                      key={originalIndex}
                      index={originalIndex}
                      data={item}
                      edit={mainActionIndex == 0}
                      select={mainActionIndex > 0}
                      onClickEdit={handleEdit}
                      resetCheck={mainActionIndex}
                      onChangeCheck={handleSelect}
                    />
                  )
                }
              }
            }
          )}
        </ItemWrapper>

      </ContainerWrapper>
      <div className="flex flex-col items-center justify-end w-full gap-10 px-5 py-5 bg-white md:flex-row">
        {/* <Link href="/inventory">
          <a className="text-black hover:text-black/80 hover:cursor-pointer hover:underline">Back</a>
        </Link> */}
        
        {mainActions[mainActionIndex] == 'Remove' ?
          <button
            type="submit"
            onClick={() => (removeItem.length ? setShowRemoveModal(true) : null)}
            className={`px-5 py-2 text-white transition-colors duration-150 border-2 rounded-sm ${removeItem.length ? "bg-tts-red hover:bg-tts-red/80 border-tts-red" : "bg-gray-400 border-gray-400 cursor-default"
              }`}
          >
            Remove
          </button>
          :
          <Link href={`/inventory/add?view=${tabs[index]}`}>
            <a className="px-5 py-2 text-white transition-colors duration-150 border-2 rounded-sm bg-tts-red hover:bg-tts-red/80 border-tts-red">Add New</a>
          </Link>
        }
      </div>

      {showRemoveModal &&
        <PopupMessage
          heading="Are you sure you want to delete?"
          description={`Selected ${removeItem.length} items`}
          leftText="No"
          rightText="Yes"
          onClickClose={handleCloseModal}
        />
      }

      {showLoadingModal && <LoadingMessage onClose={() => setShowLoadingModal(false)} />}

      {showSuccessModal && <SuccessMessage text={`${removeItem.length} Item has been removed`} onClose={handleCloseSuccessModal} />}
    </Layout>
  );
}
