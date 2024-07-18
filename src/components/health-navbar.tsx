import { Bars2Icon, ChevronDownIcon, PhoneIcon, XMarkIcon } from "@heroicons/react/24/solid"
import Image from "next/image"
import Link from "next/link"
import { useContext, useEffect, useRef, useState } from "react";
import { useRouter } from 'next/router';
import { ModalContext } from "@/pages/_app";



export default function HeathNavbar() {
    const [visible, setVisible] = useState(true);
    const navbar = useRef<HTMLElement>(null);
    const navbarAfter = useRef<HTMLDivElement>(null);
    const router = useRouter();
    const [openModal, closeModal] = useContext(ModalContext);

    useEffect(() => {
        let container = document.getElementById('__next')!;
        container.addEventListener("scroll", handleScroll);
        return () => container.removeEventListener("scroll", handleScroll);
    }
    );

    function handleScroll() {
        let container = document.getElementById('__next')!;
        const currentYOffset = container.scrollTop;
        const visible = !(currentYOffset > 0);

        setVisible(visible)
    };

    const hideNavbar = () => {
        navbar.current?.classList.remove('animate-reveal', 'animation-delay-200');
        navbarAfter.current?.classList.remove('animate-reveal');
        navbar.current?.classList.add('animate-hide');
        navbarAfter.current?.classList.add('animate-hide', 'animation-delay-200');
    }

    const showNavbar = () => {
        navbar.current?.classList.remove('animate-hide');
        navbarAfter.current?.classList.remove('animate-hide', 'animation-delay-200');
        navbar.current?.classList.add('animate-reveal', 'animation-delay-200');
        navbarAfter.current?.classList.add('animate-reveal');
    }

    return <>
        <div className={`w-full sticky justify-center flex ${visible ? 'bg-transparent' : "bg-slate-100 shadow-md"}`}>
            <nav className={`container-main md:py-5 py-3 flex justify-between z-[60]    top-0 items-center w-full `}>
                <Link href={'/'} className="px-2">
                    <Image src={"/logo/logo.png"} className="w-20 md:w-32" width={120} height={60} alt={"elf31-logo"} />
                </Link>
                <section className="lg:flex  flex-col items-end gap-3">
                    <nav className="flex gap-2">
                        <ul className="flex gap-5 items-center text-primary">
                            <button onClick={openModal} className="btn-primary md:text-base text-sm  md:py-2 md:px-4">Book Your Test  </button>
                        </ul>
                        <ul className="flex gap-5 items-center text-primary">
                            <button className="flex items-center border-2  rounded-md text-base  py-2 px-4"> <PhoneIcon className="mr-2 w-4" /> +91 99901 23800 </button>
                        </ul>
                    </nav>
                </section>
                <div onClick={showNavbar} className=" hidden  justify-center gap-4">
                    <Bars2Icon className="w-10 h-10 text-primary"></Bars2Icon>
                </div>
            </nav>
        </div>

        {/*      <nav ref={navbar} className={`mobile-nav px-8 lg:px-20 z-[60] bg-white  fixed h-0  w-full overflow-x-scroll`}>
            <div className="flex justify-between mb-4 md:py-8 py-6  items-center text-secondary ">
                <span>
                    <Image width={80} height={80} src={"/logo/logo.png"} alt={""}></Image>
                </span>
                <span onClick={hideNavbar} className="p-2 rounded-full bg-primary">
                    <XMarkIcon className="w-6 h-6"></XMarkIcon>
                </span>
            </div>
            <ul className=" md:py-8 py-6 list-none">
                <li className="py-4 border-b-2  flex flex-col  text-primary border-b-slate-200">
                    <div className="flex justify-between w-full">
                        <Link onClick={hideNavbar} href={'/services'}>
                            <div className="w-full text-2xl">
                                Services
                            </div>
                        </Link>
                        <button>
                            <ChevronDownIcon className="w-6 "></ChevronDownIcon>
                        </button>
                    </div>
                    <div className="flex flex-col  mt-5 gap-3 ">
                        <Link onClick={hideNavbar} href={'/services/branding'} className="text-lg text-deepforestlight font-medium">Branding</Link>
                        <Link onClick={hideNavbar} href={'/services/digital-media'} className="text-lg text-deepforestlight font-medium">Digital Media </Link>
                        <Link onClick={hideNavbar} href={'/services/web-design'} className="text-lg text-deepforestlight font-medium">Web Design</Link>
                        <Link onClick={hideNavbar} href={'/services/video-production'} className="text-lg text-deepforestlight font-medium">Video Production</Link>
                    </div>
                </li>
                <li className="py-4 border-b-2 text-primary border-b-slate-200">
                    <Link href={'/works'}>
                        <div className="w-full text-2xl">
                            Works
                        </div>
                    </Link>
                </li>
                <li className="py-4 border-b-2 text-primary border-b-slate-200">
                    <Link onClick={hideNavbar} href={'/blog'}>
                        <div className="w-full text-2xl">
                            Blog
                        </div>
                    </Link>
                </li>
                <li className="py-4 border-b-2 text-primary border-b-slate-200">
                    <Link onClick={hideNavbar} href={'/about'}>
                        <div className="w-full text-2xl">
                            About
                        </div>
                    </Link>
                </li>
                <li className="py-4 border-b-2 text-primary border-b-slate-200">
                    <Link onClick={hideNavbar} href={'/contact'}>
                        <div className="w-full text-2xl">
                            Contact
                        </div>
                    </Link>
                </li>

            </ul>
        </nav>
        <div ref={navbarAfter} className={`z-40 fixed  w-full bg-secondary h-0 overflow-x-scroll `}></div>
    */} </>
}
