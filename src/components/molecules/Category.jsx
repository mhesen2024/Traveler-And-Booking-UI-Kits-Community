import React from 'react'

export default function Category() {
  return (
    <div  className='container flex flex-col w-[295px] h-[300px]  rounded-md border-2 border-[E0E0E0] space-y-[14px]  hover:border-2 hover:border-blue-500 '>
    <h2  className=' roboto-medium h-[55px] w-[295px] bg-[#F2F2F2] rounded-md py-[18px] pl-[18px] text-[#181818] hover:underline hover:decoration-blue-500 hover:border-2 hover:border-blue-500 ' style={{ borderRadius: '6px 6px 0px 0px' }}> Popular Filters</h2>

    <label className='block relative  flex items-center  mr-5  ' > 
        <input  className='  h-[20px] w-[20px] rounded-md border-2 border-[E0E0E0]   ml-[18px] pointer-events-none  ' type="checkbox" />
        <span className='  checkmark   roboto-regular  ml-[8px] text-[14px] '> </span> Free cancellation
        <span className='checkmark roboto-regular   text-[14px]  ml-auto'> </span> 200
    </label>
    <label className='block relative  flex items-center  mr-5  ' > 
    <input  className='  h-[20px] w-[20px] rounded-md border-2 border-[E0E0E0]   ml-[18px] pointer-events-none  'type="checkbox" />
        <span className='  checkmark   roboto-regular  ml-[8px] text-[14px] '> </span> Spa
        <span className='checkmark roboto-regular   text-[14px]  ml-auto'> </span> 100
    </label> 
    
    <label className='block relative  flex items-center  mr-5  ' > 
        <input  className='  h-[20px] w-[20px] rounded-md border-2 border-[E0E0E0]   ml-[18px] pointer-events-none  ' type="checkbox" />
        <span className='  checkmark   roboto-regular  ml-[8px] text-[14px]'> </span> Beach front
        <span className='checkmark roboto-regular   text-[14px]  ml-auto'> </span> 15
    </label> 
    <label className='block relative  flex items-center  mr-5  ' > 
        <input  className='  h-[20px] w-[20px] rounded-md border-2 border-[E0E0E0]   ml-[18px] pointer-events-none  ' type="checkbox" />
        <span className='  checkmark   roboto-regular  ml-[8px] text-[14px]'> </span> Hot tub/ jacuzzi
        <span className='checkmark roboto-regular   text-[14px]  ml-auto'> </span> 12
    </label> 
    <label className='block relative  flex items-center  mr-5  '> 
        <input  className='  h-[20px] w-[20px] rounded-md border-2 border-[E0E0E0]   ml-[18px] pointer-events-none  ' type="checkbox" />
        <span className='  checkmark   roboto-regular  ml-[8px] text-[14px]'> </span> Book without credit card
        <span className='checkmark roboto-regular   text-[14px]  ml-auto'> </span> 230
    </label>
    <label className='block relative  flex items-center  mr-5  ' > 
        <input  className='  h-[20px] w-[20px] rounded-md border-2 border-[E0E0E0]   ml-[18px] pointer-events-none  ' type="checkbox" />
        <span  className=' pb-[24px] checkmark   roboto-regular  ml-[8px] text-[14px]'> </span> No prepayment
        <span className='checkmark roboto-regular   text-[14px]  ml-auto'> </span> 12
    </label>
    
  
</div>
  )
}
