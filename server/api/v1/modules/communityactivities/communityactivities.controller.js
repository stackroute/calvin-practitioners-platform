const request = require('superagent');

const BASE_ACTIVITY_SERVICE_URL = `172.23.238.141:4000`;
const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ik1heWFuayBTZXRoaSIsImFwaSI6ImNpcmNsZSIsInNjb3BlcyI6WyJtYWlsYm94OmFsbCIsImNpcmNsZTphbGwiLCJmb2xsb3c6YWxsIl0sImlhdCI6MTQ5NzkzODEzOX0.cpLAt8BaYZyqyp53iDJGbl3yIBtBjj6_qoSiM4_hDiY'
function getMemberActivities(userName, done) {
  const url = `${BASE_ACTIVITY_SERVICE_URL}/adapter/getallactivities/user/${userName}`;
  request
    .get(url)
    .set({
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + authToken
    })
    .query({ userName })
    .end((err, res) => {
      if (err) {
        return done(err);
      }
      return done(null, res.body);
    });
}

function getDomainActivities(domainName, done) {
  const url = `${BASE_ACTIVITY_SERVICE_URL}/adapter/getallactivities/domain/${domainName}`;
  request
    .get(url)
    .set({
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + authToken
    })
    .query({ domainName })
    .end((err, res) => {
      if (err) {
        return done(err);
      }
      return done(null, res.body);
    });
}

module.exports = {
  getMemberActivities,
  getDomainActivities,
};
