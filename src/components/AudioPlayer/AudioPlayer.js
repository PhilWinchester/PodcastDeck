import React, { Component } from 'react';
import './AudioPlayer.css';

export default class AudioPlayer extends Component {
  render() {
    return (
      <div className='audio-player'>
        <audio src={this.props.audioStr} autoPlay controls > </audio>
      </div>
    );
  }
}
