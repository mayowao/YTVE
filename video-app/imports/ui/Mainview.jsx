import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
 
//import { Iframe } from '../api/iframe.js';
import Displayvideo from './Displayvideo.jsx';
 
// MainView component - represents the Viewing/Editing Secion of our app
class Mainview extends Component {
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
      value: 'false',
      pauses: '6000'      
    };

    this.handleEdits = this.handleEdits.bind(this);
    this.getEdits = this.getEdits.bind(this);
    this.renderVideos = this.renderVideos.bind(this);
    this.onPlayerStateChange = this.onPlayerStateChange.bind(this);
  }
 
  handleEdits(){
  
  }
 
  getEdits(){
  }
 
  renderEdits(){
  }
 

  //Displaying The Video
  getVideos(){
  }
 
  renderVideos() {
   return [
      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
     <script src="https://www.youtube.com/iframe_api">
        player = new YT.Player('player', {
          height: '390',
          width: '640',
          videoId: 'SXiSVQZLje8',
          events: {
            'onReady': this.onPlayerReady,
            'onStateChange': this.onPlayerStateChange
          }
        });
      </script>
    ];
  }

  // 4. The API will call this function when the video player is ready.
  onPlayerReady(event) {
    player.playVideo();
  }

  // 5. The API calls this function when the player's state changes.
  //    The function indicates that when playing a video (state=1),
  //    the player should play for six seconds and then stop.
  // var done = false;
  onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !this.state.value) {
      setTimeout(stopVideo, 6000);
      this.setState({value: 'true'});
    }
  }
 
  stopVideo() {
    player.stopVideo();
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
        src="https://www.youtube.com/embed/vJoie-znJI8?enablejsapi=1&autoplay=1&rel=0&frameborder=0">
        </iframe>
        </div>
        <ul>
          {this.renderRelVideos()}
        </ul>
        <div id="player"></div>
        {this.renderVideos()}
      </div>
    );
  }
}

Mainview.propTypes = {
  videos: PropTypes.array.isRequired,
};
 
export default createContainer(() => {
  return {
    videos: 'Heeeellooo',
    /*tasks: Iframe.find({}).fetch(),*/
  };
}, Mainview);
