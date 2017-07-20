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
			console.log(url);
			request
		.post(url)
		.send(data) // query string
		.end((err, res) => {
			if (err) {
			//res.status(500).send({error: 'Internal error ocurred...!!!', err: err});
			return done(err);
				}
			return done(null, res.body);
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
			postToolEventToCommunity,
		}

