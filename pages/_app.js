import '../styles/antd.css';
import "../styles/globals.css";

import { useEffect } from 'react';
import { equipments, savedItems } from '../Constants';

function MyApp({ Component, pageProps }) {
  // fake database
  useEffect(() => {
    let data = JSON.parse(window.localStorage.getItem("equipments")) || [];
    let sampleData = JSON.parse(window.localStorage.getItem("toSampleEquipments")) || [];
    // only set storage when empty
    if (!data.length) window.localStorage.setItem("equipments", JSON.stringify(equipments));
    if (!sampleData.length) window.localStorage.setItem("toSampleEquipments", JSON.stringify(equipments.slice(0, 3)));
    // let test;
    // test = JSON.parse(window.localStorage.getItem("scopestate"));
    for (let i = 0; i < equipments.length; i++) {
      let state = JSON.parse(window.localStorage.getItem("savedstate"+i)) || {};
      // only set storage when empty
      if (!Object.keys(state).length) window.localStorage.setItem("savedstate"+i, JSON.stringify(savedItems));
    }
    // let tester = test["cleanWashedBy"] = "pls";
    // window.localStorage.setItem("scopestate", JSON.stringify(tester) );
    // console.log(test);
  }, [])
  return <Component {...pageProps} />;
}

export default MyApp;
