import React, { Component } from 'react';
import './App.css';
import moment from 'moment';
import {Layer,Stage,Arc} from 'react-konva';

class App extends Component {

  constructor() {
    super();
    this.state = {
      remindTime: 1500,
      startCountDown: false,
      angle: 0,
    } 
  }

  interval = undefined;

  countDown = (second) => {
    this.setState({
      remindTime: second,
      startCountDown: true,
    });
    clearInterval(this.interval);
    this.interval = setInterval(() => {
      let time = this.state.remindTime - 1;
      let setAngle = this.state.angle + 0.24;
      this.setState({
        remindTime: time,
        angle: setAngle,
      });
      if (this.state.remindTime <= 0) {
        clearInterval(this.interval);
      }
    }, 1000);
  }

  showTime = () => {
    const timer = moment()
      .startOf('day')
      .add(this.state.remindTime, 'second');
    return timer.format('mm:ss');
  }

  countDownPause = () => {
    this.interval && clearInterval(this.interval);
    this.setState({
      startCountDown: false,
    });
  }


render() {

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
            <Stage width={12} height={12}>
              <Layer>
                <Arc
                  x={6} y={6}
                  innerRadius={0}
                  outerRadius={6}
                  strokeWidth={0}
                  angle={this.state.angle}
                  rotationDeg={-90}
                  fill='#FF4384'
                  stroke={'#FF4384'}
                />
              </Layer>
            </Stage>
            <div className="circle-progress"></div>           
            </div>
          </div>
          <div className="time">{this.showTime()}</div>
        </div>
        <div className="mission-list">
          <div className="mission">
            <div className="mission-circle"></div>
            <div className="mission-title">THE SECOND THING TO DO TODAY</div>
            <i className="material-icons">play_circle_outline</i>
          </div>
          <div className="mission">
            <div className="mission-circle"></div>
            <div className="mission-title">THE THIRD THING TO DO TODAY</div>
            <i className="material-icons">play_circle_outline</i>
          </div>
          <div className="mission mission-more-margin">
            <div className="mission-circle"></div>
            <div className="mission-title">THE FORTH THING TO DO TODAY</div>
            <i className="material-icons">play_circle_outline</i>
          </div>
          <div className="more">MORE</div>
        </div>
      </div>

      <div className="outside-box">
        <div className="flex outside-flex-size">
          <div className="outside-circle flex">
            
            <Stage width={540} height={540}>
              <Layer>
                <Arc
                  x={270} y={270}
                  innerRadius={0}
                  outerRadius={270}
                  strokeWidth={0}
                  angle={this.state.angle}
                  rotationDeg={-90}
                  fill='#FF4384'
                  stroke={'#FF4384'}
                />
              </Layer>
            </Stage>
            <div className={(!this.state.startCountDown) ? "middle-circle flex" : "middle-circle middle-circle-white flex"}>
              <div className="play-arrow-relative">
               {
                 (!this.state.startCountDown) ?
                 <i className="material-icons play-arrow" onClick={()=>this.countDown(this.state.remindTime)}>play_circle_filled </i> 
                 :
                 <i className="material-icons on-pause" onClick={()=>this.countDownPause()}>pause_circle_filled</i> 
               }
                <div className={(!this.state.startCountDown) ? "little-circle" : "little-circle little-circle-on-pause"}></div>
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
}

export default App;
