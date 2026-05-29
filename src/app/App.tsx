import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Timeline } from './components/Timeline';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { LanguageProvider } from './contexts/LanguageContext';

export default function App() {
  return (
      <LanguageProvider>
        <div className="min-h-screen bg-white dark:bg-gray-900">
          <Navigation />
          <main>
            <Hero />
            <Projects />
            <Skills />
            <Timeline />
            <Contact />
          </main>
          <Footer />
        </div>
      </LanguageProvider>
  );
}
