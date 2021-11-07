import React from "react";

export const Weather = ({ dataWeather }) => {
  return (
    <div className="flex flex-col justify-center">
      <div className="bg-purple-200 flex justify-center mt-8 py-2">
        <h1 className="text-gray-600 text-xl">{"Clima na sua localidade:"}</h1>
      </div>
      <div className="flex flex-col mt-4">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row">
            <p className="text-gray-700 mr-3">{"Tempo: "}</p>
            <p className="text-gray-800 mr-3">
              {`${dataWeather?.weather[0]?.description || ""}, `}
            </p>
            <p className="text-gray-800">
              {`${dataWeather?.clouds?.all || ""}%`}
            </p>
          </div>
          <div className="flex flex-row">
            <p className="text-gray-700 mr-3">{"Humidade: "}</p>
            <p className="text-gray-800 mr-3">
              {`${dataWeather?.main?.humidity || ""}%` || ""}
            </p>
          </div>
        </div>
        <div className="flex flex-row justify-between my-4 flex-wrap">
          <div className="flex flex-row  flex-wrap">
            <p className="text-gray-700 mr-3">{"Temperatura: "}</p>
            <p className="text-gray-800 mr-3">
              {`${dataWeather?.main.temp || ""} °C` || ""}
            </p>
          </div>
          <div className="flex flex-row  flex-wrap">
            <p className="text-gray-700 mr-3">{"Max: "}</p>
            <p className="text-gray-800 mr-3">
              {`${dataWeather?.main.temp_max || ""} °C` || ""}
            </p>
          </div>
          <div className="flex flex-row  flex-wrap">
            <p className="text-gray-700 mr-3">{"Min: "}</p>
            <p className="text-gray-800 mr-3">
              {`${dataWeather?.main.temp_min || ""} °C` || ""}
            </p>
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <div className="flex flex-row">
            <p className="text-gray-700 mr-3">{"Ventos: "}</p>
            <p className="text-gray-800 mr-3">
              {`${dataWeather?.wind?.speed || ""}m/s` || ""}
            </p>
          </div>
          <div className="flex flex-row">
            <p className="text-gray-700 mr-3">{"Direção: "}</p>
            <p className="text-gray-800 mr-3">
              {`${dataWeather?.wind?.deg || ""}°` || ""}
            </p>
          </div>
          <div className="flex flex-row">
            <p className="text-gray-700 mr-3">{"Rajadas: "}</p>
            <p className="text-gray-800 mr-3">
              {`${dataWeather?.wind?.gust || ""}m/s` || ""}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
