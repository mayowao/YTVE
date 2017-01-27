//import { Mongo } from 'meteor/mongo';
//import React, { Component } from 'react';
 
//export const Iframe = new Mongo.Collection('iframe');

export default class Iframe {
      // 2. This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

}

