const sample = [{
    /* template for the surgeon -- medical community*/
  name: 'surgeon',
  purpose: 'medical',
  description: 'This template will provides you the required tools and roles to create a medical community',
  tags: ['medcare', 'doctor'],
    // tools available for the surgeon medical community
  tools: [{
    toolId: 'forum',
    actions: ['postmessage', 'read', 'Likemessage', 'edit', 'share'],
    activityEvents: ['newannouncement', 'like', 'remove'],
  }, {
    toolId: 'WeMedUp',
    actions: ['postmessage', 'read', 'Likemessage'],
    activityEvents: ['newannouncement', 'remove'],
  }, {
    toolId: 'sermo',
    actions: ['postmesage', 'read', 'Likemessage', 'edit'],
    activityEvents: ['like', 'remove'],
  }],
    // role actions for the surgeon medical community
  rolesActions: [{
    role: 'admin',
    toolsActions: [{
      toolId: 'sermo',
      actions: { edit: 'self', post: 'post_self' },
    }, {
      toolId: 'WeMedUp',
      actions: { bookmark: 'self', post: 'post_self' },
    }, {
      toolId: 'forum',
      actions: { edit: 'self', post: 'post_self' },
    }],
  }],
}];
function retrieveAllTools() {
  return sample;
}
module.exports = {
  retrieveAllTools,
};
