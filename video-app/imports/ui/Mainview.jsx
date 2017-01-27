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
      pauses: '6000'      
    };

    this.handleEdits = this.handleEdits.bind(this);
    this.getEdits = this.getEdits.bind(this);
    this.renderEdits = this.renderEdits.bind(this);
  }
 
  handleEdits(){
  
  }
 
  getEdits(){
  }
 
  renderEdits(){
  }
 

  //Displaying The Video
  getVideo(){
   
  }
 
  renderVideos() {
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
       autoplay=this.state.autoplay&
       rel=0"
       frameborder="0"></iframe>
      </div>
       <ul>
         {this.renderRelVideos()}
       </ul>
        
      </div>
    );
  }
}
