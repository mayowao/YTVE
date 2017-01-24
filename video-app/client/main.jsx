import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
 
import Heading from '../imports/ui/Heading.jsx';
import MainView from '.../imports/ui/MainView.jsx';
import Footer from '.../imports/ui/Footer.jsx'; 
 
Meteor.startup(() => {
 render(<Heading />, document.getElementById('heading'));
 render(<MainView />, document.getElementById('mainview'));
 render(<Footer />, document.getElementById('footer'));
 
});
