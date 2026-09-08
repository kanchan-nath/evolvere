import "./Header.css";

import logoEvolvere from "../../images/logoevolvere1.png";
import depart from "../../images/depart.png";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav id="navbar">
        <div className="logo-container">
          <a href="/" className="logo">
            <img
              src={logoEvolvere}
              alt="Evolvere Logo"
              className="logoevolvere"
            />
          </a>
        </div>

        <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        <div className={`nav-links ${isOpen ? "active" : ""}`}>
          <a href="#about" onClick={() => setIsOpen(false)}>
            About
          </a>
          <a href="#what-we-do" onClick={() => setIsOpen(false)}>
            What We Do
          </a>
          <a href="#events" onClick={() => setIsOpen(false)}>
            Events
          </a>
          <a href="#gallery" onClick={() => setIsOpen(false)}>
            Gallery
          </a>
          <a href="#team" onClick={() => setIsOpen(false)}>
            Team
          </a>
          <a href="#contact" onClick={() => setIsOpen(false)}>
            Contact
          </a>
        </div>
      </nav>

      <section className="hero">
        <div>
          <div className="container">
            <div className="hero-content">
              <h1>Evolvere | Biotech Society of NIT DGP</h1>
              <p>
                Join our society to explore biotech in creative, collaborative
                ways — from managing events and crafting content to designing
                graphics, developing the web, or curating research . Be part of
                the vibrant culture on campus.
              </p>
              <div className="hero-btns">
                <a href="#about" class="btn">
                  Learn More
                </a>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdyKCVl6UYct1NFRUTX2UU54sHaqsKcZlLeCW3_-LJAcc3FYg/viewform?usp=sharing&ouid=101496448735176085028"
                  class="btn btn-outline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Join Us
                </a>
              </div>
            </div>
          </div>
        </div>

        <img
          src={depart}
          alt="Biotech department building"
          className="department"
          fetchpriority="high"
          decoding="async"
        />
      </section>
    </>
  );
};
export default Header;