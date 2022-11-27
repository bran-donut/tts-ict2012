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
import Tooltip from "../../components/Tooltip";
import QrScanner from "../../components/QrScanner";
import { SuccessMessage } from "../../components/Modal";

export default function EditEquipment() {
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
  const [equipmentData, setEquipmentData] = useState([]);
  const [selectedItem, setSelectedItem] = useState({});
  const [formData, setFormData] = useState(emptyForm);
  const [scannedValue, setScannedValue] = useState();
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [allowSubmit, setAllowSubmit] = useState(false);
  const [showScanner, setShowScanner] = useState(false);

  const handleFormChange = (field, text) => {
    setFormData({
      ...formData,
      brand: field == 'brand' ? text : formData.brand,
      scopeType: field == 'scopeType' ? text : formData.scopeType,
      modelNumber: field == 'modelNumber' ? text : formData.modelNumber,
      serialNumber: field == 'serialNumber' ? text : formData.serialNumber,
      status: field == 'status' ? text : formData.status,
      frequency: field == 'frequency' ? text : formData.frequency
    })
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
    let items = JSON.parse(window.localStorage.getItem("equipments"));
    setEquipmentData(items);
    setSelectedItem(items[router.query.index]);
    setFormData(items[router.query.index]);
  }, [])

  useEffect(() => {
    console.log(formData);
    let isEmpty = false;
    if (selectedItem.scopeType) {
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
      // const newData = [...equipmentData, formData];
      // setEquipmentData(newData);
      // window.localStorage.setItem("equipments", JSON.stringify(newData));
      const updatedData = equipmentData.map((data, i) => {
        if (i == router.query.index) {
          return {
            ...data,
            brand: formData.brand,
            scopeType: formData.scopeType,
            modelNumber: formData.modelNumber,
            serialNumber: formData.serialNumber,
            status: formData.status,
            frequency: formData.frequency
          };
        }
        return data;
      });

      setEquipmentData(updatedData);
      console.log(updatedData);
      window.localStorage.setItem("equipments", JSON.stringify(updatedData));
    }
  }, [formData])

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
                      onClickSelect={(text) => handleFormChange('brand', text)}
                      drop = "drop"
                    />
                    <Dropdown
                      inputValue={selectedItem.scopeType}
                      menuHeader="Scope Type"
                      menuItems={["tracheal intubation"]}
                      onClickSelect={(text) => handleFormChange('scopeType', text)}
                      drop = "drop"
                    />
                    <Dropdown
                      inputValue={selectedItem.modelNumber}
                      menuHeader="Model Number"
                      menuItems={["TJF423"]}
                      onClickSelect={(text) => handleFormChange('modelNumber', text)}
                    />

                    <Input
                      inputValue={selectedItem.frequency}
                      menuHeader="Frequency"
                      onChange={(text) => handleFormChange('frequency', text)}
                    />

                    <MobileScan
                      inputValue={scannedValue || selectedItem.serialNumber}
                      menuHeader="Serial Number"
                      tooltipText="Unique number of the equipment"
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
                      inputValue={selectedItem.status}
                      menuHeader="Status"
                      menuItems={["Regular", "Loan"]}
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
                      onClickSelect={(text) => handleFormChange('modelNumber', text)}
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
                      onChange={(text) => handleFormChange('frequency', text)}
                    />

                    <MobileScan
                      inputValue={scannedValue || selectedItem.serialNumber}
                      menuHeader="AER Serial Number"
                      tooltipText="Unique number of the equipment"
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
