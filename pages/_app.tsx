import NextApp from 'next/app';
import { Provider as BumbagProvider } from 'bumbag';

export default class App extends NextApp {
  render(): JSX.Element {
    const { Component, pageProps } = this.props;
    return (
      <BumbagProvider isSSR collapseBelow="desktop">
        <Component {...pageProps} />
      </BumbagProvider>
    );
  }
}
