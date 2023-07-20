import Footer from '@/Component/Footer'
import Header from '@/Component/Header'
// import '@/styles/globals.css'
import "@/styles/layout.css"
export default function App({ Component, pageProps }) {
  if(Component.getLayout){
    return Component.getLayout( <Component {...pageProps} />)
  }
  return <>
  <Header/>
  <Component {...pageProps} />
  <Footer/>
  </>
}
