const path = require('path');

module.exports = function({domainName, toolId, username}, token, done) {
	console.log("Now initilising tool with token", token);
	let toolPath = path.resolve(__dirname, '../', 'toolproxies', toolId);
	// console.log("Trying to initilise tool from ", toolPath);  
	try {
		let toolService = require(toolPath);
		toolService.initializeOnIntegration({token, domainName, toolId, username}, done);
	} catch (err) {
		// console.log("Error in initializing tool ", err);
		done(null, {error: "Error loading tool services..!"});
	}
}