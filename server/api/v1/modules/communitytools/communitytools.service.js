const async = require('async');
const generatetooltoken = require('./generatetooltoken.service');
const initializeTool = require('./initializeTool.service');
const request= require('superagent');
const BASE_COMMUNITY_SERVICE_URL = 'http://calvin-communities.blr.stackroute.in/api/v1';
const jwt = require('jsonwebtoken');


function integrateNewTool({domainName, toolId, username}, done) {
	//Generate a new token for the community, tool

	//call tool's specific initializations service for the tool integration
	console.log('inside integrate tool ', {domainName, toolId, username});
	async.waterfall([
		generatetooltoken.bind(null, { domainName, toolId, username }),
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

function integrateToolinCommunity(domain,token,toolid,data,done){
	console.log("tooldata inside service",domain);
     const url=`${BASE_COMMUNITY_SERVICE_URL}/communitytools/${domain}/tools/${toolid}`;
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

}

function postToolEventToCommunity(domain,toolid,tokens,EventMsg,done){

let token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkb21haW4iOiJpbGx1bWluYXRpIiwidG9vbGlkIjoicmFzdGVyIiwiZXZlbnRzIjpbImV2aWQxIiwiZXZpZDIiXSwiaWF0IjoxNTAwNDc3MzI2fQ.eH5Nn2iIXLdiXGjncYABLkHG9rgQCmkqvKpnFqQLcn8';
console.log('hi got domain',domain," toolid ",toolid," token ",token, "ebent msg ",EventMsg);
 const url=`${BASE_COMMUNITY_SERVICE_URL}/webhooks/${token}`;
	 request
 .post(url)
 .send(EventMsg) // query string
 .end((err, res) => {
 
    if (err) {
      console.log('error is ',err);
     return done(err);
    }
    return done(null,'successfully sent');
});
}

module.exports = {
	integrateNewTool,
	integrateToolinCommunity,
	postToolEventToCommunity
}