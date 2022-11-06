import { EditOutlined, FileTextOutlined } from "@ant-design/icons";

export default function EquipmentCard(props) {
  return (
    <div className="flex flex-col items-start justify-center h-20 p-5 m-2 mt-1 bg-white rounded-md shadow-md text-start">
      <div>
        {/* <span className="font-bold">{props.equipmentData.brand}</span>
        <span className="ml-3 text-sm font-bold text-gray-600">{props.equipmentData.scopeType}</span> */}
        {props.equipmentData.scopeType ? (
          <>
            <div className="flex items-center gap-5 font-bold 2xl:gap-5">
              <span className="inline-flex">{props.equipmentData.brand}</span>
              <span className="text-sm text-gray-600">{props.equipmentData.scopeType}</span>
            </div>
            <div>
              <span className="text-xs text-gray-400">{props.equipmentData.modelNumber}</span>
              <span className="ml-3 text-xs text-gray-400">•</span>
              <span className="ml-3 text-xs text-gray-400">{props.equipmentData.serialNumber}</span>
              {props.equipmentData.status && (
                <>
                  <span className="ml-3 text-xs text-gray-400">•</span>
                  <span className="ml-3 text-xs text-gray-400">{props.equipmentData.status}</span>
                </>
              )}
            </div>
          </>
        ) : (
          <>
            <div className="font-bold">
              <span className="inline-flex text-sm">{props.equipmentData.modelNumber}</span>
            </div>
            <div>
              <span className="text-xs text-gray-400">{props.equipmentData.serialNumber}</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export function ItemWrapper(props) {
  return (
    <div className="grid grid-cols-1 gap-4 gap-y-0 bg-tts-background xl:grid-cols-2">
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

export function ItemCard({ index, data, titles, keys, edit, select, onClickEdit, onChangeCheck, isSchedule, icon }) {
  const displayIcon = edit || select;
  {
    /* keys refer to the keys in the data array, used to retrieve specific additional values for the card */
  }
  const { brand, scopeType, modelNumber, serialNumber, samplingStatus } = data;
  return (
    <div className="flex flex-row items-center flex-grow h-20 gap-2 p-5 m-2 mt-5 bg-white rounded-md shadow-md text-start">
      <div className="flex-grow">
        {scopeType ? (
          <>
            <div className="flex items-center gap-5 font-bold 2xl:gap-5">
              <span className="inline-flex">{brand}</span>
              <span className="text-sm text-gray-600">{scopeType}</span>
            </div>
            <div>
              <span className="text-xs text-gray-400">{modelNumber}</span>
              <span className="ml-3 text-xs text-gray-400">•</span>
              <span className="ml-3 text-xs text-gray-400">{serialNumber}</span>
              {isSchedule ? (
                <>
                  <span className="ml-3 text-xs text-gray-400">•</span>
                  <span className="ml-3 text-xs text-gray-400">{samplingStatus}</span>
                </>
              ) : null}
            </div>
          </>
        ) : (
          <>
            <div className="font-bold">
              <span className="inline-flex text-sm">{modelNumber}</span>
            </div>
            <div>
              <span className="text-xs text-gray-400">{serialNumber}</span>
              {isSchedule ? (
                <>
                  <span className="ml-3 text-xs text-gray-400">•</span>
                  <span className="ml-3 text-xs text-gray-400">{samplingStatus}</span>
                </>
              ) : null}
            </div>
          </>
        )}
      </div>
      {titles && (
        <div className="flex flex-row gap-5 xl:gap-10 2xl:gap-14">
          {titles.map((title, i) => (
            <div key={i}>
              <p className="mb-2 text-sm font-bold text-gray-500">{title}</p>
              <p className="text-xs text-gray-400">
                {/* indicate weeks for frequency data */}
                {data[keys[i]]} {keys[i] == "frequency" && "weeks"}
              </p>
            </div>
          ))}
        </div>
      )}
      {displayIcon && (
        <button className="flex items-center text-xl 2xl:ml-14">
          <>
            {edit && <EditOutlined onClick={() => onClickEdit(index)} />}
            {select && <input type="checkbox" className="w-5 h-5" value={index} onChange={onChangeCheck} />}
          </>
        </button>
      )}
      {icon && (
        <button className="flex items-center text-xl 2xl:ml-14" onClick={() => onClickEdit(index)}>
          {icon}
        </button>
      )}
    </div>
  );
}
