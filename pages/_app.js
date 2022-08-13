import Layout from '../components/layout';
import GlobalStyle from '../styles/GlobalStyle';
import {configureStore} from '@reduxjs/toolkit';
import rootRedcer from '../redux/reducers';
import { Provider } from 'react-redux';

const store = configureStore(
  {reducer:rootRedcer}
)

function MyApp({ Component, pageProps }) {
  return (
    <>
    <GlobalStyle/>
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
    </>
  )
}

export default MyApp
