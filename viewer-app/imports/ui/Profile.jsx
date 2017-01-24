import React, { Component, PropTypes } from 'react';
 
// Task component - represents a single todo item
export default class Profile extends Component {
  render() {
    return (
      <li>{this.props.pname.text}</li>
    );
  }
}
 
Profile.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required
  pname: PropTypes.object.isRequired,
};
