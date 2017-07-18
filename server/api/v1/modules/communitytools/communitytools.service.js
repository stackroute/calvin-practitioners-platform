const async = require('async');
const generatetooltoken = require('./generatetooltoken.service');
const initializeTool = require('./initializeTool.service');

function integrateNewTool({domainName, toolId, username}, done) {
	//Generate a new token for the community, tool
	//call tool's specific initializations service for the tool integration
	console.log('inside integrate tool');
	async.waterfall([
			generatetooltoken.bind(null, {domainName, toolId, username}),
			initializeTool.bind(null, {domainName, toolId, username})
		], (err, results) => {
		if(err) {
			console.log("Error in integration tool workflow ", err);
			done(err);
			return;
		}
		return done(null, results);
	});
}

module.exports = {
	integrateNewTool
}