import * as React from 'react';
import Navbar from '../components/Navbar';
import Lactivite from '../components/Lactivite';

const Activite = () => (
  <div>
    <Navbar />
    <br/>
    <div className="text-center m-5">
      Toutes nos Activités
      
    </div>
    <Lactivite />
  </div>
);

export default Activite;
