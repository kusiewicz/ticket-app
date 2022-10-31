import React from 'react';
import { UserProvider } from '@auth0/nextjs-auth0';
import { ChakraProvider, ColorModeProvider, CSSReset } from '@chakra-ui/react';

function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <ColorModeProvider>
        <CSSReset />
        <UserProvider>
          <Component {...pageProps} />
        </UserProvider>
      </ColorModeProvider>
    </ChakraProvider>
  );
}

export default App;
