const request = require('superagent');

const BASE_COMMUNITY_SERVICE_URL = `172.23.238.141:4000/adapter/getallactivities/user`;

function getMemberActivities(userName, done) {
  const url = `${BASE_COMMUNITY_SERVICE_URL}/${userName}`;
  request
    .get(url)
    .set({ 'Accept': 'application/json', 'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ik1heWFuayBTZXRoaSIsImFwaSI6ImNpcmNsZSIsInNjb3BlcyI6WyJtYWlsYm94OmFsbCIsImNpcmNsZTphbGwiLCJmb2xsb3c6YWxsIl0sImlhdCI6MTQ5NzkzODEzOX0.cpLAt8BaYZyqyp53iDJGbl3yIBtBjj6_qoSiM4_hDiY' })
    .query({ userName })
    .end((err, res) => {
      if (err) {
        return done(err);
      }
      return done(null, res.body);
    });
}

const BASE_COMMUNITY_SERVICE_URL_DOMAIN = `172.23.238.141:4000/adapter/getallactivities/domain`;

function getDomainActivities(domainName, done) {
  const url = `${BASE_COMMUNITY_SERVICE_URL_DOMAIN}/${domainName}`;
  request
    .get(url)
    .set({ 'Accept': 'application/json', 'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ik1heWFuayBTZXRoaSIsImFwaSI6ImNpcmNsZSIsInNjb3BlcyI6WyJtYWlsYm94OmFsbCIsImNpcmNsZTphbGwiLCJmb2xsb3c6YWxsIl0sImlhdCI6MTQ5NzkzODEzOX0.cpLAt8BaYZyqyp53iDJGbl3yIBtBjj6_qoSiM4_hDiY' })
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
