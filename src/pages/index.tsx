import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import HeroSection from '@/components/HeroSection'
import Navbar from '@/components/Navbar'
import AboutSection from '@/components/about-section'
import CTASection from '@/components/cta-section'
import Testimonials from '@/components/Testimonials'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'
import { useContext, useEffect } from 'react'
import { ModalContext } from './_app'
import Script from 'next/script'


const testimonialsData = [
  {
    name: 'Neha Gupta',
    rating: 5,
    content: 'Amazing experience, painless procedure, highly recommend this clinic for all dental needs.',
  },
  {
    name: 'Ridhi Varshney',
    rating: 4,
    content: 'Dr. Gaurav is the best dentist in Gurugram, and he always takes the time to explain my treatment options and answer any questions that I may have.',
  },
  {
    name: 'Mr. Raghav Madan',
    rating: 5,
    content: 'I have been going to Apollo Dental Gurugram for years now, and I am always impressed by the high level of care and professionalism that I receive.',
  },
];



export default function Home() {
  const [openModal, closeModal] = useContext(ModalContext);

  return (
    <>


      <Head>

        <title>Apollo Dental Clinic Gurgaon</title>
        <meta name="description" content="Get world-class dental care at Apollo Dental Clinic in Gurgaon. Our experienced dentists provide a wide range of services, including routine check-ups, orthodontics, and cosmetic dentistry. Book your appointment today and achieve a healthy, beautiful smile!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-CDEK34SL2X" />

      <Script id="google-analytics" strategy="afterInteractive" >{`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-CDEK34SL2X');
  `}
      </Script>
      <HeroSection></HeroSection>
      <AboutSection></AboutSection>
      <ContactForm></ContactForm>
      <CTASection></CTASection>
      <div className='fixed flex gap-2 bottom-8 right-4'>
        <button onClick={() => openModal(true)} className='btn-primary'>
          Contact us
        </button>
        <a href="https://api.whatsapp.com/send?phone=919205366132">
          <img width="48" height="48" src="https://img.icons8.com/color/48/whatsapp--v1.png" alt="whatsapp--v1" />
        </a>
      </div>
      <Testimonials testimonials={testimonialsData} />
    </>
  )
}
