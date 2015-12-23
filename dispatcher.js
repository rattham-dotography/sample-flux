'user strict';
var Dispatcher = require('flux').Dispatcher;

var dispatcher = new Dispatcher();

/*
//Register The Callback -- Store
dispatcher.register(function(action){
  console.log(' ');
  console.log('CALLBACK1', action);
  console.log(' ');
});

dispatcher.register(function(action){
  console.log(' ');
  console.log('CALLBACK2', action);
  console.log(' ');
});

//Dispatch Action to store  -- Action creator
dispatcher.dispatch({
  type: 'DISPATCH_DATA',
  id: 1,
  text: "Hello, world"
});
*/

module.exports = dispatcher;
