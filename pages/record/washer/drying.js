import Layout from "../../../layouts/Layout";
import { useEffect, useState } from "react";
import Router, { useRouter } from "next/router";
import Dropdown from "../../../components/Dropdown";
import MainHeader from "../../../components/MainHeader";
import SubHeader from "../../../components/SubHeader";
import PopupMessage from "../../../components/Modal";

export default function Drying() {
  const router = useRouter();
  const [showExitModal, setShowExitModal] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [allowSubmit, setAllowSubmit] = useState(false);
  const [charCount, setCharCount] = useState(0);
  const [equipmentData, setEquipmentData] = useState([]);

  useEffect(() => {
    let items = JSON.parse(window.localStorage.getItem("equipments"));
    const item = items[router.query.index];
    setEquipmentData(item);
  }, [])

  const handleReturn = (i) => {
    let type;
    if (equipmentData.scopeType) type = "scope";
    else type = "washer";

    Router.push({
      pathname: "/record/" + type + "/washing",
      query: { index: i },
    });
  };

  const handleReturnClean = (i) => {
    let type;
    if (equipmentData.scopeType) type = "scope";
    else type = "washer";

    Router.push({
      pathname: "/record/" + type + "/cleaning",
      query: { index: i },
    });
  };

  const handleDrying = (i) => {
    let savedItems = JSON.parse(window.localStorage.getItem("savedstate" + i));
    savedItems["dryingFinished"] = "true";
    window.localStorage.setItem("savedstate" + i, JSON.stringify(savedItems));
  };

  const handleFormChange = () => {
    let formData = JSON.parse(window.localStorage.getItem("savedstate" + router.query.index));
    console.log(formData);
    let isEmpty = false;
    for (const [key, value] of Object.entries(formData)) {
      // exclude optional field
      // if (key !== 'dryRemarks' && key !== 'cleanScopeStatus' && key !== 'cleanCirculatedBy' && !key.includes('washAER') && key !== 'washDisinfectantChanged' && key !== 'dryDryerLevel' && !key.includes('sample')) {
      if (key == 'cleanDateOfCollection' ||
        key == 'cleanWashedBy' ||
        key == 'cleanCollectedBy' ||
        key == 'washDisinfectantUsed' ||
        key == 'washDisinfectantLOTNumber' ||
        key == 'washDisinfectantChanged' ||
        key == 'washDetergentUsed' ||
        key == 'washDetergentLOTNumber' ||
        key == 'washDateOfFilterChanged' ||
        key == 'dryScopeDryer' ||
        key == 'dryDryerLevel') {
        if (!value) isEmpty = true;
      }
    }
    if (isEmpty) setAllowSubmit(false);
    else setAllowSubmit(true);
  }


  return (
    <Layout>
      <MainHeader heading="Record" description="Equipment Sampling Record" />
      <SubHeader
        heading={equipmentData.brand + " " + equipmentData.modelNumber}
        description="Record the details of equipment sampling"
        breadCrumbItems={["Home", "Schedule", "View", "Record Detail"]}
      />

      <div className="flex flex-col items-center justify-center min-w-full gap-0 px-5 py-5 bg-white md:flex-row md:gap-3">
        <ol className="items-center sm:flex ">
          <li className="relative mb-6 w-80 ml-36 sm:mb-0">
            <div className="flex items-center">
              <div onClick={() => handleReturnClean(router.query.index)} className="bg-[#1890FF] hover:cursor-pointer hover:bg-[#1890FF]/80 ml-[4.1rem] z-10 flex items-center justify-center w-4 h-4 rounded-full ring-0 ring-white sm:ring-8 shrink-0">
              </div>
              <div className="bg-[#1890FF] hidden sm:flex w-full h-0.5"></div>
            </div>
            <div className="mt-3 sm:pr-8">
              <h3 className="pl-2 text-lg font-normal text-gray-900">Manual Cleaning</h3>
            </div>
          </li>
          <li className="relative mb-6 w-80 sm:mb-0">
            <div className="flex items-center ">
              <div className="bg-[#1890FF] hidden sm:flex w-8 h-0.5"></div>
              <div onClick={() => handleReturn(router.query.index)} className="bg-[#1890FF] hover:bg-[#1890FF]/80 hover:cursor-pointer z-10 flex items-center justify-center w-4 h-4 rounded-full ring-0 ring-white sm:ring-8 shrink-0">
              </div>
              <div className="bg-[#1890FF] hidden sm:flex w-full h-0.5"></div>
            </div>
            <div className="mt-3 sm:pr-8">
              <h3 className="text-lg font-normal text-gray-900">Washing</h3>
            </div>
          </li>
          <li className="relative mb-6 w-80 sm:mb-0">
            <div className="flex items-center">
              <div className="bg-[#1890FF] hidden sm:flex w-[1.125rem] h-0.5"></div>
              <div className="bg-[#1890FF] z-10 flex items-center justify-center w-4 h-4 rounded-full ring-0 ring-white sm:ring-8 shrink-0">
              </div>
            </div>
            <div className="mt-3 sm:pr-8">
              <h3 className="text-lg font-semibold text-gray-900">Drying</h3>
            </div>
          </li>
        </ol>
      </div>

      <section className="grid grid-flow-row bg-#f0f2f5">
        <form>
          <div className="px-20 py-10">
            <div className="flex flex-col justify-center h-full min-w-full text-justify bg-white border-2 rounded-md">
              <div className="p-5 bg-white">
                <h3 className="pb-2 font-medium">Drying Cabinet</h3>
                <hr></hr>
              </div>
              <div className="grid grid-cols-2 gap-4 px-5 py-1">
                <Dropdown
                  menuHeader="Scope Dryer"
                  menuItems={["Dryer 1", "Dryer 2", "Dryer 3", "Dryer 4"]}
                  drop="drop"
                  tooltipText="Type of Scope Dryer"
                  saveState="dryScopeDryer"
                  index={router.query.index}
                  onClickSelect={handleFormChange}
                />
                <Dropdown
                  menuHeader="Dryer Level"
                  menuItems={["Level 1", "Level 2", "Level 3", "Level 4"]}
                  tooltipText="Set level indicated on the Dryer"
                  saveState="dryDryerLevel"
                  index={router.query.index}
                  onClickSelect={handleFormChange}
                />

                <div className="py-1 input-group">
                  <h4 className="inline pb-1">Remarks</h4>
                  <textarea placeholder="Remarks" maxLength="100" onChange={e => setCharCount(e.target.value.length)} className="w-full p-2 border-2 rounded-md" />
                  <div className="text-right text-gray-300">{charCount} / 100</div>
                </div>

                <div className="pb-5"></div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-end w-full gap-0 px-5 py-5 bg-white md:flex-row md:gap-3">
            <a onClick={() => handleReturn(router.query.index)} className="text-black hover:text-black/80 hover:cursor-pointer hover:underline">
              Previous Step
            </a>
            <button type="button" onClick={() => setShowExitModal(true)} className="px-10 py-2 ml-4 transition-colors duration-150 bg-white border-2 rounded-sm text-tts-red hover:bg-tts-red/80 border-tts-red">
              Save & Exit
            </button>
            {/* <button type="button" onClick={() => setShowModal(true)} className="px-10 py-2 text-white transition-colors duration-150 border-2 rounded-sm bg-tts-red hover:bg-tts-red/80 border-tts-red">
                      Submit details
                    </button> */}
            {allowSubmit ?
              <button type="button" onClick={() => setShowModal(true)} className="px-10 py-2 text-white transition-colors duration-150 border-2 rounded-sm bg-tts-red hover:bg-tts-red/80 border-tts-red">
                Submit details
              </button>
              :
              <button type="button" className="px-10 py-2 text-white transition-colors duration-150 bg-gray-400 border-2 border-gray-400 rounded-sm">
                Submit details
              </button>
            }
          </div>
        </form>
      </section>

      {(showExitModal ?
        <PopupMessage
          heading="Save & Exit ?"
          description="Are you sure you want to save and Exit?"
          leftText="Cancel"
          rightText="Save & Exit"
          onClickClose={() => setShowExitModal(false)}
          link="/schedule"
        />
        : null)}

      {(showModal ?
        <PopupMessage
          heading="Submit Details"
          description="Confirm submission of details? This will set the equipment status to Pending Results."
          leftText="Cancel"
          rightText="Submit"
          onClickClose={() => setShowModal(false)}
          link="/home"
          handleDrying={() => handleDrying(router.query.index)}
        />
        : null)}

    </Layout>
  );
}
