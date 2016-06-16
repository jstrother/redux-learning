const React = require('react');
const ReactDOM = require('react-dom');
const Provider = require('react-redux').Provider;

const store = require('./store.js');
const RepositoryList = require('./repository-list.jsx');

document.addEventListener('DOMContentLoaded', function() {
	ReactDOM.render(
		<Provider store={store}>
			<RepositoryList />
		</Provider>,
		document.getElementById('app')
	);
});