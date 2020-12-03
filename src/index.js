import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './component/App';
import RhythmSquare from './component/RhythmSquare';

import ccc from './component/ccc.wav'
import ccd from './component/ccd.wav'
import cce from './component/cce.wav'
import ccf from './component/ccf.wav'
import ccg from './component/ccg.wav'
import cch from './component/cch.wav'
import RhythmColumn from './component/RhythmColumn';
import RhythmPanel from './component/RhythmPanel';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <RhythmSquare activated= {0} sound = {new Audio(ccc)}></RhythmSquare> */}
    {/* <RhythmColumn 
      id = {0}
      cnt = {0}
      sounds = {[new Audio(ccc), new Audio(ccd), new Audio(cce), new Audio(ccf), new Audio(ccg), new Audio(cch)]}
    ></RhythmColumn> */}
    <RhythmPanel></RhythmPanel>
  </React.StrictMode>,
  document.getElementById('root')
);

