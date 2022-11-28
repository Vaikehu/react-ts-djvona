import * as React from 'react';
import Navbar from '../components/Navbar';
import Evennement from '../components/Evennement';

const Service = () => (
  <div>
    <Navbar/>
    <br/>
    <Evennement/>
    <div className="text-center"><h1>Wedding</h1>
    les tarifs varie suivant la demande.
    <hr/>
    </div>
    <div className="text-center"><h2>Anniversaire</h2>les tarifs varie suivant la demande.
    <hr/>
    </div>
    <div className="text-center"><h3>Honey Moon</h3>les tarifs varie suivant la demande.</div>
  </div>
);

export default Service;