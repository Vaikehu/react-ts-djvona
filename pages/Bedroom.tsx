import * as React from 'react';
import Chambre from '../components/Chambre';
import Navbar from '../components/Navbar';

const Bedroom = () => (
  <div>
    <Navbar />
    <div className="text-center">Nos Chambres en pillotis
      <Chambre collectionTarget="room-carroicel"/>
    </div>
    <div className="text-center">Chambres Double</div>
    <Chambre />
    <div className="text-center">Chambres Simple</div>
    <Chambre />
  </div>
  
);

export default Bedroom;
