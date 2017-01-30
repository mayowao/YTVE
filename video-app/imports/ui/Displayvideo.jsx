import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
import YouTube from 'react-youtube';
import Draggable from 'react-draggable';
import { Resizable, ResizableBox } from 'react-resizable';


import { Headerbar } from './Headerbar.jsx'
 
// Displayvideo component - represents the Viewing Area of the app
export default class Displayvideo extends Component {
 
  //Keyboard Shortcuts
  componentDidMount(){ 
    
  }
 
  componentWillUnmount(){ 
   
  }
  
  //Displaying the Video Edits
  constructor(props) {
    super(props);
    this.state = {
     videoId: 'SXiSVQZLje8',                  // defaults -> null
     id: 'player',                       // defaults -> null
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
     
      speed: '',
      getSpeed: '',
     
     
     onReady: function(event){},                    // defaults -> noop
     onPlay: function(event){},                     // defaults -> noop
     onPause: function(event){},                    // defaults -> noop
     onEnd: function(event){},                      // defaults -> noop
     onError: function(event){},                    // defaults -> noop
     onStateChange: function(event){},              // defaults -> noop
     onPlaybackRateChange: function(event){},       // defaults -> noop
     onPlaybackQualityChange: function(event){},    // defaults -> noop      
    };

    this.handleEdits = this.handleEdits.bind(this);
    this.getEdits = this.getEdits.bind(this);
    this.renderVideos = this.renderVideos.bind(this);
    this.handleSpeedClick = this.handleSpeedClick.bind(this);
    this.handleSpeedChange = this.handleSpeedChange.bind(this);
    this.handleSpeedSubmit = this.handleSpeedSubmit.bind(this);
  }
 
  handleEdits(){
    speedFunc = function(){
      YouTube.setPlaybackRate(0.25);
    };
   
   var doSpeed = speedFunc();
  
  }
 
  getEdits(){
    this.state.videoId  '';
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
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  
    speedUp(event) {
    var newSpeed = this.seeRate + 0.5;
    YouTube.setPlaybackRate(newSpeed);
    //event.target.mute();
    }
 
  handleSpeedClick(event) {
    //this.setState({speed: event.target.value});
  }
 
  handleSpeedChange(event) {
    this.setState({getSpeed: event.target.value});
  }

  handleSpeedSubmit(event) {
    YouTube.setPlaybackRate(this.state.getSpeed);
    alert('Speed was changed: ' + this.state.getSpeed);
    event.preventDefault();
    //this.setState({value: 'Search'});
    console.log('Hello, youve submited');
  }
 
 ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  renderVideos(){
  }

  onReady(event){
       //event.target.playVideo();
       event.target.setPlaybackRate(0.5);
       var seeInitRate = event.target.getPlaybackRate();
       console.log(seeInitRate);
       this.setState({speed: seeInitRate});
       //event.target.mute();
     }
 
  onPlaybackRateChange(event){
       var seeRate = event.target.getPlaybackRate();
       console.log(seeRate);
       this.setState({speed: seeRate});
     }
 
 //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 
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
             onReady={this.onReady}
             onPlay={this.state.onPlay}                     // defaults -> noop
             onPause={this.state.onPause}                    // defaults -> noop 
             onEnd={this.state.onEnd}                      // defaults -> noop 
             onError={this.state.onError}                    // defaults -> noop 
             onStateChange={this.state.onStateChange}              // defaults -> noop 
             onPlaybackRateChange={this.onPlaybackRateChange}       // defaults -> noop 
             onPlaybackQualityChange={this.state.onPlaybackQualityChange} 
           />
           <table>
             <th></th>
             <tr>
               <td>
                 <form onSubmit={this.handleSpeedSubmit}>
                   <label>

                     <input type="text" value={this.state.getSpeed} onClick={this.handleSpeedClick} onChange={this.handleSpeedChange} />

                   </label>
                   <input type="submit" value="Apply Video Speed" />
                  </form>
               </td>
              <td>
           <strong>
             <div className="dragborder">Drag Here</div>
           </strong>
               </td>
            </tr>
          </table>
         </div>
      </Draggable>
       </div>
    );
  }
} 
