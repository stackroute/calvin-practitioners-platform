const request = require('superagent');
const async = require('async');
const communityToolService = require('./communitytools.service');
const config = require('../../../../appconfig/env/dev');
const urlValue =config.BASE_COMMUNITY_SERVICE_URL;

function retrieveAllTools(domain, done) {
  // Call communities service to get all the templates
 console.log(urlValue);
 // const url = `${urlValue}/communitytools/${domain}/tools`;
  const url = `${urlValue}/communitytools/${domain}/tools`;
  
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

// function getTool(domain, done) {
//   // console.log("i am at get tools", domain);
//   // Call communities service to get all the templates
//   const url = `${urlValue}/communitytools/${domain}/tools`;
//   request
//     .get(url)
//     .query({ domain })
//     .end((err, res) => {
//       if (err) {
//         return done(err);
//       }
//       return done(null, res.body);
//     });
// }

// // Call community tools service to post tools
// function postTool(domain, data, done) {




//   console.log('inside posting toollllllll', data);
//   const username = data.username;
//   const toolId = data.toolid;
//   //const domainName = domain;
//   const domainName = 'wave33';
//   const event = data.events;
//   console.log('data is ' + username + toolId + domainName + '' + data.events);


//   communityToolService.integrateNewTool({ domainName, toolId, username }, (err, result) => {
//       if (err) {
//         console.log('hi inside integrate new tool error is ', err);
//         return done(err, ' error in tool initialization');
//       }
//       return done(null, 'Tool Success');
//     });


//   communityToolService.integrateToolinCommunity(data, (err, result) => {
//     if (err) {
//       console.log('inisde tools', err);
//       return done(err, ' unable to post dtaa in community');
//     }
//     console.log('result is ', result);
    
//     communityToolService.integrateNewTool({ domainName, toolId, username }, (err, result) => {

//       if (err) {
//         console.log('hi inside integrate new tool error is ', err);
//         return done(err, ' error in tool initialization');
//       }
//       return done(null, 'Tool Success');
//     });

//   });
// }

function postToolInfo(domain,toolid,data,done){
  
  console.log('** waterfall about to call');

  async.waterfall([
    communityToolService.integrateToolinCommunity.bind(null, domain, toolid, data),
    communityToolService.integrateNewTool.bind(null, {domainName: domain, toolId: toolid, username: data.username})
  ], (err, result) => {
    if (err) {
      console.log("Error occurred in postToolInfo ", err);
      return done(err, 'Internal server error');
    }
    return done(null,'Sucess');
  });

          //  console.log('inside post toolinfo');
          // // communityToolService.addToolinCommunity(domain,data,done); 
          // communityToolService.integrateToolinCommunity(domain,toolid,data,done);
}

    // console.log("Now posting tool ", data, " for domain ", domain);
    // communityToolService.integrateNewTool({domainName: domain, toolId: data.toolid, username: data.username},done);
    // communityToolService.integrateToolinCommunity(domain,data,done); 

module.exports = {
  retrieveAllTools,

  //getTool,
  // postTool,

  //postTool,

  postToolInfo
};