import '@/styles/globals.css'
import { poppins } from "@/font/font";

export default function App({ Component, pageProps }) {
  return(
  <main style = {poppins.style}>
    <Component {...pageProps} />
  </main> )
}
