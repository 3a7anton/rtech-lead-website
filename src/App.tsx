import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, lazy, Suspense } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingLines from './components/FloatingLines';
// Lazy load pages for code-splitting
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
import './App.css';

gsap.registerPlugin(ScrollTrigger);

function AppContent() {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
    
    // Refresh ScrollTrigger after route change
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);
  }, [location.pathname]);

  return (
    <div className="app">
      <FloatingLines
        linesGradient={['#e947f5', '#2f4ba2']}
        enabledWaves={['top', 'middle', 'bottom']}
        lineCount={[6, 8, 6]}
        lineDistance={[5, 3, 5]}
        animationSpeed={0.8}
        interactive={true}
        parallax={true}
        mixBlendMode="screen"
      />
      <Navbar />
      <main className="main-content">
        <Suspense fallback={
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            minHeight: '100vh',
            color: '#fff'
          }}>
            Loading...
          </div>
        }>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
