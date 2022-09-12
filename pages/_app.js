import Layout from '../components/layout';
import { useEffect,useState } from 'react';
import { useRouter } from 'next/router';
import {configureStore} from '@reduxjs/toolkit';
import rootReducer from '../redux/reducers';
import { Provider } from 'react-redux';
import Script from 'next/script'
import Spinner from '../components/spinner';

const store = configureStore(
  {reducer:rootReducer}
)

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url) => {
      url !== router.pathname ? setLoading(true) : setLoading(false);
      console.log('routeChangeStart')
    };
    const handleComplete = (url) => {
      console.log('routeChangeComplete')
      setLoading(false)
      
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
  }, [router]);

  return (
    <>
    <Script
        src="//dapi.kakao.com/v2/maps/sdk.js?appkey=54f403fdb16f5a5b68a5ab9815bc4263&libraries=services,clusterer&autoload=false"
        strategy="beforeInteractive"
      />
    <Provider store={store}>
        <Layout>
            {
              loading ? (<Spinner/>) : (<Component {...pageProps} />)
            }
        </Layout>
    </Provider>
    </>
  )
}

export default MyApp
