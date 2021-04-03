import NextApp from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import Router from 'next/router';
import NProgress from 'nprogress';

import '../components/nprogress.css';

import Page from '../components/Page';
import theme from '../theme';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

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
