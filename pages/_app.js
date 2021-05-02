import '../styles/globals.css';
import { Provider } from 'react-redux';
import { useStore } from '../redux/store';
import { appWithTranslation } from 'next-i18next';

import Header from '../components/Header';
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar';

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);

  return (
    <>
      <Provider store={store}>
        <Header />
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
