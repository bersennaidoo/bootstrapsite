import React from "react";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg sticky-top navbar-light">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src="/images/logo.svg" alt="" width="124" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarnavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/details">
                Details
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="services">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="projects">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link btn btn-outline-secondary px-4 mx-4"
                href="contact"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
