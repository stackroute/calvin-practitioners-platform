const async = require('async');
const extractTool = require('url');
const jwt = require('jsonwebtoken');
const config = require('../../../../appconfig/env/dev');
const path = require('path');
const communityController = require('../../modules/communitytools/communitytools.controller');
const cummunityToolservice = require('../communitytools/communitytools.service');
const transformEventData = require('./transformEventData');

function verifyToolToken(token, done) {
    console.log('3.inside verify token');
    jwt.verify(token, config.toolToken.secret, (err, tokenClaims) => {
        if (err) {
            return done(err, 'unauhtorized');
        }
        
        done(null, tokenClaims);
    });
}

function extractEventData(eventPayload, tokenClaims, done) {
    // console.log('3.inside extract event datat');
    console.log("***********Post ",JSON.stringify(eventPayload),'************');
    let obj;
    transformEventData.extractEventData(eventPayload, tokenClaims, (err, extractedData) => {
        if (err) {
            console.log('error is ', err);
            return done(err, 'unable to extract data');
        }
        else {
            obj = { extractedData, tokenClaims };
            //  // console.log('obj is ..',obj);
            done(null, obj);
        }
    });
}

function sendToCommunityService(payload, obj, done) {
    console.log('got object ....', obj.tokenClaims);
    cummunityToolservice.postToolEventToCommunity(obj.tokenClaims.domainName, obj.tokenClaims.toolId, obj.tokenClaims.communityToolToken, obj.extractedData, (err, result) => {
        if (err) {
            console.log('error is ', err);
            return done(err, 'Unable to POST in Community')
        }
        return done(null, 'Successfully Sent');
    });

    // communityController.postTool(obj.tokenClaims.domainName,obj.extractedData, (err, result) => {

    //     if (err) {
    //         return done(err, 'Unable to POST Tool in Community');
    //     }
    //     return done(null, 'Successfully Sent');
    // });
}

function handleToolEvent(token, eventPayload, done) {

    /*token = jwt.sign({
        "domainName": "digital",
        "toolId": "discourse",
        "username": "ceanstackdev@gmal.com"
    }, 'config.appConstants.secret', { expiresIn: 60 * 5000 });*/

    // console.log('2.getting inside handle tool event');
    async.waterfall([
        verifyToolToken.bind(null, token),
        extractEventData.bind(null, eventPayload),
        sendToCommunityService.bind(null, eventPayload)
    ],
        (err, result) => {
            if (err) {
                console.log('error is ', err);
                done(err, 'Internal Error');
                return;
            }
            done(null, 'successfully sent');
        });
}

module.exports = {
    handleToolEvent
}