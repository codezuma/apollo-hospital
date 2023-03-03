import { ModalContext } from "@/pages/_app";
import { ArrowUturnDownIcon } from "@heroicons/react/24/solid"
import Image from "next/image";
import { useContext } from "react";
const services = [{
    name: "root-canal",
    desc: "Save your infected tooth and alleviate your pain with our expert root canal treatment."
},
{
    name: "dental-braces",
    desc: "Straighten your teeth and transform your smile with the magic of dental braces."
}, {
    name: "dental-implants",
    desc: "Get your lost tooth back and restore your confidence with our high-quality dental implants."
}, {
    name: "teeth-scaling-and-cleaning",
    desc: "Protect your teeth and gums from plaque and tartar buildup with our thorough teeth scaling and cleaning service."
}, {
    name: "teeth-whitening",
    desc: " Brighten up your smile and enhance your appearance with our safe and effective teeth whitening treatment."
},
{
    name: "tooth-extraction",
    desc: "Relieve your dental discomfort and prevent further damage with our gentle and efficient tooth extraction service."
}, {
    name: "crowning",
    desc: " Restore the functionality and aesthetics of your damaged tooth with our durable and natural-looking dental crowns"
},
]
export default function HeroSection() {
    const [openModal, closeModal] = useContext(ModalContext);
    return <>
        <div className="container-main mb-20 relative flex pt-40 gap-20 min-h-[calc(100vh-200px)] justify-between">
            <div className="absolute  w-[800px] h-[800px] -right-1/4 -top-1/2  ">
                <svg className="w-full h-full" viewBox="0 0 3000 3000" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="1500" cy="1500" r="1425" stroke="#5BA3BB" strokeWidth="150" />
                </svg>

            </div>
            <div className="w-1/2 flex flex-col  justify-center items-start">
                <h1 className="text-5xl leading-[1.1] mb-8  text-primary font-semibold">Get a Brighter Smile with the Best Dentist in Gurugram</h1>
                <p className="font-medium leading-[1.2] mb-5 text-lg  text-gray-500">Welcome to Apollo Dental Gurugram, the leading dental clinic in Gurgaon that is committed to providing
                    exceptional dental care to patients of all ages.</p>
                <div className="flex gap-8">
                    <button onClick={openModal} className="btn-primary"> Contact us</button>
                    <a href="#services" className="btn-secondary bg-white text-primary border-2 border-gray-200"> See Details</a>
                </div>
            </div>
            <div className="w-1/2 flex   items-end justify-end">
                <figure className=" rotate-12 overflow-hidden rounded-3xl ">
                    <Image alt="hero-image" src="/images/hero-image-2.png" height={1200} width={1200}></Image>
                </figure>
            </div>
        </div>
        <section id="services" className="container-main w-full mb-20 flex flex-col justify-center items-center">
            <main className="w-full justify-center flex items-center flex-col mb-10">
                <span className="mb-2 block text-lg text-center font-semibold text-secondary">
                    Our Services
                </span>
                <h2 className="mb-4 text-3xl font-bold text-center sm:text-4xl md:text-[40px]" >
                    What We Offer
                </h2>
                <p className="text-base text-gray-600 font-medium w-3/4 text-center">
                    As the top dentist in Gurgaon, we offer a comprehensive range of dental services, including
                    preventative care, cosmetic dentistry, restorative dentistry, orthodontics, and oral surgery.
                </p>
            </main>
            <section className="grid-cols-12 grid gap-12 w-full">
                {services.map((service, index) => <ServiceCard key={index} index={index} service={service} />)}
            </section>
        </section>
    </>
}

function ServiceCard({ service, index }: { service: { name: string, desc: string }, index: number }) {
    return <>

        <div className="service  bg-white border col-span-4 border-gray-200 rounded-lg shadow  last-of-type:flex  last-of-type:col-span-6 last-of-type:col-start-4">
            <a href="" className="flex-1">
                <Image height={500} width={500} className={`rounded-t-lg w-full , object-cover  ${(index == 6) ? "h-full" : ""}`} src={`/images/${service.name}.jpg`} alt="" />
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