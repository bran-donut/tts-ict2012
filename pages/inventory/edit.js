import Layout from "../../layouts/Layout";
import { InfoCircleOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import Dropdown from "../../components/Dropdown";
import MainHeader from "../../components/MainHeader";
import SubHeader from "../../components/SubHeader";
import MobileScan from "../../components/MobileScan";
import Input from "../../components/Input";
import { useRouter } from "next/router";
import Link from "next/link";

export default function EditEquipment() {
  const router = useRouter();

  const [equipmentData, setEquipmentData] = useState([]);
  const [selectedItem, setSelectedItem] = useState({});

  useEffect(() => {
    let items = JSON.parse(window.localStorage.getItem("equipments"));
    setEquipmentData(items);
    setSelectedItem(items[router.query.index]);
  }, [])

  return (
    <Layout>
      <MainHeader
        heading="Inventory"
        description="View all the equipment and miscellaneous inside the system"
        details={[{ title: 'Total Equipment in Inventory', subtitle: selectedItem.length }]}
      />
      <SubHeader
        heading="Edit Equipment"
        description="Editing an equipment"
        breadCrumbItems={["Home", "Inventory", "Edit"]}
      />
      {selectedItem &&
        <section className="grid grid-flow-row bg-#f0f2f5">
          <form>
            {selectedItem.scopeType ?
              <div className="px-20 py-10">
                <div className="flex flex-col justify-center h-full min-w-full text-justify bg-white border-2 rounded-md">
                  <div className="grid grid-cols-2 gap-4 px-5 py-1">
                    <Dropdown
                      inputValue={selectedItem.brand}
                      menuHeader="Brand"
                      menuItems={["OLYMPUS"]}
                    />
                    <Dropdown
                      inputValue={selectedItem.scopeType}
                      menuHeader="Scope Type"
                      menuItems={["tracheal intubation"]}
                    />
                    <Dropdown
                      inputValue={selectedItem.modelNumber}
                      menuHeader="Model Number"
                      menuItems={["TJF423"]}
                    />

                    <Input
                      inputValue={selectedItem.frequency}
                      menuHeader="Frequency"
                    />

                    <MobileScan
                      inputValue={selectedItem.serialNumber}
                      menuHeader="Serial Number"
                    />

                    <Dropdown
                      inputValue={selectedItem.status}
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
                  </div>
                </div>
              </div>
              :
              <div className="px-20 py-10">
                <div className="flex flex-col justify-center h-full min-w-full text-justify bg-white border-2 rounded-md">
                  <div className="grid grid-cols-2 gap-4 px-5 py-1">
                    <Dropdown
                      inputValue={selectedItem.modelNumber}
                      menuHeader="AER Model Number"
                      menuItems={["MEDIVATOR 1A"]}
                    />
                    {/* <div className="py-1 input-group">
                      <div className="flex flex-row items-center justify-start pb-1">
                        <h4 className="mr-2">Frequency</h4>
                        <InfoCircleOutlined style={{ fontSize: '16px', color: 'rgb(107 114 128)' }} />
                      </div>
                      <div className="relative flex items-center w-full p-2 border-2 rounded-md input-group">
                        <input type="text" placeholder="Input" className="w-full outline-none" required />
                      </div>
                    </div> */}
                    <Input
                      inputValue={selectedItem.frequency}
                      menuHeader="Frequency"
                    />

                    <MobileScan
                      inputValue={selectedItem.serialNumber}
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
                  </div>
                </div>
              </div>
            }

            <div className="flex flex-col items-center justify-end w-full gap-0 px-5 py-5 bg-white md:flex-row md:gap-3">
              <div className="text-black hover:text-black/80 hover:cursor-pointer hover:underline" onClick={() => router.back()}>Back</div>
              <Link href="/inventory">
                <a className="px-10 py-2 text-white transition-colors duration-150 border-2 rounded-sm bg-tts-red hover:bg-tts-red/80 border-tts-red">
                  Save
                </a>
              </Link>
            </div>

          </form>
        </section>
      }
    </Layout>
  );
}
