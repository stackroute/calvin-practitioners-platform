const request = require('superagent');
const BASE_COMMUNITY_SERVICE_URL = 'http://calvin-communities.blr.stackroute.in/api/v1';


function memberInvitation(domain, type, inviteBody, done){
const url = `${BASE_COMMUNITY_SERVICE_URL}/memberrequests/${domain}/type/${type}`;
  request
  .post(url)
  .send(inviteBody)
  .end((err, res) => {
    if (err) {
      return done(err);
    }
    return done(null, res.body);
  });
}
 

module.exports = {
    memberInvitation,
}