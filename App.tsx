import * as React from 'react';
import { getDataFromFirebase } from './database/getDataFromFirebase';
import './style.css';
import Slider from './components/Slider.tsx';

export default function App() {
  
  return (
    <div>
      <Slider/>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
