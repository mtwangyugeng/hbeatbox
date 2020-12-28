import React from 'react';

import './RhythmPanel.css';
import RhythmColumn from './RhythmColumn';
import RhythmSquare from './RhythmSquare';
import SpeedChanger from './SpeedChanger'
import RhythmVisualizer from './RhythmVisualizer'

import ccc from './sounds/ccc.wav'
import ccd from './sounds/ccd.wav'
import cce from './sounds/cce.wav'
import ccf from './sounds/ccf.wav'
import ccg from './sounds/ccg.wav'
import cch from './sounds/cch.wav'

class RhythmPanel extends React.Component{
  // CONST
  static panel_buttons = ["play", "pause", "stop", "faster", "slower"]
  static col_starter = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
  //VAR
  state = {
    speedo: 500,
    act_col: -1,

    clear: false,
    
    save_s: false,
    download_s: false,

    load_s: false,
    loadfile_s: false,

    user_engaged: false,
  }
  intervals = null;
  isplaying = false;
  sounds = [new Audio(ccc), new Audio(ccd), new Audio(cce), new Audio(ccf), new Audio(ccg), new Audio(cch)]


  render() {
    return ( 
      
        <div className = {"panel-master"}>
            {this.state.user_engaged ? 
            <div className = "engaged">
            <div className = {"button-boss"}>
              {this.state.load_s ? <div className = {"button-container"}><input type="file" name="file" onChange={this.onChangeHandler}/> <button onClick = {this.upload_g}>test upload</button> 
              <button onClick = {this.load_g}>test cancel</button>
              </div> : 
                <div className = {"button-container"}>
                  <div className = {"panel-buttons"} onClick = {this.play_g}>test play</div>
                  <div className = {"panel-buttons"} onClick = {this.pause_g}>test pause</div>
                  <div className = {"panel-buttons"} onClick = {this.stop_g}>test stop</div>
                  <div className = {"panel-buttons"} onClick = {this.clear_g}>test clear</div>
                  <div className = {"panel-buttons"} onClick = {this.save_g}>test save</div>
                  <div className = {"panel-buttons"} onClick = {this.load_g}>test load</div>
                </div> 
              }
              { <RhythmVisualizer sounds = {this.sounds} />}
            </div>
            <SpeedChanger faster_g = {this.faster_g} slower_g = {this.slower_g} speedo = {this.state.speedo}></SpeedChanger>
            <div className = {"panel"}>
              {
                (RhythmPanel.col_starter).map((v) =>
                    <RhythmColumn
                      colnum = {v}
                      act_col = {this.state.act_col}
                      clear = {this.state.clear}
                      save_s = {this.state.save_s}
                      download_s = {this.state.download_s}
                      loadfile_s = {this.state.loadfile_s}
                      sounds = {this.sounds}
                      speedo = {this.state.speedo}
                    ></RhythmColumn>
                )
              }
            </div>
            </div>
            : <div className = "engaging" onClick = {this.engage_user}>Click anywhere in the box to start.</div>}
        </div > 
        
        
    );
  }

  engage_user = () => {
    this.setState({
      user_engaged: true
    })
  }
  
  onChangeHandler=event=>{
    const t = event.target.files[0]
    const reader = new FileReader();
    reader.addEventListener('load', (event) => {
      const result = event.target.result;
      RhythmSquare.selected_file = JSON.parse(result).active
    });
    reader.readAsText(t);
    
  }

  componentDidUpdate(){

    //MARK: clear_g
    if(this.state.clear){
      this.setState({
        clear: false
      })
    }

    if(this.state.save_s){
      this.setState({
        save_s: false,
        download_s: true
      })
      RhythmSquare.download_ready = true
    }

    if(this.state.loadfile_s){
      console.log("loadfile finish")
      this.setState({
        loadfile_s: false,
      })
    }


  }

  upload_g = () => {
    if(RhythmSquare.selected_file){
      this.setState({
        loadfile_s: true
      })
    }
  }

  save_g = () => {
    RhythmSquare.records = []
    this.setState({
      save_s: true
    })
  }

  load_g = () => {
    this.setState({
      load_s: this.state.load_s ^ 1
    })
  }

  clear_g = () => {
    // MARK: componentDidUpdate
    this.setState({
      clear: true
    })
  }


  play_col_test = () =>{
    this.setState({
      act_col: (this.state.act_col + 1) % 16
    })
  }

  play_g = () => {
    if (!this.isplaying){
      this.intervals = setInterval(this.play_col_test,this.state.speedo)
      this.isplaying = true;
    }
  }
  pause_g = () => {
    clearInterval(this.intervals)
    this.isplaying = false;
  }
  stop_g = () =>{
    clearInterval(this.intervals)
    this.isplaying = false;

    this.setState({
      act_col: -1
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

}

export default RhythmPanel;
