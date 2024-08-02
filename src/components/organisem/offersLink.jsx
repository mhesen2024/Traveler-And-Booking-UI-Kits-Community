import React from 'react'
// import { useNavigate } from 'react-router-dom';

export default function OffersLink() {
//     const navigate = useNavigate();

//     const goOffersPage= ()=>{
// navigate('/offer')
//     }
  return (<>

  <div  className='cursor-pointer h-[280px] xl:w-11/12 mx-auto bg-cover my-[60px] bg-[url(../src/components/asserts/PNG/offersLink.png)] xl:rounded-xl'>
 <div className=' md:w-[580px]  sm:ml-16 pt-[40px] ml-[20px]'>
    <p className='text-white sm:text-3xl text-2xl roboto-medium '>
    Discover our exceptional hotel deals now and enjoy a luxurious stay at the lowest prices
    </p>
    <button className='roboto-medium text-white h-[44px] w-[146px] text-[15px] leading-5 mt-[30px] hover:bg-[#2467c0] bg-[#2F80ED] rounded-md'>
    Discover Deals
    </button>
 </div>
  </div>
  </>
  )
}

