import { useEffect, useState } from "react";
import MainHeader from "../components/MainHeader";
import SubHeader from "../components/SubHeader";
import Layout from "../layouts/Layout";
import { useRouter } from "next/router";
import { FilterOutlined, AlignLeftOutlined } from "@ant-design/icons";
import React from "react";
import { ItemCard, ItemWrapper } from "../components/EquipmentCard";
import PopupMessage from "../components/Modal";
import Link from "next/link";
import { equipments } from "../Constants";
import { convertDate } from "../Helpers";
import ContainerWrapper from "../components/ContainerWrapper";

const tabs = ["Edit", "Add", "Remove"];
const actions = ["Scope", "Washer", "Filter By", "Sort By"];

export default function Schedule() {
  const router = useRouter();

  const [index, setIndex] = useState(0);
  const [actionValues, setActionValues] = useState([]);
  const [editItem, setEditItem] = useState([]);
  const [addItem, setAddItem] = useState([]);
  const [removeItem, setRemoveItem] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showConfirmEditModal, setShowConfirmEditModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState();

  const handleClickAction = (i) => {
    const value = actions[i];
    // toggle between scope and washer
    setActionValues((prev) => {
      if (value == "Scope") {
        // toggle scope
        if (actionValues.includes(value)) return prev.filter((val) => val !== value);
        // remove washer
        else return prev.concat(value).filter((val) => val !== "Washer");
      } else if (value == "Washer") {
        // toggle washer
        if (actionValues.includes(value)) return prev.filter((val) => val !== value);
        // remove scope
        else return prev.concat(value).filter((val) => val !== "Scope");
      } else return prev.concat(value);
    });
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
    setShowModal(false);
    if (confirm) {
      // ....
    } else {
      // ...
    }
  };

  const handleEdit = (i) => {
    // const { brand, scopeType, modelNumber, serialNumber, sampleDate } = equipments[i];
    setShowModal(true);
    setEditItem(equipments[i]);
  };

  const handleAdd = (e) => {
    const { value, checked } = e.target;
    if (checked) setAddItem((prev) => prev.concat(value));
    else setAddItem((prev) => prev.filter((val) => val !== value));
  };

  const handleRemove = (e) => {
    const { value, checked } = e.target;
    if (checked) setRemoveItem((prev) => prev.concat(value));
    else setRemoveItem((prev) => prev.filter((val) => val !== value));
  };

  useEffect(() => {
    setIndex(router.query.action ? tabs.indexOf(router.query.action) : 0);
  }, [router.query.action]);

  useEffect(() => {
    router.push("/schedule?action=" + tabs[index], undefined, { shallow: true });
    // reset array
    setEditItem([]);
    setAddItem([]);
    setRemoveItem([]);
  }, [index]);

  useEffect(() => {
    console.log("adding", addItem, "removing", removeItem);
  }, [addItem, removeItem]);

  return (
    <Layout>
      <MainHeader heading="Schedule" description="Equipment sampling forecast" />
      <SubHeader
        heading={((index == 0 && "Edit") || (index == 1 && "Add to") || (index == 2 && "Remove from")) + " Sample Schedule"}
        description="Displays equipment to be added to the schedule"
        breadCrumbItems={["Home", "Schedule", tabs[index]]}
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
          {/* <button onClick={() => setIndex(0)} className={`${tab[index] == tab[0] ? "text-blue-600 pb-3 font-bold border-b-2 border-indigo-500" : "text-black"} text-md md:text-base`}>{`${tab == 'null' ? "" : tab[0]}`}</button>
                    <button onClick={() => setIndex(1)} className={`${tab[index] == tab[1] ? "text-blue-600 pb-3 font-bold border-b-2 border-indigo-500" : "text-black"} mx-10 text-md md:text-base`}>{`${tab == 'null' ? "" : tab[1]}`}</button> */}
          <div className="flex items-center gap-4 ">
            {actions.map((action, i) => (
              <ActionButton
                key={i}
                index={i}
                active={actionValues.includes(actions[i])}
                name={action}
                icon={i >= 2 && (i == 2 ? <FilterOutlined /> : <AlignLeftOutlined />)}
                onClickAction={handleClickAction}
              />
            ))}
          </div>
        </div>
      </SubHeader>
      <ContainerWrapper>
        {index == 1 ? (
          <ItemWrapper>
            {equipments.map((item, i) => {
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
            items={equipments}
            currentAction={actionValues}
            titles={["Frequency", "Next Sample Date"]}
            keys={["frequency", "sampleDate"]}
            edit={index == 0}
            select={index > 0}
            onClickEdit={handleEdit}
            onChangeCheck={handleRemove}
          />
        )}
      </ContainerWrapper>
      <div className="flex flex-col items-center justify-end w-full gap-10 px-5 py-5 bg-white md:flex-row">
        <Link href="/schedule?action=Edit">
          <a className="text-black hover:text-black/80 hover:cursor-pointer hover:underline">Back</a>
        </Link>
        {/* <button type="submit" className="px-10 py-2 ml-4 transition-colors duration-150 bg-white border-2 rounded-sm text-tts-red hover:bg-tts-red/80 border-tts-red">
                      Add new
                    </button> */}

        {/* edit */}
        {/* {index == 0 &&
                    <button type="submit" onClick={() => setShowModal(true)} className="px-5 py-2 text-white transition-colors duration-150 border-2 rounded-sm bg-tts-red hover:bg-tts-red/80 border-tts-red">
                        Save Changes
                    </button>
                } */}

        {/* add */}
        {index == 1 && (
          <button
            type="submit"
            onClick={() => (addItem.length ? setShowModal(true) : null)}
            className={`px-5 py-2 text-white transition-colors duration-150 border-2 rounded-sm ${addItem.length ? "bg-tts-red hover:bg-tts-red/80 border-tts-red" : "bg-gray-400 border-gray-400 cursor-default"
              }`}
          >
            Add
          </button>
        )}

        {/* remove */}
        {index == 2 && (
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
          {index == 0 && (
            <PopupMessage heading="Edit Next Sample Date" description="" leftText="Cancel" rightText="Done" onClickClose={handleCloseEditModal}>
              <table cellPadding="9" className="mx-8 mb-10 table-fixed text-left">
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
          {index == 1 && (
            <PopupMessage
              heading="Add to Sample Schedule"
              description="Are you sure you want to add the equipments to sample schedule?"
              leftText="Cancel"
              rightText="Add"
              onClickClose={handleCloseModal}
            />
          )}
          {index == 2 && (
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

export function ActionButton({ index, active, name, icon, onClickAction, disable = false, subHeaderButton = false }) {
  const [hover, setHover] = useState(false);
  
  return (
    <button
      className={`
                px-2 flex items-center gap-2 border 
                ${subHeaderButton ? "border-[#FF9193] text-tts-red" : ""}
                ${(active && !disable || hover) ? "border-[#FF9193] text-tts-red bg-[#FF9193]/30" : "border-gray-400 text-black"}
                ${disable ? "border-gray-400 text-gray-400 cursor-default" : ""}
            `}
      onClick={() => onClickAction(index)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {icon}
      <span>{name}</span>
    </button>
  );
}