import ProjectCard from './Cards/ProjectCard';
import { useRef } from 'react';
import { data } from '../../data';
import { motion, useInView } from 'framer-motion';

export default function FeaturedProjects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <>
      <section id='projects' className='md:ml-20 px-8 md:mr-20 '>
        <motion.div
          variants={{
            hidden: { x: -100, opacity: 0 },
            visible: { x: 0, opacity: 1 },
          }}
          ref={ref}
          initial='hidden'
          animate={isInView ? 'visible' : {}}
          transition={{ duration: 0.5, staggerChildren: 0.3 }}
          className='flex flex-col gap-3 md:gap-2  mt-16 md:mt-20'>
          <div className='text-white font-bebas font-normal text-[43px] leading-[43px] md:text-[76px] md:leading-[76px] '>
            Featured Projects
          </div>
          <div className='text-white font-manrope font-normal leading-[27px] '>
            Here are some of the selected projects that showcase my passion for
            Software development.
          </div>
        </motion.div>
        <div transition={{ duration: 0.5, staggerChildren: 0.3 }}>
          {data.map((item) => (
            <ProjectCard item={item} />
          ))}
        </div>
      </section>
      <div className='w-full h-[2px] border border-zinc-700'></div>
    </>
  );
}
