import React, { Component } from 'react';
 
import Profile from './Profile.jsx';
 
// App component - represents the whole app
export default class Headerbar extends Component {
  getProfileInfo() {
    return [
      { _id: 1, text: 'This is task 1' },
      { _id: 2, text: 'This is task 2' },
      { _id: 3, text: 'This is task 3' },
    ];
  }
 
  renderProfileInfo() {
    return this.getProfileInfo().map((task) => (
      <Profile key={task._id} task={task} />
    ));
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
