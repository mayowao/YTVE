import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
 
import Headerbar from '../imports/ui/Headerbar.jsx';
import MainView from '.../imports/ui/MainView.jsx';
import Footerbar from '.../imports/ui/Footerbar.jsx'; 
 
Meteor.startup(() => {
 render(<Headerbar />, document.getElementById('headerbar'));
 render(<MainView />, document.getElementById('mainview'));
 render(<Footerbar />, document.getElementById('footerbar'));
  
});
