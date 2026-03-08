import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Technologies } from './components/Technologies';
import { WhyUs } from './components/WhyUs';
import { Process } from './components/Process';
import { Partnership } from './components/Partnership';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Technologies />
        <WhyUs />
        <Process />
        <Partnership />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}