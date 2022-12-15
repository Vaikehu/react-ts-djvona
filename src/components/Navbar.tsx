
import * as React from 'react';
const Navbar = () => (
  <nav className="navbar navbar-expand-lg  bg-dark ">
    <div className="container-fluid ">
      <a className="navbar-brand mt-4" href="/">
        <img
          width="50"
          height="50"
          src="
          https://media.discordapp.net/attachments/1048366870958444586/1053042019343290438/VaiMoana.png"
          className="rounded-circle mx-5"
        />
        <p className="mt-2 fs-4 ">PAINAPO HOUSE</p>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expandeed="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse">
        <ul className="navbar-nav fs-4 ">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">
              Accueil
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/bedroom">
              Chambres
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/Restaurants">
            Restaurants
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/Location">
            Location
            </a>
          </li>
         
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
