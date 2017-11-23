const jwt = require('jsonwebtoken');
const config = require('../../../../appconfig/env/dev');

module.exports = function({domainName, toolId, username,communityToolToken}, done) {
  console.log('inside generate tool token');
  let payload = { domainName, toolId, username ,communityToolToken};
// module.exports = function({domainName, toolId, username}, done) {
//   // console.log('inside generate tool token');
//   let payload = { domainName, toolId, username };
  let secret = config.toolToken.secret;
  let options = {
    expiresIn: config.toolToken.expiryTime,
    issuer: 'calvin-pages'
  };

  jwt.sign(payload,
    secret,
    options,
    (err, token) => {
      if (err) {
        // console.log("Error in generating token for tool integration: ", err);
        done(err);
        return;
      }

      // console.log('result ius ', token);
      done(null, token);
    });
}
