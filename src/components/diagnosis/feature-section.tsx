import { CogIcon, MapIcon, MapPinIcon, UserIcon } from '@heroicons/react/24/solid';
import React from 'react';

const apolloClinicData = [
    {
        title: "Advanced Technology",
        description: "We invest in the latest medical technology to ensure accurate and reliable results.",
        icon:<CogIcon/>
    },
    {
        title: "Experienced Professionals",
        icon:<UserIcon/>,
        description: "Our team of expert healthcare professionals is dedicated to your well-being."
    },
    {
        title: "Convenient Location",
        icon:<MapPinIcon/>,
        description: "Located in Gurugram, we are easily accessible for all your healthcare needs."
    }
];



const FeatureSection = () => {
    return (
        <section className="bg-white container-main ">
            <div className="py-8 px-4 mx-auto  sm:py-16 lg:px-6">
                <div className="mb-8 lg:mb-16">
                    <h2 className="mb-4 text-4xl tracking-tight font-semibold   text-gray-900">Designed for business teams like yours</h2>
                    <p className="text-gray-500 sm:text-xl font-semibold ">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
                </div>
                <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
                    {apolloClinicData.map((feature, index) => (
                        <div key={index}>
                            <div className="flex justify-center items-center mb-4 w-16 h-16 rounded-full bg-primary-100 text-primary">
                                {feature.icon}
                            </div>
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
