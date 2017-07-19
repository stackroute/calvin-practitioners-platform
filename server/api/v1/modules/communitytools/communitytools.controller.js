const request = require('superagent');
const communityToolService = require('./communitytools.service');
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



  console.log('inside posting toollllllll', data);
  const username = data.username;
  const toolId = data.toolid;
  const domainName = domain;
  const event = data.events;
  console.log('data is ' + username + toolId + domainName + '' + data.events);


  communityToolService.integrateToolinCommunity(data, (err, result) => {
    if (err) {
      console.log('inisde tools',err);
      return done(err, ' unable to post dtaa in community');
    }
      console.log('result is ',result);
    communityToolService.integrateNewTool({ domainName, toolId, username }, (err, result) => {

      if (err) {
        console.log('hi inside integrate new tool error is ',err);
        return done(err, ' error in tool initialization');
      }
      return done(null, 'Tool Success');
    });

  });

  // async.waterfall([
  //   communityToolService.integrateToolinCommunity.bind(null, data),
  //   communityToolService.integrateNewTool.bind(null, { domainName, toolId, username })
  // ], (err, result) => {

  //   if (err) {

  //     return done(err, 'Internal server error');
  //   }

  // communityToolService.integrateNewTool({domainName, toolId, username},done);

 // return communityToolService.integrateNewTool.bind(null, {domainName, toolId, username}, done);
      
//   console.log('data is ',data);
//   const url = `${BASE_COMMUNITY_SERVICE_URL}/communitytools/${domain}/tools`;
//   request
//  .post(url)
//  .send(data) // query string
//  .end((err, res) => {
//    if (err) {
//      console.log('error is ',err);
//      return done(err);
//    }
//    return done(null, res.body);
//  });
  
  //   done(null, 'sucess');
  // });


  // communityToolService.integrateNewTool({ domainName, toolId, username }, done);

  // return communityToolService.integrateNewTool.bind(null, {domainName, toolId, username}, done);

  //   console.log('data is ',data);
  //   const url = `${BASE_COMMUNITY_SERVICE_URL}/communitytools/${domain}/tools`;
  //   request
  //  .post(url)
  //  .send(data) // query string
  //  .end((err, res) => {
  //    if (err) {
  //      console.log('error is ',err);
  //      return done(err);
  //    }
  //    return done(null, res.body);
  //  });


}
function postToolInfo(domain,data,done){

          communityToolService.addToolinCommunity(domain,data,done); 
}

module.exports = {
  retrieveAllTools,
  getTool,
  postTool,
};