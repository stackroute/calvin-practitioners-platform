function initializeOnIntegration({token, domainName, toolId, username}, done) {
	//registerNewGroup for the community
	//registerNewWebhook
	done(null, {message: 'not implemented'});
}

function exactEventData({eventPayload}, done) {
	done(null, {message: 'not implemented'});
}

module.exports = {
	initializeOnIntegration,
	exactEventData
}