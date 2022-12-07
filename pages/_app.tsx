import NextApp, { AppInitialProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Analytics } from '@vercel/analytics/dist/react';
import Router from 'next/router';
import NProgress from 'nprogress';
import { ApolloProvider } from '@apollo/client';

import '../components/nprogress.css';

import Page from '../components/Page';
import theme from '../theme';
import withData from '../lib/withData';
import { ParsedUrlQuery } from 'node:querystring';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());
class App extends NextApp {
  render(): JSX.Element {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const { Component, pageProps, apollo } = this.props;
    return (
      <ApolloProvider client={apollo}>
        <ChakraProvider theme={theme}>
          <Page>
            <Component {...pageProps} />
            <Analytics />
          </Page>
        </ChakraProvider>
      </ApolloProvider>
    );
  }
}

type MyPageProps = {
  query?: ParsedUrlQuery;
};

App.getInitialProps = async function ({ Component, ctx }): Promise<AppInitialProps> {
  let pageProps: MyPageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  pageProps.query = ctx.query;
  return { pageProps };
};

export default withData(App);
