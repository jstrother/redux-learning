const React = require('react');
const connect = require('react-redux').connect;

const Repository = require('./repository.jsx');
const actions = require('./actions.js');

var RepositoryList = React.createClass({
	addRepository: function() {
		var repositoryName = this.refs.repositoryName.value;
		this.props.dispatch(actions.addRepository(repositoryName));
	},
	render: function() {
		var repositories = this.props.repositories.map(function(repository) {
			return <Repository repository={repository} key={repository.name} />;
		});
		return (
			<div className="repository-list">
				{repositories}
				<input type="text" ref="repositoryName" />
				<button type="button" onClick={this.addRepository}>
					Add repository
				</button>
			</div>
		);
	}
});

var mapStateToProps = function(state, props) {
	return {
		repositories: state
	};
};

var Conatainer = connect(mapStateToProps)(RepositoryList);

module.exports = Conatainer;