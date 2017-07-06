const communityservice = require('./community.service');

function getUserCommunity(req, res) {
  communityservice.getAllUserCommunities(req, res);
}

module.exports = {
  // getcommunity,
  getUserCommunity,
};
