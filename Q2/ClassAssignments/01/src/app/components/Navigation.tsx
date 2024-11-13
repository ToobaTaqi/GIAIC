"use client"
import React from 'react'
import { countryList } from '../assets/CountryData'
import Link from 'next/link'

function Navigation() {
  return (
    <div className='flex flex-col justify-center items-center'>
     <Link href='/'> <h1 className='text-3xl text-[#604436] font-bold'>Country Explorer App</h1></Link>
       <ul className='flex flex-wrap gap-3 text-xl'>
        {countryList.map((country) => (
          <Link key={country} href={`/country/${country}`}>
            <li className='text-white hover:bg-white rounded hover:text-[#af8a7a] py-1 px-2'>{country}</li>
          </Link>
        ))}
      </ul>
    </div>
  )
}

export default Navigation
