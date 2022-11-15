import { useColorModeValue } from '@chakra-ui/react'
import Head from 'next/head'
import Header from '../components/Header'

export default function Home() {
  return (
    <div className={useColorModeValue("bg-white", "bg-gray-800") + ''}>
      <Head>
        <title>Nisarg Saple</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
    </div>

  )
}
