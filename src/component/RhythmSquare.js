import React from 'react';

import './RhythmSquare.css';

class RhythmSquare extends React.Component{
  constructor(props){
    super(props);
    //props.rownum
    this.state = {
      activated: this.props.activated,
      cssStates: ["rest", "activated"],
      sound: this.props.sound
    }
    this.updateButton = this.updateButton.bind(this)
  }
  render() {
    return ( 
    <div className = {this.state.cssStates[this.state.activated] + " allbuttons"} 
        onClick = {this.updateButton}>
        {this.state.activated}
      </div >
      );
  }
  updateButton(){
    this.state.sound.play()
    var curr = this.state.activated;
    if(curr){
      this.setState({
        activated: 0
      })
   } else{
     this.setState({
        activated: 1
      })
   }
    this.props.bf(this.props.rownum)
  }
}

export default RhythmSquare;
