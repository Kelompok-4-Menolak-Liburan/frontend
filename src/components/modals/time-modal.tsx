import React from "react";

export default function TimeModal() {
  return (
    // <div className='fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2'>
    <div
      className="relative"
      id="timepicker-with-button"
      data-te-timepicker-init
      data-te-input-wrapper-init
    >
      <input
        type="text"
        className="peer-focus:text-primary dark:peer-focus:text-primary peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
        id="form4"
      />
      <label
        htmlFor="form4"
        className="peer-focus:text-primary dark:peer-focus:text-primary pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200"
      >
        Select a time
      </label>
      <button
        tabIndex={0}
        type="button"
        className="timepicker-toggle-button absolute right-1.5 top-1/2 ml-auto h-4 w-4 -translate-x-1/2 -translate-y-1/2 cursor-pointer border-none bg-transparent text-neutral-700 outline-none transition-all duration-[300ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:fill-[#3b71ca] focus:text-[#3b71ca] dark:text-white dark:hover:text-[#3b71ca] dark:focus:text-[#3b71ca]"
        data-te-toggle="timepicker-with-button"
        data-te-timepicker-toggle-button
      >
        <span data-te-timepicker-icon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5"
            />
          </svg>
        </span>
      </button>
    </div>
    // </div>
  );
}
