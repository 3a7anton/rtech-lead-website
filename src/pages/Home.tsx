import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import ScrollFloat from '../components/ScrollFloat';
import './Home.css';

export default function Home() {
  const partnersRef = useRef<HTMLDivElement>(null);
  const servicesScrollRef = useRef<HTMLDivElement>(null);
  const [isServicesHovered, setIsServicesHovered] = useState(false);

  useEffect(() => {
    // Auto-scroll partners on mobile
    const container = partnersRef.current;
    if (!container) return;

    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
      let scrollAmount = 0;
      const scrollSpeed = 1;

      const scroll = () => {
        scrollAmount += scrollSpeed;
        if (container.scrollWidth > 0 && scrollAmount >= container.scrollWidth / 2) {
          scrollAmount = 0;
        }
        container.scrollLeft = scrollAmount;
      };

      const interval = setInterval(scroll, 30);
      return () => clearInterval(interval);
    }
  }, []);

  // Auto-scroll services on hover
  useEffect(() => {
    const container = servicesScrollRef.current;
    if (!container || !isServicesHovered) return;

    let scrollAmount = container.scrollLeft;
    const scrollSpeed = 2;
    const maxScroll = container.scrollWidth - container.clientWidth;

    const scroll = () => {
      scrollAmount += scrollSpeed;
      if (scrollAmount >= maxScroll) {
        scrollAmount = 0;
      }
      container.scrollLeft = scrollAmount;
    };

    const interval = setInterval(scroll, 30);
    return () => clearInterval(interval);
  }, [isServicesHovered]);

  const partners = [
    '1.png',
    '308796719_191823933241237_4600577206313874969_n.png',
    '311497023_110511711840076_9016268039703762972_n.jpg',
    '358694471_582397210730521_5670017943227116780_n.jpg',
    '476345221_122138246474434435_5575174931371062212_n.jpg',
    '499169488_122229632384089701_1799245916172908297_n.jpg',
    'logo-lead.jpg',
    'logo.jpg'
  ];

  const services = [
    {
      title: 'Software Development',
      description: 'Custom software solutions tailored to your business needs',
      icon: '💻'
    },
    {
      title: 'Website Development',
      description: 'Responsive and modern web applications',
      icon: '🌐'
    },
    {
      title: 'Branding & Printing',
      description: 'Professional branding solutions and printing services',
      icon: '🎨'
    },
    {
      title: 'Motion Graphics',
      description: 'Engaging motion graphics for marketing and presentations',
      icon: '🎬'
    },
    {
      title: 'Animation Video',
      description: 'Creative animation videos that captivate audiences',
      icon: '🎞️'
    },
    {
      title: 'OVC Production',
      description: 'Complete video production with models and voice over',
      icon: '📹'
    }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-video-container">
          <video autoPlay loop muted playsInline className="hero-video">
            <source src="/Office_Ambiance_Video_Generation.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          {/* <img src="/rtech.png" alt="RTech Lead" className="hero-logo" /> */}
          <h1>Empowering Businesses Through Innovation</h1>
          <p>Leading IT solutions provider delivering excellence since 2024</p>
          <Link to="/services" className="hero-cta">
            Get Started
          </Link>
        </div>
      </section>

      {/* About Us Section */}
      <section className="about-section">
        <div className="container">
          <ScrollFloat>
            About RTech Lead
          </ScrollFloat>
          <p className="about-text">
            Founded in 2024, RTech Lead has quickly established itself as a leading provider of innovative IT services. With a team of dedicated professionals and a passion for technology, we've successfully completed over 50 projects for clients across various industries.
          </p>
        </div>
      </section>

      {/* Partners Section */}
      <section className="partners-section">
        <div className="container">
          <ScrollFloat as="h2">
            Our Trusted Partners
          </ScrollFloat>
          <div className="partners-container" ref={partnersRef}>
            <div className="partners-track">
              {/* Show duplicates only on mobile for scrolling effect */}
              {(window.innerWidth <= 768 ? [...partners, ...partners] : partners).map((partner, index) => (
                <div key={index} className="partner-logo">
                  <img src={`/partners/${partner}`} alt={`Partner ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Work Ethics Section */}
      <section className="ethics-section">
        <div className="container">
          <ScrollFloat>
            Our Work Ethics
          </ScrollFloat>
          <p className="ethics-text">
            We believe in building long-term partnerships with our clients based on trust, quality, and exceptional service. Our mission is to empower businesses with cutting-edge technology solutions that drive growth, efficiency, and competitive advantage.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="services-overview">
        <div className="container">
          <ScrollFloat as="h2">
            Our Services
          </ScrollFloat>
          <div 
            ref={servicesScrollRef}
            className="services-scroll"
            onMouseEnter={() => setIsServicesHovered(true)}
            onMouseLeave={() => setIsServicesHovered(false)}
          >
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a 
                  href="https://wa.me/8801634352723" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="service-link"
                >
                  Learn More →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

     
      <section className="achievements-section">
        <div className="container">
          <ScrollFloat as="h2">
            Our Achievements
          </ScrollFloat>
          <div className="achievements-grid">
            <div className="achievement-card">
              <div className="achievement-number">50+</div>
              <div className="achievement-label">Projects Completed</div>
              <p>Successful deliveries across industries</p>
            </div>
            <div className="achievement-card">
              <div className="achievement-number">2024</div>
              <div className="achievement-label">Founded</div>
              <p>Leading IT solutions provider</p>
            </div>
            <div className="achievement-card">
              <div className="achievement-number">100%</div>
              <div className="achievement-label">Client Satisfaction</div>
              <p>Dedicated to excellence</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
