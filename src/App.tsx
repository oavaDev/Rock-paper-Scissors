import React from 'react';
import './App.css';

function App() {
  return (
    <div className='App'>
      <div className='Score'>
        <div>
          ROCK <br /> PAPER <br /> SCISSORS
        </div>
        <div className='Score_label'>
          <span>SCORE</span>
          <span>12</span>
        </div>
      </div>
    </div>
  );
}

export default App;
