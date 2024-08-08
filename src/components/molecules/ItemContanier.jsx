
import React from 'react'
import Item from './Item'
import {Company , Explore, Terms ,Help} from './Menus'
import Logo from '../../views/Logo'


export default function ItemContiner() {
  return ( 
    <div className=' container flex text-left item-center   '> 
        <div className=' ml-[100px]'>
         <Logo />  
         <a className='text-[#4F4F4F] roboto-regular text-[14px] '>Your next goto companion for travel</a>
        </div>
          
        <div className=' grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-[50px]  ml-[90px]  '>   
        <Item className="pl-[90px]" links={Company} title="Company" />
        <div>
         <Item links={Explore} title="Explore"  />
         <a className='text-[#2F80ED] roboto-regular text-[14px] hover:underline hover:decoration-blue-500  '  href='#'>see more</a>
        </div>
        <Item links={Terms} title="Terms and Policiy" />
        <Item links={Help} title="Help"  />
        </div>
      
    </div>
  )
}