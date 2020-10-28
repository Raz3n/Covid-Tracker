import React, { useState, useEffect } from "react";
import { FormControl, NativeSelect } from "@material-ui/core";

import { fetchCountries } from "../../api/index";

import styles from "./countryPicker.module.css";

const CountryPicker = () => {
  const [fetchedCountries, setFetchedCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedCountries(await fetchCountries());
    };
    fetchAPI();
  }, [setFetchedCountries]);


  return (
    <FormControl className={styles.FormControl}>
      <NativeSelect>
        <option value="global">Global</option>
  {fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option>)}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
