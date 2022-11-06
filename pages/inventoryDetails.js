import Link from "next/link";
import { useEffect, useState } from "react";
import { DefaultDropdown } from "../components/Dropdown";
import MainHeader from "../components/MainHeader";
import PopupMessage, { LoadingMessage, SuccessMessage } from "../components/Modal";
import SubHeader, { SubHeaderButton } from "../components/SubHeader";
import { equipments, pastResults } from "../Constants";
import { exportCSVFile } from "../Helpers";
import Layout from "../layouts/Layout";

export default function InventoryDetails() {
    const itemSelected = {
        ...equipments[1],
        type: 'Scope',
        samplingStatus: 'Regular',
        condition: {
            type: 'Repair',
            status: 0
        }
    }

    const link = "/inventory?view=" + itemSelected.type;

    const [selectedItem, setSelectedItem] = useState(itemSelected);
    const [showChangeConditionModal, setShowChangeConditionModal] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [showLoadingModal, setShowLoadingModal] = useState(false);
    const [changeConfirmation, setChangeConfirmation] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);

    const {brand, scopeType, type, modelNumber, serialNumber, status, samplingStatus, frequency, sampleDate, condition} = selectedItem;

    const toggleDropdown = () => setShowDropdown(!showDropdown);

    const handleClickExportItems = () => {
        console.log("exporting...");
        let headers = {
            brand: "brand",
            scopeType: "scopeType",
            modelNumber: "modelNumber",
            serialNumber: "serialNumber",
            status: "status",
            frequency: "frequency",
            sampleDate: "sampleDate"
        };
        exportCSVFile(headers, equipments, 'equipments');
    }

    const handleClickExportResults = () => {
        console.log("exporting...");
        let headers = {
            sampleDate: "sampleDate",
            fluidResultDate: "fluidResultDate",
            fluidResult: "fluidResult",
            fluidResultComments: "fluidResultComments",
            fluidResultActionTaken: "fluidResultActionTaken",
            swabResultDate: "swabResultDate",
            swabResult: "swabResult",
            swaResultComments: "swaResultComments",
            swabResultActionTaken: "swabResultActionTaken",
            swabResultRoomPerformed: "swabResultRoomPerformed"
        };
        exportCSVFile(headers, pastResults, `${brand}_${modelNumber} Past Sampling Results`);
    }

    const handleCloseChangeConditionModal = (confirm) => {
        // close change modal and open loading message
        setShowChangeConditionModal(false);
        setChangeConfirmation(confirm);
        if (confirm) setShowLoadingModal(true);
    }

    const handleCloseSuccessModal = () => {
        setShowSuccessModal(false);
        // toggle status of condition
        setSelectedItem({
            ...selectedItem, condition: {
                ...selectedItem.condition,
                status: 1 - selectedItem.condition.status,
            }
        })
    }

    useEffect(() => {
        // display success modal after loading modal is closed
        if (changeConfirmation && !showLoadingModal) {
            setShowSuccessModal(true);
        }
    }, [changeConfirmation, showLoadingModal])

    return (
        <Layout>
            <MainHeader heading="Inventory" description="What would you like to do today?" />
            <SubHeader
                heading="Equipment Details"
                smallHeading={[type, modelNumber]}
                description="Displays all the related information for an equipment"
                breadCrumbItems={['Home', 'Inventory', 'Equipment Details']}
                button={<SubHeaderButton text="Export Item as CSV" onClickAction={handleClickExportItems} />}
            />
            <div className="bg-tts-background">
                <div className="max-w-[855px] my-8 m-auto">
                    <div className="text-lg font-bold mb-5">{type}</div>
                    <table cellPadding="20" className="table-fixed w-full text-left text-gray-400 bg-white">
                        <tbody>
                            <tr>
                                <th className="border-b border-r border-gray-200 bg-gray-50 text-black">Brand</th>
                                {/* <th className="border-b border-gray-200 bg-gray-50 text-black" colSpan="2">Scope Type</th> */}
                                <th className="border-b border-gray-200 bg-gray-50 text-black">Scope Type</th>
                                <th className="border-b border-gray-200 bg-gray-50 text-black"></th>
                            </tr>
                            <tr>
                                <td className="border-b border-r border-gray-200">{brand}</td>
                                {/* <td className="border-b border-gray-200" colSpan="2">SSSSSSSSS</td> */}
                                <td className="border-b border-gray-200 text-black">{scopeType}</td>
                                <td className="border-b border-gray-200 text-black"></td>
                            </tr>
                            <tr>
                                <th className="border-b border-r border-gray-200 bg-gray-50 text-black">Model Number</th>
                                <th className="border-b border-r border-gray-200 bg-gray-50 text-black">Serial Number</th>
                                <th className="border-b border-gray-200 bg-gray-50 text-black">Status</th>
                            </tr>
                            <tr>
                                <td className="border-b border-r border-gray-200">{modelNumber}</td>
                                <td className="border-b border-r border-gray-200">{serialNumber}</td>
                                <td className="border-b border-gray-200">{status}</td>
                            </tr>
                            <tr>
                                <th className="border-b border-r border-gray-200 bg-gray-50 text-black">Frequency (Weeks)</th>
                                <th className="border-b border-r border-gray-200 bg-gray-50 text-black">Sampling Status</th>
                                <th className="border-b border-gray-200 bg-gray-50 text-black">Next Sample Date</th>
                            </tr>
                            <tr>
                                <td className="border-b border-r border-gray-200">{frequency}</td>
                                <td className="border-b border-r border-gray-200">{samplingStatus}</td>
                                <td className="border-b border-gray-200">{sampleDate}</td>
                            </tr>
                            <tr>
                                <th className="border-b border-r border-gray-200 bg-gray-50 text-black">Past Sampling Results</th>
                                <th className="border-b border-r border-gray-200 bg-gray-50 text-black">Future Sample Date</th>
                                <th className="flex justify-between border-b border-gray-200 bg-gray-50 text-black">
                                    <span>On {condition.type}</span>
                                    <button className="underline text-tts-blue font-normal" onClick={() => setShowChangeConditionModal(true)}>Change</button>
                                </th>
                            </tr>
                            <tr>
                                <td className="border-b border-r border-gray-200">
                                    <button className="underline text-tts-blue" onClick={handleClickExportResults}>Download</button>
                                </td>
                                <td className="border-b border-r border-gray-200 relative">
                                    <button className="underline text-tts-blue" onClick={toggleDropdown}>View</button>
                                    {showDropdown && <DefaultDropdown dropItems={pastResults.map(value => value.sampleDate)} />}
                                </td>
                                <td className="border-b border-gray-200">{condition.status ? 'Yes' : 'No'}</td>
                            </tr>
                            <tr className="h-14"></tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="flex flex-col items-center justify-end w-full gap-10 px-5 py-5 bg-white md:flex-row">
                <Link href={link}>
                    <a className="text-black hover:text-black/80 hover:cursor-pointer hover:underline">Back</a>
                </Link>
                <Link href={link + '&action=Edit'}>
                    <a className="px-5 py-2 text-white transition-colors duration-150 border-2 rounded-sm bg-tts-red hover:bg-tts-red/80 border-tts-red">Edit</a>
                </Link>
            </div>

            {showChangeConditionModal &&
                <PopupMessage
                    heading={`Set equipment on "${condition.type}"?`}
                    description={`
                        ${condition.status ?
                            `This will resume the tracking of the equipment's sampling schedule until "${condition.type}" is turned on.`
                            :
                            `This will pause the tracking of the equipment's sampling schedule until "${condition.type}" is turned off.`
                        }
                    `}
                    leftText="No"
                    rightText="Yes"
                    onClickClose={handleCloseChangeConditionModal}
                />
            }

            {showLoadingModal && <LoadingMessage onClose={() => setShowLoadingModal(false)} />}

            {showSuccessModal && <SuccessMessage text={'1 Item has been set on ' + condition.type.toLowerCase()} onClose={handleCloseSuccessModal} />}
        </Layout>
    )
}