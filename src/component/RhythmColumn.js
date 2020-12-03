import './RhythmColumn.css';
import React from 'react';
import RhythmSquare from './RhythmSquare';

class RhythmColumn extends React.Component{
  constructor(props){
    super(props);
    //props.colnum
    this.state = {
        sounds: this.props.sounds,
        activated: this.props.activated
    }
    this.playall = this.playall.bind(this)
    this.updatebutton = this.updatebutton.bind(this)

    this.buttons = this._butts()
    this.button_states = [0,0,0,0,0,0]
  }
  render() {
    return ( 
      <div className = {"weiwang"}>
          {this.buttons}
          <button onClick = {this.playall}>test play all</button>
      </div >
    );
  }

  playall(){
      console.log(this.button_states)
    for (var i = 0; i < 6; i++){
        if (this.button_states[i]){
            this.buttons[i].props.sound.play()
        }
    }
  }

  _butts() {
    var finale = []
    for (var i = 0; i < 6; i++){
      finale.push(<RhythmSquare rownum = {i} bf = {this.updatebutton} activated= {0} sound = {this.state.sounds[i]}></RhythmSquare>)
    }
    return finale
  }

  updatebutton(rownum){
      this.button_states[rownum] ^= 1
      
  }
}

export default RhythmColumn;
