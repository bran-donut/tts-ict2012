import '../styles/antd.css';
import "../styles/globals.css";

import { useEffect } from 'react';
import { equipments, savedItems } from '../Constants';

function MyApp({ Component, pageProps }) {
  // fake database
  useEffect(() => {
    let data = window.localStorage.getItem("equipments");
    // only set storage when empty
    if (!data) window.localStorage.setItem("equipments", JSON.stringify(equipments));
    // let test;
    // test = JSON.parse(window.localStorage.getItem("scopestate"));
    for (let i = 0; i < equipments.length; i++) {
      let state = window.localStorage.getItem("savedstate"+i);
      // only set storage when empty
      if (!state) window.localStorage.setItem("savedstate"+i, JSON.stringify(savedItems));
    }
    // let tester = test["cleanWashedBy"] = "pls";
    // window.localStorage.setItem("scopestate", JSON.stringify(tester) );
    // console.log(test);
  }, [])
  return <Component {...pageProps} />;
}

export default MyApp;
