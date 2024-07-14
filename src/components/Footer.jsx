import React from 'react';

const Footer = () => {
  return (
    <footer className=' text-neturalOffWhite py-6'>
      <div className='container mx-auto flex flex-col items-center'>
        <div className='flex space-x-4 mb-4'>
          <a
            href='mailto:satvi.sanjyot@gmail.com'
            className='flex items-center px-4 py-2 border-2 border-primary rounded-md hover:bg-primary hover:text-black transition duration-300'>
            Contact Me
            <img src='/images/email.svg' alt='email' className='h-6 w-6 ml-2' />
          </a>
          <a
            href='https://drive.google.com/file/d/1-z9ARFfpjDtOP8tCn8pTVbL3GE4NbX9W/view?usp=sharing'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 hover:bg-primary transition duration-300'>
            <img src='/images/pdf.svg' alt='pdf' className='h-6 w-6' />
          </a>
          <a
            href='https://www.linkedin.com/in/sanjyotsatvi/'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 hover:bg-primary transition duration-300'>
            <img
              src='/images/bxl-linkedin-svg.svg'
              alt='LinkedIn'
              className='h-6 w-6'
            />
          </a>
          <a
            href='https://github.com/sanjyot242'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 hover:bg-primary transition duration-300'>
            <img
              src='/images/bxl-github-svg.svg'
              alt='GitHub'
              className='h-6 w-6'
            />
          </a>
        </div>
        <div className='text-sm'>
          Made with <span className='text-red-500'>❤</span> by Sanjyot Satvi
        </div>
      </div>
    </footer>
  );
};

export default Footer;
