import React, { Component } from 'react';
import './PodcastItem.css';

export default class PodcastItem extends Component {
  render() {
    return (
      <div>
        <img src={this.props.podcastImg}/>
        <a href={this.props.feedUrl}> {this.props.feedUrl} </a>
      </div>
    );
  }
}
