import React, { Component } from 'react';
 
import Profile from './Profile.jsx'
/*import Search from './Search.jsx';
import Settings from './Settings.jsx';
import QuickFind from './QuickFind.jsx';*/
 
// Header component - represents the header functions
export default class Heading extends Component {
  getProfileInfo() {
    return [
      { _id: 1, text: 'This is my profile name' },
      { _id: 2, text: 'This is my reccomendations' },
      { _id: 3, text: 'This is my most commonly used buttons' },
    ];
   console.log('getProfile has rendered');
  }
 
  renderProfileInfo() {
    return this.getProfileInfo().map((name) => (
      <Profile key={name._id} name={name} />
    ));
   console.log('ProfileInfo has rendered');
  }
 
  render() {
    return (
      <div className="container">
        <header>
          <h1>Todo List</h1>
        </header>
 
        <ul>
          {this.renderProfileInfo()}
        </ul>
      </div>
    );
  }
}
