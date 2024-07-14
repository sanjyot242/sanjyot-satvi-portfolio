import React from 'react';

const SkillsAndTools = () => {
  const column1 = [
    'Java',
    'Python',
    'JavaScript',
    'Python',
    'HTML/CSS',
    'Tailwind CSS',
  ];
  const column2 = ['Git', 'Heroku', 'Firebase', 'Jenkins', 'Docker'];
  const column3 = ['Node.js', 'React.js', 'FAST Api', 'MongoDB'];

  return (
    <section id='Skills' className='md:ml-20 px-8 md:mr-20 '>
      <div className='flex flex-col gap-3 md:gap-2  mt-16 md:mt-20'>
        <div className='text-white font-bebas font-normal text-[43px] leading-[43px] md:text-[76px] md:leading-[76px] '>
          Skills and Tools
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          <div>
            {column1.map((skill, index) => (
              <div key={index} className='flex items-center mb-2'>
                <svg
                  className='h-5 w-5 text-primary mr-2'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'>
                  <path
                    fillRule='evenodd'
                    d='M16.707 5.293a1 1 0 00-1.414 0L9 11.586 4.707 7.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0l7-7a1 1 0 000-1.414z'
                    clipRule='evenodd'
                  />
                </svg>
                <span className='text-neturalOffWhite'>{skill}</span>
              </div>
            ))}
          </div>
          <div>
            {column2.map((skill, index) => (
              <div key={index} className='flex items-center mb-2'>
                <svg
                  className='h-5 w-5 text-primary mr-2'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'>
                  <path
                    fillRule='evenodd'
                    d='M16.707 5.293a1 1 0 00-1.414 0L9 11.586 4.707 7.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0l7-7a1 1 0 000-1.414z'
                    clipRule='evenodd'
                  />
                </svg>
                <span className='text-neturalOffWhite'>{skill}</span>
              </div>
            ))}
          </div>
          <div>
            {column3.map((skill, index) => (
              <div key={index} className='flex items-center mb-2'>
                <svg
                  className='h-5 w-5 text-primary mr-2'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'>
                  <path
                    fillRule='evenodd'
                    d='M16.707 5.293a1 1 0 00-1.414 0L9 11.586 4.707 7.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0l7-7a1 1 0 000-1.414z'
                    clipRule='evenodd'
                  />
                </svg>
                <span className='text-neturalOffWhite'>{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsAndTools;
