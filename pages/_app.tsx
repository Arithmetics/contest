import NextApp from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import Page from '../components/Page';
import theme from '../theme';

export default class App extends NextApp {
  render(): JSX.Element {
    const { Component, pageProps } = this.props;

    return (
      <ChakraProvider theme={theme}>
        <Page>
          <Component {...pageProps} />
        </Page>
      </ChakraProvider>
    );
  }
}
