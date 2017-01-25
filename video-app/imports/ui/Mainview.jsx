import React, { Component } from 'react';
 
import Displayvideo from './Displayvideo.jsx';
 
// MainView component - represents the Viewing/Editing Secion of our app
export default class Mainview extends Component {
  getVideos() {
    return [
      { _id: 1, text: 'This is video 1' },
      { _id: 2, text: 'This is video 2.5' },
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
      <div className="vidviewer">        
          <h1>Viewing Videos</h1>
      <div className="vidscreen">
       <iframe id="ytplayer" type="text/html" width="640" height="360"
  src="https://www.youtube.com/embed/vJoie-znJI8?
       autoplay=0&
       rel=1"
  frameborder="0"></iframe>
       </div>
        <ul>
          {this.renderVideos()}
        </ul>
      </div>
    );
  }
}
