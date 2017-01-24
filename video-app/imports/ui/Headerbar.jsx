import React, { Component } from 'react';
 
import Profile from './Profile.jsx'
/*import Search from './Search.jsx';
import Settings from './Settings.jsx';
import QuickFind from './QuickFind.jsx';*/
 
// Header component - represents the header functions
export default class Headerbar extends Component {
  getProfileInfo() {
    return [
      { _id: 1, text: 'This is my profile name' },
      { _id: 2, text: 'This is my reccomendations' },
      { _id: 3, text: 'This is my most commonly used buttons' },
    ];
  }
 
  renderProfileInfo() {
    return this.getProfileInfo().map((pname) => (
      <Profile key={pname._id} pname={pname} />
    ));
  }
 
  constructor(props) {
    super(props);
    this.state = {value: 'Search'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
 
 changeDisplay(event) {
    this.setState({value: event.target.value});
 }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }
 
  render() {
    return (
     <header>
      <div className="searchbar">
       <form onSubmit={this.handleSubmit}>
        <label>
         
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        
        </label>
        <input type="submit" value="Submit" />
       </form>
      </div>
       <ul>
          {this.renderProfileInfo()}
       </ul>
      </header>
        
    );
  }
}
