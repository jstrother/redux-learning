const redux = require('redux');
const createStore = redux.createStore;

const reducers = require('./reducers.js');

const store = createStore(reducers.repositoryReducer);

module.exports = store;