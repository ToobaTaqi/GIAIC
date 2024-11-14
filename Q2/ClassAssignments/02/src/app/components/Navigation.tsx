"use client";
import React, { useState } from "react";
import { countries, countryList } from "../assets/CountryData";
import Link from "next/link";

// export let url: string;

// function setGlobalUrl(value: string) {
//   url = value;
//   console.log(url)
// }

function Navigation() {

  const [countryName, setCountryName] = useState("");

  // const handleCountryClick = (country: string) => {
  //   setCountryName(country);
  //   setGlobalUrl(country); // Sets the global `url` variable
  // };

  return (
    <div className="flex flex-col justify-center items-center">
      <Link href="/">
        <h1 className="text-3xl text-[#604436] font-bold">
          Country Explorer App
        </h1>
      </Link>
      <ul className="flex flex-wrap gap-3 text-xl">
        {countryList.map((country) => (
          <Link key={country} href={`/country/${country}`}>
            <li
              className={`text-white hover:bg-white rounded hover:text-[#af8a7a] py-1 px-2`}
              onClick={() => {setCountryName(country)
                console.log(countryName)
              } }
            >
              {country}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default Navigation;
