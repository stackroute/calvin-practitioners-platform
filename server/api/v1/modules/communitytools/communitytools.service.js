const async = require('async');
const generatetooltoken = require('./generatetooltoken.service');
const initializeTool = require('./initializeTool.service');
const request= require('superagent');
const BASE_COMMUNITY_SERVICE_URL = 'http://calvin-communities.blr.stackroute.in/api/v1';
const jwt = require('jsonwebtoken');

function integrateNewTool({domainName, toolId, username}, done) {
	//Generate a new token for the community, tool
	//call tool's specific initializations service for the tool integration
	console.log('inside integrate tool');
	async.waterfall([
			generatetooltoken.bind(null, {domainName, toolId, username}),
			initializeTool.bind(null, {domainName, toolId, username})
		], (err, results) => {
		if(err) {
			console.log("Error in integration tool workflow ", err);
			done(err);
			return;
		}
		return done(null, results);
	});
}


function integrateToolinCommunity(toolid,domain,done){
	console.log("tooldata inside service",toolid);
     const url=`${BASE_COMMUNITY_SERVICE_URL}/api/v1/events/${toolid}/${domain}`;
	 request
 .post(url)
 .send(data) // query string
 .end((err, res) => {
    if (err) {
      console.log('error is ',err);
     return done(err);
    }
    return done(null, res.body);
  });
// console.log('inisde integarte community');
//   const token= jwt.sign(tooldata,'secret',{ expiresIn: 60*500 },(err,result)=>{
//         if(err)
// 		{
// 			   return done(err,'token');
// 		}
// 	   else 	return done(null,token);
//   });
  
}
    
module.exports = {
	integrateNewTool,
	integrateToolinCommunity
}