import React, { useEffect, useState } from "react";

import { getPosition } from "../utils/geolocation";
import { weatherData } from "../utils/weather";

import { Region } from "../components/Region";
import { Weather } from "../components/Weather";

export const Home = () => {
  const [data, setData] = useState(null);
  const [dataWeather, setDataWeather] = useState(null);

  useEffect(() => {
    handlerAddress();
  }, []);

  const handlerAddress = async () => {
    const response = await getPosition();
    if (response) {
      setData(response);
      handlerWeather();
    }
  };

  const handlerWeather = async () => {
    setDataWeather(null);
    const response = await weatherData();
    if (response) {
      setDataWeather(response);
    }
  };

  return (
    <div className="bg-gradient-to-r from-purple-200 via-indigo-50 to-purple-200 h-screen flex justify-center">
        <div className="px-3 py-6 flex justify-center lg:w-2/5">
          <div className="bg-purple-300 md:w-14 sm:shadow-xl sm:rounded-l-xl "></div>
          <section className="border border-purple-200 w-full sm:shadow-xl py-8 px-6">
            <div className="flex justify-center w-full">
              <h1 className="text-purple-500 text-5xl">{'Find me'}!</h1>
            </div>
            <div className="h-full flex flex-col sm:justify-around">
              <div className="flex flex-col justify-center">
                <Region data={data} />
                <Weather dataWeather={dataWeather} />
              </div>
              <div className="flex justify-center">
                <button
                  className="bg-purple-300 m-3 py-3 px-12 rounded-md text-green-800"
                  onClick={handlerAddress}
                >
                  {"Atualizar"}
                </button>
              </div>
            </div>
          </section>
          <div className="bg-purple-300 sm:w-14 shadow-xl rounded-r-xl"></div>
        </div>
      </div>
  );
};
