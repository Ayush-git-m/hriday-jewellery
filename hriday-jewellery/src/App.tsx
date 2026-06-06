import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Collections } from './components/Collections';
import { TrustBar } from './components/TrustBar';
import { Gallery } from './components/Gallery';
import { Connected } from './components/Connected';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Collections />
        <TrustBar />
        <Gallery />
        <Connected />
      </main>
      <Footer />
    </div>
  );
}

