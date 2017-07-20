let lodash = require('lodash');
let transformDiscourseEvent = require('./transformDiscourseEvent');

const postMappingConfig = {
	username: "post.username",
	useravatar: "",
	displayName: "post.display_username",
	createdOn: "post.created_at",
	topicId: "post.topic_id",
	topicSlug: "post.topic_slug",
	topicTitle: "post.topic_title",
	message: "post.cooked",
	groupName: "post.primary_group_name"
}

const topicMappingConfig = {
	username: "topic.details.created_by.username",
	useravatar: "",
	displayName: "topic.details.created_by.username",
	createdOn: "topic.created_at",
	topicId: "topic.id",
	topicSlug: "topic.slug",
	topicTitle: "topic.title",
	message: "topic.fancy_title",
	groupName: "topic.details.participants.primary_group_name",
}


function extractEventData(eventPayload, { domainName, toolId, username }, done) {
	// console.log('4.inside extract event data');
	let eventData = {};

	const DCMapping = {
		post: postMappingConfig,
		topic: topicMappingConfig

	};
	// const CALMapping = {
	// 	create: createMappingConfig,
	// 	event: eventMappingConfig
	// };

	//Based on the toolId, and eventType, pickup the mapping config
	//Transform to expected eventData

	let eventType;
	let MappedObj;
	let requireMapping;

	switch (toolId) {

		case 'discourse':
			eventType = Object.keys(eventPayload)[0];
			MappedObj = DCMapping;
			let unifiedEventData = convertData(eventPayload, MappedObj[eventType])
			let convertedData = transformDiscourseEvent(eventPayload, unifiedEventData, { domainName, toolId, username })
			done(null, convertedData);
			break;
	}

	// console.log(eventType);
	requireMapping = MappedObj[eventType];
	done(null, convertData(eventPayload, requireMapping));

	return;
}

function convertData(eventPayload, mappingConfig) {
   // console.log('5.inside convert data');
	let convertedData = {};

	Object.keys(mappingConfig).forEach((fieldKey) => {
		if(mappingConfig[fieldKey])
			convertedData[fieldKey] = lodash.get(eventPayload, mappingConfig[fieldKey]);
	});

	// console.log("POST data ", convertedData);
	return convertedData;
}

module.exports = {

	extractEventData
}