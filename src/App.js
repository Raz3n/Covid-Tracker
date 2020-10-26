import React, {useEffect} from "react";

import { Cards, Chart, CountryPicker } from "./components";
import styles from './App.module.css';

import {fetchData} from './api/index'


function App() {

  useEffect(async() => {
    const data = await fetchData();
    console.log(data)
  })
  
  return (
    <div className={styles.container}>
      <Cards />
      <CountryPicker />
      <Chart />
    </div>
  );
}

export default App;
