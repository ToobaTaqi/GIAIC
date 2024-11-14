import { countries } from "@/app/assets/CountryData";
import CountryCard from "@/app/components/CountryCard";
import React from "react";

function page({ params }: { params: { country_name: string } }) {
  let country = params.country_name;

  return (
    <div>
      {countries.map((c, i) => (
        <div key={i}>
          <p>
            {country === c.name ? (
              <CountryCard
                country={c.name}
                capital={c.capital}
                population={c.population}
              />
            ) : (
              " "
            )}
          </p>
        </div>
      ))}
      {/* <CountryCard country={country} capital='' population={}/> */}
    </div>
  );
}

export default page;
