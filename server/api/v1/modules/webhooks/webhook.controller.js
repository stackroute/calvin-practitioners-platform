const async = require('async');
const extractTool = require('url');
const jwt = require('jsonwebtoken');
const config = require('../common/config');
const path = require('path');
const communityController = require('../../modules/communitytools/communitytools.controller');
const transformEventData = require('./transformEventData');

function verifyToolToken(token, done) {
    jwt.verify(token, config.appConstants.secret, (err, tokenClaims) => {
        if (err) {
            return done(err);
        }
        done(null, tokenClaims);
    });
}

function extractEventData(eventPayload, tokenClaims, done) {
    transformEventData(eventPayload, tokenClaims, (err, extractedData) => {
        if (err) {
            return done(err, 'unable to extract data');
        }
        done(null, {extractedData, tokenClaims});
    });
}

function sendToCommunityService({extractedData, tokenClaims}, done) {
    // tokenClaims will have { domainName, toolId, username }
    communityController.postTool(tokenClaims.domainName, extractedData,(err,result)=>{
            
            if(err){
                return done(err,'Unable to POST Tool in Community');
            }
        return done(null,'Successfully Sent');
    });
}

function handleToolEvent(token, eventPayload, done) {
    async.waterfall([
        verifyToolToken.bind(null, token),
        extractEventData.bind(null, eventPayload),
        sendToCommunityService.bind(null, eventPayload)
    ],
        (err, result) => {
            if (err) {
                done(err, 'Internal Error');
            }
            done(null, 'successfully sent');
        });
}

module.exports = {
    handleToolEvent
}