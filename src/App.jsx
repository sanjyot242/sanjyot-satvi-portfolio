import Experience from './components/Experience';
import FeaturedProjects from './components/FeaturedProjects';
import Hero from './components/Hero';
import { Navigation } from './components/Navigation';
import './App.css';
import SkillsAndTools from './components/SkillsAndTools';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className='bg-neutral-950 scroll-smooth '>
      <Navigation />
      <Hero />
      <Experience />
      <FeaturedProjects />
      <SkillsAndTools />
      <Footer />
    </div>
  );
}
