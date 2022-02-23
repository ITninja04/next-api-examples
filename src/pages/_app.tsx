import 'styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react';
import { AnimatePresence } from "framer-motion";
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Provider } from 'react-redux'
import { store } from "../store";
import ErrorBoundary from 'components/ErrorBoundary'

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link rel="shortcut icon" href="/favicon.png" key="shortcutIcon" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <Provider store={store}>
        <AnimatePresence exitBeforeEnter>
          <ChakraProvider>
            <ErrorBoundary>
              <Component {...pageProps} key={router.route}/>
            </ErrorBoundary>
          </ChakraProvider>
        </AnimatePresence>
      </Provider>
    </>
  )
}

export default MyApp
