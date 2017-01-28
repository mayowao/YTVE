import { Meteor } from 'meteor/meteor';
import '../imports/api/youtubedata.js';
import { HTTP } from 'meteor/http';

var ytimport = HTTP.call("GET", "https://www.youtube.com/iframe_api");


Meteor.startup(() => {
  // code to run on server at startup
  console.log('Server side is working');
  
});
