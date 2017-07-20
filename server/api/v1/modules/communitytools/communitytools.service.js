const async = require('async');
const config = require('../../../../appconfig/env/dev');
const generatetooltoken = require('./generatetooltoken.service');
const initializeTool = require('./initializeTool.service');
const request= require('superagent');
const urlValue = config.BASE_COMMUNITY_SERVICE_URL;
const jwt = require('jsonwebtoken');


function integrateNewTool({domainName, toolId, username},communityToolToken, done) {
	//Generate a new token for the community, tool

	//call tool's specific initializations service for the tool integration
	console.log('inside integrate tool ', {domainName, toolId, username});
	async.waterfall([
		generatetooltoken.bind(null, { domainName, toolId, username ,communityToolToken}),
		initializeTool.bind(null, { domainName, toolId, username })
	], (err, results) => {
		if (err) {
			console.log("Error in integration tool workflow ", err);
			done(err);
			return;
		}
		return done(null, results);
	});
}


function integrateToolinCommunity(domain,toolid,data,done){
	console.log("tooldata inside service",domain," toolid  ",toolid," dtsa",data);

	console.log("tooldata inside service",domain);
     const url=`${urlValue}/communitytools/${domain}/tools/${toolid}`;
	 console.log("url in community",url);
	 request
 .post(url)
 .send(data) // query string
 .end((err, res) => {
    if (err) {
     console.log('Got error in Integrate tool with community',err);
     return done(err);
    }
    //console.log('successfully integrated with result',res.body);
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
// console.log('inisde integarte community');
//   const token= jwt.sign(data,'secret',{ expiresIn: 60*500 },(err,result)=>{
//         if(err)
// 		{
// 			   return done(err,'token');
// 		}
// 	   else 	return done(null,token);
//   });
  
//------------------------------------------
// function integrateToolinCommunity(toolid, domain, done) {
// 	console.log("tooldata inside service", toolid);
// 	const url = `${BASE_COMMUNITY_SERVICE_URL}/api/v1/events/${toolid}/${domain}`;
// 	request
// 		.post(url)
// 		.send(data) // query string
// 		.end((err, res) => {
// 			if (err) {
// 				console.log('error is ', err);
// 				return done(err);
// 			}
// 			return done(null, res.body);
// 		});
	// console.log('inisde integarte community');
	//   const token= jwt.sign(tooldata,'secret',{ expiresIn: 60*500 },(err,result)=>{
	//         if(err)
	// 		{
	// 			   return done(err,'token');
	// 		}
	// 	   else 	return done(null,token);
	//   });


//}
////===============================
}
module.exports = {
	integrateNewTool,
	integrateToolinCommunity
}


