
let eventTypeExtractors = {
	"post": discoursePOSTEventExtractor,
	"topic": discourseTOPICEventExtractor,
}

function initializeOnIntegration({token, domainName, toolId, username}, done) {
	//registerNewGroup for the community
	//registerNewWebhook
	done(null, {message: 'not implemented'});
	return;
}

module.exports = {
	initializeOnIntegration,
	extractEventData
}