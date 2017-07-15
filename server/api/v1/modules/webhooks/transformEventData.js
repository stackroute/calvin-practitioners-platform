let lodash = require('lodash');



function extractEventData(eventPayload, { domainName, toolId, username }, done) {
	let eventData = {};

	const DCMapping = {
		post: postMappingConfig,
		topic: topicMappingConfig

	};
	const CALMapping = {
		create: createMappingConfig,
		event: eventMappingConfig
	};

	//Based on the toolId, and eventType, pickup the mapping config
	//Transform to expected eventData

	let eventType;
	let MappedObj;
	let requireMapping;

	switch (toolId) {

		case 'discourse':
			eventType = Object.keys(eventPayload)[0];
			MappedObj = DCMapping;
			break;
	}
	
	console.log(eventType);
	requireMapping = MappedObj[eventType];
	done(null, convertData(eventObj, requireMapping));

	return;
}

function convertData(eventPayload, mappingConfig) {

	let convertedData = {};

	Object.keys(mappingConfig).forEach((fieldKey) => {
		convertedData[fieldKey] = lodash.get(dataObj, mappingConfig[fieldKey]);
	});

	console.log("POST data ", convertedData);
	return convertedData;
}

module.exports = {

	extractEventData
}