import React, { Component } from 'react';
import './SearchBar.css';

export default class SearchBar extends Component {
  constructor() {
    super();

    this.state = {
      podcastTitle: ''
    }
  }

  handleTitleInputChange(e) {
    this.setState({
      podcastTitle: e.target.value
    })
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
        // const podcastArr = resp.results.map((elem, counter) => (
        //   <PodcastItem
        //     key={counter}
        //     collectionName={elem.collectionName}
        //     artistName={elem.artistName}
        //     artworkUrl={elem.artworkUrl100}
        //     feedUrl={elem.feedUrl}
        //   />
        // ))
        console.log(resp);
    })
    .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <input type='search' placeholder='Title'
          onChange={(e) => this.handleTitleInputChange(e)}
          onKeyPress={(t) => this.handleKeyPress(t)}
        ></input>
        <button onClick={() => this.fireItunesFetch()} >Search</button>
      </div>
    );
  }
}
