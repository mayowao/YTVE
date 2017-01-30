import React, { Component, PropTypes } from 'react';
import { Savededits } from './Savededits.jsx';
 
// Comment component - represents a single video screen edit
export default class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
     words: '',
     mainVideo: 'SXiSVQZLje8',
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

  render() {
    return (
      <div className="comment">
      <li>
        <td className="profilepic">
          <div className="commenttext">
            {this.state.words}
         </div>
        </td>
      </li>
      </div>
    );
  }
}
 
Comment.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required
  //task: PropTypes.object.isRequired,
};
