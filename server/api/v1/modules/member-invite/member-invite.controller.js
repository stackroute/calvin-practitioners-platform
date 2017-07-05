const request = require('superagent');

const BASE_COMMUNITY_SERVICE_URL = 'http://calvin-communities.blr.stackroute.in/api/v1';

function postMemberInvite(domain, callback) {
  const url = `${BASE_COMMUNITY_SERVICE_URL} /memberrequests/${domain}`;
  request.get(url)  
  .end((err, res) => {
    if (err) {
      return callback(err);
    }
    return callback(null, res.body);
  });
}

module.exports = {
  postMemberInvite,
};

