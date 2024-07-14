export default function Hero() {
  return (
    <>
      <section className='bg-neutral-950 flex flex-col md:flex-row items-center justify-between w-full h-[700px]  px-8 gap-2 md:gap-16 space-y-4  mb-20'>
        <div className='md:w-1/2 md:ml-20 space-y-4'>
          <h1 className='font-bebas leading-[57px] font-normal text-[57px] text-white md:text-[101px] md:leading-[90.90px]'>
            hi, i am <br />
            Sanjyot Satvi
          </h1>
          <p className='leading-relaxed font-manrope font-normal text-base text-neturalOffWhite md:text-lg md:leading-[27px]'>
            a Software Development Engineer currently pursuing Master's in
            Computer Science from CSUF, Fullerton , CA
          </p>
          <div className='flex items-center space-x-4'>
            <a
              href='mailto:satvi.sanjyot@gmail.com'
              className='bg-primary uppercase text-black px-4 py-2 rounded-full font-semibold hover:bg-lime-400 transition flex items-center space-x-2'>
              <span>Contact Me</span>
              <div className='w-10 h-10 bg-neutral-950 rounded-full flex items-center justify-center'>
                <img src='/images/arrow.svg' alt='arrow' className='h-6 w-6 ' />
              </div>
            </a>
            <a
              href='https://www.linkedin.com/in/sanjyotsatvi/'
              target='_blank'
              rel='noopener noreferrer'
              className='bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition'>
              <img
                src='/images/bxl-linkedin-svg.svg'
                alt='LinkedIn'
                className='h-6 w-6 '
              />
            </a>
            <a
              href='https://github.com/sanjyot242'
              target='_blank'
              rel='noopener noreferrer'
              className='bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition'>
              <img
                src='/images/bxl-github-svg.svg'
                alt='GitHub'
                className='h-6 w-6'
              />
            </a>
          </div>
        </div>
        <div className='md:w-1/2 flex justify-center  mb-8 md:mb-0'>
          <div className='mt-10 md:mt-0 w-[380px] h-[400px] md:w-80 md:h-[500px] lg:w-96 lg:h-[500px] overflow-hidden rounded-md shadow-lg'>
            <img
              src='/images/sanjyot-satvi.jpeg'
              alt='Sanjyot Satvi'
              className='w-full h-full object-cover'
            />
          </div>
        </div>
      </section>
      <div className='w-full h-[2px] border border-zinc-700'></div>
    </>
  );
}
