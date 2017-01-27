import React, { Component } from 'react';

//import { createContainer } from 'meteor/react-meteor-data';
 
//import { Iframe } from '../api/iframe.js';
import Displayvideo from './Displayvideo.jsx';
 
// MainView component - represents the Viewing/Editing Secion of our app
export default class Mainview extends Component {
  getRelVideos() {
    return [
      { _id: 1, text: 'This is related video 1' },
      { _id: 2, text: 'This is related video 2' },
      { _id: 3, text: 'This is related video 3' },
    ];
  }
 
  //Displaying the Video Edits
  constructor(props) {
    super(props);
    this.state = {
      value: 'Search',
      autoplay: '1',
      position: '0',
      height: '360',
      width: '420',
      pauses: '6000',
      images: 'no'
    };

    this.handleEdits = this.handleEdits.bind(this);
    this.getEdits = this.getEdits.bind(this);
    this.renderEdits = this.renderEdits.bind(this);
  }
 
  handleEdits(){
  
  }
 
  getEdits(){
    return [
      { _id: 1, text: 'This is related video 1' },
      { _id: 2, text: 'This is related video 2' },
      { _id: 3, text: 'This is related video 3' },
    ];
     
  }
 
  renderEdits(){
  }
 

  //Displaying The Video
  getVideos(){
   
  }
 
  renderVideos() {
    return [ 
      <iframe id="ytplayer" type="text/html" width="640" height="360"
          src="https://www.youtube.com/embed/vJoie-znJI8?
          enablejsi=1&
          autoplay=this.state.autoplay&
          rel=0"
          frameborder="0"></iframe>
     ];
  }
 
  //Display Related Videos
  renderRelVideos() {
    return this.getRelVideos().map((vid) => (
      <Displayvideo key={vid._id} vid={vid} />
    ));
  }
 
  //Displaying the comments
  getComments(){
  }
  
  renderComments(){
  }
 
  render() {
    return (
      <div className="vidviewer">        
        <h1>Viewing Videos</h1>
        <div className="vidscreen">
          <iframe id="ytplayer" type="text/html" width="640" height="360"
          src="https://www.youtube.com/embed/vJoie-znJI8?
          enablejsi=1&
          autoplay=0&
          rel=0"
          frameborder="0"></iframe>
          </div>
        <ul>
          {this.renderRelVideos()}
        </ul>
        <div className="vidscreene">
         {this.renderVideos()}
        </div>
      </div>
    );
  }
}

/*----------------------------------------------------*/
      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '390',
          width: '640',
          videoId: 'M7lc1UVf-VE',
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
      }

      // 4. The API will call this function when the video player is ready.
      function onPlayerReady(event) {
        event.target.playVideo();
      }

      // 5. The API calls this function when the player's state changes.
      //    The function indicates that when playing a video (state=1),
      //    the player should play for six seconds and then stop.
      var done = false;
      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
          setTimeout(stopVideo, 6000);
          done = true;
        }
      }
      function stopVideo() {
        player.stopVideo();
      }
