import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Fragment, createContext } from 'react';
import { ModalContextProvider } from '@/components/elements/modal/useModal'
import Head from 'next/head';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export const ModalContext = createContext<[(modal: any) => unknown, () => unknown]>([() => console.log('Open modal'), () => console.log('Close modal')]);

export default function App({ Component, pageProps }: AppProps) {
  return <Fragment>

    <Head>
      <title>ELF31</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/logo/favicon.svg" />
    </Head>
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N63DNQR"
      height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe></noscript>


    <ModalContextProvider>
      <div className={`relative flex justify-center overflow-x-hidden  items-center flex-col  md:gap-20 sm:16 gap-8 `}>
        <div className='fixed z-30 flex justify-center md:px-2  w-full top-0'>
          <Navbar></Navbar>
        </div>
        <Component {...pageProps}></Component>
        <Footer></Footer>
      </div>
    </ModalContextProvider>

  </Fragment>
}
