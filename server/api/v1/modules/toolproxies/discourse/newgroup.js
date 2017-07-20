const request = require('superagent');
// const discourseKey = '884f5fecb1bd914314e33530f353ab1e7e7c5e77c4c4ad2e393333a1a0e60ff1';
// const discourseAdmin ='calvin';

const config = require('../../../../../appconfig/appconfig');
const user = config.discourseAdmin;
const key = config.discourseKey;
//console.log(config.discourseAdmin,config.discourseKey);

function createGroup(body, done) {
    //console.log('key',key,'user',user)
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
