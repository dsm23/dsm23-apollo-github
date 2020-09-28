import { FunctionComponent } from 'react';
import { AppProps } from 'next/app';

import { ApolloProvider } from '@apollo/client';
import { GlobalStyles } from 'twin.macro';

import { useApollo } from '../lib/apolloClient';

const App: FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={apolloClient}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ApolloProvider>
  );
};

export default App;
