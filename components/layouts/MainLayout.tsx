import Head from 'next/head'
import { Router } from 'next/router'
import Navbar from '../Navbar'
// import Navbar from '../navbar'

interface MainLayoutProps {
  router: Router
  children: any
}

const MainLayout = ({ children, router }: MainLayoutProps) => {
  return (
    <div className="overflow-x-clip">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Cavepan</title>
      </Head>
      <Navbar path={router.asPath} />
      <div className="container mx-auto">{children}</div>
    </div>
  )
}

export default MainLayout
