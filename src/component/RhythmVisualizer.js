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

    var i;
    for (i = 0; i < this.props.sounds.length; i++) {
      let source = this.audioContext.createMediaElementSource(this.props.sounds[i])
      source.connect(this.audioContext.destination)
      source.connect(this.analyser)
    }
    this.rafId = requestAnimationFrame(this.tick);
  }

  // componentWillUnmount() {
  //   cancelAnimationFrame(this.rafId);
  //   this.analyser.disconnect();
  //   this.source.disconnect();
  // }

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
    
    const sliceWidth = (width * 1.0) / this.state.audioData.length;
    context.lineWidth = 2;
    // context.strokeStyle = '#000000';
    context.clearRect(0, 0, width, height);
    context.beginPath();
    context.moveTo(0, height / 2);
    let x = 0;
    for (const item of this.state.audioData) {
      const y = (item / 255.0) * height;
      context.lineTo(x, y);
      x += sliceWidth;
    }
    context.lineTo(x, height / 2);
    context.strokeStyle = '#5bd9fc';
    context.stroke();
  }

  componentDidUpdate() {
    this.draw();
    // TODO: HOT FIX for chrome
    this.audioContext.resume();
  }

  render() {
      return ( 
          <canvas className = "visual-box" ref={this.canvas}>
          
          </canvas>
      );
  }




}

