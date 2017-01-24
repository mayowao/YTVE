import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
 
import Header from '../imports/ui/Header.jsx';
import MainView from '.../imports/ui/MainView.jsx;
import Footer from '.../imports/ui/Footer.jsx; 
 
Meteor.startup(() => {
 render(<Header />, document.getElementById('header'));
 render(<MainView />, document.getElementById('mainview'));
 render(<Footer />, document.getElementById('footer'));
 
});
