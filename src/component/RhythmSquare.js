import React from 'react';
import PropTypes from "prop-types";

import './RhythmSquare.css';

export default class RhythmSquare extends React.Component{
  //consts
  static propTypes = {
    colnum: PropTypes.number,
    rownum: PropTypes.number,

    activated: PropTypes.number,
    clear: PropTypes.bool,
    save_s: PropTypes.bool,
    download_s: PropTypes.bool,
  };
  static cssStates = ["rest", "activated"]
  static records = []
  static selected_file = null

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
        {/* {this.state.activated}
        {this.props.activated} */}
        {/* testing */}
        {this.player()}
        {this.cleaner()}
        {this.saver()}
        {this.downloader()}
        {this.loader()}
      </div >
      );
  }

  loader = () => {
    if(this.props.loadfile_s){
      if(RhythmSquare.selected_file.includes("c"+ this.props.colnum + "r" + this.props.rownum)){
        console.log("asdad")
        this.setState({
          activated: 1
        })
      } else{
        this.setState({
          activated: 0
        })
      }
    }
  }

  saver = () => {
    if(this.props.save_s && this.state.activated){
      console.log("before", RhythmSquare.records)
      RhythmSquare.records.push("c"+ this.props.colnum + "r" + this.props.rownum)
      
    }
  }

  static downloadToFile = (content, filename, contentType) => {
    const a = document.createElement('a');
    const file = new Blob([JSON.stringify(content)], {type: contentType});
    
    a.href= URL.createObjectURL(file);
    a.download = filename;
    a.click();
  
    URL.revokeObjectURL(a.href);
  };
  
  static download_ready = false
  downloader = () => {
    if(this.props.download_s && RhythmSquare.download_ready){
      RhythmSquare.download_ready = false
      console.log("after: ", RhythmSquare.records)
      var d = {"active" : RhythmSquare.records}
      RhythmSquare.downloadToFile(d, 'my-new-file.json', 'text/plain');
    }
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
