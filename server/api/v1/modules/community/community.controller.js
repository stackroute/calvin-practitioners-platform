const communityservice = require('./community.service');

const coreActivity = [{
  name: 'surgeon',
  purpose: 'medical',
  description: 'This template will provides you the required tools and roles to create a medical community',
  tags: ['medcare', 'doctor'],
  // tools available for the surgeon medical community
  tools: [{
    toolId: 'forum',
    actions: ['postmesage', 'read', 'Likemessage', 'edit', 'share'],
    activityEvents: ['newannouncement', 'like', 'remove'],
  }, {
    toolId: 'WeMedUp',
    actions: ['postmesage', 'read', 'Likemessage'],
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
}, { /* template for the specialists -- medical community*/
  name: 'specialists',
  purpose: 'medical',
  description: 'This template will provides you the required tools and roles to create a medical community',
  tags: ['medcare', 'doctor', 'therapy'],
  // tools available for the specialists medical community
  tools: [{
    toolId: 'forum',
    actions: ['postmesage', 'read', 'Likemessage', 'edit', 'share'],
    activityEvents: ['newannouncement', 'like', 'remove'],
  }, {
    toolId: 'WeMedUp',
    actions: ['postmesage', 'read', 'Likemessage'],
    activityEvents: ['newannouncement', 'remove'],
  }, {
    toolId: 'sermo',
    actions: ['postmesage', 'read', 'Likemessage', 'edit'],
    activityEvents: ['like', 'remove'],
  }],
  // role actions for the specialists community
  roleActions: [{
    role: 'member',
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
}, { /* template for the developer's -- technical community*/
  name: 'developer',
  purpose: 'technical',
  description: 'This template will provides you the required tools and roles to create a technical community',
  tags: ['IDE', 'platform'],
  // tools available for the developer's community
  tools: [{
    toolId: 'Stackoverflow',
    actions: ['postmesage', 'read', 'Likemessage', 'edit', 'share'],
    activityEvents: ['newannouncement', 'remove'],
  }, {
    toolId: 'Quora',
    actions: ['postmesage', 'read', 'Likemessage', 'comment', 'share', 'invitation'],
    activityEvents: ['like', 'remove'],
  }, {
    toolId: 'Github',
    actions: ['postmesage', 'read', 'Likemessage', 'edit', 'upload'],
    activityEvents: ['newannouncement', 'like'],
  }],
  // role actions for the developer's community
  roleActions: [{
    role: 'moderator',
    toolsActions: [{
      toolId: 'forum',
      actions: { edit: 'self', post: 'post_self' },
    }, {
      toolId: 'scholastic.com',
      actions: { bookmark: 'self', post: 'post_self' },
    }, {
      toolId: 'theteacherscorner.net',
      actions: { edit: 'self', post: 'post_self' },
    }],
  }],
}, { /* template for the professor -- teacher's community*/
  name: 'professor',
  purpose: 'Teaching',
  description: 'This template will provides you the required tools and roles to create a teachers community',
  tags: ['books', 'board', 'school'],
  // tools available for the teacher's community
  tools: [{
    toolId: 'theteacherscorner.net',
    actions: ['postmesage', 'read', 'Likemessage'],
    activityEvents: ['newannouncement', 'like', 'remove'],
  }, {
    toolId: 'scholastic.com',
    actions: ['postmesage', 'read', 'Likemessage', 'edit'],
    activityEvents: ['newannouncement', 'remove'],
  }],
  // role actions for the professor community
  roleActions: [{
    role: 'member',
    toolsActions: [{
      toolId: 'forum',
      actions: { edit: 'self', post: 'post_self' },
    }, {
      toolId: 'scholastic.com',
      actions: { bookmark: 'self', post: 'post_self' },
    }, {
      toolId: 'theteacherscorner.net',
      actions: { edit: 'self', post: 'post_self' },
    }],
  }],
}, { /* template for the artist -- arts community*/
  name: 'artist',
  purpose: 'arts',
  description: 'This template will provides you the required tools and roles to create arts community',
  tags: ['sketches', 'paper', 'paint'],
  // tools available for the artist's community
  tools: [{
    toolId: 'theabundantartist.com',
    actions: ['postmesage', 'read', 'Likemessage'],
    activityEvents: ['newannouncement', 'like', 'remove'],
  }, {
    toolId: 'www.creativebloq.com',
    actions: ['postmesage', 'read', 'Likemessage', 'edit', 'share', 'upload'],
    activityEvents: ['newannouncement', 'remove'],
  }],
  // role actions for the artist community
  rolesActions: [{
    role: 'admin',
    toolsActions: [{
      toolId: 'forum',
      actions: { edit: 'self', post: 'post_self' },
    }, {
      toolId: 'calender',
      actions: { bookmark: 'self', add_event: 'self' },
    }, {
      toolId: 'chat',
      actions: { edit: 'self', post: 'post_self' },
    }],
  }],
}];


function getcommunity(req, res) {
  res.status(200).json(coreActivity);
  return coreActivity;
}

function getUserCommunity(req, res) {
  res.send(communityservice.getAllUserCommunities(req, res));
}

module.exports = {
  getcommunity,
  getUserCommunity,
};
