const redux = require('redux');
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const thunk = require('redux-thunk').default;


const reducers = require('./reducers.js');

const store = createStore(reducers.repositoryReducer, applyMiddleware(thunk));

module.exports = store;