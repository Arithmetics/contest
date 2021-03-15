import NextApp from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import Page from '../components/Page';

export default class App extends NextApp {
  render(): JSX.Element {
    const { Component, pageProps } = this.props;

    return (
      <ChakraProvider>
        <Page>
          <Component {...pageProps} />
        </Page>
      </ChakraProvider>
    );
  }
}
