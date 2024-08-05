import React from 'react'

export default function Search() {
  return (
    <div className='w-[295px] h-[119px]  rounded-[6px] bg-[#F2F2F2]  hover:border-2 hover:border-blue-500'> 
    <h2  className=' roboto-medium h-[55px] w-[295px] bg-[#F2F2F2] rounded-md pt-[20px] pl-[18px]  text-[#181818] hover:underline hover:decoration-blue-500  ' > Search by property name </h2>
    
    <input
            type="search"
            className="relative   hover:border-2 hover:border-blue-500 mx-[18px]  h-[44px]  block w-[259px] rounded border border-solid border-neutral-200  bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-surface outline-none transition duration-200 ease-in-out placeholder:text-[#4F4F4F] focus:z-[3] focus:border-primary focus:shadow-inset focus:outline-none motion-reduce:transition-none dark:border-white/10 dark:text-white dark:placeholder:text-neutral-200 dark:autofill:shadow-autofill dark:focus:border-primary"
            placeholder=" eg. Beach westpalm"
            aria-label="Search"
            id="exampleFormControlInput4" />

    
    </div>
  )
}
