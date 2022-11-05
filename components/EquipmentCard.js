import { EditOutlined } from "@ant-design/icons";

export default function EquipmentCard(props) {
  return (
    <div className="flex flex-col items-start justify-center h-20 px-4 m-2 mt-5 bg-white rounded-md shadow-md text-start">
      <div className="gap-5 px-5 pt-5">
        <span className="font-bold">{props.equipmentData.brand}</span>
        <span className="ml-3 font-bold text-sm text-gray-600">{props.equipmentData.scopeType}</span>
        <div className="gap-5 pb-5">
          <span className="text-[#BDBDBD] text-xs">{props.equipmentData.modelNumber}</span>
          <span className="ml-3 text-[#BDBDBD] text-xs">•</span>
          <span className="ml-3 text-[#BDBDBD] text-xs">{props.equipmentData.serialNumber}</span>
          <span className="ml-3 text-[#BDBDBD] text-xs">•</span>
          <span className="ml-3 text-[#BDBDBD] text-xs">{props.equipmentData.status}</span>
        </div>
      </div>
    </div>
  );
}

export function ItemWrapper(props) {
  return (
    // <div className="flex flex-wrap items-center justify-start gap-x-4">
    <div className="grid grid-cols-1 gap-4 gap-y-0 bg-[#F0F2F5] xl:grid-cols-2">
      {props.items &&
        props.items.map((item, i) => {
          let display = false;
          if (props.currentAction.includes("Scope")) {
            if (item.scopeType) display = true;
          }
          // only display scope
          else if (props.currentAction.includes("Washer")) {
            if (!item.scopeType) display = true;
          } else display = true;
          if (display) return <ItemCard key={i} index={i} data={item} {...props} />;
        })}
      {props.children}
    </div>
  );
}

export function ItemCard({ index, data, titles, keys, edit, select, onClickEdit, onChangeCheck }) {
  const displayIcon = edit || select;
  {
    /* keys refer to the keys in the data array, used to retrieve specific additional values for the card */
  }
  const { brand, scopeType, modelNumber, serialNumber } = data;
  return (
    <div className="flex flex-row flex-grow items-center gap-2 h-20 p-5 m-2 mt-5 bg-white rounded-md shadow-md text-start">
      <div className="flex-grow">
        {scopeType ? (
          <>
            <div className="font-bold flex items-center mb-2 gap-5 2xl:gap-5">
              <span className="inline-flex">{brand}</span>
              <span className="text-sm text-gray-600">{scopeType}</span>
            </div>
            <div>
              <span className="text-xs text-gray-400">{modelNumber}</span>
              <span className="ml-3 text-xs text-gray-400">•</span>
              <span className="ml-3 text-xs text-gray-400">{serialNumber}</span>
            </div>
          </>
        ) : (
          <>
            <div className="font-bold">
              <span className="text-sm inline-flex mb-2">{modelNumber}</span>
            </div>
            <div>
              <span className="text-xs text-gray-400">{serialNumber}</span>
            </div>
          </>
        )}
      </div>
      {titles && (
        <div className="flex flex-row gap-5 xl:gap-10 2xl:gap-14">
          {titles.map((title, i) => (
            <div key={i}>
              <p className="text-sm mb-2 font-bold text-gray-500">{title}</p>
              <p className="text-xs text-gray-400">
                {/* indicate weeks for frequency data */}
                {data[keys[i]]} {keys[i] == "frequency" && "weeks"}
              </p>
            </div>
          ))}
        </div>
      )}
      {displayIcon && (
        <button className="flex text-xl items-center 2xl:ml-14">
          <>
            {edit && <EditOutlined onClick={() => onClickEdit(index)} />}
            {select && <input type="checkbox" className="w-5 h-5" value={index} onChange={onChangeCheck} />}
          </>
        </button>
      )}
      {/* <div className="gap-5 px-5 pt-5">
              <span className="font-bold text-md">{props.equipmentData.brand}</span>
              <span className="ml-3 font-medium text-gray-600">{props.equipmentData.scopeType}</span>
          <div className="gap-5 pb-5">
              <span className="text-[#BDBDBD] text-sm">{props.equipmentData.modelNumber}</span>
              <span className="ml-3 text-[#BDBDBD] text-sm">•</span>
              <span className="ml-3 text-[#BDBDBD] text-sm">{props.equipmentData.serialNumber}</span>
              <span className="ml-3 text-[#BDBDBD] text-sm">•</span>
              <span className="ml-3 text-[#BDBDBD] text-sm">{props.equipmentData.status}</span>
              <input className="float-right ml-auto" type="checkbox"></input>
          </div>
        </div> */}
    </div>
  );
}
