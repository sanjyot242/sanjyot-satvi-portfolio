import React from 'react';

export const Navigation = () => {
  return (
    <div className='flex w-full items-center justify-between px-[60px] py-6 '>
      <div className='w-[146px] h-12 font-bebas text-[32px] leading-[48px] text-neturalOffWhite whitespace-nowrap'>
        Sanjyot Satvi
      </div>
      <div className='hidden md:flex justify-center items-center gap-8 '>
        <div className='justify-start items-start gap-8 flex'>
          <a
            href='#projects'
            className='text-neturalOffWhite text-base font-medium font-inter leading-[24px]'>
            Projects
          </a>
          <a
            href='#experience'
            className='text-neturalOffWhite text-base  font-inter leading-[24px]'>
            Experience
          </a>
        </div>
      </div>

      {/* hamburger menu */}
      <button className='space-y-1 group md:hidden'>
        <div className='w-6 h-1 bg-white'></div>
        <div className='w-6 h-1 bg-white'></div>
        <div className='w-6 h-1 bg-white'></div>

        {/* menu */}
        <ul className='bg-neutral-950 w-screen pb-10 absolute -top-full group-focus:top-0 right-0 duration-150 flex flex-col space-y-3 justify-end'>
          <button className='px-10 py-8 relative ml-auto'>
            <div className='w-6 h-1 rotate-45 absolute bg-white'></div>
            <div className='w-6 h-1 -rotate-45 absolute bg-white'></div>
          </button>
          <a
            href='#projects'
            className='text-neturalOffWhite text-base font-medium font-inter leading-[24px] py-2 '>
            Projects
          </a>
          <a
            href='#experience'
            className='text-neturalOffWhite text-base  font-inter leading-[24px] py-2'>
            Experience
          </a>
        </ul>
      </button>
    </div>
  );
};
