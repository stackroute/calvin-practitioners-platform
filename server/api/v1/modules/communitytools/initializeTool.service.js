const path = require('path');

module.exports = function({domainName, toolId, username}, token, done) {
	let toolPath = path.resolve(__dirname, '../', 'toolproxies', toolId);
	// console.log("Trying to initilise tool from ", toolPath);

	let toolService = require(toolPath);
	toolService.initializeOnIntegration({token, domainName, toolId, username}, done);
}