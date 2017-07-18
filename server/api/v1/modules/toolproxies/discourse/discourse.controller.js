const async = require('async');
const discourseService = require('./discourse.service');

<<<<<<< HEAD
const registerGroup = require('./newgroup');
const registerWebhook = require('./registerWebhook');

function initializeOnIntegration(groupDetails, done) {
	//register Group for the community
    registerGroup.createGroup(groupDetails, (err, res)=>{
        if (err) {
            return done(err);
        }
        done(null, res);
    });    
}

function intializeWebhook(webhookDetails, done) {
    // register webhook for the community {token, domainName, toolId, username}
	registerWebhook.generateWebhook(webhookDetails, (err, res)=>{
        if (err) {
            return done(err);
        }
        done(null, res);
    });
};

let eventTypeExtractors = {
	// "post": discoursePOSTEventExtractor,
	// "topic": discourseTOPICEventExtractor,
=======
function initializeOnIntegration({token, domainName, toolId, username}, done) {
    async.waterfall([
        discourseService.generateGroup.bind(null, {token, domainName, toolId, username}),
        discourseService.generateWebhook.bind(null, {token, domainName, toolId, username}),
    ],(err, results) => {
		if(err) {
			console.log("Error occurs in creating group and webhook for the community", err);
			return done(err);
		}
        console.log('after waterfall', results);
		return done(null, results);
    });
>>>>>>> b0099e23b3acdcdff0a0b6a5535b6b7fd9c57659
}

module.exports = {
	initializeOnIntegration,
<<<<<<< HEAD
	eventTypeExtractors,
    intializeWebhook
=======
>>>>>>> b0099e23b3acdcdff0a0b6a5535b6b7fd9c57659
}