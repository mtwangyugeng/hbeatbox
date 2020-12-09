import React from 'react';
import PropTypes from "prop-types";

import RhythmSquare from './RhythmSquare';
import './RhythmColumn.css';
import ccc from './sounds/ccc.wav'
import ccd from './sounds/ccd.wav'
import cce from './sounds/cce.wav'
import ccf from './sounds/ccf.wav'
import ccg from './sounds/ccg.wav'
import cch from './sounds/cch.wav'

class RhythmColumn extends React.Component{
  //CONST
  static propTypes = {
    colnum: PropTypes.number,
    act_col: PropTypes.number
  };
  static cssstates =  ["colrest", "colact"]
  static sounds = [new Audio(ccc), new Audio(ccd), new Audio(cce), new Audio(ccf), new Audio(ccg), new Audio(cch)]
  //VAR
  state = {
    activated: 0
  }

  render() {
    return ( 
      <div className = {"allcol " + RhythmColumn.cssstates[this.state.activated || (this.props.act_col === this.props.colnum)?1:0]}>
          {
            RhythmColumn.sounds.map((v) =>
              <RhythmSquare activated= {this.state.activated || (this.props.act_col === this.props.colnum)?1:0 } sound = {v}></RhythmSquare>
            )
          }
          <div className = {"testcol"} onClick = {this.updateState}>{this.props.act_col}</div>
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
