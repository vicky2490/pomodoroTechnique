import React from 'react';
import './App.css';

function App() {
  return (
    <div className="flex wrap">

      <div className="left-content">
        <div className="add-misson-box">
          <input className="mission-input" type="text" placeholder="ADD A NEW MISSION…"/>
          <button>+</button>
        </div>
        <div className="middle-box">
          <div className="left-circle"></div>
          <div className="right-side">
            <div className="title">THE FIRST THING TO DO TODAY</div>
            <div className="circle-progress-bar">
              <div className="circle-progress"></div>
            </div>
          </div>
          <div className="time">25:00</div>
        </div>
        <div className="mission-list">
          <div className="mission">
            <div className="mission-circle"></div>
            <div className="mission-title">THE SECOND THING TO DO TODAY</div>
            <i class="material-icons">play_circle_outline</i>
          </div>
          <div className="mission">
            <div className="mission-circle"></div>
            <div className="mission-title">THE THIRD THING TO DO TODAY</div>
            <i class="material-icons">play_circle_outline</i>
          </div>
          <div className="mission mission-more-margin">
            <div className="mission-circle"></div>
            <div className="mission-title">THE FORTH THING TO DO TODAY</div>
            <i class="material-icons">play_circle_outline</i>
          </div>
          <div className="more">MORE</div>
        </div>
      </div>

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
