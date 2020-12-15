import React from 'react';

import './RhythmPanel.css';
import RhythmColumn from './RhythmColumn';
import RhythmSquare from './RhythmSquare';

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
    loadfile_s: false
  }
  intervals = null;
  isplaying = false;

  render() {
    return ( 
      <div className = {"panel"}>
          <div className = {"button-container"}>
            <button onClick = {this.play_g}>test play</button>
            <button onClick = {this.pause_g}>test pause</button>
            <button onClick = {this.stop_g}>test stop</button>
            <button onClick = {this.clear_g}>test clear</button>
            <button onClick = {this.faster_g}>test faster</button>
            <button onClick = {this.slower_g}>test slower</button>
            <button onClick = {this.save_g}>test save</button>
            <button onClick = {this.load_g}>test load</button>
            {this.state.load_s ? <div><input type="file" name="file" onChange={this.onChangeHandler}/> <button onClick = {this.upload_g}>test upload</button> </div> : <div/>}
            <div>{this.state.speedo}</div>
          </div>
          {
            (RhythmPanel.col_starter).map((v) =>
                <RhythmColumn
                  colnum = {v}
                  act_col = {this.state.act_col}
                  clear = {this.state.clear}
                  save_s = {this.state.save_s}
                  download_s = {this.state.download_s}
                  loadfile_s = {this.state.loadfile_s}
                ></RhythmColumn>
            )
          }
          
      </div >
    );
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
