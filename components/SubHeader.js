import { InfoCircleOutlined } from "@ant-design/icons";
import { ActionButton } from "../pages/schedule/manage";
import Breadcrumb from "./Breadcrumb";

export default function SubHeader({ heading, smallHeading, description, breadCrumbItems, button, children }) {
  return (
    <div className="flex flex-col items-start justify-start w-full px-10 pt-5 bg-white">
      {breadCrumbItems && <Breadcrumb breadCrumbItems={breadCrumbItems} />}
      <div className="flex justify-between w-full">
        <h2 className="text-3xl font-medium">{heading}</h2>
        {button}
      </div>

      {smallHeading && (
        <div className="flex gap-3 mt-2 text-sm text-gray-400">
          <span className="">{smallHeading[0]}</span>
          <span className="">•</span>
          <span className="">{smallHeading[1]}</span>
        </div>
      )}

      {/* <p className="mt-2 text-sm text-gray-500 md:text-base">{description}</p> */}
      <p className="my-5 text-sm sm:text-lg text-[#828282] flex items-center gap-2">
        <InfoCircleOutlined />
        {description}
      </p>
      {children}
    </div>
  );
}

export function SubHeaderButton({ text, onClickAction }) {
  return <ActionButton name={text} onClickAction={onClickAction} subHeaderButton={true} />;
}
