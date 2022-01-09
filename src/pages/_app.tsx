import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'

import Meta from 'src/components/meta'

import 'src/styles/globals.css'

const App = ({ Component, pageProps }: AppProps) => {
  const [queryClient] = React.useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          disableTransitionOnChange
        >
          <Meta />
          <Component {...pageProps} />
        </ThemeProvider>
      </Hydrate>
    </QueryClientProvider>
  )
}

export default App
