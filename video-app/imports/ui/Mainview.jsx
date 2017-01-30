import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
import YouTube from 'react-youtube';
import Draggable from 'react-draggable';

import Displayvideo from './Displayvideo.jsx';

/*var ytiframe = document.createElement('script');
ytiframe.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(ytiframe, firstScriptTag);*/

//var renderVideos = require('youtube-iframe');
 
// MainView component - represents the Viewing/Editing Secion of our app
export default class Mainview extends Component {
 
 componentDidMount(){
   getDrag = function(){
    var drag = document.getElementsByTagName('iframe');
    var dragg = drag[0];
    //dragg.onload = addHandle(document.getElementsByTagName('body').item(0), window);
    //dragg.draggable = true;
    console.log(drag);
    console.log(dragg);
   };
   
   var doDrag = getDrag();
 }

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

 renderVideos(){
  // 4. The API will call this function when the video player is ready.
  onPlayerReady = function(event) {
    //console.log(this.state.value);
    event.target.playVideo();
    event.target.mute();
  }

  // 5. The API calls this function when the player's state changes.
  //    The function indicates that when playing a video (state=1),
  //    the player should play for six seconds and then stop.
  var done = false;
  onPlayerStateChange = function(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
      setTimeout(stopVideo, 6000);
      done = true;
    }
  }
 
  stopVideo = function() {
    player.stopVideo();
  }
  
  onErrorMes = function(event){
    console.log('Error loading youtube video');
  }
  
  onYouTubeIframeAPIReady = function(){
  //renderVideos(function) {
    player = new YT.Player('player1', {
      height: '390',
      width: '640',
      videoId: 'SXiSVQZLje8',
      //playerVars: { 'autoplay': 1 },
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange, 
        'onError': onErrorMes
      }
    });
  } 
 
  YT.load();
  console.log(this.state.value);

 }
 
  //Displaying the comments
  getComments(){
  }
  
  renderComments(){
  }
 
  //Create the Video Screens via HTML
  render() {
    return (
      <div className="vidviewer">        
        <h1>Viewing Videos</h1>
        <div className="vidscreen">
        <iframe 
         name="ytplayer"
         id="ytplayer" 
         type="text/html" 
         width="640" 
         height="360"
         src="https://www.youtube.com/embed/vJoie-znJI8?enablejsapi=1&autoplay=1&rel=0&frameborder=0"
         ref="players">
            
        </iframe>
        </div>
        <div id="player1" ref="players">
          
        </div>
        {this.renderVideos()}
      
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
       
      <Draggable
        axis="x"
        defaultPosition={{x: 0, y: 0}}
        position={null}
        grid={[25, 25]}
        zIndex={100}
        >
        <div>
          <div className="handle">Drag from here</div>
          <div>This readme is really dragging on...</div>
        </div>
      </Draggable>
       </div>
    );
  }
} 
