const React = require('react');
const connect = require('react-redux').connect;

const StarRater = require('./star-rater.jsx');
const actions = require('./actions.js');

var Repository = React.createClass({
	componentDidMount: function() {
		this.props.dispatch(
			actions.fetchDescription(this.props.repository.name)
		);
	},
	changeRating: function(rating) {
		this.props.dispatch(
			actions.rateRepository(this.props.repository.name, rating)
		);
	},
	render: function() {
		return (
			<div className="repository">
				{this.props.repository.name} - {this.props.repository.description}
				<br />
				<StarRater rating={this.props.repository.rating} onChange={this.changeRating} />
				<br /><br />
			</div>
		);
	}
});

var Container = connect()(Repository);

module.exports = Container;