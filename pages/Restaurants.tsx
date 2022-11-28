import * as React from 'react';
import Repas from '../components/Repas';
import Navbar from '../components/Navbar';

const Restaurants = () => (
  <div>
    <Navbar/>
    <div className="text-center">Petit dejeuner</div>
    <Repas/>
    <div className="text-center">Déjeuner</div>
    <Repas/>
    <div className="text-center">Dîner</div>
    <Repas/>
  </div>
);

export default Restaurants;