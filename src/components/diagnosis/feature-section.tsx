import { CogIcon, MapIcon, MapPinIcon, UserIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import React from 'react';

const apolloClinicData = [
    {
        title: "Advanced Technology",
        description: "We invest in the latest medical technology to ensure accurate and reliable results.",
        img:'/images/advance.jpg'
    },
    {
        title: "Experienced Professionals",
        img:'/images/professional.jpg',
        description: "Our team of expert healthcare professionals is dedicated to your well-being."
    },
    {
        title: "Convenient Location",
        img:'/images/location.jpg',
        description: "Located in Gurugram, we are easily accessible for all your healthcare needs."
    }
];



const FeatureSection = () => {
    return (
        <section className="bg-white container-main ">
            <div className="py-8 px-4 mx-auto  sm:py-16 lg:px-6">
                <div className="mb-8 lg:mb-16">
                    <h2 className="mb-4 text-4xl tracking-tight font-semibold   text-gray-900">Our Dedication to Excellence </h2>
                    <p className="text-gray-500 sm:text-xl font-semibold ">Explore the core principles that define Apollo Clinic as your trusted healthcare destination. We are committed to the latest technology, a team of experienced professionals, and a convenient Gurugram location to ensure your well-being.</p>
                </div>
                <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
                    {apolloClinicData.map((feature, index) => (
                        <div key={index}>
                            <a href="" className="flex-1">
                                <Image height={500} width={500} className={`rounded-t-lg w-full h-[200px]  object-cover  ${(index == 6) ? "md:h-full" : ""}`} src={feature.img} alt="" />
                            </a>
                            <h3 className="mb-2 text-2xl font-semibold">{feature.title}</h3>
                            <p className="text-gray-500 text-lg">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default FeatureSection;
