var request = require('superagent');
const BASE_MEMBERS_SERVICE_URL = 'http://calvin-communities.blr.stackroute.in/api/v1';
const Membersservice = require('./members.service');
function getMembers(domain, done) {
  
    // Call communities service to get all the templates
  const url = `${BASE_MEMBERS_SERVICE_URL}/communitymembership/${domain}/members`;
  request
  .get(url)
  .end((err, res) => {
    if (err) {
      return done(err);
    }
    return done(null, res.body);
  });
}
module.exports = {
  getMembers,
};

