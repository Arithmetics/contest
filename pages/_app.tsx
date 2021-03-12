import NextApp from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';

export default class App extends NextApp {
  render(): JSX.Element {
    const { Component, pageProps } = this.props;

    return (
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    );
  }
}
