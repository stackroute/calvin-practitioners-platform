function initializeOnIntegration({token, domainName, toolId, username}, done) {
	//registerNewGroup for the community
	//registerNewWebhook
	done(null, {message: 'not implemented'});
	return;
}

function exactEventData({eventPayload}, done) {
	done(null, {message: 'not implemented'});
	return;
}

module.exports = {
	initializeOnIntegration,
	exactEventData
}