import * as React from 'react';
import Navbar from '../components/Navbar';
import Lactivite from '../components/Lactivite';

const Activite = () => (
  <div>
    <Navbar />
    <div className="text-center">
      Toutes nos Activités
      <div className="container text-center">
        <div className="row">
          <div className="col m-5">Jet-Ski
          <ul className="align-text">
            <li>Descriptrion: </li>
            <li>Duré: </li>
            <li>Prix: </li>
          </ul>
          </div>
          <div className="col m-5">Kayak
          <ul className="align-text">
            <li>Descriptrion: </li>
            <li>Duré: </li>
            <li>Prix: </li>
          </ul>
          </div>
          <div className="col m-5">Padlle
          <ul className="">
            <li>Descriptrion: </li>
            <li>Duré: </li>
            <li>Prix: </li>
          </ul>
          </div>
        </div>
      </div>
    </div>
    <Lactivite />
  </div>
);

export default Activite;
