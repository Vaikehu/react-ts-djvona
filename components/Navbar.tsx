import * as React from 'react';

const Navbar = () => (
  <div>
    <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container-fluid">
        <a className="nav-link active text-white" aria-current="page" href="#">
          Accueil
        </a>
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-white"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Menu
                </a>
                <ul className="dropdown-menu">
                  <li className="nav-item">
                    <a
                      className="dropdown-item btn btn-primary btn-lg"
                      href="/bedroom"
                    >
                      Chambres
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="dropdown-item btn btn-primary btn-lg "
                      href="/Restaurants"
                    >
                      Restaurants
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="dropdown-item btn btn-primary btn-lg"
                      href="/Activite"
                    >
                      Activité
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="dropdown-item btn btn-primary btn-lg"
                      href="/Service"
                    >
                      Service
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="dropdown-item btn btn-primary btn-lg"
                      href="/Location"
                    >
                      Location
                    </a>
                  </li>
                </ul>
              </li>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
);

export default Navbar;
