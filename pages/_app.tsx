import { AppProps } from 'next/app'
import Head from 'next/head'
import { MantineProvider } from '@mantine/core'
import { NotificationsProvider } from '@mantine/notifications'
import type { MantineThemeOverride } from '@mantine/core'

function App(props: AppProps) {
  const { Component, pageProps } = props

  const theme = {
    colorScheme: 'light',
    headings: {
      fontFamily: 'Poppins, sans-serif',
    },
    fontFamily: 'Poppins, sans-serif',
    focusRing: 'never',
    components: {
      Button: {
        defaultProps: {
          radius: '50px',
        },
      },
    },
  } as MantineThemeOverride

  return (
    <>
      <Head>
        <title>Embrace - A Live Videocast</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
        <NotificationsProvider>
          <Component {...pageProps} />
        </NotificationsProvider>
      </MantineProvider>
    </>
  )
}

export default App
