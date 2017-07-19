const async = require('async');
const generatetooltoken = require('./generatetooltoken.service');
const initializeTool = require('./initializeTool.service');
const request = require('superagent');
//const communityToolService=require('./communitytools.service');
const BASE_COMMUNITY_SERVICE_URL = 'http://calvin-communities.blr.stackroute.in/api/v1';

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

function  addToolinCommunity(domain,eventData,done){
   
     const url=`${BASE_COMMUNITY_SERVICE_URL}/communitytools/${domain}/tools` ;
	  request
    .post(url)
    .query({ domain })
    .end((err, res) => {
      if (err) {
        return done(err);
      }
      return done(null, res.body);
    });    

}

module.exports = {
	integrateNewTool,
	addToolinCommunity
}