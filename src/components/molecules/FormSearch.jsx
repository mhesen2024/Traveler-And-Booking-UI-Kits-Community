import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function FormSearch() {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);

  return (
    <form className=" md:w-10/12 shadow-xl mx-auto flex flex-wrap gap-[12px] py-[11px] px-[12px] bg-white rounded-lg">
      <div className="flex  grow gap-[10px] sm:py-[11px] sm:px-[12px] bg-[#F2F2F2] rounded-md">
        <svg
          className="mt-[2px]"
          width="16"
          height="20"
          viewBox="0 0 16 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.9999 11.1917C8.34134 11.1917 8.67943 11.1244 8.99488 10.9938C9.31033 10.8631 9.59695 10.6716 9.83838 10.4302C10.0798 10.1887 10.2713 9.90212 10.402 9.58668C10.5327 9.27123 10.5999 8.93314 10.5999 8.5917C10.5999 8.25026 10.5327 7.91217 10.402 7.59672C10.2713 7.28128 10.0798 6.99465 9.83838 6.75322C9.59695 6.51179 9.31033 6.32027 8.99488 6.18961C8.67943 6.05895 8.34134 5.9917 7.9999 5.9917C7.31034 5.9917 6.64902 6.26563 6.16142 6.75322C5.67383 7.24082 5.3999 7.90214 5.3999 8.5917C5.3999 9.28126 5.67383 9.94258 6.16142 10.4302C6.64902 10.9178 7.31034 11.1917 7.9999 11.1917V11.1917Z"
            stroke="#828282"
            strokeWidth="1.5"
          />
          <path
            d="M1.01675 7.07508C2.65842 -0.141583 13.3501 -0.13325 14.9834 7.08342C15.9417 11.3168 13.3084 14.9001 11.0001 17.1168C10.1935 17.8947 9.11654 18.3294 7.99592 18.3294C6.87529 18.3294 5.79835 17.8947 4.99175 17.1168C2.69175 14.9001 0.0584164 11.3084 1.01675 7.07508V7.07508Z"
            stroke="#828282"
            strokeWidth="1.5"
          />
        </svg>
        <input
          className="outline-none roboto-regular text-sm bg-transparent"
          placeholder="Where are you going?"
          type="text"
        />
      </div>
      <div className="flex grow gap-[10px] sm:py-[11px] sm:px-[12px] bg-[#F2F2F2] rounded-md">
        <i className="fa-regular fa-calendar-days mt-[3px] text-gray-500"></i>
        <DatePicker
          className="outline-none bg-transparent roboto-regular text-sm"
          placeholderText="Check in date"
          selected={checkInDate}
          onChange={(date) => setCheckInDate(date)}
          showMonthDropdown
          showYearDropdown
          dropdownMode="select"
        />
      </div>

      <div className="flex grow gap-[10px] sm:py-[11px] sm:px-[12px] bg-[#F2F2F2] rounded-md">
        <i className="fa-regular fa-calendar-days mt-[3px] text-gray-500"></i>
        <DatePicker
          className="outline-none bg-transparent roboto-regular text-sm"
          placeholderText="Check out date"
          selected={checkOutDate}
          onChange={(date) => setCheckOutDate(date)}
          showMonthDropdown
          showYearDropdown
          dropdownMode="select"
          
        />
      </div>
      <div className="flex grow  gap-[10px] sm:py-[11px] sm:px-[12px] bg-[#F2F2F2] rounded-md">
        <svg
          className="mt-[2px]"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_308_77)">
            <path
              d="M15.1166 18.0168C14.3833 18.2335 13.5166 18.3335 12.5 18.3335H7.49997C6.4833 18.3335 5.61663 18.2335 4.8833 18.0168C5.06663 15.8502 7.29163 14.1418 9.99997 14.1418C12.7083 14.1418 14.9333 15.8502 15.1166 18.0168V18.0168Z"
              stroke="#828282"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.4998 1.66675H7.49984C3.33317 1.66675 1.6665 3.33341 1.6665 7.50008V12.5001C1.6665 15.6501 2.6165 17.3751 4.88317 18.0167C5.0665 15.8501 7.2915 14.1417 9.99984 14.1417C12.7082 14.1417 14.9332 15.8501 15.1165 18.0167C17.3832 17.3751 18.3332 15.6501 18.3332 12.5001V7.50008C18.3332 3.33341 16.6665 1.66675 12.4998 1.66675ZM9.99984 11.8084C8.34984 11.8084 7.0165 10.4667 7.0165 8.81675C7.0165 7.16675 8.34984 5.83341 9.99984 5.83341C11.6498 5.83341 12.9832 7.16675 12.9832 8.81675C12.9832 10.4667 11.6498 11.8084 9.99984 11.8084Z"
              stroke="#828282"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.9833 8.81683C12.9833 10.4668 11.6499 11.8085 9.99993 11.8085C8.34993 11.8085 7.0166 10.4668 7.0166 8.81683C7.0166 7.16683 8.34993 5.8335 9.99993 5.8335C11.6499 5.8335 12.9833 7.16683 12.9833 8.81683Z"
              stroke="#828282"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_308_77">
              <rect width="20" height="20" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <input
          className="outline-none bg-transparent roboto-regular text-sm"
          placeholder="Guests"
          type="text"
        />
      </div>
      <button className="roboto-medium text-[15px] w-[9.3rem] grow hover:bg-[#2262b6] drop-shadow-lg bg-[#2F80ED] py-[11px] rounded-md text-white">
        Search
      </button>
    </form>
  );
}
