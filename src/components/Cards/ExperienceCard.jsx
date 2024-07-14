import React from 'react';

const ExperienceCard = ({
  role,
  company,
  logo,
  duration,
  responsibilities,
}) => {
  return (
    <div className='bg-imagebackground text-neturalOffWhite p-6 rounded-lg shadow-md border-t-8 border-primary'>
      <div className='flex items-center mb-4'>
        <img
          src={logo}
          alt={`${company} logo`}
          className='h-14 w-14 rounded-full mr-4'
        />
        <div>
          <h3 className='text-primary font-bold text-lg'>{role}</h3>
          <p className='text-base'>{company}</p>
          <p className='text-base  '>{duration}</p>
        </div>
      </div>
      <ul className='list-disc list-inside space-y-2'>
        {responsibilities.map((responsibility, index) => (
          <li className='text-[13px]' key={index}>
            {responsibility}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceCard;
