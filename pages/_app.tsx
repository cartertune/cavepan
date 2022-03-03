import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AnimatePresence } from 'framer-motion'
import MainLayout from '../components/layouts/MainLayout'

const Webapp = ({ Component, pageProps, router }: AppProps) => {
  return (
    <MainLayout router={router}>
      <AnimatePresence exitBeforeEnter initial={true}>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </MainLayout>
  )
}

export default Webapp
