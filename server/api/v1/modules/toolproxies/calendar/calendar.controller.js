const async = require('async');
const calendarService = require('./calendar.service');

function initializeOnIntegration({token, domainName, toolId, username}, done) {
    
calendarService.registerForPushNotification.bind(null, {token, domainName, toolId, username}),
    (err, results) => {
		if(err) {
			console.log("Error  in Registring Calendar of  the community", err);
			return done(err);
		}
        console.log('after waterfall', results);
		return done(null, results);
    });
}

module.exports = {
	initializeOnIntegration,
}