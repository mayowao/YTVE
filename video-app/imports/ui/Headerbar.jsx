import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
 
import Profile from './Profile.jsx'
import Search from './Search.jsx';
/*import Settings from './Settings.jsx';
import QuickFind from './QuickFind.jsx';*/
 
// Header component - represents the header functions
export default class Headerbar extends Component {
  getProfileInfo() {
    return [
      { _id: 1, text: 'This is my profile name' },
      { _id: 2, text: 'These are my reccomendations' },
      { _id: 3, text: 'These are my most commonly used buttons' },
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

    this.handleSearchClick = this.handleSearchClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
 
 ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 //Getting Search Info
 componentDidMount(){ 
   
 }

  handleSearchClick(event) {
    this.setState({value: ''});
  }
 
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
    this.setState({value: 'Search'});
    console.log('Hello, youve submited');
  }
 
  render() {
    return (
     <header>
      <div className="searchbar" id="searchbar">
       <form onSubmit={this.handleSubmit}>
        <label>
         
          <input type="text" value={this.state.value} onClick={this.handleSearchClick} onChange={this.handleChange} />
        
        </label>
        <input type="submit" value="Insertsearchpic" />
       </form>
       <Search />
      </div>
       <ul>
          {this.renderProfileInfo()}
       </ul>
      </header>
        
    );
  }
}
