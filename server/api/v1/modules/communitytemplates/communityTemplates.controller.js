const request = require('superagent');

const config = require('../../../../appconfig/env/dev');
const urlValue =config.BASE_COMMUNITY_SERVICE_URL;

function getAllCommunityTemplates(purpose, done) {
    // Call communities service to get all the templates
  const url = `${urlValue}/communitytemplates`;
  request
  .get(url)
  .query({ purpose }) // query string
  .end((err, res) => {
    if (err) {
      return done(err);
    }
       console.log(res.body);
    return done(null, res.body);
 
  });
}

module.exports = {
  getAllCommunityTemplates,
};
