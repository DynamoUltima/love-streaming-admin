import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from "@material-tailwind/react";
import { QueryClient, QueryClientProvider, useQuery, Hydrate } from '@tanstack/react-query'

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {


  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <ThemeProvider>
          <Component {...pageProps} />
        </ThemeProvider>
      </Hydrate>
    </QueryClientProvider>
  )
}
