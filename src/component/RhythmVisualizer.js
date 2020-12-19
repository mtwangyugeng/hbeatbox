import React from 'react'
import './RhythmVisualizer.css';
// IMPORTANT!!

export default class RhythmVisualizer extends React.Component{

  state = {
    
    audioData: new Uint8Array(0)
  }
  canvas = React.createRef();

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

  draw() {
    const canvas = this.canvas.current;
    const height = canvas.height;
    const width = canvas.width;
    const context = canvas.getContext('2d');
    let x = 0;
    const sliceWidth = (width * 1.0) / this.state.audioData.length;
    context.lineWidth = 2;
    context.strokeStyle = '#000000';
    context.clearRect(0, 0, width, height);
    context.beginPath();
    context.moveTo(0, height / 2);
    for (const item of this.state.audioData) {
      const y = (item / 255.0) * height;
      context.lineTo(x, y);
      x += sliceWidth;
    }
    context.lineTo(x, height / 2);
    context.stroke();
  }

  componentDidUpdate() {
    this.draw();
  }

  render() {
      return ( 
          <canvas className = "visual-box" ref={this.canvas}>
          
          </canvas>
      );
  }




}

