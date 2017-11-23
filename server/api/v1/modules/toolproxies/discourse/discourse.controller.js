const async = require('async');
const discourseService = require('./discourse.service');

function initializeOnIntegration({token, domainName, toolId, username}, done) {
    async.waterfall([
        discourseService.generateGroup.bind(null, {token, domainName, toolId, username}),
        discourseService.generateWebhook.bind(null, {token, domainName, toolId, username}),
    ],(err, results) => {
		if(err) {
			// console.log("Error occurs in creating group and webhook for the community", err);
			return done(err);
		}
        // console.log('after waterfall', results);
		return done(null, results);
    });
}

module.exports = {
	initializeOnIntegration,
}
