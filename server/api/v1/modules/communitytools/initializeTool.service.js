module.exports = function({domainName, toolId, username}, token, done) {
	let toolPath = path.resolve('../', 'toolproxies', toolId);
	let toolService = require(toolPath);
	toolService.initializeOnIntegration({token, domainName, toolId, username}, done);
}