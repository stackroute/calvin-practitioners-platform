const request = require('superagent');

const BASE_COMMUNITY_SERVICE_URL = 'http://calvin-communities.blr.stackroute.in/api/v1';



function getUserCommunity(member, done) {
   // Call specific community on the basis of domain
   console.log("value of memmebvr in server",member);
  const url = `${BASE_COMMUNITY_SERVICE_URL}/communities/${member}`;
  request
 .get(url)
 .query({ member }) // query string
 .end((err, res) => {
   if (err) {
     console.log("error in server for getting community",err);
     return done(err);
   }
   console.log("printing res body", res.body);
   return done(null, res.body);
 });
}


// post new community data
function postNewcommunityDetails(domainName, newCommunityObj, done) {
  const url = `${BASE_COMMUNITY_SERVICE_URL}/communities/${domainName}`;
  request
  .post(url)
  .send(newCommunityObj) // sends a JSON post body
  .end((err, res) => {
    if (err) {
      return done(err);
    }
    return done(null, res.body);
  });
}

module.exports = {
  getUserCommunity,
  postNewcommunityDetails,
};