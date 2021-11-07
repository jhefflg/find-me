import AsyncLocalStorage from "@createnextapp/async-local-storage";
import axios from "axios";

const instance = axios.create({
  baseURL: "http://nominatim.openstreetmap.org",
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const geolocation = () => {
  return navigator.geolocation.watchPosition(
    displayLocation,
    () => (
      null,
      {
        timeout: 5000,
        maximumAge: 60000,
        enableHighAccuracy: true,
      }
    )
  );
};

const displayLocation = (loc) => {
  const log = {
    lat: loc.coords.latitude,
    long: loc.coords.longitude,
  };
  return storeStorange("location", JSON.stringify(log));
};

const storeStorange = async (key, value) => {
  try {
    await AsyncLocalStorage.setItem(`@${key}`, value);
  } catch (e) {}
};

export const getPosition = async () => {
  const locationCurrent = await AsyncLocalStorage.getItem("@location");
  const { lat, long } = JSON.parse(locationCurrent);
  try {
    const { data } = await instance.get(
      `/reverse?format=json&lat=${lat}&lon=${long}`
    );
    return data;
  } catch (error) {
    getPosition();
  }
};
