import React from 'react'
import './RhythmVisualizer.css';
// IMPORTANT!!

export default class RhythmVisualizer extends React.Component{

  state = {
    
    audioData: new Uint8Array(0)
  }

  componentDidMount() {
    this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
    this.analyser = this.audioContext.createAnalyser();
    this.dataArray = new Uint8Array(this.analyser.frequencyBinCount);
    this.source = this.audioContext.createMediaStreamSource(this.props.audio);
    this.source.connect(this.analyser);
    // animation frames
    this.rafId = requestAnimationFrame(this.tick);
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.rafId);
    this.analyser.disconnect();
    this.source.disconnect();
  }

  tick = () => {
    this.analyser.getByteTimeDomainData(this.dataArray);
    this.setState({ audioData: this.dataArray });
    this.rafId = requestAnimationFrame(this.tick);
  }

  render() {
      return ( 
          <div className = "visual-box">
            <textarea value={this.state.audioData} />;
          </div>
      );
  }




}

