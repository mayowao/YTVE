import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
 
import Headerbar from '../imports/ui/Headerbar.jsx';
import Mainview from '../imports/ui/Mainview.jsx';
 
Meteor.startup(() => {
 render(
  <div className="app">
    <Headerbar />, document.getElementById('headerbar')
  </div>
 );
});
