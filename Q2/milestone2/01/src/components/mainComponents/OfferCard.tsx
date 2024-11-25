import React from 'react'

function OfferCard({logo,heading,paragraph}:{logo:string, heading:string, paragraph:string}) {
  return (
    <div className='flex flex-col justify-center w-fit items-center gap-2'>
      <img src={logo} alt="" className='w-[60px] bg-slate-200 rounded-full p-2 m-4' />
      <h3 className='font-bold text-lg'>{heading}</h3>
      <p className='text-sm'>{paragraph}</p>
    </div>
  )
}

export default OfferCard
