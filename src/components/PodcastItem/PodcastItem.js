import React, { Component } from 'react';
import './PodcastItem.css';

export default class PodcastItem extends Component {
  render() {
    return (
      <div>
        <img src={this.props.artworkUrl}/>
        <h4>{this.props.collectionName}</h4>
        <h6>{this.props.artistName}</h6>
        <a href={this.props.feedUrl}> {this.props.feedUrl} </a>
      </div>
    );
  }
}
