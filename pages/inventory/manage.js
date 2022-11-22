import Layout from "../../layouts/Layout";
import { useEffect, useState } from "react";
import { ItemCard, ItemWrapper } from "../../components/EquipmentCard";
import MainHeader from "../../components/MainHeader";
import SubHeader, { SubHeaderButton } from "../../components/SubHeader";
import { AlignLeftOutlined, FilterOutlined } from "@ant-design/icons";
import { exportCSVFile } from "../../Helpers";
import Router, { useRouter } from "next/router";
import ContainerWrapper from "../../components/ContainerWrapper";
import PopupMessage, { LoadingMessage, SuccessMessage } from "../../components/Modal";
import ActionButton from "../../components/ActionButton";

const tabs = ["Scope", "Washer (AER)"];
const actions = ["Filter By", "Sort By"];
const mainActions = ['Edit', 'Remove'];

export default function ManageInventory() {
  const router = useRouter();

  const [equipmentData, setEquipmentData] = useState([]);
  const [showRemoveModal, setShowRemoveModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showLoadingModal, setShowLoadingModal] = useState(false);
  const [removeConfirmation, setRemoveConfirmation] = useState(false);
  const [index, setIndex] = useState(0);
  const [mainActionIndex, setMainActionIndex] = useState(0);
  const [actionIndexes, setActionIndexes] = useState([]);
  const [removeItem, setRemoveItem] = useState([]);

  const handleClickAction = (i) => {
    setActionIndexes((prev) => prev.concat(i));
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
  }, [])

  useEffect(() => {
    setIndex(router.query.view ? tabs.indexOf(router.query.view) : 0);
    setMainActionIndex(router.query.action ? mainActions.indexOf(router.query.action) : 0);
  }, [router.query]);

  useEffect(() => {
    router.push("/inventory/manage?view=" + tabs[index] + "&action=" + mainActions[mainActionIndex], undefined, { shallow: true });
    // reset array
    setRemoveItem([]);
  }, [mainActionIndex]);

  useEffect(() => {
    console.log("removing", removeItem);
  }, [removeItem]);

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
        <ItemWrapper>
          {equipmentData.map(
            (val, i) => (
              // scope type determines which is scope / washer. Washer does not have scopeType
              (index == 0 && val.scopeType) || (index == 1 && !val.scopeType)) && //<EquipmentCard equipmentData={equipmentData[i]} key={i} /> 
              <ItemCard
                key={i}
                index={i}
                data={val}
                edit={mainActionIndex == 0}
                select={mainActionIndex > 0}
                onClickEdit={handleEdit}
                onChangeCheck={handleSelect}
              />
          )}
        </ItemWrapper>

      </ContainerWrapper>
      <div className="flex flex-col items-center justify-end w-full gap-10 px-5 py-5 bg-white md:flex-row">
        {/* <Link href="/inventory">
          <a className="text-black hover:text-black/80 hover:cursor-pointer hover:underline">Back</a>
        </Link> */}
        {mainActions[mainActionIndex] == 'Remove' && (
          <button
            type="submit"
            onClick={() => (removeItem.length ? setShowRemoveModal(true) : null)}
            className={`px-5 py-2 text-white transition-colors duration-150 border-2 rounded-sm ${removeItem.length ? "bg-tts-red hover:bg-tts-red/80 border-tts-red" : "bg-gray-400 border-gray-400 cursor-default"
              }`}
          >
            Remove
          </button>
        )}
      </div>

      {showRemoveModal &&
        <PopupMessage
          heading="Are you sure delete?"
          description={`Selected ${removeItem.length} items`}
          leftText="No"
          rightText="Yes"
          onClickClose={handleCloseModal}
        />
      }

      {showLoadingModal && <LoadingMessage onClose={() => setShowLoadingModal(false)} />}

      {showSuccessModal && <SuccessMessage text={`${removeItem.length} Item has been added`} onClose={handleCloseSuccessModal} />}
    </Layout>
  );
}
