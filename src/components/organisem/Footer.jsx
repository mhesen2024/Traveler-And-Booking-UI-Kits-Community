import React from 'react'
import ItemContiner from '../molecules/ItemContanier'

export default function Footer() {
  return (
    <footer className=" w-full  ">

        <div className='mt-[80px] cursor-default '> 
            <ItemContiner />

        </div>
        <div className='container   bg-[#EBEBEB]   h-[40px] '>
        
            <p className='roboto-regular text-[#4F4F4F] py-[10px] ml-[1083px] mt-[60px] '> ©  my Dream Place 2022</p>
        
        </div>
    </footer>
  )
}
