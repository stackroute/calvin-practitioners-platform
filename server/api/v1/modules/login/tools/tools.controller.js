// const fs = require('fs');


const tools = {
  Tools:
  [
    {
      toolId: 'GitHub',
      actions: ['postmesage', 'read', 'Likemessage', 'edit', 'share'],
      activityEvents: ['newannouncement', 'like', 'remove'],
      domain: 'doctor.ny',
      photo: 'https://pbs.twimg.com/profile_images/735509975649378305/B81JwLT7.jpg',
    },
    {
      toolId: 'quora',
      actions: ['postmesage', 'read', 'Likemessage', 'edit', 'share'],
      activityEvents: ['newannouncement', 'like', 'remove'],
      domain: 'doctor.ny',
      photo: 'https://pbs.twimg.com/profile_images/735509975649378305/B81JwLT7.jpg',
    },
    {
      toolId: 'WeMedUp',
      actions: ['postmesage', 'read', 'Likemessage', 'edit', 'share'],
      activityEvents: ['newannouncement', 'like', 'remove'],
      domain: 'doctor.ny',
      photo: 'https://pbs.twimg.com/profile_images/735509975649378305/B81JwLT7.jpg',
    },
  ],
};
function getTool(tool, done) {
  return done(null, tools);
}

module.exports = {
  getTool,
};

