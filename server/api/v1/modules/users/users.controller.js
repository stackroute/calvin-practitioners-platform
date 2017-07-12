const userservice = require('./users.service');

function getUser(userinfo, done) {
  console.log('3.inside get user');
  userservice.updateUser(userinfo, (cookie) => {
    console.log('result cookie is : ', cookie);
    userservice.getUserCommunities(userinfo.username, done);
  });
}

module.exports = {
  getUser,
};
