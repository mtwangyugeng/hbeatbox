import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import RhythmPanel from './component/RhythmPanel';
import ConnectionBar from './connectionbar/ConnectionBar';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <RhythmSquare activated= {0} sound = {new Audio(ccc)}></RhythmSquare> */}
    {/* <RhythmColumn 
      id = {0}
      cnt = {0}
      sounds = {[new Audio(ccc), new Audio(ccd), new Audio(cce), new Audio(ccf), new Audio(ccg), new Audio(cch)]}
    ></RhythmColumn> */}
    <ConnectionBar></ConnectionBar>
    <RhythmPanel></RhythmPanel>
    <div className = "footer">Copyright (c) 2020 Simon</div>
  </React.StrictMode>,
  document.getElementById('root')
);

