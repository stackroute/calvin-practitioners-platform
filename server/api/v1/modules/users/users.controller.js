const userservice = require('./users.service');

function getUser(userinfo, done) {
  userservice.updateUser(userinfo, (cookie) => {
    userservice.getUserCommunities(userinfo.username, done);
  });
}

module.exports = {
  getUser,
};
