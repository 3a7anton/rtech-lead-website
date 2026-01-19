import ScrollFloat from '../components/ScrollFloat';
import './Services.css';

export default function Services() {
  const services = [
    {
      title: 'Website Development',
      description: 'Custom website development with responsive design and modern technologies tailored to your needs.',
      icon: '🌐',
      features: [
        'Responsive Web Design',
        'E-commerce Solutions',
        'CMS Development',
        'Progressive Web Apps'
      ]
    },
    {
      title: 'Software Development',
      description: 'Custom software development solutions tailored to your business requirements and industry standards.',
      icon: '💻',
      features: [
        'Custom Application Development',
        'Enterprise Software Solutions',
        'API Development & Integration',
        'Software Maintenance & Support'
      ]
    },
    {
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications designed for optimal performance and user experience.',
      icon: '📱',
      features: [
        'iOS & Android Development',
        'Cross-Platform Solutions',
        'App UI/UX Design',
        'App Maintenance & Updates'
      ]
    },
    {
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategies to boost your online presence and drive business growth.',
      icon: '📈',
      features: [
        'SEO & SEM',
        'Social Media Marketing',
        'Content Marketing',
        'Email Campaigns'
      ]
    },
    {
      title: 'Graphic & Animation',
      description: 'Creative graphic design and animation services to bring your brand vision to life with stunning visuals.',
      icon: '🎨',
      features: [
        'Logo & Brand Design',
        '2D/3D Animation',
        'Motion Graphics',
        'Video Animation'
      ]
    },
    {
      title: 'Influencer Marketing',
      description: 'Strategic influencer partnerships to amplify your brand message and reach targeted audiences effectively.',
      icon: '🌟',
      features: [
        'Influencer Selection',
        'Campaign Management',
        'Content Collaboration',
        'Performance Analytics'
      ]
    },
    {
      title: 'Videography',
      description: 'Professional videography services for events, commercials, documentaries, and promotional content.',
      icon: '🎬',
      features: [
        'Event Coverage',
        'Commercial Videos',
        'Documentary Production',
        'Promotional Content'
      ]
    },
    {
      title: 'Event Activation',
      description: 'Engaging event activation services to create memorable brand experiences and connect with your audience.',
      icon: '🎪',
      features: [
        'Event Planning & Execution',
        'Brand Activation Campaigns',
        'On-Ground Marketing',
        'Experiential Marketing'
      ]
    }
  ];

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="container">
          <h1>Our Services</h1>
          <p className="subtitle">Comprehensive IT solutions tailored to your business needs</p>
        </div>
      </section>

      {/* Services Bio Section */}
      <section className="services-bio-section">
        <div className="container">
          <ScrollFloat>
            Excellence in Every Service
          </ScrollFloat>
          <div className="services-bio-content">
            <p>
              At RTech Lead, we pride ourselves on delivering top-tier IT services that drive business growth and innovation. Our team of experts is dedicated to providing solutions that not only meet but exceed your expectations.
            </p>
            <p>
              We combine technical expertise with creative thinking to deliver services that are both functional and visually stunning. Our commitment to quality ensures that every project we undertake is completed to the highest standards.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-grid-section">
        <div className="container">
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-detail-card">
                <div className="service-detail-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p className="service-detail-description">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>
                      <span className="feature-check">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a 
                  href="https://wa.me/8801634352723" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="service-detail-button"
                >
                  Get Service
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Section */}
      <section className="quality-section">
        <div className="container">
          <ScrollFloat>
            Our Quality Commitment
          </ScrollFloat>
          <div className="quality-grid">
            <div className="quality-card">
              <h3>Professional Excellence</h3>
              <p>We maintain the highest standards of professionalism in every project we undertake.</p>
            </div>
            <div className="quality-card">
              <h3>Cutting-Edge Technology</h3>
              <p>We use the latest tools and technologies to deliver modern, efficient solutions.</p>
            </div>
            <div className="quality-card">
              <h3>Client-Centric Approach</h3>
              <p>Your satisfaction is our priority. We work closely with you to achieve your goals.</p>
            </div>
            <div className="quality-card">
              <h3>Timely Delivery</h3>
              <p>We respect deadlines and ensure timely delivery without compromising quality.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta-section">
        <div className="container">
          <ScrollFloat as="h2">
            Ready to Get Started?
          </ScrollFloat>
          <p>Contact us today to discuss your project requirements</p>
          <a 
            href="https://wa.me/8801634352723" 
            target="_blank" 
            rel="noopener noreferrer"
            className="services-cta-button"
          >
            Contact Us on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
