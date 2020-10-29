import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async (country) => {
  let modifiedUrl = url;

  if (country) {
    modifiedUrl = `${url}/countries/${country}`;
  }

  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(modifiedUrl);

    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {
    return error;
  }
};

// API not displaying this anymore
// export const fetchDailyData = async () => {
//   try {
//     const { data } = await axios.get(`${url}/daily`);
//     const requiredData = data.map((dailyData) => ({
//       confirmed: dailyData.confirmed.total,
//       deaths: dailyData.deaths.total,
//       date: dailyData.reportDate,
//     }));
//     return requiredData;
//   } catch (error) {
//     return error;
//   }
// };

//this api will show data for US, using for visual
export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get('https://api.covidtracking.com/v1/us/daily.json');

    return data.map(({ positive, recovered, death, dateChecked: date }) => ({ confirmed: positive, recovered, deaths: death, date }));
  } catch (error) {
    return error;
  }
};

export const fetchCountries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${url}/countries`);
    return countries.map((country) => country.name);
  } catch (error) {}
};
