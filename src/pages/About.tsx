import ScrollFloat from '../components/ScrollFloat';
import './About.css';

export default function About() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <h1>About RTech Lead</h1>
          <p className="subtitle">Empowering businesses through innovative technology solutions</p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="story-section">
        <div className="container">
          <ScrollFloat>
            Our Story
          </ScrollFloat>
          <div className="story-content">
            <p>
              Founded in 2024, RTech Lead has quickly established itself as a leading provider of innovative IT services. With a team of dedicated professionals and a passion for technology, we've successfully completed over 50 projects for clients across various industries.
            </p>
            <p>
              Our mission is to empower businesses with cutting-edge technology solutions that drive growth, efficiency, and competitive advantage. We believe in building long-term partnerships with our clients based on trust, quality, and exceptional service.
            </p>
          </div>
        </div>
      </section>

      {/* Our Goals Section */}
      <section className="about-goals-section">
        <div className="container">
          <ScrollFloat>
            Our Goals
          </ScrollFloat>
          <div className="about-goals-grid">
            <div className="about-goal-card">
              <div className="about-goal-icon">🚀</div>
              <h3>Innovation First</h3>
              <p>
                We strive to deliver excellence in every project by embracing cutting-edge technologies and innovative approaches that set new industry standards.
              </p>
            </div>
            <div className="about-goal-card">
              <div className="about-goal-icon">🎯</div>
              <h3>Client Success</h3>
              <p>
                Building lasting relationships through trust, quality, and exceptional service. Your success is our primary mission and driving force.
              </p>
            </div>
            <div className="about-goal-card">
              <div className="about-goal-icon">📈</div>
              <h3>Continuous Growth</h3>
              <p>
                We continuously evolve our services, expand our expertise, and stay ahead of technology trends to better serve our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Achievements Section */}
      <section className="about-achievements-section">
        <div className="container">
          <ScrollFloat>
            Our Achievements
          </ScrollFloat>
          <div className="about-achievements-grid">
            <div className="about-achievement-card">
              <div className="about-achievement-number">50+</div>
              <div className="about-achievement-label">Projects Completed</div>
              <p>Successful deliveries across industries</p>
            </div>
            <div className="about-achievement-card">
              <div className="about-achievement-number">2024</div>
              <div className="about-achievement-label">Founded</div>
              <p>Leading IT solutions provider</p>
            </div>
            <div className="about-achievement-card">
              <div className="about-achievement-number">100%</div>
              <div className="about-achievement-label">Client Satisfaction</div>
              <p>Dedicated to excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-section">
        <div className="container">
          <ScrollFloat>
            Why Choose RTech Lead
          </ScrollFloat>
          <div className="why-choose-grid">
            <div className="why-choose-card">
              <h3>Expert Team</h3>
              <p>Our team consists of highly skilled professionals with years of experience in the IT industry.</p>
            </div>
            <div className="why-choose-card">
              <h3>Quality Assurance</h3>
              <p>We maintain the highest standards of quality in every project we undertake.</p>
            </div>
            <div className="why-choose-card">
              <h3>Timely Delivery</h3>
              <p>We respect deadlines and ensure timely delivery of all projects without compromising quality.</p>
            </div>
            <div className="why-choose-card">
              <h3>Competitive Pricing</h3>
              <p>We offer competitive pricing without compromising on the quality of our services.</p>
            </div>
            <div className="why-choose-card">
              <h3>24/7 Support</h3>
              <p>Our dedicated support team is available round the clock to assist you.</p>
            </div>
            <div className="why-choose-card">
              <h3>Innovation Driven</h3>
              <p>We stay updated with the latest technologies and trends to provide cutting-edge solutions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta-section">
        <div className="container">
          <ScrollFloat as="h2">
            Ready to Transform Your Business?
          </ScrollFloat>
          <p>Let's work together to bring your vision to life</p>
          <a 
            href="https://wa.me/8801771778880" 
            target="_blank" 
            rel="noopener noreferrer"
            className="about-cta-button"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}
