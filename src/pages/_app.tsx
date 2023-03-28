import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { createContext } from 'react';
import { ModalContextProvider } from '@/components/elements/modal/useModal'
import Head from 'next/head';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Script from 'next/script';

export const ModalContext = createContext<[(modal: any) => unknown, () => unknown]>([() => console.log('Open modal'), () => console.log('Close modal')]);

export default function App({ Component, pageProps }: AppProps) {
  return <>

    <Head>
      <title>ELF31</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/logo/favicon.svg" />
    </Head>
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N63DNQR"
height="0" width="0" style={{display:'none',visibility:'hidden'}}></iframe></noscript>
{/*     <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-11108610629"></Script>
 */}{/* <Script id="google-analytics" strategy="afterInteractive" >{`

  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments)}
  gtag('js', new Date());

  gtag('config', 'AW-11108610629');
  gtag('event', 'conversion', {send_to: 'AW-11108610629/H4wJCISo5I8YEMXk_7Ap'});
 `} 
</Script> */}
<Script id="google-analytics" strategy="afterInteractive" >{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-N63DNQR');`} 
</Script>
    <ModalContextProvider>
      <div className={`relative flex justify-center overflow-x-hidden  items-center flex-col  md:gap-20 sm:16 gap-8 `}>
        <div className='fixed z-30 flex justify-center md:px-2  w-full top-0'>
          <Navbar></Navbar>
        </div>
        <Component {...pageProps}></Component>
        <Footer></Footer>
        </div>
    </ModalContextProvider>

   </>
}
