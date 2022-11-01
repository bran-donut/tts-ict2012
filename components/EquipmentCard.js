export default function EquipmentCard(props) {
      return (
        <div className="flex flex-col items-start justify-center h-20 px-4 m-2 bg-white rounded-md shadow-2xl text-start">
          <div className="gap-5 px-5 pt-5">
                <span className="font-bold text-md">{props.equipmentData[0].brand}</span>
                <span className="ml-3 font-medium text-gray-600">{props.equipmentData[0].scopeType}</span>
            <div className="gap-5 pb-5">
                <span className="text-[#BDBDBD] text-sm">{props.equipmentData[0].modelNumber}</span>
                <span className="ml-3 text-[#BDBDBD] text-sm">•</span>
                <span className="ml-3 text-[#BDBDBD] text-sm">{props.equipmentData[0].serialNumber}</span>
                <span className="ml-3 text-[#BDBDBD] text-sm">•</span>
                <span className="ml-3 text-[#BDBDBD] text-sm">{props.equipmentData[0].status}</span>
                <input className="float-right ml-auto" type="checkbox"></input>

            </div>
          </div>
        </div>
      );
  }