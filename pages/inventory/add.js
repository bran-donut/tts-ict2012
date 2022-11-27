import Layout from "../../layouts/Layout";
import { InfoCircleOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import Dropdown from "../../components/Dropdown";
import MainHeader from "../../components/MainHeader";
import SubHeader from "../../components/SubHeader";
import MobileScan from "../../components/MobileScan";
import Input from "../../components/Input";
import Link from "next/link";
import { useRouter } from "next/router";
import QrScanner from "../../components/QrScanner";
import Tooltip from "../../components/Tooltip";
import { SuccessMessage } from "../../components/Modal";

const tabs = ["Scope", "Washer (AER)"];

export default function AddEquipment() {
    let randomSerial = Math.floor(Math.random() * 100000000);
    const router = useRouter();

    const emptyForm = {
        brand: "",
        scopeType: "",
        modelNumber: "",
        serialNumber: "",
        status: "",
        frequency: ""
    };
    const [index, setIndex] = useState(0);
    const [scannedValue, setScannedValue] = useState();
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [clearForm, setClearForm] = useState(false);
    const [allowSubmit, setAllowSubmit] = useState(false);
    const [showScanner, setShowScanner] = useState(false);
    const [equipmentData, setEquipmentData] = useState([]);
    const [formData, setFormData] = useState(emptyForm)

    const handleFormChange = (field, text) => {
        if (text) setClearForm(false);
        setFormData({
            ...formData,
            brand: field == 'brand' ? text : formData.brand,
            scopeType: field == 'scopeType' ? text : formData.scopeType,
            modelNumber: field == 'modelNumber' ? text : formData.modelNumber,
            serialNumber: field == 'serialNumber' ? text : formData.serialNumber,
            status: field == 'status' ? text : formData.status,
            frequency: field == 'frequency' ? text : formData.frequency
        });
    }

    const handleCloseSuccessModal = () => {
        setShowSuccessModal(false);
        setShowScanner(false);
    }

    const handleScanResult = (decodedText, decodedResult) => {
        if (decodedText) {
            setScannedValue(randomSerial);
            setShowSuccessModal(true);
        }
    }

    useEffect(() => {
        let items = window.localStorage.getItem("equipments");
        setEquipmentData(JSON.parse(items));
        setIndex(router.query.view ? tabs.indexOf(router.query.view) : 0);
    }, [])

    useEffect(() => {
        router.push("/inventory/add?view=" + tabs[index], undefined, { shallow: true });
        setClearForm(true);
    }, [index])

    useEffect(() => {
        if (clearForm) setFormData(emptyForm);
    }, [clearForm])

    useEffect(() => {
        console.log(formData);
        let isEmpty = false;
        if (index == 0) {
            // check for empty field
            for (const [key, value] of Object.entries(formData)) {
                // exclude optional field
                if (key !== 'frequency') {
                    if (!value) isEmpty = true;
                }
            }
        }
        else {
            // check for empty field
            for (const [key, value] of Object.entries(formData)) {
                // exclude optional field and include washer compulsory fields
                if (key !== 'frequency' && (key == 'modelNumber' || key == 'serialNumber')) {
                    if (!value) isEmpty = true;
                }
            }
        }
        if (isEmpty) setAllowSubmit(false);
        else {
            setAllowSubmit(true);
            const newData = [...equipmentData, formData];
            setEquipmentData(newData);
            window.localStorage.setItem("equipments", JSON.stringify(newData));
        }
    }, [formData])

    return (
        <Layout>
            <MainHeader
                heading="Inventory"
                description="View all the equipment and miscellaneous inside the system"
                details={[{ title: 'Total Equipment in Inventory', subtitle: equipmentData.length }]}
            />
            <SubHeader
                heading="Add Equipment"
                description="Adding an equipment"
                breadCrumbItems={["Home", "Inventory", "Add"]}
            />
            <section className="grid grid-flow-row bg-#f0f2f5">
                <form>
                    <div className="px-20 py-10">
                        <div className="flex flex-col justify-center h-full min-w-full text-justify bg-white border-2 rounded-md">
                            <div className="p-5">
                                <h3 className="pb-3 font-medium">Equipment Type</h3>
                                <span>
                                    <input onClick={() => setIndex(0)} type="radio" name="equipment" value="Scope" checked={index == 0}></input>
                                    <label htmlFor="equipment"> Scope </label>
                                </span>
                                <span className="ml-2">
                                    <input onClick={() => setIndex(1)} type="radio" name="equipment" value="Washer" checked={index == 1}></input>
                                    <label htmlFor="equipment"> Washer (AER) </label>
                                </span>
                            </div>
                            <div className="grid grid-cols-2 gap-4 px-5 py-1">
                                {index == 0 ?
                                    <>
                                        <Dropdown
                                            menuHeader="Brand"
                                            menuItems={["OLYMPUS"]}
                                            tooltipText="brand of the equipment"
                                            clearValue={clearForm}
                                            onClickSelect={(text) => handleFormChange('brand', text)}
                                            drop = "drop"
                                        />
                                        <Dropdown
                                            menuHeader="Scope Type"
                                            menuItems={["tracheal intubation"]}
                                            tooltipText="Scope type of the equipment"
                                            clearValue={clearForm}
                                            onClickSelect={(text) => handleFormChange('scopeType', text)}
                                            drop = "drop"
                                        />
                                        <Dropdown
                                            menuHeader="Model Number"
                                            menuItems={["TJF423"]}
                                            tooltipText="Model number of the equipment"
                                            clearValue={clearForm}
                                            onClickSelect={(text) => handleFormChange('modelNumber', text)}
                                        />

                                        <Input
                                            inputValue={clearForm}
                                            menuHeader="Frequency"
                                            tooltipText="Frequency of sampling"
                                            clearValue={clearForm}
                                            onChange={(text) => handleFormChange('frequency', text)}
                                        />

                                        <MobileScan
                                            inputValue={scannedValue}
                                            menuHeader="Serial Number"
                                            tooltipText="Unique number of the equipment"
                                            clearValue={clearForm}
                                            onChange={(text) => handleFormChange('serialNumber', text)}
                                            openScan={() => setShowScanner(true)}
                                        />

                                        {showScanner &&
                                            <QrScanner
                                                fps={10}
                                                qrbox={250}
                                                disableFlip={false}
                                                qrCodeSuccessCallback={handleScanResult}
                                                closeModal={() => setShowScanner(false)}
                                            />
                                        }

                                        {showSuccessModal &&
                                            <SuccessMessage text="Serial Number has been added" onClose={handleCloseSuccessModal} />
                                        }

                                        <Dropdown
                                            menuHeader="Status"
                                            menuItems={["Regular", "Loan"]}
                                            tooltipText="Status of the equipment"
                                            clearValue={clearForm}
                                            onClickSelect={(text) => handleFormChange('status', text)}
                                        />

                                        <div className="py-1 input-group">
                                            <div className="flex flex-row items-center justify-start pb-1">
                                                <h4 className="mr-2">Scheduling Option</h4>
                                                <Tooltip tooltipText="Include into Sample Scheduling">
                                                    <InfoCircleOutlined style={{ fontSize: '16px', color: 'rgb(107 114 128)' }} />
                                                </Tooltip>
                                            </div>
                                            <div className="relative flex items-center w-full p-2 align-middle rounded-md input-group">
                                                <input type="checkbox" className="float-left outline-none" required />
                                                <p className="ml-2">Include in schedule</p>
                                            </div>
                                        </div>
                                    </>
                                    :
                                    <>
                                        <Dropdown
                                            menuHeader="AER Model Number"
                                            menuItems={["MEDIVATOR 1A"]}
                                            tooltipText="Model number of the equipment"
                                            clearValue={clearForm}
                                            onClickSelect={(text) => handleFormChange('modelNumber', text)}
                                        />

                                        <Input
                                            menuHeader="Frequency"
                                            tooltipText="Frequency of sampling"
                                            clearValue={clearForm}
                                            onChange={(text) => handleFormChange('frequency', text)}
                                        />

                                        <MobileScan
                                            inputValue={scannedValue}
                                            menuHeader="AER Serial Number"
                                            tooltipText="Unique number of the equipment"
                                            clearValue={clearForm}
                                            onChange={(text) => handleFormChange('serialNumber', text)}
                                            openScan={() => setShowScanner(true)}
                                        />

                                        {showScanner &&
                                            <QrScanner
                                                fps={10}
                                                qrbox={250}
                                                disableFlip={false}
                                                qrCodeSuccessCallback={handleScanResult}
                                                closeModal={() => setShowScanner(false)}
                                            />
                                        }

                                        {showSuccessModal &&
                                            <SuccessMessage text="Serial Number has been added" onClose={handleCloseSuccessModal} />
                                        }

                                        <div className="py-1 input-group">
                                            <div className="flex flex-row items-center justify-start pb-1">
                                                <h4 className="mr-2">Scheduling Option</h4>
                                                <Tooltip tooltipText="Include into Sample Scheduling">
                                                    <InfoCircleOutlined style={{ fontSize: '16px', color: 'rgb(107 114 128)' }} />
                                                </Tooltip>
                                            </div>
                                            <div className="relative flex items-center w-full p-2 align-middle rounded-md input-group">
                                                <input type="checkbox" className="float-left outline-none" required />
                                                <p className="ml-2">Include in schedule</p>
                                            </div>
                                        </div>
                                    </>
                                }
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center justify-end w-full gap-10 px-14 py-5 bg-white md:flex-row">
                        <Link href={`/inventory?view=${tabs[index]}`}>
                            <a className="text-black hover:text-black/80 hover:cursor-pointer hover:underline">
                                Back
                            </a>
                        </Link>
                        {allowSubmit ?
                            <Link href={`/inventory?view=${tabs[index]}`}>
                                <a className="px-10 py-2 text-white transition-colors duration-150 border-2 rounded-sm bg-tts-red hover:bg-tts-red/80 border-tts-red">
                                    Save
                                </a>
                            </Link>
                            :
                            <div className="px-10 py-2 text-white transition-colors duration-150 bg-gray-400 border-2 border-gray-400 rounded-sm">Save</div>
                        }
                    </div>
                </form>
            </section>
        </Layout>
    );
}
