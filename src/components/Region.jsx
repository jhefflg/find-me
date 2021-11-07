import React from "react";

export const Region = ({ data }) => {
  return (
    <div className="flex flex-col justify-center">
      <div className="bg-purple-200 flex justify-center py-2">
        <h1 className="text-gray-600 text-xl">{"Endereço:"}</h1>
      </div>
      <div className="flex flex-col my-4">
        <p className="text-gray-700 text-1xl">{`País: ${
          data?.address?.country || ""
        }`}</p>
        <p className="text-gray-700 text-1xl">{`Endereço: ${
          data?.address?.quarter || ""
        } - ${data?.address?.postcode || ""}`}</p>
        <p className="text-gray-700 text-1xl">{`Cidade: ${data?.address?.city || ""} - ${
          data?.address?.county || ""
        }`}</p>
        <p className="text-gray-700 text-1xl">{`Estado: ${
          data?.address?.state || ""
        }`}</p>
      </div>
    </div>
  );
};
