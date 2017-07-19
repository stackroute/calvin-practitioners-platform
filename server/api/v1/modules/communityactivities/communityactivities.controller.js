const request = require('superagent');
const config = require('../../../../appconfig/env/dev');

 const urlValue=config.BASE_ACTIVITY_SERVICE_URL;
  const authToken=config.authToken;

function getMemberActivities(userName, done) {
 
  const url = `${urlValue}/adapter/getallactivities/user/${userName}`;
  request
    .get(url)
    .set({
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + authToken
    })
    .query({ userName })
    .end((err, res) => {
      if (err) {
        return done(err);
      }
      return done(null, res.body);
    });
}

function getDomainActivities(domainName, done) {
  const url = `${urlValue}/adapter/getallactivities/domain/${domainName}`;
  request
    .get(url)
    .set({
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + authToken
    })
    .query({ domainName })
    .end((err, res) => {
      if (err) {
        return done(err);
      }
      return done(null, res.body);
    });
}

module.exports = {
  getMemberActivities,
  getDomainActivities,
};
