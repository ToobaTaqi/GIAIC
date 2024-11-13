// import { useRouter } from "next/router";
import { countries } from "@/app/assets/CountryData";

export default function CountryDetails({
  params,
}: {
  params: { country_name: string };
}) {
  let country = params.country_name;

  return (
    <div className="flex flex-col gap-4 justify-center items-center py-4 w-[400px] border rounded text-[#604436]">
      <h1 className="text-2xl font-bold">{country}</h1>
      <div className="flex gap-4 justify-center items-center">
        <div className="font-bold text-lg">
          <p>Capital</p>
          <p>Population</p>
        </div>
        {countries.map((c, i) => (
          <div key={i}>
            <p>{country === c.name ? c.capital : " "}</p>
            <p>{country === c.name ? c.population : " "}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
