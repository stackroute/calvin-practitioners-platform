const request = require('superagent');

const BASE_TOOLS_SERVICE_URL = 'http://calvin-communities.blr.stackroute.in/api/v1';

function getTool(domain, done) {
  // console.log("i am at get tools", domain);
  // Call communities service to get all the templates
  const url = `${BASE_TOOLS_SERVICE_URL}/communitytools/${domain}/tools`;
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
  getTool,
};
