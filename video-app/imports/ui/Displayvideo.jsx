import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
import YouTube from 'react-youtube';
import Draggable from 'react-draggable';
 
// Displayvideo component - represents the Viewing Area of the app
export default class Displayvideo extends Component {
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
        autoplay: 1,
        cc_load_policy: '',
        color: '',
        controls: '',
        disablekb: '',
        enablejsapi: '',
        end: '',
        fs: '',
        hl: '',
        iv_load_policy: '',
        list: '',
        listType: '',
        loop: '',
        modestbranding: '',
        origin: '',
        playlist: '',
        playsinline: '',
        rel: '',
        showinfo: '',
        start: ''
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
  }
 
  handleEdits(){
  
  }
 
  getEdits(){
    this.state.videoId = '';
    this.state.id = '';
    this.state.className = '';
    this.state.height = '';
    this.state.width = '';
   
    this.state.playerVars.autoplay = '';
    this.state.playerVars.cc_load_policy = '';
    this.state.playerVars.color = '';
    this.state.playerVars.controls = '';
    this.state.playerVars.disablekb = '';
    this.state.playerVars.enablejsapi = '';
    this.state.playerVars.end = '';
    this.state.playerVars.fs = '';
    this.state.playerVars.hl = '';
    this.state.playerVars.iv_load_policy = '';
    this.state.playerVars.list = '';
    this.state.playerVars.listType = '';
    this.state.loop = '';
    this.state.modestbranding = '';
    this.state.origin = '';
    this.state.playlist = '';
    this.state.playsinline = '';
    this.state.rel = '';
    this.state.showinfo = '';
    this.state.start = '';
    
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
          onReady={this.state}
        />
         </div>
      </Draggable>
       </div>
    );
  }
} 
