const request = require('superagent');

const BASE_COMMUNITY_SERVICE_URL = 'http://calvin-communities.blr.stackroute.in/api/v1';

function getRole(domain, callback) {
    // Call communities service to get all the templates
  const url = `${BASE_COMMUNITY_SERVICE_URL}/communityrole/${domainName}?onlyroles=true`;
  request.get(url)  
  .end((err, res) => {
    if (err) {
    //   console.log('Error in API to get community templates, error: ', err);
      return callback(err);
    }
    return callback(null, res.body);
  });
}

module.exports = {
  getRole,
};
