import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
import YoutubeAutocomplete from 'react-youtube-autocomplete';

export default class Search extends Component {
  //Getting the search results
  constructor(props) {
    super(props);
    this.state = {
      youtubeDataApiKey: 'AIzaSyCbyBqil_RBAQ-lNoZexNXMJk84PG4FKyk',
      videoId: 'SXiSVQZLje8'
    };
  }
  
  render() {
    return (
      <YouTubeAutocomplete
        apiKey={this.state.youtubeDataApiKey}
        placeHolder="Search Youtube"
        callback= {this._onSearchResultsFound}
      />
    );
  }

  _onSearchResultsFound(results) {
    // Results is an array of retreived search results
    // I use flux, so I dispatch results to an action
    flux.actions.showSearchResults(results);
  }
}
