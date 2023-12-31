import Navbar from '@/components/navbar'
// import '@/styles/globals.css'
import "../components/navbar.css"

import { SessionProvider } from "next-auth/react"
export default function App({ Component, pageProps: { session, ...pageProps } }) {

  return <SessionProvider session={session}>
    <Navbar />
    <Component {...pageProps} />
  </SessionProvider>
}
