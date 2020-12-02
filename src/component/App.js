import React from 'react';
import './App.css';

/* 
App Contains all of the beat box components.
1. the control bar
2. the rhythm square panel
*/ 

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      metastate: null
    }
  }
  render() {
    return ( 
    <div className = "ccc">
      this is app
      </div >
      );
  }
}

export default App;
