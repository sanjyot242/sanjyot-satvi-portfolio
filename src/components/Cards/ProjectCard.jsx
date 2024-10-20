import { motion, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
export default function ProjectCard({ item }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    console.log(isInView);
  }, [isInView]);
  return (
    <motion.div
      ref={ref}
      initial='hidden'
      animate={isInView ? 'visible' : 'hidden'}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
      className='flex flex-col md:flex-row md:gap-8 justify-center my-24'>
      <motion.div
        variants={{
          hidden: { x: -100, opacity: 0 },
          visible: { x: 0, opacity: 1 },
        }}
        transition={{ duration: 0.8 }}
        className='md:w-1/2 bg-imagebackground rounded-xl flex justify-center items-center p-7 md:p-14 border-t-8 border-primary'>
        <img
          className='w-[350px] md:w-[486px] h-[180px] md:h-[300px] rounded-xl border-2 border-black'
          src={item.imageurl}
        />
      </motion.div>

      <motion.div
        variants={{
          hidden: { x: 100, opacity: 0 },
          visible: { x: 0, opacity: 1 },
        }}
        transition={{ duration: 0.8 }}
        className='md:w-1/2'>
        <h1 className='text-white font-manrope text-[24px] font-[500] leading-[33.6px] md:text-[32px] md:leading-[44.8px] my-4'>
          {item.title}
        </h1>
        <p className='text-neturalOffWhite font-manrope font-normal text-[16px] leading-[25.6px] md:text-[18px] md:leading-[27px] my-4'>
          {item.description}
        </p>
        <div className='flex-row inline-flex gap-6 mt-6'>
          {item.link ? (
            <a
              href={item.link}
              className='text-primary uppercase justify-start items-start gap-1 inline-flex underline'>
              <span>Live Demo</span>
              <div className='w-6 h-6 flex items-center justify-center'>
                <img
                  src='/images/arrow-green.svg'
                  alt='arrow'
                  className='h-6 w-6 text-primary'
                />
              </div>
            </a>
          ) : (
            ''
          )}

          <a
            href={item.githhubLink}
            className='text-primary uppercase justify-start items-start gap-1 inline-flex underline'>
            <span> See on Github</span>
            <div className='w-6 h-6 flex items-center justify-center'>
              <img
                src='/images/arrow-green.svg'
                alt='arrow'
                className='h-6 w-6 text-primary'
              />
            </div>
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}
