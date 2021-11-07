import AsyncLocalStorage from "@createnextapp/async-local-storage";
import axios from "axios";

const instance = axios.create({
  baseURL: "http://api.openweathermap.org",
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const weatherData = async () => {
  const apikey = "c18ea6365ced905197a54b427159bdd9";

  const locationCurrent = await AsyncLocalStorage.getItem("@location");
  const { lat, long } = JSON.parse(locationCurrent);
  try {
    const { data } = await instance.get(
      `/data/2.5/weather?lat=${lat}&lon=${long}&lang=pt_br&units=metric&appid=${apikey}`
    );
    return data;
  } catch (error) {
    weatherData();
  }
};
