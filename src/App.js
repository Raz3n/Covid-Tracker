import React, { useEffect, useState } from "react";

import { Cards, CountryPicker, Chart } from "./components";
import { fetchData } from "./api/index";
import styles from "./App.module.css";

const App = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchedData = async () => {
      const receivedData = await fetchData();
      setData(receivedData);
    };

    fetchedData();
  }, []);

  return (
    <div className={styles.container}>
      <Cards data={data} />
      <CountryPicker />
      <Chart />
    </div>
  );
};

export default App;
