import React from 'react';

export const Navigation = () => {
  return (
    <div className='flex w-full items-center justify-between px-[60px] py-6 '>
      <div className='w-[146px] h-12 font-bebas text-[32px] leading-[48px] text-neturalOffWhite whitespace-nowrap'>
        Sanjyot Satvi
      </div>
      <div className='justify-center items-center gap-8 flex'>
        <div className='justify-start items-start gap-8 flex'>
          <div className='text-neturalOffWhite text-base font-medium font-inter leading-[24px]'>
            Work
          </div>
          <div className='text-neturalOffWhite text-base  font-inter leading-[24px]'>
            About
          </div>
          <div className='text-neturalOffWhite text-base  font-inter leading-[24px]'>
            Contact
          </div>
        </div>
      </div>
    </div>
  );
};
