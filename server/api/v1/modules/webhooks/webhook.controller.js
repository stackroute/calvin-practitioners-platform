const async = require('async');
const extractTool = require('url');
function verifyToken(token, done) {

}

function extractEventData(data, done) {

}

function sendToCommunityService(data, done) {

    extractTool.method(data, (err, result) => {

    });
}

function sendToolDataToCommunity(token, done) {

    async.waterfall([
        verifyToken,
        extractEventData,
        sendToCommunityService
    ],
        (req, res) => {

            if (err) {

                done(err, 'Internal Error');
            }
            done(null, 'successfully sent');
        });


}

module.exports = {
    sendToolDataToCommunity
}