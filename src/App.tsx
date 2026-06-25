import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import AllProjects from './components/AllProjects';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Education from './components/Education';
import Articles from './components/Articles';
import AllArticles from './components/AllArticles';
import Contact from './components/Contact';
import Footer from './components/Footer';

export type View = 'home' | 'projects' | 'articles';

export default function App() {
  const [view, setView] = useState<View>('home');

  if (view === 'projects') {
    return (
      <div className="min-h-screen bg-[#111111] text-[#e2e2e2]">
        <Navbar onNav={setView} activeView={view} />
        <AllProjects onBack={() => setView('home')} />
        <Footer />
      </div>
    );
  }

  if (view === 'articles') {
    return (
      <div className="min-h-screen bg-[#111111] text-[#e2e2e2]">
        <Navbar onNav={setView} activeView={view} />
        <AllArticles onBack={() => setView('home')} />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#111111] text-[#e2e2e2]">
      <Navbar onNav={setView} activeView={view} />
      <main>
        <Hero onNav={setView} />
        <About />
        <Skills />
        <Projects onViewAll={() => setView('projects')} />
        <Experience />
        <Achievements />
        <Education />
        <Articles onViewAll={() => setView('articles')} />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
