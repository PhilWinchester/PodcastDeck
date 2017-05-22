import React, { Component } from 'react';
// NOTE keeping this so I can remember to use it for research
//import ReactAudioPlayer from 'react-audio-player';
import './PodcastItem.css';

export default class PodcastItem extends Component {
  constructor() {
    super();

    this.state = {
      audioStr: ''
    }
  }

  launchFeed() {
    console.log('loading feed');
  }

  playMostRecent() {
    fetch(`/podcast/parse`, {
      headers: {
        'Content-Type':'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        feedUrl: this.props.feedUrl
      }),
    })
    .then(r => r.json())
    .then(resp => {
      this.setState({
        audioStr: resp.enclosures[0].url
      })
      console.log(resp);
    })
    .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <h2>{this.props.collectionName}</h2>
        <img src={this.props.artworkUrl} onClick={() => this.playMostRecent()}/>
        <h4> <code> {this.props.artistName}</code></h4>
        {/* <a href='#' onClick={() => this.launchFeed()}> {this.props.feedUrl} </a> */}
        <button onClick={() => this.playMostRecent()}> Load most recent episode </button>
        <hr />
        <audio src={this.state.audioStr} autoPlay controls >
          
        </audio>
        <hr />
      </div>
    );
  }
}
