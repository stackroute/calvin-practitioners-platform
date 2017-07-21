const uuidv4 = require('uuid/v4');

module.exports = function(eventPayload, unifiedEventData, { domainName, toolId, username }) {

  let eventType = Object.keys(eventPayload)[0];

  let activityType = { 'post': 'Add', 'topic': 'Create' }[eventType];
  let objectType = { 'post': 'Article', 'topic': 'Article' }[eventType];

  let eventMessage = {
    "@context": 'https://www.w3.org/ns/activitystreams',
    id: uuidv4(),
    type: activityType,
    name: (unifiedEventData.topicTitle || unifiedEventData.topicSlug),
    actor: {
      type: 'Link',
      name: unifiedEventData.username,
      href: '',
      mediaType: 'image/svg+xml'
    },
    object: {
      type: objectType,
      name: (unifiedEventData.topicTitle || unifiedEventData.topicSlug),
      href: '',
      mediaType: 'image/svg+xml'
    },
    target: {
      type: 'Group',
      name: domainName,
      content: unifiedEventData.message,
      url: `http://calvin-pages.stackroute.in/#/app/communityDashboard/${domainName}`
    },
    context: {
      type: 'Link',
      name: toolId,
      href: 'http://discourse.calvin.stackroute.in/',
      mediaType: 'image/svg+xml'
    }
  }
  console.log("Converted tool event message ", JSON.stringify(eventMessage));
  return eventMessage;
}
