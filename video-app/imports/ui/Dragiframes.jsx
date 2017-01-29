import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';

import Mainview from './Mainview.jsx';

export default class Dragiframes extends Component {
 
 //VideoFormatting
 videoFormat(){
   getDrag = function(){
    var drag = document.getElementsByTagName('iframe')[0];
    //drag.setAttribute("onLoad","addHandle(document.getElementById('toolbar'), window)");
    console.log(drag);
   };
   
   var doDrag = getDrag();
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
          {this.videoFormat()}
          <script type="text/javascript" src="../imports/api/dragiframe.js"></script>
        </iframe>
        </div>
        <div id="player1" ref="players">
          <script type="text/javascript" src="../imports/api/dragiframe.js">
           
          </script>
        </div>
        {this.renderVideos()}
        
       </div>
    );
  }
} 
