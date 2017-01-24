import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
 
import HeaderBar from '../imports/ui/HeaderBar.jsx';
 
Meteor.startup(() => {
  render(<HeaderBar />, document.getElementById('headerbar'));
});
