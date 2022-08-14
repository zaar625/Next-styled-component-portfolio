import Layout from '../components/layout';
import {configureStore} from '@reduxjs/toolkit';
import rootReducer from '../redux/reducers';
import { Provider } from 'react-redux';

const store = configureStore(
  {reducer:rootReducer}
)

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
    </Provider>
    </>
  )
}

export default MyApp
