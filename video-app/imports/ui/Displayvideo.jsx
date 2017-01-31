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
     id: '',                       // defaults -> null
     className: 'player2',                // defaults -> null
     opts: {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters 
        autoplay: '1',
        //cc_load_policy: '',
        color: 'orange',
        controls: '1',
        disablekb: '0',
        enablejsapi: '1',
        //end: '',
        fs: '1',
        //hl: '',
        iv_load_policy: '1',
        //list: '',
        //listType: '',
        loop: '0',
        //modestbranding: '',
        origin: '',
        playlist: '',
        playsinline: '0',
        rel: '0',
        //showinfo: '',
        //start: ''
      }},                        // defaults -> {}
     
      speed: '1',
      getSpeed: '0',
      speedUpButton: '1',
      speedDownButton: '1',
      loopButton:'0',
     
     
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
    this.handleSpeedApply = this.handleSpeedApply.bind(this);
    this.onReady = this.onReady.bind(this);
    this.onPlaybackRateChange = this.onPlaybackRateChange.bind(this);
    this.speedUp = this.speedUp.bind(this);
    this.speedDown = this.speedDown.bind(this);
    this.loopVid = this.loopVid.bind(this);
  }
 
  handleEdits(){
  
  }
 
  getEdits(){
    this.state.videoId=  '';
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
 loopVid(event){
   var newloop = this.state.opts.playerVars.loop;
   console.log(newloop);
   newloop = 1 - newloop;
   this.setState({opts: 
                  {playerVars: 
                   {loop: newloop}
                  }
                 });
   this.setState({loopButton: newloop});
 }
 
 
 
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  
  speedUp(event) {
    var getSpeeds = this.state.player.getAvailablePlaybackRates();
    console.log(getSpeeds);
    var newSpeed = this.state.speed;
    var adjSpeed = newSpeed*2;
    this.state.player.setPlaybackRate(adjSpeed);
    this.setState({speedUpButton: adjSpeed});
    //event.target.mute();
  }
 
 speedDown(event) {
    var getSpeeds = this.state.player.getAvailablePlaybackRates();
    //console.log(getSpeeds);
    var newSpeed = this.state.speed;
    var adjSpeed = newSpeed*0.5;
    this.state.player.setPlaybackRate(adjSpeed);
    this.setState({speedUpButton: adjSpeed});
    //event.target.mute();
  }
 
  handleSpeedClick(event) {
    //this.setState({speed: event.target.value});
  }
 
  handleSpeedChange(event) {
    this.setState({getSpeed: event.target.value});
  }

  handleSpeedApply(event) {
    this.state.player.setPlaybackRate(this.state.getSpeed);
    //alert('Speed was changed: ' + this.state.speed);
    event.preventDefault();
    //this.setState({value: 'Search'});
    console.log('Hello, youve submited');
  }
 
 ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  renderVideos(){
  }

  onReady(event){
       this.setState({player: event.target});
    console.log(this.state.player);
       var seeInitRate = event.target.getPlaybackRate();
       console.log(seeInitRate);
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
             //id={this.state.id}                       
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
          <div className="editopts">
            <table>
            <tbody>
             <tr>
              <td>
               <table><tbody><tr><td>
               <form>
                <input type="button" value={this.state.speedUpButton} onClick={this.speedUp}/>
               </form>
                </td><td>
               <form>
                <input type="button" value={this.state.speedDownButton} onClick={this.speedDown}/>
               </form>
                </td></tr></tbody></table>
              </td>
              <td>
               <form>
                <input type="button" value={this.state.loopButton} onClick={this.loopVid}/>
               </form>
              </td>
             </tr>
              <tr>
               <td>
                <div className="edithoover">
                 <form>
                     <input type="text" value={this.state.speed} onClick={this.handleSpeedClick} onChange={this.handleSpeedChange} />                  
                   <input type="button" onClick={this.handleSpeedApply} value="Apply Video Speed" />
                  </form>
                </div>
               </td>
              <td>
                <strong>
                  <div className="dragborder">Drag Here</div>
                </strong>
              </td>
            </tr> 
           </tbody>
          </table>
           
           </div>
         </div>
      </Draggable>
       </div>
    );
  }
} 
