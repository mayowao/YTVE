import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';

import '../api/youtubedata.js';

class Relview extends Component {
 
 //Display Related Videos
  renderRelVideos() {
    return this.props.videos.map((vid) => (
      <Displayvideo key={vid._id} vid={vid} />
    ));
  }
 
 render(){
  return (
     <ul>
       {this.renderRelVideos()}
     </ul>
   )
 }
}

Relview.propTypes = {
  videos: PropTypes.array.isRequired,
};

 
export default createContainer(() => {
  return {
    videos: Videos.find({}).fetch(),
  };
}, Relview);
