import React, { Component } from 'react';
 
import Displayvideo from './Displayvideo.jsx';
 
// MainView component - represents the Viewing/Editing Secion of our app
export default class MainView extends Component {
  getVideos() {
    return [
      { _id: 1, text: 'This is video 1' },
      { _id: 2, text: 'This is video 2' },
      { _id: 3, text: 'This is video 3' },
    ];
  }
 
  renderVideos() {
    return this.getVideos().map((vid) => (
      <Displayvideo key={vid._id} vid={vid} />
    ));
  }
 
  render() {
    return (
      <div className="container">
        <header>
          <h1>Viewing Videos</h1>
        </header>
 
        <ul>
          {this.renderVideos()}
        </ul>
      </div>
    );
  }
}
