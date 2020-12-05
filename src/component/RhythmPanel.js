import React from 'react';

import './RhythmPanel.css';
import RhythmColumn from './RhythmColumn';
import ccc from './ccc.wav'
import ccd from './ccd.wav'
import cce from './cce.wav'
import ccf from './ccf.wav'
import ccg from './ccg.wav'
import cch from './cch.wav'

class RhythmPanel extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      speedo: 500,
      col_states: ["colrest", "colrest", "colrest", "colrest", "colrest", "colrest", "colrest", "colrest", 
        "colrest", "colrest", "colrest", "colrest", "colrest", "colrest", "colrest", "colrest"]
    }
    this.intervals = null;
    this.isplaying = false;

    this.prev_col = 15
    this.curr_col = 0
    
    this.numc = 16

    this.sounds = [new Audio(ccc), new Audio(ccd), new Audio(cce), new Audio(ccf), new Audio(ccg), new Audio(cch)]
    this.button_states = [[0,0,0,0,0,0], [0,0,0,0,0,0], [0,0,0,0,0,0],
                          [0,0,0,0,0,0], [0,0,0,0,0,0], [0,0,0,0,0,0],
                          [0,0,0,0,0,0], [0,0,0,0,0,0], [0,0,0,0,0,0],
                          [0,0,0,0,0,0], [0,0,0,0,0,0], [0,0,0,0,0,0], 
                          [0,0,0,0,0,0], [0,0,0,0,0,0], [0,0,0,0,0,0],
                          [0,0,0,0,0,0], [0,0,0,0,0,0]
                        ]
  }
  render() {
    return ( 
      <div className = {"play"}>
          <button onClick = {this.play_g}>test play</button>
          <button onClick = {this.pause_g}>test pause</button>
          <button onClick = {this.stop_g}>test stop</button>
          <button onClick = {this.faster_g}>test faster</button>
          <button onClick = {this.slower_g}>test slower</button>
          <div>{this.state.speedo}</div>
          {
            (this.state.col_states).map( (v,i) =>
              <div className = {this.state.col_states[i] + " allcol"}>
                <RhythmColumn 
                    colnum = {i}
                    cnt = {0}
                    sounds = {this.sounds}
                    updatebutton = {this.updatebutton}
                ></RhythmColumn>
              </div>
            )
          }
      </div >
    );
  }

  play_g = () => {
    this.intervals = setInterval(this.play_col_test,this.state.speedo)
    this.isplaying = true;
  }
  pause_g = () => {
    clearInterval(this.intervals)
    this.isplaying = false;
  }
  stop_g = () =>{
    clearInterval(this.intervals)
    this.isplaying = false;

    this.curr_col = 0
    var tt = this.state.col_states;
    tt[this.prev_col] = "colrest";
    this.setState({
      col_states: tt
    })
  }

  faster_g = () => {
    this.setState({
      speedo: Math.max(100, this.state.speedo-100)
    })
    if(this.isplaying){
      clearInterval(this.intervals)
      this.intervals = setInterval(this.play_col_test,this.state.speedo)
    }
  }

  slower_g = () => {
    this.setState({
      speedo: Math.min(1000, this.state.speedo+100)
    })
    if(this.isplaying){
      clearInterval(this.intervals)
      this.intervals = setInterval(this.play_col_test,this.state.speedo)
    }
  }

  play_col_test = () =>{
    var tt = this.state.col_states;
    tt[this.curr_col] = "colact";
    tt[this.prev_col] = "colrest";
    console.log(tt)
    this.setState({
      col_states: tt
    })

    console.log(this.button_states)
    var t = this.button_states[this.curr_col]
    for (var i = 0; i < 6; i++){
        if (t[i]){
            this.sounds[i].play()
        }
    }

    this.prev_col = this.curr_col
    this.curr_col = (this.curr_col + 1) % 16
  }

  updatebutton = (colnum, rownum) => {
      this.button_states[colnum][rownum] ^= 1
  }

}

export default RhythmPanel;
