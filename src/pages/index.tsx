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

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Apollo Dental Clinic Gurgaon</title>
        <meta name="description" content="Get world-class dental care at Apollo Dental Clinic in Gurgaon. Our experienced dentists provide a wide range of services, including routine check-ups, orthodontics, and cosmetic dentistry. Book your appointment today and achieve a healthy, beautiful smile!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <HeroSection></HeroSection>
      <AboutSection></AboutSection>
      <CTASection></CTASection>
      <Testimonials></Testimonials>
    </>
  )
}
