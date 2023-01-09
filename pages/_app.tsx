import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from "@material-tailwind/react";
import { QueryClient, QueryClientProvider, useQuery, Hydrate } from '@tanstack/react-query'
import { useState } from 'react';

// const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {

    const [queryClient] = useState(() => new QueryClient());

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
