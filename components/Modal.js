import { CheckCircleFilled, ExclamationCircleOutlined, LoadingOutlined } from "@ant-design/icons";
import { useReducer } from "react";
import Link from "next/link";

export default function PopupMessage({ heading, description, leftText, rightText, onClickClose, children, link, onClickEdit, clearForm, handleDrying }) {
    const [showModal, toggleModal] = useReducer(
        showModal => !showModal,
        true
    )

    
    return (
        <>
            {showModal && (
                <>
                    <div
                        className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none"
                    >
                        <div className="relative min-w-[420px] max-w-xs mx-auto my-6">
                            {/*content*/}
                            <div className="relative flex flex-col w-full bg-white border-0 rounded-md shadow-lg outline-none focus:outline-none">
                                {/*body*/}
                                <div className="relative flex-auto py-6 px-7">
                                    <div className="flex items-start">
                                        <ExclamationCircleOutlined className="pr-4 text-xl align-center text-tts-orange" />
                                        <div className="flex flex-col gap-2.5">
                                            <p className="inline text-lg font-medium leading-relaxed text-black">{heading}</p>
                                            <div>{description}</div>
                                        </div>
                                    </div>
                                    {/* <input onChange={e => setAddText(e.target.value)} type="text" placeholder="Input" className="p-2 border-2 rounded-sm ml-9 w-72" required /> */}
                                </div>

                                {children}

                                {/*footer*/}
                                <div className="flex items-center justify-end px-6 pb-6">
                                    <button
                                        className="px-5 py-2 mb-1 mr-1 text-sm font-bold border-[#D9D9D9] border-2 bg-white text-gray-500 rounded-sm transition-all duration-150 ease-linear outline-none background-transparent focus:outline-none"
                                        type="button"
                                        onClick={() => { onClickClose(0); toggleModal() }}
                                    >
                                        {leftText}
                                    </button>

                                    {link == undefined ?
                                        (<button
                                            className="py-2 mb-1 ml-2 mr-1 text-sm text-white transition-all duration-150 ease-linear border-2 rounded-sm shadow outline-none px-7 border-tts-red bg-tts-red hover:bg-tts-red/80 border-tts-re hover:shadow-lg focus:outline-none"
                                            type="button"
                                            onClick={() => { onClickClose(1); toggleModal(); onClickEdit(); clearForm == undefined ? null : clearForm(); handleDrying == undefined ? null : handleDrying();}}
                                        >
                                            {rightText}
                                        </button>)
                                        :
                                        (<Link href={link}>
                                            <button
                                                className="py-2 mb-1 ml-2 mr-1 text-sm text-white transition-all duration-150 ease-linear border-2 rounded-sm shadow outline-none px-7 border-tts-red bg-tts-red hover:bg-tts-red/80 border-tts-re hover:shadow-lg focus:outline-none"
                                                type="button"
                                                onClick={() => { onClickClose(1); toggleModal(); clearForm == undefined ? null : clearForm(); handleDrying == undefined ? null : handleDrying();}}
                                            >
                                                {rightText}
                                            </button>
                                        </Link>)}

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
                </>
            )}
        </>
    )
}

export function LoadingMessage({ text = "System is processing", onClose }) {
    const [showModal, toggleModal] = useReducer(
        showModal => !showModal,
        true
    )

    // only display for awhile
    setTimeout(() => {
        toggleModal();
        onClose();
    }, 1000);

    return (
        <>
            {showModal && (
                <>
                    <div
                        className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none"
                    >
                        <div className="relative max-w-xs mx-auto my-6">
                            {/*content*/}
                            <div className="relative flex flex-col w-full bg-white border-0 rounded-md shadow-lg outline-none focus:outline-none">
                                {/*body*/}
                                <div className="relative flex-auto py-6 px-7">
                                    <div className="flex items-start gap-2">
                                        <LoadingOutlined className="pr-4 text-xl align-center text-tts-blue" />
                                        <div>{text}</div>
                                    </div>
                                </div>

                                {/* {children} */}
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    )
}

export function SuccessMessage({ text, onClose }) {
    const [showModal, toggleModal] = useReducer(
        showModal => !showModal,
        true
    )

    // only display for awhile
    setTimeout(() => {
        toggleModal();
        onClose();
    }, 1000);

    return (
        <>
            {showModal && (
                <>
                    <div
                        className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none"
                    >
                        <div className="relative max-w-xs mx-auto my-6">
                            {/*content*/}
                            <div className="relative flex flex-col w-full bg-white border-0 rounded-md shadow-lg outline-none focus:outline-none">
                                {/*body*/}
                                <div className="relative flex-auto py-6 px-7">
                                    <div className="flex items-start gap-2">
                                        <CheckCircleFilled className="pr-4 text-xl align-center text-tts-blue" />
                                        <div>{text}</div>
                                    </div>
                                </div>

                                {/* {children} */}
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    )
}
