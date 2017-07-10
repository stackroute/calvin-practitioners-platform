
const userservice = require('./users.service');

function getUser(userinfo, done) {
  console.log('3.inside get user');
  userservice.updateUser(userinfo, done);
}

module.exports={
    getUser,
}