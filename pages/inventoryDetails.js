import MainHeader from "../components/MainHeader";
import SubHeader, { SubHeaderButton } from "../components/SubHeader";
import { equipments } from "../Constants";
import { exportCSVFile } from "../Helpers";
import Layout from "../layouts/Layout";

export default function InventoryDetails() {
    const selectedItem = {
        type: 'Scope',
        modelNumber: 'TJF403'
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
            sampleDate: "sampleDate"
        };
        exportCSVFile(headers, equipments, '');
    }

    return (
        <Layout>
            <MainHeader heading="Inventory" description="What would you like to do today?" />
            <SubHeader
                heading="Equipment Details"
                smallHeading={[selectedItem.type, selectedItem.modelNumber]}
                description="Displays all the related information for an equipment"
                breadCrumbItems={['Home', 'Inventory', 'Equipment Details']}
                button={<SubHeaderButton text="Export Item as CSV" onClickAction={handleClickExport} />}
            />
            <div className="bg-tts-background">
                <div className="max-w-[855px] my-8 m-auto">
                    <div className="text-lg font-bold">{selectedItem.type}</div>
                    <table cellPadding="9" className="table-fixed w-full text-left">
                        <tbody>
                        <tr>
                            <th className="border-b border-gray-200">Brand</th>
                            <th className="border-b border-gray-200" colSpan="2">Scope Type</th>
                        </tr>
                        <tr>
                            <td className="border-b border-gray-200">BBBBB</td>
                            <td className="border-b border-gray-200" colSpan="2">SSSSSSSSS</td>
                        </tr>
                        <tr>
                            <th className="border-b border-gray-200">Model Number</th>
                            <th className="border-b border-gray-200">Serial Number</th>
                            <th className="border-b border-gray-200">Status</th>
                        </tr>
                        <tr>
                            <td>mmmmmmmm</td>
                            <td>ssssssss</td>
                            <td>ssssssss</td>
                        </tr>
                        <tr>
                            <th>Frequency (Weeks)</th>
                            <th>Sampling Status</th>
                            <th>Next Sample Date</th>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Regular</td>
                            <td>date</td>
                        </tr>
                        <tr>
                            <th>Past Sampling Results</th>
                            <th>Future Sample Date</th>
                            <th className="flex justify-between">
                                <span>On repair</span>
                                <button className="underline text-blue-600 font-normal">Change</button>
                            </th>
                        </tr>
                        <tr>
                            <td><button className="underline text-blue-600">Download past sampling results</button></td>
                            <td><button className="underline text-blue-600">View future sample dates</button></td>
                            <td>No</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </Layout>
    )
}