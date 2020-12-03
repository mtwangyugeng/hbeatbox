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
      cssStates: ["pause", "go"],
      activate_state: 0,
      cnt: 0,
    }
    
    this.sounds = [new Audio(ccc), new Audio(ccd), new Audio(cce), new Audio(ccf), new Audio(ccg), new Audio(cch)]
    this.cols = this._cols()

  }
  render() {
    return ( 
      <div className = {"bp"}>
          {this.cols}
      </div >
    );
  }
  
  play(){
    setInterval(this.countup, 1000)
  }

  stop(){
      clearInterval(this.countup)
  }

  countup(){
    var t = this.state.cnt
    this.setState({
        cnt: (t + 1) % 16
    })
  }

  _cols() {
    var finale = []
    for (var i = 0; i < 16; i++){
        finale.push(
            <RhythmColumn 
                colnum = {i}
                cnt = {0}
                sounds = {this.sounds}
            ></RhythmColumn>
        )
    }
    return finale
  }

}

export default RhythmPanel;
