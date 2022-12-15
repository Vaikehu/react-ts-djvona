import * as React from 'react';
import Chambre from '../components/Chambre';
import Navbar from '../components/Navbar';

const Bedroom = () => (
  <div className="container-fluidss">
    <Navbar />
    <div className="container mt-5">
      <Chambre />   
      <div className="Chambre  fw-light m-5"></div>
    </div>
  </div>
  

);

export default Bedroom;
