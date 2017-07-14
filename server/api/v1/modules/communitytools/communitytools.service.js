const async = require('async');
const generatetooltoken = require('./generatetooltoken.service');
const initializeTool = require('./initializeTool.service');

function integrateNewTool({domainName, toolId, username}, done) {
	//Generate a new token for the community, tool
	//call tool's specific initializations service for the tool integration
	async.waterfall([], (err, results) => {
		generatetooltoken.bind(null, {domainName, toolId, username}),
		initializeTool.bind(null, {domainName, toolId, username})
	}, (err, result) => {
		if(err) {
			console.log("Error in integration tool workflow ", err);
			done(err);
			return;
		}
		console.log("done integration of tool ", {domainName, toolId, username}, " with results: ". results);
		done(null, result);
	})
}

module.exports = {
	integrateNewTool
}