import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'

import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    heading: `'Inter', sans-serif`,
    body: `'Cutive Mono', monospace;`

  },
})

export default function App({ Component, pageProps }: AppProps) {
  return <ChakraProvider theme={theme}><Component {...pageProps} /></ChakraProvider>
}
