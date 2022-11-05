import { InfoCircleOutlined } from "@ant-design/icons";
import { ActionButton } from "../pages/schedule";
import Breadcrumb from "./Breadcrumb";

export default function SubHeader({ heading, description, breadCrumbItems, button, children }) {
    return (
        <div className="flex flex-col items-start justify-start w-full px-10 pt-5 bg-white">
            {breadCrumbItems && <Breadcrumb breadCrumbItems={breadCrumbItems} />}
            <div className="flex justify-between w-full">
                <h2 className="text-3xl font-medium">{heading}</h2>
                {button}
            </div>
            
            {/* <p className="mt-2 text-sm text-gray-500 md:text-base">{description}</p> */}
            <p className="my-5 text-sm sm:text-lg text-[#828282] flex items-center gap-2">
                <InfoCircleOutlined />
                {description}
            </p>
            {children}
        </div>
    )
}

export function SubHeaderButton({ text, onClickAction }) {
    return (
      <ActionButton
        name={text}
        onClickAction={onClickAction}
        subHeaderButton={true}
      />
    )
  }