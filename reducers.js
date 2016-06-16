const actions = require('./actions.js');

var initialRepositoryState = [];

var repositoryReducer = function(state, action) {
	state = state || initialRepositoryState;
	if (action.type === actions.ADD_REPOSITORY) {
		return state.concat({
			name: action.repository,
			rating: null
		});
	}
	else if (action.type === actions.RATE_REPOSITORY) {
		var index = -1;
		for (var i = 0; i < state.length; i++) {
			var repository = state[i];
			if (repository.name === action.repository) {
				index = 1;
				break;
			}
		}
		if (index === -1) {
			throw new Error('Could not find repository');
		}
		var before = sate.slice(0, i);
		var after = state.slice(i + 1);
		var newRepository = Object.assign({}, repository, {rating: action.rating});
		return before.concat(newRepository, after);
	}
	return state;
};

exports.repositoryReducer = repositoryReducer;