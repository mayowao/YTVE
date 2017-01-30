import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
import YouTube from 'react-youtube';
import Draggable from 'react-draggable';
 
// Displayvideo component - represents the Viewing Area of the app
export default class Displayvideo extends Component {
 
 componentDidMount(){
 }

  
  //Displaying the Video Edits
  constructor(props) {
    super(props);
    this.state = {
     videoId: 'SXiSVQZLje8',                  // defaults -> null
     id: '',                       // defaults -> null
     className: 'player2',                // defaults -> null
     opts: {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters 
        autoplay: 1
      }},                        // defaults -> {}
     onReady: 'func',                    // defaults -> noop
     onPlay: 'func',                     // defaults -> noop
     onPause: 'func',                    // defaults -> noop
     onEnd: 'func',                      // defaults -> noop
     onError: 'func',                    // defaults -> noop
     onStateChange: 'func',              // defaults -> noop
     onPlaybackRateChange: 'func',       // defaults -> noop
     onPlaybackQualityChange: 'func',    // defaults -> noop      
    };

    this.handleEdits = this.handleEdits.bind(this);
    this.getEdits = this.getEdits.bind(this);
    this.renderVideos = this.renderVideos.bind(this);
    //this.onPlayerStateChange = this.onPlayerStateChange.bind(this);
    //this.onPlayerStateChange = this.onPlayerStateChange.bind(this);
    //this.onPlayerStateChange = this.onPlayerStateChange.bind(this);
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
    
    onPlayerReady(event) {
    //console.log(this.state.value);
    event.target.playVideo();
    event.target.mute();
    }

  renderVideos(){
  }
 
  //Create the Video Screens via HTML
  render() {
    return (
      <div className="vidscreen">
        <Draggable>
         <div className="dragtry">
        <YouTube
          videoId={this.state.videoId}                  
          id={this.state.id}                       
          className={this.state.className}
          opts={this.state.opts}
          onReady={this.onPlayerReady}
        />
         </div>
      </Draggable>
       </div>
    );
  }
} 
