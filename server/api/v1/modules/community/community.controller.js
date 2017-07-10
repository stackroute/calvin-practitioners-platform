
// use superagent to call communities
const request = require('superagent');

const BASE_COMMUNITY_SERVICE_URL = 'http://calvin-communities.blr.stackroute.in/api/v1';

// const communityservice = require('./community.service');

// // Get Member community List
// function getUserCommunity(req, done) {
//   communityservice.getAllUserCommunities((err, res) =>{
//     if (err) {
//       return done(err);
//     }
//     return done(null, res);
//   });
// }

// Check whether Domain is Available or not getAvailableDomain
function getAvailableDomain(domainName, done) {
  const url = `${BASE_COMMUNITY_SERVICE_URL}/communities/${domainName}`;  
  request
  .get(url)
  .end((err, res) => {
    if(err) {
      return done(err);
    }
    return done(null, res.body)
  })
}

function getUserCommunity(member, done) {
   // Call specific community on the basis of domain
  const url = `${BASE_COMMUNITY_SERVICE_URL}/community/${member}`;
  request
 .get(url)
 .query({ member }) // query string
 .end((err, res) => {
   if (err) {
     return done(err);
   }
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
  getAvailableDomain,
};
