const sample = [{
    /* template for the surgeon -- medical community*/
  name: 'surgeon',
  purpose: 'medical',
  description: 'This template will provides you the required tools and roles to create a medical community',
  tags: ['medcare', 'doctor'],
    // tools available for the surgeon medical community
  tools: [{
    toolId: 'forum',
    actions: ["postmessage","read","LikeMessage","edit","share"],
    activityEvents: ['newannouncement', 'like', 'remove'],
  }, {
    toolId: 'WeMedUp',
    actions: ["postmessage","read","Likemessage"],
    activityEvents: ['newannouncement', 'remove'],
  }, {
    toolId: 'sermo',
    actions: ["postmessage","read","edit"],
    activityEvents: ['like', 'remove'],
  }],
    // role actions for the surgeon medical community
  rolesActions: [{
    role: 'admin',
    toolsActions: [{
      toolId: 'sermo',
      actions: { edit: 'true', post: 'true' },
    }, {
      toolId: 'WeMedUp',
      actions: { bookmark: 'true', post: 'true' },
    }, {
      toolId: 'forum',
      actions: { edit: 'true', post: 'true' },
    }],
  }],
}];
function retrieveAllTools(domain) {
  if (sample[0].purpose==domain)
       return sample;
  
}
module.exports = {
  retrieveAllTools,
};
