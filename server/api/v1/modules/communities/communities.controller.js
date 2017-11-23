
const request = require('superagent');

const config = require('../../../../appconfig/env/dev');
const urlValue =config.BASE_COMMUNITY_SERVICE_URL;

 // Call specific community on the basis of domain
function getSpecificCommunity(domain,counter, done) {
  const url = `${urlValue}/communities/${domain}?counter=${counter}`;
  console.log("checking for counter in controoler");
  // console.log("testing counter",res.body);

  request
 .get(url)
 .query({ domain}) // query string
 .end((err, res) => {
   if (err) {
      // console.log("checking for counter in controller",err);
     return done(err);
   }

   return done(null, res.body);
 });
}

 // Call communities service to update specific community according to domain
function updateSpecificCommunity(domain, form, done) {
  
  const url = `${urlValue}/communities/${domain}`;
console.log('url',url);
  request
 .patch(url)
 .send(form) // query string
 .end((err, res) => {
   if (err) {
     return done(err);
   }
   return done(null, res.body);
 });
}


function getUserCommunity(member, done) {
   // Call specific user communities on the basis of username
  console.log('value of memmebvr in server', member);
  const url = `${urlValue}/membership/${member}`;
  request
 .get(url)
 .query({ member }) // query string
 .end((err, res) => {
   if (err) {
     console.log('error in server for getting community', err);
     return done(err);
   }
   console.log('printing res body', res.body);
   return done(null, res.body);
 });
}


// post new community data
function postNewcommunityDetails(domainName, newCommunityObj, done) {
  const url = `${urlValue}/communities/${domainName}`;

  console.log("Requesting for community creation to ", url, " for community ", newCommunityObj);

  request
  .post(url)
  .send(newCommunityObj) // sends a JSON post body
  .end((err, res) => {
    if (err) {
     console.log('Error in creating new community ',err);
    return done(err);
    }
    return done(null, res.body);
  });
}


function GetCommunity(done) {
  // console.log('inside get community');
  return done(null, content);
}


module.exports = {
  getUserCommunity,
  postNewcommunityDetails,
  getSpecificCommunity,
  updateSpecificCommunity,
  GetCommunity,
};

