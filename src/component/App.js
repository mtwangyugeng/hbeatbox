import React from 'react';
import './App.css';

import ControlBar from "./ControlBar"
import RhythmPanel from "./RhythmPanel"
/* 
App Contains all of the beat box components.
1. the control bar
2. the rhythm square panel
*/ 

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      metastate: ['play', 'stop'],
      s: 0
    }
  }
  render() {
    return ( 
    <div className = "ccc">
      this is app
      <ControlBar 
        clickhandler_play={this.clickhandler_play}
        clickhandler_stop={this.clickhandler_stop}
        clickhandler_tempup = {this.clickhandler_tempup}
        clickhandler_tempdown = {this.clickhandler_tempdown}
      ></ControlBar>
      
      </div >
      );
  }

  clickhandler_play = () =>{
    console.log("clicked play button!")
    this.setState({
      s: 0
    })
  }
  clickhandler_stop = () =>{
    console.log("clicked stop button!")
    this.setState({
      s: 1
    })
  }
  clickhandler_tempup = () =>{
    console.log("clicked tempup button!")
  }
  clickhandler_tempdown = () =>{
    console.log("clicked tempdown button!")
  }
}

export default App;
