import React, { Component } from 'react';
import PodcastItem from './PodcastItem/PodcastItem';
import './App.css';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      podcastTitle: '',
      podcasts: null
    }
  }

  handleKeyPress(target){
    if (target.charCode === 13) {
      this.fireItunesFetch()
    }
  }

  fireItunesFetch() {
    let convertedTitle = this.state.podcastTitle.replace(/\s/g, '+');

    fetch(`/podcast/search`, {
      headers: {
        'Content-Type':'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        podcastTitle: convertedTitle
      }),
    })
    .then(r => r.json())
    .then(resp => {
      const podcastArr = resp.results.map((elem, counter) => (
        <PodcastItem
          key={counter}
          collectionName={elem.collectionName}
          artistName={elem.artistName}
          artworkUrl={elem.artworkUrl100}
          feedUrl={elem.feedUrl}
        />
      ))

      this.setState({
        podcasts: podcastArr
      });

    })
    .catch(err => console.log(err));
  }

  handleTitleInputChange(e) {
    this.setState({
      podcastTitle: e.target.value
    })
  }


  render() {
    return (
      <div>
        <input type='search' placeholder='Title'
          onChange={(e) => this.handleTitleInputChange(e)}
          onKeyPress={(t) => this.handleKeyPress(t)}
        ></input>
        <hr></hr>
        <button onClick={() => this.fireItunesFetch()} >Query iTunes</button>
        <hr></hr>
        {this.state.podcasts}
      </div>
    );
  }

}
