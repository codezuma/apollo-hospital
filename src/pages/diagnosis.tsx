import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/Navbar'
import Testimonials from '@/components/Testimonials'
import HeroSection from '@/components/diagnosis/hero-section'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'
import { useContext, useEffect } from 'react'
import { ModalContext } from './_app'
import AboutSection from '@/components/diagnosis/about-section'
import CTASection from '@/components/diagnosis/cta-section'
import FeatureSection from '@/components/diagnosis/feature-section'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })
const testimonialsData = [
  {
    name: 'Chanda Barman',
    rating: 5,
    content: 'I had gone for a tetanus shot here. Clean and comfortable waiting rooms.I was overall quite satisfied with the service i received.',
  },
  {
    name: 'Ravi sharma',
    rating: 4,
    content: 'Apollo clinic at near Mega Mall location is equipped with wide range of tests, and having very good staff expertise and their behaviour.',
  },
  {
    name: 'Mr. Vibhor Dogra',
    rating: 5,
    content: 'Toshani helped us and provided great support over the call. She’s a good listener and clearly explains everything regarding the medicines and Doctor’s appointment',
  },
];

export default function Home() {
  const [openModal, closeModal] = useContext(ModalContext);

  return (
    <>

      <Head>
        <title>Apollo Dental Clinic Gurgaon</title>
        <meta name="description" content="Get world-className dental care at Apollo Dental Clinic in Gurgaon. Our experienced dentists provide a wide range of services, including routine check-ups, orthodontics, and cosmetic dentistry. Book your appointment today and achieve a healthy, beautiful smile!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-CDEK34SL2X"/>

<Script id="google-analytics" strategy="afterInteractive" >{`
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-CDEK34SL2X');
`}
</Script>
      <HeroSection></HeroSection>
      <FeatureSection />
      <AboutSection></AboutSection>
      <div className='fixed bottom-8 right-4'>
        <button onClick={()=>openModal(true)} className='btn-primary'>
          Contact us
        </button>
      </div>
      <ContactForm></ContactForm>
      <div className='container-main w-full '>
        <h3 className='text-3xl font-semibold mb-4'>Location</h3>
        <div className="relative container-main rounded-lg w-full h-96">
          <iframe className="absolute top-0 left-0 w-full h-full"
           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.1570084408786!2d77.09089271154531!3d28.474817875650086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d18d6fec3ddc1%3A0x19af1c5aea0beee4!2sApollo%20Clinic%20Gurugram!5e0!3m2!1sen!2sin!4v1693973713983!5m2!1sen!2sin"
            frameBorder="0" style={{ border: 0 }} allowFullScreen aria-hidden="false" >
          </iframe>
        </div>
      </div>
      <CTASection></CTASection>
      <Testimonials testimonials={testimonialsData} />
    </>
  )
}
