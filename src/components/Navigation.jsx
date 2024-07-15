import React, { useState } from 'react';

export const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='flex w-full items-center justify-between px-[60px] py-6 relative'>
      <div className='w-[146px] h-12 font-bebas text-[32px] leading-[48px] text-neturalOffWhite whitespace-nowrap'>
        Sanjyot Satvi
      </div>
      <div className='hidden md:flex justify-center items-center gap-8'>
        <div className='justify-start items-start gap-8 flex'>
          <a
            href='#projects'
            className='text-neturalOffWhite text-base font-medium font-inter leading-[24px]'>
            Projects
          </a>
          <a
            href='#experience'
            className='text-neturalOffWhite text-base font-inter leading-[24px]'>
            Experience
          </a>
        </div>
      </div>

      {/* hamburger menu */}
      <button
        onClick={toggleMenu}
        className='space-y-1 group md:hidden relative z-50'>
        <div className='w-6 h-1 bg-white'></div>
        <div className='w-6 h-1 bg-white'></div>
        <div className='w-6 h-1 bg-white'></div>
      </button>

      {/* mobile menu */}
      <ul
        className={`bg-neutral-950 w-screen pb-10 absolute top-0 left-0 right-0 transform ${
          menuOpen ? 'translate-y-0' : '-translate-y-full'
        } transition-transform duration-150 ease-in-out flex flex-col space-y-3 justify-end`}>
        <button onClick={toggleMenu} className='px-10 py-8 relative ml-auto'>
          <div className='w-6 h-1 rotate-45 absolute bg-white'></div>
          <div className='w-6 h-1 -rotate-45 absolute bg-white'></div>
        </button>
        <a
          href='#projects'
          onClick={toggleMenu}
          className='text-neturalOffWhite text-base font-medium font-inter leading-[24px] py-2 px-10'>
          Projects
        </a>
        <a
          href='#experience'
          onClick={toggleMenu}
          className='text-neturalOffWhite text-base font-inter leading-[24px] py-2 px-10'>
          Experience
        </a>
      </ul>
    </div>
  );
};
