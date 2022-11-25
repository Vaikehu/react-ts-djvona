import * as React from 'react';
import { getDataFromFirebase } from './database/getDataFromFirebase';
import './style.css';
import Slider from './components/Slider.tsx';
import Navbar from './components/Navbar.tsx';

export default function App() {
  return (
    <div>
      <Navbar />
      <Slider />
    </div>
  );
}
