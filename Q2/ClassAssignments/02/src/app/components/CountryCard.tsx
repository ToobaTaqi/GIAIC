import React from "react";

function CountryCard({
  country,
  capital,
  population,
}: {
  country: string;
  capital: string;
  population: string;
}) {
  return (
    <div className="flex flex-col gap-4 justify-center items-center py-4 w-[400px] border rounded text-[#604436]">
      <h1 className="text-2xl font-bold">{country}</h1>
      <div className="flex gap-4 justify-center items-center">
        <div className="font-bold text-lg">
          <p>Capital</p>
          <p>Population</p>
        </div>

        <div>
          <p>{capital}</p>
          <p>{population}</p>
        </div>
      </div>
    </div>
  );
}

export default CountryCard;
