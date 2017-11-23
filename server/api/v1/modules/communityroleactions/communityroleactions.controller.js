const request = require('superagent');
const config = require('../../../../appconfig/env/dev');
const urlValue =config.BASE_COMMUNITY_SERVICE_URL;



function retrieveAllUsers(domain, done) {
   // Call communities service to get all the templates
  //console.log(domain);
  const url = `${urlValue}/communityrole/${domain}`;
  request
 .get(url)
 .query({ domain }) // query string
 .end((err, res) => {
   if (err) {
    // console.log('server.controller file');
     return done(err);
   }
   //console.log('server.controller  success file');

   return done(null, res.body);
 });
}
function retrieveAllRoles(domain, done) {
   // Call communities service to get all the templates
  //console.log(domain);
  const url = `${urlValue}/communityrole/${domain}?onlyroles=true`;
  request
 .get(url)
 .query({ domain }) // query string
 .end((err, res) => {
   if (err) {
     //console.log('server.controller file');
     return done(err);
   }
  //  console.log(res.body, 'sdvsdv');
  //  console.log('server.controller  success file');

   return done(null, res.body);
 });
}

function updateActions(domain, role, values, done) {
   // Call communities service to get all the templates
  const url = `${urlValue}/communityrole/${domain}/roles/${role}`;
  request
 .patch(url)
 .send(values) // query string
 .end((err, res) => {
   if (err) {
     return done(err);
   }
   return done(null, res.body);
 });
}


function updateRole(domain,values, done) {
   // Call communities service to get all the templates
  const url = `${urlValue}/communitymembership/${domain}/members`;
  request
 .patch(url)
 .send(values) // query string
 .end((err, res) => {
   if (err) {
     return done(err);
   }
   return done(null, res.body);
 });
}
function createRole(domain, values, done) {
   // Call communities service to get all the templates
  const url = `${urlValue}/communityrole/${domain}`;
  request
 .post(url)
 .send(values) // query string
 .end((err, res) => {
   if (err) {
     return done(err);
   }
   return done(null, res.body);
 });
}


module.exports = {
  retrieveAllUsers,
  retrieveAllRoles,
  updateActions,
  updateRole,
  createRole,
  updateRole,
};
