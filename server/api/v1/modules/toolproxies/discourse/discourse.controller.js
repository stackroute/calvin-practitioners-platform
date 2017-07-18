
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
}

module.exports = {
	initializeOnIntegration,
	eventTypeExtractors,
    intializeWebhook
}