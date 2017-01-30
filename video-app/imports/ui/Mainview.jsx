import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
import YouTube from 'react-youtube';
import Draggable from 'react-draggable';

import Displayvideo from './Displayvideo.jsx';
 
// MainView component - represents the Viewing/Editing Secion of our app
export default class Mainview extends Component {
 
 componentDidMount(){
    showVideos = function(){
     var addVideo = document.getElementById("mainscreen");
     //addVideo.appendChild(<Displayvideo />);
     console.log(<Displayvideo />);
    }
    
    var doShow = showVideos();
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
    };
  }

  //Displaying The Video
  getVideos(){
    
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
        <div id="mainscreen" className="mainscreen">
        </div>
       </div>
    );
  }
} 
