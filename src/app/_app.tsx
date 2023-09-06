
import { AppProps } from 'next/app';
import React from 'react';

function App({ Component, pageProps }: AppProps) {
  return (
    <div suppressHydrationWarning>
      {typeof window === 'undefined' ? null : <Component {...pageProps} />}
    </div>
  );
}

export default App;