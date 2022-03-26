import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import { CarousalUI } from './Components/CarousalUI';
import { SimpleSlider } from './Components/SimpleSlider';

function App() {
  return (
    <div className="container">
      <CarousalUI />
      <div style={{ marginTop: 50 }}>
        <SimpleSlider />
      </div>
    </div>
  );
}

export default App;
