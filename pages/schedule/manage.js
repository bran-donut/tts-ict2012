import { useEffect, useState } from "react";
import MainHeader from "../../components/MainHeader";
import SubHeader from "../../components/SubHeader";
import Layout from "../../layouts/Layout";
import { useRouter } from "next/router";
import { FilterOutlined, AlignLeftOutlined } from "@ant-design/icons";
import React from "react";
import { ItemCard, ItemWrapper } from "../../components/EquipmentCard";
import PopupMessage from "../../components/Modal";
import { convertDate } from "../../Helpers";
import ContainerWrapper from "../../components/ContainerWrapper";
import ActionButton from "../../components/ActionButton";

const tabs = ["Scope", "Washer (AER)"];
const actions = ["Filter By", "Sort By"];
const mainActions = ["Edit", "Add", "Remove"];

export default function ManageSchedule() {
  const router = useRouter();

  const [equipmentData, setEquipmentData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showConfirmEditModal, setShowConfirmEditModal] = useState(false);
  // const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showLoadingModal, setShowLoadingModal] = useState(false);
  const [removeConfirmation, setRemoveConfirmation] = useState(false);
  const [selectedDate, setSelectedDate] = useState();
  const [index, setIndex] = useState(0);
  const [mainActionIndex, setMainActionIndex] = useState(0);
  const [actionIndexes, setActionIndexes] = useState([]);
  const [editItem, setEditItem] = useState([]);
  const [addItem, setAddItem] = useState([]);
  const [removeItem, setRemoveItem] = useState([]);

  // const handleClickAction = (i) => {
  //   const value = actions[i];
  //   // toggle between scope and washer
  //   setActionValues((prev) => {
  //     if (value == "Scope") {
  //       // toggle scope
  //       if (actionValues.includes(value)) return prev.filter((val) => val !== value);
  //       // remove washer
  //       else return prev.concat(value).filter((val) => val !== "Washer");
  //     } else if (value == "Washer") {
  //       // toggle washer
  //       if (actionValues.includes(value)) return prev.filter((val) => val !== value);
  //       // remove scope
  //       else return prev.concat(value).filter((val) => val !== "Scope");
  //     } else return prev.concat(value);
  //   });
  // };

  const handleClickAction = (i) => {
    setActionIndexes((prev) => prev.concat(i));
  };

  const handleClickMainAction = (i) => {
    setMainActionIndex(i);
  };

  const handleEdit = (i) => {
    // const { brand, scopeType, modelNumber, serialNumber, sampleDate } = equipmentData[i];
    setShowModal(true);
    setEditItem(equipmentData[i]);
  };

  const handleSelect = (e, action) => {
    const { value, checked } = e.target;
    if (action == 'add') {
      if (checked) setAddItem((prev) => prev.concat(value));
      else setAddItem((prev) => prev.filter((val) => val !== value));
    }
    else {
      if (checked) setRemoveItem((prev) => prev.concat(value));
      else setRemoveItem((prev) => prev.filter((val) => val !== value));
    }
  };

  const handleCloseEditModal = (confirm) => {
    setShowModal(false);
    if (confirm) {
      setShowConfirmEditModal(true);
      // update relevant details
      // ....
    } else {
    }
  };

  const handleCloseEditConfirmModal = (confirm) => {
    setShowConfirmEditModal(false);
    if (!confirm) setShowModal(true);
  };

  const handleCloseModal = (confirm) => {
    // close change modal and open loading message
    setShowModal(false);
    // setShowDeleteModal(false);
    setRemoveConfirmation(confirm);
    if (confirm) {
      setShowLoadingModal(true);
    } else {
      // ...
    }
    if (confirm) {
      // ....
    } else {
      // ...
    }
  };

  const handleCloseSuccessModal = () => {
    setShowSuccessModal(false);
    setRemoveItem([]);
  }

  useEffect(() => {
    let items = window.localStorage.getItem("equipments");
    setEquipmentData(JSON.parse(items));
  }, [])

  useEffect(() => {
    setIndex(router.query.view ? tabs.indexOf(router.query.view) : 0);
    setMainActionIndex(router.query.action ? mainActions.indexOf(router.query.action) : 0);
  }, []);

  useEffect(() => {
    router.push("/schedule/manage?view=" + tabs[index] + "&action=" + mainActions[mainActionIndex], undefined, { shallow: true });
    // reset array
    setEditItem([]);
    setAddItem([]);
    setRemoveItem([]);
  }, [index, mainActionIndex]);

  useEffect(() => {
    console.log("adding", addItem, "removing", removeItem);
  }, [addItem, removeItem]);

  useEffect(() => {
    // display success modal after loading modal is closed
    if (removeConfirmation && !showLoadingModal) {
      setShowSuccessModal(true);
    }
  }, [removeConfirmation, showLoadingModal])

  return (
    <Layout>
      <MainHeader heading="Schedule" description="Equipment sampling forecast" />
      <SubHeader
        heading={((mainActionIndex == 0 && "Edit") || (mainActionIndex == 1 && "Add to") || (mainActionIndex == 2 && "Remove from")) + " Sample Schedule"}
        description="Displays equipment to be added to the schedule"
        breadCrumbItems={["Home", "Schedule"]}
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
          {/* <button onClick={() => setIndex(0)} className={`${tab[index] == tab[0] ? "text-tts-blue pb-3 font-bold border-b-2 border-tts-blue" : "text-black"} text-md md:text-base`}>{`${tab == 'null' ? "" : tab[0]}`}</button>
                    <button onClick={() => setIndex(1)} className={`${tab[index] == tab[1] ? "text-tts-blue pb-3 font-bold border-b-2 border-tts-blue" : "text-black"} mx-10 text-md md:text-base`}>{`${tab == 'null' ? "" : tab[1]}`}</button> */}
          <div className="flex items-center gap-4 ">
            {mainActions.map((action, i) => (
              <ActionButton
                key={i}
                index={i}
                active={i == mainActionIndex}
                name={action}
                onClickAction={handleClickMainAction}
              />
            ))}
            {actions.map((action, i) => (
              <ActionButton
                key={i}
                index={i}
                active={actionIndexes.includes(i)}
                name={action}
                icon={i == 0 ? <FilterOutlined /> : <AlignLeftOutlined />}
                onClickAction={handleClickAction}
              />
            ))}
          </div>
        </div>
      </SubHeader>
      <ContainerWrapper>
        {/* {index == 1 ? (
          <ItemWrapper>
            {equipmentData.map((item, i) => {
              let display = false;
              if (actionValues.includes("Scope")) {
                if (item.scopeType) display = true;
              }
              // only display scope
              else if (actionValues.includes("Washer")) {
                if (!item.scopeType) display = true;
              } else display = true;
              if (display && !item.sampleDate)
                return <ItemCard key={i} index={i} data={item} titles={["Frequency"]} keys={["frequency"]} select={true} onChangeCheck={handleAdd} />;
            })}
          </ItemWrapper>
        ) : (
          <ItemWrapper
            items={equipmentData}
            currentAction={actionValues}
            titles={["Frequency", "Next Sample Date"]}
            keys={["frequency", "sampleDate"]}
            edit={index == 0}
            select={index > 0}
            onClickEdit={handleEdit}
            onChangeCheck={handleRemove}
          />
        )} */}
        <ItemWrapper>
          {equipmentData.map(
            (val, i) => {
              // scope type determines which is scope / washer. Washer does not have scopeType
              if ((index == 0 && val.scopeType) || (index == 1 && !val.scopeType)) {
                if (mainActionIndex == 0) {
                  return (
                    <ItemCard
                      key={i}
                      index={i}
                      data={val}
                      titles={["Frequency"]}
                      keys={["frequency"]}
                      edit={true}
                      onClickEdit={handleEdit}
                    />
                  )
                }
                else if (mainActionIndex == 1) {
                  return (
                    <ItemCard
                      key={i}
                      index={i}
                      data={val}
                      titles={["Frequency"]}
                      keys={["frequency"]}
                      select={true}
                      resetCheck={mainActionIndex}
                      onChangeCheck={(e) => handleSelect(e, 'add')}
                    />
                  )
                }
                else return (
                  <ItemCard
                    key={i}
                    index={i}
                    data={val}
                    titles={["Frequency", "Next Sample Date"]}
                    keys={["frequency", "sampleDate"]}
                    select={true}
                    resetCheck={mainActionIndex}
                    onChangeCheck={(e) => handleSelect(e, 'remove')}
                  />
                )
              }
            }
          )}
          </ItemWrapper>
      </ContainerWrapper>
      <div className="flex flex-col items-center justify-end w-full gap-10 px-5 py-5 bg-white md:flex-row">
        {/* <Link href="/schedule">
          <a className="text-black hover:text-black/80 hover:cursor-pointer hover:underline">Back</a>
        </Link> */}
        {mainActions[mainActionIndex] == 'Add' && (
          <button
            type="submit"
            onClick={() => (addItem.length ? setShowModal(true) : null)}
            className={`px-5 py-2 text-white transition-colors duration-150 border-2 rounded-sm ${addItem.length ? "bg-tts-red hover:bg-tts-red/80 border-tts-red" : "bg-gray-400 border-gray-400 cursor-default"
              }`}
          >
            Add
          </button>
        )}

        {mainActions[mainActionIndex] == 'Remove' && (
          <button
            type="submit"
            onClick={() => (removeItem.length ? setShowModal(true) : null)}
            className={`px-5 py-2 text-white transition-colors duration-150 border-2 rounded-sm ${removeItem.length ? "bg-tts-red hover:bg-tts-red/80 border-tts-red" : "bg-gray-400 border-gray-400 cursor-default"
              }`}
          >
            Remove
          </button>
        )}
      </div>

      {showModal && (
        <>
          {mainActionIndex == 0 && (
            <PopupMessage heading="Edit Next Sample Date" description="" leftText="Cancel" rightText="Done" onClickClose={handleCloseEditModal}>
              <table cellPadding="9" className="mx-8 mb-10 text-left table-fixed">
                <tbody>
                  <tr className="border-b border-gray-200">
                    <th className="bg-gray-100">Brand</th>
                    <td>{editItem.brand}</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <th className="bg-gray-100">Scope Type</th>
                    <td>{editItem.scopeType}</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <th className="bg-gray-100">Model Number</th>
                    <td>{editItem.modelNumber}</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <th className="bg-gray-100">Serial Number</th>
                    <td>{editItem.serialNumber}</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <th className="bg-gray-100">Next Sample Date</th>
                    <td className="flex items-center">
                      <input
                        type="date"
                        value={selectedDate || convertDate(editItem.sampleDate, true)}
                        className="relative flex items-center w-full p-2 border-2 border-gray-300 rounded-md input-group"
                        onChange={(e) => setSelectedDate(e.target.value)}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </PopupMessage>
          )}
          {mainActionIndex == 1 && (
            <PopupMessage
              heading="Add to Sample Schedule"
              description="Are you sure you want to add the equipments to sample schedule?"
              leftText="Cancel"
              rightText="Add"
              onClickClose={handleCloseModal}
            />
          )}
          {mainActionIndex == 2 && (
            <PopupMessage
              heading="Remove from Sample Schedule"
              description="Are you sure you want to remove the equipments from Sample Schedule?"
              leftText="Cancel"
              rightText="Remove"
              onClickClose={handleCloseModal}
            />
          )}
        </>
      )}

      {/* confirm edit changes modal */}
      {showConfirmEditModal && (
        <PopupMessage
          heading="Edit Sample Schedule"
          description="Do you want to save the changes to Sample Schedule?"
          leftText="Cancel"
          rightText="Done"
          onClickClose={handleCloseEditConfirmModal}
        />
      )}
    </Layout>
  );
}
