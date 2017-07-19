const calendarService = require('./calendar.service');

function initializeOnIntegration({token, domainName, toolId, username}, done) {
      console.log('inside calander file');
calendarService.registerForPushNotification({token,username},
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