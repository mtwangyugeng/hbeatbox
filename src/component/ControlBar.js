import React from 'react';
import './ControlBar.css';

class ControlBar extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      clickhandler_play: this.props.clickhandler_play
    }
  }
  render() {
    return ( 
    <div className = "ccc">
      this is control bar
      <button onClick={this.state.clickhandler_play}>play</button>
      </div >
      );
  }
}

export default ControlBar;
