import { ModalContext } from "@/pages/_app"
import { useContext } from "react"

export default function CTASection() {
    const [openModal, closeModal] = useContext(ModalContext);
    return <>
        <section className="container-main py-20 ">
            <div className=" mx-auto">
                <div
                    className="relative z-10 overflow-hidden rounded bg-[#2582A1] py-12 px-8 md:p-[70px]"
                >
                    <div className="-mx-4 flex flex-wrap items-center">
                        <div className="w-full px-4 lg:w-3/4">
                            <span className="mb-2 text-base font-normal text-gray-100">
                                Apollo Diagnosis
                            </span>
                            <h2
                                className="mb-6 text-xl font-semibold leading-tight text-white sm:mb-8  lg:mb-0"
                            >
                                Ready to take control of your health? Schedule your diagnostic tests with us today. For more information, visit
                                <a href="www.apollogurugram.in">&nbsp; &nbsp; www.apollogurugram.in &nbsp;</a>.{` Your health is our priority, and we're here to ensure it.`}
                            </h2>
                        </div>
                        <div className="w-full px-4 lg:w-1/4">
                            <div className="flex flex-wrap lg:justify-end">
                                <a onClick={openModal} className="my-1 cursor-pointer inline-block rounded bg-[#FDB931] py-4 px-6 text-base font-medium text-white transition hover:bg-opacity-90 md:px-9 lg:px-6 xl:px-9" > Contact us Now
                                </a>
                            </div>
                        </div>
                    </div>

                    <div>
                        <span className="absolute top-0 left-0 z-[-1]">
                            <svg
                                width="189"
                                height="162"
                                viewBox="0 0 189 162"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <ellipse
                                    cx="16"
                                    cy="-16.5"
                                    rx="173"
                                    ry="178.5"
                                    transform="rotate(180 16 -16.5)"
                                    fill="url(#paint0_linear)"
                                />
                                <defs>
                                    <linearGradient
                                        id="paint0_linear"
                                        x1="-157"
                                        y1="-107.754"
                                        x2="98.5011"
                                        y2="-106.425"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stopColor="white" stopOpacity
                                            ="0.07" />
                                        <stop offset="1" stopColor="white" stopOpacity
                                            ="0" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </span>
                        <span className="absolute bottom-0 right-0 z-[-1]">
                            <svg
                                width="191"
                                height="208"
                                viewBox="0 0 191 208"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <ellipse
                                    cx="173"
                                    cy="178.5"
                                    rx="173"
                                    ry="178.5"
                                    fill="url(#paint0_linear)"
                                />
                                <defs>
                                    <linearGradient
                                        id="paint0_linear"
                                        x1="-3.27832e-05"
                                        y1="87.2457"
                                        x2="255.501"
                                        y2="88.5747"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stopColor="white" stopOpacity
                                            ="0.07" />
                                        <stop offset="1" stopColor="white" stopOpacity
                                            ="0" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    </>
}