import React from 'react';
import { motion } from 'framer-motion';

const ExperienceCard = ({
  role,
  company,
  logo,
  duration,
  responsibilities,
}) => {
  return (
    <motion.div
      variants={{
        hidden: { x: -100, opacity: 0 },
        visible: { x: 0, opacity: 1 },
      }}
      className='bg-imagebackground text-neturalOffWhite p-6 rounded-lg shadow-md border-t-8 border-primary'>
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
      <motion.ul
        variants={{
          hidden: { x: -100, opacity: 0 },
          visible: { x: 0, opacity: 1 },
        }}
        transition={{ staggerChildren: 0.3, delayChildren: 0.2 }}
        className='list-disc list-inside space-y-2'>
        {responsibilities.map((responsibility, index) => (
          <motion.li
            variants={{
              hidden: { x: -100, opacity: 0 },
              visible: { x: 0, opacity: 1 },
            }}
            className='text-[13px]'
            key={index}>
            {responsibility}
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
};

export default ExperienceCard;
