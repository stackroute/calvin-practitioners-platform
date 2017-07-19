const async = require('async');
const calendarService = require('./calendar.service');

const toolauthservice = require('../../toolauth/toolauth.service');

function initializeOnIntegration({token, domainName, toolId, username}, done) {
      console.log('inside calander file');

        async.waterfall([
			toolauthservice.getToolTokenFromDB.bind(null,{toolId,userName}),
			calendarService.registerForPushNotification.bind(null,{token,username})
		],(err,result)=>{

			if(err) {
			console.log("Error  in Registring Calendar of  the community", err);
			return done(err);
		}
        console.log('after waterfall', results);
		return done(null, results);
    });
		


// calendarService.registerForPushNotification({token,username},
//     (err, results) => {
// 		if(err) {
// 			console.log("Error  in Registring Calendar of  the community", err);
// 			return done(err);
// 		}
//         console.log('after waterfall', results);
// 		return done(null, results);
//     });
}

module.exports = {
	initializeOnIntegration,
}