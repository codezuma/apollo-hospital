import { ModalContext } from "@/pages/_app";
import { ArrowUturnDownIcon } from "@heroicons/react/24/solid"
import Image from "next/image";
import { useContext } from "react";
import ContactFormSmall from "../contactFormSmall";
import DownloadPDf from "../download-pdf";

const services = [

    {
        "name": "Ultrasound",
        "img": "ultrasound",
        "desc": "Trust our skilled technicians and experienced radiologists for clear and comprehensive ultrasound services."
    },
    {
        "name": "Echo-services",
        "img": "echo-services",
        "desc": "We specialize in echocardiography, offering thorough assessments of your heart's structure and function."
    },
    {
        "name": "ECG-and-TMT",
        "img": "ecg-and-tmt",
        "desc": "Our Electrocardiogram (ECG) and Treadmill Test (TMT) services help in early detection of heart-related issues."
    },
    {
        "name": "Podia-and-fundus-exams",
        "img": "podia-and-fundus-exams",
        "desc": "We offer specialized podiatric diagnostics and fundus examinations for comprehensive foot and eye health assessments."
    },
    {
        "name": "blood-tests",
        "img": "blood-tests",
        "desc": "Whether it's routine check-ups or specific health concerns, we provide a wide range of blood tests to meet your needs."
    },
    {
        "name": "home-sample-collection",
        "img": "home-sample-collection",
        "desc": "Can't visit our clinic? No problem! We offer hassle-free home sample collection services, bringing healthcare to your doorstep."
    }
];
export default function HeroSection() {
    const [openModal, closeModal] = useContext(ModalContext);
    return <>
        <div className="container-main md:flex-row flex-col mb-20 relative flex pt-40 md:gap-20 gap-10 min-h-[calc(100vh-200px)] justify-between">
            <div className="absolute  md:w-[800px] h-96 w-96 md:h-[800px] md:-right-1/4 md:-top-1/2  top-1/2  opacity-50 -right-1/4 -z-10 ">
                <svg className="w-full h-full" viewBox="0 0 3000 3000" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="1500" cy="1500" r="1425" stroke="#5BA3BB" strokeWidth="150" />
                </svg>

            </div>
            <div className="md:w-1/2 w-full flex flex-col  justify-center items-start">
                <h1 className="text-2xl text-secondary leading-[1.1] mb-2 font-semibold">Apollo Clinic Gurugram</h1>
                <h1 className="text-5xl leading-[1.1] mb-8  text-primary font-semibold">Where You Can Get State-of-the-Art Health Tests You Can Trust!
                </h1>
                <p className="font-medium leading-[1.2] mb-5 text-lg  text-gray-500"> {`Apollo Clinic Gurugram is the ideal healthcare destination, offering a wide spectrum of Health Check Packages & Diagnostics services at Golf Course Road Gurugram.`}</p>
                <div className="flex gap-8">
                    <button onClick={openModal} className="btn-primary"> Contact us</button>
                    <a href="#services" className="btn-secondary bg-white text-primary border-2 border-gray-200"> See Details</a>
                </div>
            </div>
            <div className="md:w-1/2 w-full flex   items-end justify-end">
            <div className="p-4 w-full bg-gray-50 rounded-md ">
                    <ContactFormSmall className='p-0 md:w-[125%]'/>
                </div>
            </div>
        </div>
        <section id="services" className="container-main w-full md:mb-20  flex flex-col justify-center items-center">
            <main className="w-full justify-center flex md:items-center items-start flex-col mb-10">
                <span className="mb-2 block text-lg text-center font-semibold text-secondary">
                    Our Services
                </span>
                <h2 className="mb-4 text-3xl font-bold text-center sm:text-4xl md:text-[40px]" >
                    What We Offer
                </h2>
                <Image className="w-full h-auto" src="/images/test-photo.jpg" width={2000} height={850} alt="apollo-team"></Image>
                <DownloadPDf/>
                   </main>
            <section className="grid-cols-12 grid gap-y-10  lg:gap-12 md:gap-4 gap-2 md:gap-y-0 w-full">
                {services.map((service, index) => <ServiceCard key={index} index={index} service={service} />)}
            </section>
        </section>
    </>
}

function ServiceCard({ service, index }: { service: { name: string, img: string, desc: string }, index: number }) {
    return <>

        <div className="service  bg-white border md:col-span-4 col-span-12 border-gray-200 rounded-lg shadow  ">
            <a href="" className="flex-1">
                <Image height={500} width={500} className={`rounded-t-lg w-full h-[300px]  object-cover `} src={`/images/${service.img}.jpg`} alt="" />
            </a>
            <div className="p-5 flex-1">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-semibold  text-gray-900 capitalize">{service.name.split("-").join(" ")}</h5>
                </a>
                <p className=" font-medium text-gray-600 ">{service.desc}</p>
            </div>
        </div>

    </>
}