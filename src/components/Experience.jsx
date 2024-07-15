import { useRef } from 'react';
import ExperienceCard from './Cards/ExperienceCard';
import { motion, useInView } from 'framer-motion';

const experiences = [
  {
    role: 'Consultant-System Management',
    company: 'LTIMindtree',
    logo: '/images/ltimindtree_logo.jpeg',
    duration: 'June 2021 - July 2023',
    responsibilities: [
      'Responsible for designing and developing backend logic using an in-house framework with Node.js to accurately identify risks based on specific policy information, significantly enhancing the decision-making process for underwriters.',
      'Designed, developed, and tested microservices in .NET Framework with C# for the underwriter platform to identify risks for policy renewals, successfully driving the project through to production.',
    ],
  },
  {
    role: 'Android Development Intern',
    company: 'Eople Internet Pvt.Ltd',
    logo: '/images/eople_logo.jpeg',
    duration: 'March 2020 - October 2020',
    responsibilities: [
      'Responsible for leading the Software Development Life Cycle (SDLC) for two robust, user-friendly Android applications, from initial concept to deployment',
      'Served as the primary technical advisor for a management team of over 7 members, providing strategic guidance and technical expertise.Served as the primary technical advisor for a management team of over 7 members, providing strategic guidance and technical expertise.',
      'Executed the platforms inaugural integrations with RazorPay, Google Maps, Firebase, and key third-party APIs, setting a solid foundation for advanced functionality and future user interactions',
    ],
  },
  // Add more experiences as needed
];

export default function Experience({}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <>
      <motion.section
        variants={{
          hidden: { x: -100, opacity: 0 },
          visible: { x: 0, opacity: 1 },
        }}
        ref={ref}
        initial='hidden'
        animate={isInView ? 'visible' : {}}
        transition={{ duration: 0.5, staggerChildren: 0.3 }}
        id='experience'
        className='md:ml-20 px-8 md:mr-20  mb-20'>
        <div className='flex flex-col gap-3 md:gap-2  mt-16 md:mt-20'>
          <div className='text-white font-bebas font-normal text-[43px] leading-[43px] md:text-[76px] md:leading-[76px] '>
            My Experience
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 pt-2'>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} {...experience} />
          ))}
        </div>
      </motion.section>
      <div className='w-full h-[2px] border border-zinc-700'></div>
    </>
  );
}
