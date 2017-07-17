const request = require('superagent');
const discourseKey = '884f5fecb1bd914314e33530f353ab1e7e7c5e77c4c4ad2e393333a1a0e60ff1';
const discourseAdmin ='calvin';

// const appconfig = require('../../../../../appconfig/appconfig');
// const user = appconfig.discourseAdmin;
// const key = appconfig.discourseKey;

function createGroup(body, done) {
    
    const url = `http://discourse.calvin.stackroute.in/admin/groups?api_username=${discourseAdmin}&api_key=${discourseKey}`;
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
    createGroup,
}
