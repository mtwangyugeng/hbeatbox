import React from 'react';
import PropTypes from "prop-types";

import RhythmSquare from './RhythmSquare';
import './RhythmColumn.css';

class RhythmColumn extends React.Component{
  //CONST
  static propTypes = {
    colnum: PropTypes.number,
    act_col: PropTypes.number,
    clear: PropTypes.bool,
    save_s: PropTypes.bool
  };
  static cssstates =  ["colrest", "colact"]
  //VAR
  state = {
    activated: 0
  }

  render() {
    return ( 
      <div className = {"allcol " + RhythmColumn.cssstates[this.state.activated || (this.props.act_col === this.props.colnum)?1:0]}>
          {
            this.props.sounds.map((v, i) =>
              <RhythmSquare colnum = {this.props.colnum} rownum = {i} activated= {this.state.activated || (this.props.act_col === this.props.colnum)?1:0 } sound = {v} clear = {this.props.clear} save_s = {this.props.save_s} 
                download_s = {this.props.download_s}
                loadfile_s = {this.props.loadfile_s}></RhythmSquare>
            )
          }
          {/* {this.props.act_col} */}
          <div className = {"testcol"} onClick = {this.updateState}>☊</div>
      </div >
    );
  }


  updateState = () => {
    this.setState({
      activated: this.state.activated ^ 1
    })
  }
}

export default RhythmColumn;
