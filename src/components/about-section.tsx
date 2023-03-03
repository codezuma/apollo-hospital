import Image from "next/image"
export default function  AboutSection(){
    return <>
         <section className="container-main w-full flex flex-col justify-center items-center">
            <main className="w-full justify-center flex items-start flex-col mb-10">
                <span className="mb-2 block text-lg text-center font-semibold text-secondary">
                    About us 
                </span>
                <h2
                    className="mb-4 text-3xl font-bold text-start sm:text-4xl md:text-[40px]"
                >
We are committed to your smile.                </h2>
                <p className="text-base text-gray-600 font-medium md:w-3/4 w-full text-start">
                At Apollo Dental Gurugram, we understand the importance of maintaining optimal oral health, and we are committed to providing personalized care to meet the unique needs of each patient. We are the best dental clinic in Gurgaon because of our commitment to providing compassionate and professional care, and we strive to create a welcoming and comfortable environment for every patient. </p>
            </main>
            <figure className="overflow-hidden rounded-lg">
                <Image className="w-full h-auto" src="/images/apollo-team.png" width={2000} height={850} alt="apollo-team"></Image>
            </figure>
        </section>
    </>
}