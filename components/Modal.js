import { ExclamationCircleOutlined } from "@ant-design/icons"
import { useEffect, useReducer } from "react"

export default function Modal({ heading, description, leftText, rightText, onClickClose, children }) {
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
                                        <ExclamationCircleOutlined className="pr-4 align-center text-xl text-tts-orange" />
                                        <div className="">
                                            <p className="inline my-2 text-lg font-medium leading-relaxed text-black">{heading}</p>
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
                                        onClick={() => {onClickClose(0); toggleModal()}}
                                    >
                                        {leftText}
                                    </button>
                                    <button
                                        className="py-2 mb-1 ml-2 mr-1 text-sm text-white transition-all duration-150 ease-linear border-2 rounded-sm shadow outline-none px-7 border-tts-red bg-tts-red hover:bg-tts-red/80 border-tts-re hover:shadow-lg focus:outline-none"
                                        type="button"
                                        // onClick={() => (setShowModal(false),setDropItem([...dropItem, addText]))}
                                        onClick={() => {onClickClose(1); toggleModal()}}
                                    >
                                        {rightText}
                                    </button>
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