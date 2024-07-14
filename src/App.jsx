import Experience from './components/Experience';
import FeaturedProjects from './components/FeaturedProjects';
import Hero from './components/Hero';
import { Navigation } from './components/Navigation';

export default function App() {
  return (
    <div className='bg-neutral-950 '>
      <Navigation />
      <Hero />
      <Experience />
      <FeaturedProjects />
    </div>
  );
}
