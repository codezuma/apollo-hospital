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

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [openModal, closeModal] = useContext(ModalContext);
  useEffect(() => {
    openModal(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <>
      <Head>
        <title>Apollo Dental Clinic Gurgaon</title>
        <meta name="description" content="Get world-class dental care at Apollo Dental Clinic in Gurgaon. Our experienced dentists provide a wide range of services, including routine check-ups, orthodontics, and cosmetic dentistry. Book your appointment today and achieve a healthy, beautiful smile!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <HeroSection></HeroSection>
      <FeatureSection />
      <AboutSection></AboutSection>

      <ContactForm></ContactForm>
      <CTASection></CTASection>
      <Testimonials></Testimonials>
    </>
  )
}
