const request = require('superagent');

const BASE_COMMUNITY_SERVICE_URL = 'http://calvin-communities.blr.stackroute.in/api/v1';

function retrieveAllTools(domain, done) {
   // Call communities service to get all the templates
  // console.log(domain);
  const url = `${BASE_COMMUNITY_SERVICE_URL}/communitytools/${domain}/tools`;
  request
 .get(url)
 .query({ domain }) // query string
 .end((err, res) => {
   if (err) {
    // console.log('server.controller file');
     return done(err);
   }
  //  console.log('server.controller  success file');
  //  console.log(res.body);
   return done(null, res.body);
 });
}

// module.exports = {
//   retrieveAllTools,
//  };
// const BASE_TOOLS_SERVICE_URL = 'http://calvin-communities.blr.stackroute.in/api/v1';

function getTool(domain, done) {
  // console.log("i am at get tools", domain);
  // Call communities service to get all the templates
  const url = `${BASE_TOOLS_SERVICE_URL}/communitytools/${domain}/tools`;
  request
    .get(url)
    .query({ domain })
    .end((err, res) => {
      if (err) {
        return done(err);
      }
      return done(null, res.body);
    });
}

 // Call community tools service to post tools
function postTool(domain, data, done) {
  console.log('data is ',data);
  return communityToolService.integrateNewTool.bind(null, {domainName, toolId, username}, done);   

  // async.waterfall([
    // integrateToolWithCommunity.bind(null, domain, data),
  //   communityToolService.integrateNewTool.bind(null, {domainName, toolId, username})
  // ], (err, results) => {})

//   const url = `${BASE_COMMUNITY_SERVICE_URL}/communitytools/${domain}/tools`;
//   request
//  .post(url)
//  .send(data) // query string
//  .end((err, res) => {
//    if (err) {
//      console.log('error is ',err);
//      return done(err);
//    }
//    //return done(null, res.body);
   
//    return communityToolService.integrateNewTool.bind(null, {domainName, toolId, username}, done);   
//  });
}


module.exports = {
  retrieveAllTools,
  getTool,
  postTool,
};
