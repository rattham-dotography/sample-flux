'user restrict';

var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var dispatcher = require('./dispatcher');
var CHANGE_EVENT = 'CHANGE';
var products = [];

var SampleStore = assign({}, EventEmitter.prototype, {

  getAll: function() {
    return products;
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

});

//WAIT FOR ACTION
dispatcher.register(function(action) {
  switch(action.type) {
    case 'RECEIVED_DATA':
      products = action.data;
      console.log('DATA RECEIVED');
      SampleStore.emitChange();
      break;
  }
});


//Controller - View
SampleStore.addChangeListener(function() {
  console.log('PRODUCT LIST UPDATED');
});

//Controller - View
SampleStore.addChangeListener(function() {
  console.log('PRODUCT COUNT UPDATED');
});


//Action Creator
var receiveData = function(data) {
  dispatcher.dispatch({
    type: 'RECEIVED_DATA',
    data: data
  });
}

var raw_data = '[{"category":"Sporting Goods","price":"$49.99","stocked":true,"name":"Football"},{"category":"Sporting Goods","price":"$9.99","stocked":true,"name":"Baseball"},{"category":"Sporting Goods","price":"$29.99","stocked":false,"name":"Basketball"},{"category":"Electronics","price":"$99.99","stocked":true,"name":"iPod Touch"},{"category":"Electronics","price":"$399.99","stocked":false,"name":"iPhone 5"},{"category":"Electronics","price":"$199.99","stocked":true,"name":"Nexus 7"}]';
receiveData(JSON.parse(raw_data));



