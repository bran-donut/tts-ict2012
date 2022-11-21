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

const tabs = ["Scope", "Washer (AER)"];

export default function AddEquipment() {
    const router = useRouter();

    // const [equipmentType, setEquipmentType] = useState("Scope");
    const [index, setIndex] = useState(0);
    const [equipmentData, setEquipmentData] = useState([]);


    useEffect(() => {
        let items = window.localStorage.getItem("equipments");
        setEquipmentData(JSON.parse(items));
        setIndex(router.query.view ? tabs.indexOf(router.query.view) : 0);
    }, [])

    useEffect(() => {
        router.push("/inventory/add?view=" + tabs[index], undefined, { shallow: true });
    }, [index])

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
                                    <label for="equipment"> Scope </label>
                                </span>
                                <span className="ml-2">
                                    <input onClick={() => setIndex(1)} type="radio" name="equipment" value="Washer" checked={index == 1}></input>
                                    <label for="equipment"> Washer (AER) </label>
                                </span>
                            </div>
                            <div className="grid grid-cols-2 gap-4 px-5 py-1">
                                {index == 0 ?
                                    <>
                                        <Dropdown
                                            menuHeader="Brand"
                                            menuItems={["Olympus"]}
                                        />
                                        <Dropdown
                                            menuHeader="Scope Type"
                                            menuItems={["tracheal intubation"]}
                                        />
                                        <Dropdown
                                            menuHeader="Model Number"
                                            menuItems={["TJF423"]}
                                        />

                                        <Input
                                            menuHeader="Frequency"
                                        />

                                        <MobileScan
                                            menuHeader="Serial Number"
                                        />

                                        <Dropdown
                                            menuHeader="Status"
                                            menuItems={["Regular", "Loan"]}
                                        />

                                        <div className="py-1 input-group">
                                            <div className="flex flex-row items-center justify-start pb-1">
                                                <h4 className="mr-2">Scheduling Option</h4>
                                                <InfoCircleOutlined style={{ fontSize: '16px', color: 'rgb(107 114 128)' }} />
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
                                            menuItems={["Olympus"]}
                                        />

                                        <Input
                                            menuHeader="Frequency"
                                        />

                                        <MobileScan
                                            menuHeader="AER Serial Number"
                                        />
                                        <div></div>
                                        <div className="py-1 input-group">
                                            <div className="flex flex-row items-center justify-start pb-1">
                                                <h4 className="mr-2">Scheduling Option</h4>
                                                <InfoCircleOutlined style={{ fontSize: '16px', color: 'rgb(107 114 128)' }} />
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

                    <div className="flex flex-col items-center justify-end w-full gap-0 px-5 py-5 bg-white md:flex-row md:gap-3">
                        <Link href={`/inventory?view=${tabs[index]}`}>
                            <a className="text-black hover:text-black/80 hover:cursor-pointer hover:underline">
                                Back
                            </a>
                        </Link>
                        <Link href="/inventory">
                            <a className="px-10 py-2 text-white transition-colors duration-150 border-2 rounded-sm bg-tts-red hover:bg-tts-red/80 border-tts-red">
                                Save
                            </a>
                        </Link>
                    </div>
                </form>
            </section>
        </Layout>
    );
}
