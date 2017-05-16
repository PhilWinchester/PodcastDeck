import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      podcastTitle: ''
    }
  }

  fireItunesFetch() {
    let convertedTitle = this.state.podcastTitle.replace(/\s/g, '+')
    console.log(convertedTitle);
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
    .then(res => {
      console.log(res);
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
        <input type='search' placeholder='Title' onChange={(e) => this.handleTitleInputChange(e)}></input>
        <hr></hr>
        <button onClick={() => this.fireItunesFetch()} >Query iTunes</button>

      </div>
    );
  }

}
