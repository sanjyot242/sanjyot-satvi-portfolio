import ProjectCard from './Cards/ProjectCard';
import { data } from '../../data';

export default function FeaturedProjects() {
  return (
    <section className='md:ml-20 px-8 md:mr-20 '>
      <div className='flex flex-col gap-3 md:gap-2  mt-16 md:mt-20'>
        <div className='text-white font-bebas font-normal text-[43px] leading-[43px] md:text-[76px] md:leading-[76px] '>
          Featured Projects
        </div>
        <div className='text-white font-manrope font-normal leading-[27px] '>
          Here are some of the selected projects that showcase my passion for
          Software development.
        </div>
      </div>
      <div>
        {data.map((item) => (
          <ProjectCard item={item} />
        ))}
      </div>
    </section>
  );
}
