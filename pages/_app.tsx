import localFont from '@next/font/local'
import { Azeret_Mono } from '@next/font/google'
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import type { AppProps } from 'next/app'


// const carosRegular = localFont({
//   src: '../assets/Caros.otf',
//   variable: '--caros-regular'
//  })

//  console.log('mee')

//  const ubuntu = Azeret_Mono({ 
//   weight: '400',
//   subsets: ['latin'],
//   variable: '--oxygen-font'
// })

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
