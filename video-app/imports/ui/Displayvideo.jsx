import React, { Component, PropTypes } from 'react';
 
// DisplayVideo component - represents a single yt video
export default class Displayvideo extends Component {
  render() {
    return (
      <li>{this.props.vid.text}</li>
    );
  }
}
 
Displayvideo.propTypes = {
  // This component gets the video to display through a React prop.
  // We can use propTypes to indicate it is required
  vid: PropTypes.object.isRequired,
};
