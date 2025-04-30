import React from "react";
import "./../styles/HeaderComponent.css";
import { Link, useLocation } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";

const HeaderComponent = () => {
  const location = useLocation();

  return (
    <header>
      <nav>
        <Link to="/" className="logo">
          Joel Mamboka
        </Link>
        <ul>
          <li>
            <Link to="/" className={location.pathname === "/" ? "active" : ""}>
              Work
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={location.pathname === "/about" ? "active" : ""}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={location.pathname === "/contact" ? "active" : ""}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      <div className="social">
        <a
          href="https://www.instagram.com/joel_mamboka"
          target="_blank"
          rel="noopener"
        >
          <FaInstagram />
        </a>
      </div>
    </header>
  );
};

export default HeaderComponent;
