const communityservice = require('./community.service');

const coreActivity = {
  community: [{
    value: 'Professional',
    viewValue: 'Professional',
    tool: 'Forum',
  }, {
    value: 'Travel',
    viewValue: 'Travel',
    tool: 'quora',
  }, {
    value: 'Arts',
    viewValue: 'Arts',
    tool: 'stackoverflow',
  }, {
    value: 'Technology',
    viewValue: 'Technology',
    tool: 'quora',
  }, {
    value: 'Business',
    viewValue: 'Business',
    tool: 'Forum',
  }, {
    value: 'Science',
    viewValue: 'Science',
    tool: 'quora',
  }, {
    value: 'Education',
    viewValue: 'Education',
    tool: 'quora',
  }],
};


function getcommunity(req, res) {
  res.status(200).json(coreActivity);
}

function getUserCommunity(req, res) {
  communityservice.getAllUserCommunities(req, res);
}

module.exports = {
  getUserCommunity,
  getcommunity,
};
