import '@/styles/globals.css';
import type { AppProps } from 'next/app';

// Packages
import { Provider } from 'react-redux';
import store from '../stores';
import { SnackbarProvider } from 'notistack';
import NextAdapterPages from 'next-query-params/pages';
import { QueryParamProvider } from 'use-query-params';
import Loader from '@/providers/Loader';

// Layout
import Layout from '@/layouts/internal';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <QueryParamProvider adapter={NextAdapterPages}>
        <Loader>
          <SnackbarProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </SnackbarProvider>
        </Loader>
      </QueryParamProvider>
    </Provider>
  );
}
