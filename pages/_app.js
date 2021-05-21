import '../styles/globals.css';
import { Provider } from 'react-redux';
import { useStore } from '../redux/store';
import { appWithTranslation } from 'next-i18next';
import Head from 'next/head';
import Header from '../components/Header';
import HeaderMobile from '../components/HeaderMobile';
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar';

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);

  return (
    <>
      <Head>
        <title>TAIWZOO | 台灣科技族</title>
        <meta name="description" content="TAIWZOO 是專為台灣科技人才打造的求職平台" />
        <meta key="og:title" name="og:title" content={'TAIWZOO | 台灣科技族'} />
        <meta
          key="og:description"
          name="og:description"
          content="台灣科技人求職最佳平台，不論是 junior 還是 senior ，各種需求都等你來挑戰！"
        />
        <meta key="og:image" name="og:image" content={`/../../public/taiwzoo_og.png`} />
      </Head>
      <Provider store={store}>
        <Header />
        <HeaderMobile />
        <SearchBar />
        <div className="mt-60px">
          <Component {...pageProps} />
        </div>
        <Footer />
      </Provider>
    </>
  );
}

export default appWithTranslation(MyApp);
