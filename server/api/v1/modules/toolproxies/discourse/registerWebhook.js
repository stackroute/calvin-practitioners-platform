const request = require('superagent');

const appconfig = require('../../../../../appconfig/');

console.log("Discourse API credentials ", appconfig.discourseAdmin, " | ", appconfig.discourseKey);

function generateWebhook(body, done) {
    const url = `http://discourse.calvin.stackroute.in/admin/api/web_hooks?api_username=${appconfig.discourseAdmin}&api_key=${appconfig.discourseKey}`;
    request
        .post(url)
        .send(body)
        .end((err, res) => {
            if (err) {
                return done(err);
            }
            return done(null, res.body);
        });
}

module.exports = {
    generateWebhook,
}
