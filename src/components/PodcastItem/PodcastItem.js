import React, { Component } from 'react';
import './PodcastItem.css';

export default class PodcastItem extends Component {
  constructor() {
    super();

    this.state = {
      audioStr: '',
      audioFile: new Audio()
    }
  }

  launchFeed() {
    console.log(this.props.feedUrl);
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
      console.log(resp);
    })
    .catch(err => console.log(err));
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
        audioStr: resp.enclosures[0].url,
        audioFile: new Audio(resp.enclosures[0].url)
      })
      this.state.audioFile.play();
    })
    .catch(err => console.log(err));
  }

  pausePlayback() {
    this.state.audioFile.pause()
  }

  render() {
    return (
      <div>
        <img src={this.props.artworkUrl} onClick={() => this.launchFeed()}/>
        <h4>{this.props.collectionName}</h4>
        <h6>{this.props.artistName}</h6>
        <a href='#' onClick={() => this.launchFeed()}> {this.props.feedUrl} </a>
        <button onClick={() => this.playMostRecent()}> Play Most Recent </button>
        <button onClick={() => this.pausePlayback()}> Pause </button>
      </div>
    );
  }
}
