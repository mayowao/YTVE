var require = meteorInstall({"server":{"main.js":["meteor/meteor",function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////
//                                                                          //
// server/main.js                                                           //
//                                                                          //
//////////////////////////////////////////////////////////////////////////////
                                                                            //
var Meteor;module.import('meteor/meteor',{"Meteor":function(v){Meteor=v}});
                                                                            //
Meteor.startup(function () {                                                // 3
  // code to run on server at startup                                       // 4
  console.log('Server side is working');                                    // 5
});                                                                         // 6
//////////////////////////////////////////////////////////////////////////////

}]}},{"extensions":[".js",".json",".jsx"]});
require("./server/main.js");
//# sourceMappingURL=app.js.map
