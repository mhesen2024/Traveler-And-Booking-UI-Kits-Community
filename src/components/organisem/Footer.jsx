import React from 'react'
import ItemContiner from '../molecules/ItemContanier'

export default function Footer() {
  return (
    <footer className=" w-full  ">

        <div className='mt-[80px] cursor-default '> 
            <ItemContiner />

        </div>

        <div className="p-4 bg-[#EBEBEB] h-[40px] ">
          <div className="flex flex-col md:flex-row justify-start md:justify-center lg:justify-end items-start md:items-center lg:items-end">
            <p className=" roboto-regular  text-[#4F4F4F]  py-auto mr-[250px] "> ©  my Dream Place 2022</p>
            
          </div>
        </div>
        
    </footer>
  )
}
