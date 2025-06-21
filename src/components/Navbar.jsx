import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const location = useLocation();

  const isActive = (path) => (location.pathname === path ? "active" : "");

  return (
    <header className="header_section">
      <div className="header_top">
        <div className="container-fluid">
          <div className="contact_nav">
            <a href="#">
              <i className="fa fa-phone" aria-hidden="true"></i>
              <span>Call : +213 77 01 75 430</span>
            </a>
            <a href="mailto:info@benameur-dz.com">
              <i className="fa fa-envelope" aria-hidden="true"></i>
              <span>Email : info@benameur-dz.com</span>
            </a>
          </div>
        </div>
      </div>

      <div className="header_bottom">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg custom_nav-container">
            <Link to="/" className="navbar-brand">
              <span>
                <img src="/images/logo.jpg" width="150px" alt="BFOS logo" />
              </span>
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              onClick={() => setIsNavCollapsed(!isNavCollapsed)}
              aria-expanded={!isNavCollapsed}
              aria-label="Toggle navigation"
              style={{ outline: "none", boxShadow: "none" }}
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className={`collapse navbar-collapse ${
                isNavCollapsed ? "" : "show"
              }`}
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav">
                <li className={`nav-item ${isActive("/")}`}>
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className={`nav-item ${isActive("/about")}`}>
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>
                <li className={`nav-item ${isActive("/services")}`}>
                  <Link className="nav-link" to="/services">
                    Services
                  </Link>
                </li>
                <li className={`nav-item ${isActive("/contact")}`}>
                  <Link className="nav-link" to="/contact">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
