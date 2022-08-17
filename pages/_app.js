import Layout from '../components/layout';
import {configureStore} from '@reduxjs/toolkit';
import rootReducer from '../redux/reducers';
import { Provider } from 'react-redux';
import Script from 'next/script'

const store = configureStore(
  {reducer:rootReducer}
)

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Script
        src="//dapi.kakao.com/v2/maps/sdk.js?appkey=54f403fdb16f5a5b68a5ab9815bc4263&libraries=services,clusterer&autoload=false"
        strategy="beforeInteractive"
      />
    <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
    </Provider>
    </>
  )
}

export default MyApp
