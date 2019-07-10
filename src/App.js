import React from 'react';
import './App.css';

function App() {
  return (
    <div className="flex wrap">
      <div className="left-content"></div>
      <div className="right-content">
        <div className="outside-circle flex">
          <div className="middle-circle flex">
            <div className="flex">
              <i className="material-icons play-arrow play-arrow-size">play_circle_filled</i>
              <div className="little-circle"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
