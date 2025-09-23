import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="about-section">
      <div className="container">
        <div className="section-header" data-aos="fade-right">
          <h2>
            About <span className="highlight">Us</span>
          </h2>
          <p className="section-subtitle">
            Decades of experience delivering excellence in industrial services
          </p>
        </div>

        <div className="about-content">
          <div className="about-text" data-aos="fade-right">
            <p>
              More than Twenty-Nine years of much diversified experience and
              direct operations, construction, supply chain and management with
              National & international experience utilizing extensive
              engineering and construction operations knowledge, good motivation
              and leadership skills to successfully complete projects.
            </p>
            <p>
              Our main target is to deliver safe, efficient and trouble-free
              different services to our different customers. In pursuit of this
              goal, we continually refine our methodologies, embrace emerging
              technologies, and prioritize customer satisfaction at every stage
              of our operations.
            </p>
            <div className="about-button">
              <a href="/contact" className="btn-about">
                Get in Touch
              </a>
            </div>
          </div>
          <div className="about-image" data-aos="fade-left">
            <img src="/images/about-img.jpg" alt="About our company" />
          </div>
        </div>
      </div>
    </section>
  );
}
