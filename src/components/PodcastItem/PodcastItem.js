import React, { Component } from 'react';
import './PodcastItem.css';

export default class PodcastItem extends Component {

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

  render() {
    return (
      <div>
        <img src={this.props.artworkUrl} onClick={() => this.launchFeed()}/>
        <h4>{this.props.collectionName}</h4>
        <h6>{this.props.artistName}</h6>
        <a href={this.props.feedUrl}> {this.props.feedUrl} </a>
      </div>
    );
  }
}
