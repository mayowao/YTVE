import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
import YouTube from 'react-youtube';
import Draggable from 'react-draggable';
import { Resizable, ResizableBox } from 'react-resizable';

import { Headerbar } from './Headerbar.jsx'
 
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
        autoplay: '0',
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
     onReady: function(event){
       event.target.playVideo();
       event.target.setPlaybackRate(0.5);
       var seeRate = event.target.getPlaybackRate();
       console.log(seeRate);
       event.target.mute();},                    // defaults -> noop
     onPlay: function(event){},                     // defaults -> noop
     onPause: function(event){},                    // defaults -> noop
     onEnd: function(event){},                      // defaults -> noop
     onError: function(event){},                    // defaults -> noop
     onStateChange: function(event){},              // defaults -> noop
     onPlaybackRateChange: function(event){
       var seeTime = event.target.getPlaybackRate();
       console.log(seeTime);},       // defaults -> noop
     onPlaybackQualityChange: function(event){},    // defaults -> noop      
    };

    this.handleEdits = this.handleEdits.bind(this);
    this.getEdits = this.getEdits.bind(this);
    this.renderVideos = this.renderVideos.bind(this);
  }
 
  handleEdits(){
    speedFunc = function(){
      YouTube.PlayerState.setPlaybackRate(0.25);
    };
   
   var doSpeed = speedFunc();
  
  }
 
  getEdits(){
    this.state.videoId = '';
    this.state.id = '';
    this.state.className = '';
    this.state.opts.height = '';
    this.state.opts.width = '';
   
    this.state.opts.playerVars.autoplay = '';
    this.state.opts.playerVars.cc_load_policy = '';
    this.state.opts.playerVars.color = '';
    this.state.opts.playerVars.controls = '';
    this.state.opts.playerVars.disablekb = '';
    this.state.opts.playerVars.enablejsapi = '';
    this.state.opts.playerVars.end = '';
    this.state.opts.playerVars.fs = '';
    this.state.opts.playerVars.hl = '';
    this.state.opts.playerVars.iv_load_policy = '';
    this.state.opts.playerVars.list = '';
    this.state.opts.playerVars.listType = '';
    this.state.opts.playerVars.loop = '';
    this.state.opts.playerVars.modestbranding = '';
    this.state.opts.playerVars.origin = '';
    this.state.opts.playerVars.playlist = '';
    this.state.opts.playerVars.playsinline = '';
    this.state.opts.playerVars.rel = '';
    this.state.opts.playerVars.showinfo = '';
    this.state.opts.playerVars.start = '';
    
  }
 
  renderEdits(){
  }
 

  //Displaying The Video
  getVideos(){
    
  }
    
    onPlayerReady(event) {
    console.log(this.state.opts.width);
    event.target.playVideo();
    event.target.mute();
    }

  renderVideos(){
  }
 
  //Create the Video Screens via HTML
  render() {
    return (
      <div className="vidscreen">
        <Draggable handle="strong">
         <div className="dragtry">
           <YouTube
             videoId={this.state.videoId}                  
             id={this.state.id}                       
             className={this.state.className}
             opts={this.state.opts}
             onReady={this.state.onReady}
             onPlay={this.state.onPlay}                     // defaults -> noop
             onPause={this.state.onPause}                    // defaults -> noop 
             onEnd={this.state.onEnd}                      // defaults -> noop 
             onError={this.state.onError}                    // defaults -> noop 
             onStateChange={this.state.onStateChange}              // defaults -> noop 
             onPlaybackRateChange={this.state.onPlaybackRateChange}       // defaults -> noop 
             onPlaybackQualityChange={this.state.onPlaybackQualityChange} 
           />
           <strong>
             <div className="dragborder">Drag Here</div>
           </strong>
         </div>
      </Draggable>
       </div>
    );
  }
} 
