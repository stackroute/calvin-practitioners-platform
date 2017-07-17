const request = require('superagent');
const discourseKey = '884f5fecb1bd914314e33530f353ab1e7e7c5e77c4c4ad2e393333a1a0e60ff1';
const discourseAdmin ='calvin';


function generateWebhook(body, done) {
    
    const url = `http://discourse.calvin.stackroute.in/admin/api/web_hooks?api_username=${discourseAdmin}&api_key=${discourseKey}`;
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
