import { Link } from "react-router-dom"
import logo from "../images/zet_logo.png"

import React from "react"

const Header = () => {
    return (
      <div>
        <nav className="navbar navbar-expand-lg p-3">
          <div className="container-fluid align1">
            <Link className="navbar-brand">
              <img src={logo} alt="logo" id="logoimg" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0" id="unordered">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/ZET">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/about">About Us</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/ZET">Partner With Us</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/ZET">Blog</Link>
                </li>
                <li className="nav-item">
                  <button type="button" class="btn btn-primary">
                    Download ZET
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
}

export default Header