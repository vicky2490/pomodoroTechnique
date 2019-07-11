import React from 'react';
import './App.css';

function App() {
  return (
    <div className="flex wrap">
      <div className="left-content"></div>

      <div className="outside-box">
        <div className="flex outside-flex-size">
          <div className="outside-circle flex">
            <div className="middle-circle flex">
              <div className="play-arrow-relative">
                <i className="material-icons play-arrow">play_circle_filled</i>
                <div className="little-circle"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="right-content">
        <div className="menu-list">
          <i className="material-icons menu-icon">list</i>
          <i className="material-icons menu-icon">insert_chart_outlined</i>
          <i className="material-icons menu-icon">library_music</i>
        </div>
        <div className="slogan">POMODORO</div>
      </div>
    </div>
  );
}

export default App;
