import React from 'react';
import PropTypes from "prop-types";

import './RhythmSquare.css';

export default class RhythmSquare extends React.Component{
  //consts
  static propTypes = {
    activated: PropTypes.number,
    clear: PropTypes.number,
  };
  static cssStates= ["rest", "activated"]

  // Var
  state = {
    activated: 0,
    sound: this.props.sound
  }

  render() {
    return ( 
    <div className = {RhythmSquare.cssStates[this.state.activated] + " allbuttons"} 
        onClick = {this.updateButton}>
        {/* testing */}
        {this.state.activated}
        {this.props.activated}
        {/* testing */}
        {this.player()}
        {this.cleaner()}
      </div >
      );
  }

  cleaner = () => {
    if(this.props.clear && this.state.activated){
      this.setState({
        activated: 0
      })
    }
  }

  player = () => {
    if((this.props.activated) && this.state.activated)
      this.state.sound.play()
  }

  updateButton = () => {
    this.state.sound.play()
    this.setState({
      activated: this.state.activated ^ 1
    })
  }
}