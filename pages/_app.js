import '../styles/antd.css';
import "../styles/globals.css";

import { useEffect } from 'react';
import { equipments } from '../Constants';

function MyApp({ Component, pageProps }) {
  // fake database
  useEffect(() => {
    window.localStorage.setItem("equipments", JSON.stringify(equipments));
  }, [])
  return <Component {...pageProps} />;
}

export default MyApp;
