const request = require('superagent');

const BASE_COMMUNITY_SERVICE_URL = 'http://calvin-communities.blr.stackroute.in/api/v1';

function getCommunityMembers(domain, callback) {
    // Call communities service to get all the templates
  const url = `${BASE_COMMUNITY_SERVICE_URL}/communitymembership/${domain}/members`;
  request.get(url)
  .end((err, res) => {
    if (err) {
    //   console.log('Error in API to get community templates, error: ', err);
      return callback(err);
    }
    return callback(null, res.body);
  });
}


const cartoons = {
  Members:
  [
    {
      username: 'Aravindh',
      domain: 'Wipro',
      role: 'Digital-Developer',
      photo: 'https://pbs.twimg.com/profile_images/735509975649378305/B81JwLT7.jpg',
    },
    {
      username: 'Keerthi',
      domain: 'ewewewe',
      role: 'Digital-Developer',
      photo: 'https://pbs.twimg.com/profile_images/735509975649378305/B81JwLT7.jpg',
    },
    {
      username: 'Aswini',
      domain: 'ewewe',
      role: 'Digital-Developer',
      photo: 'https://pbs.twimg.com/profile_images/735509975649378305/B81JwLT7.jpg',
    },
    {
      username: 'Suresh',
      domain: 'Wipro',
      role: 'Digital-Developer',
      photo: 'https://pbs.twimg.com/profile_images/735509975649378305/B81JwLT7.jpg',
    },
    {
      username: 'Ashok',
      domain: 'Wipro',
      role: 'Digital-Developer',
      photo: 'https://pbs.twimg.com/profile_images/735509975649378305/B81JwLT7.jpg',
    },
    {
      username: 'Karthikeyan',
      domain: 'Wipro',
      role: 'Digital-Manager',
      photo: 'https://pbs.twimg.com/profile_images/735509975649378305/B81JwLT7.jpg',
    },
    {
      username: 'AnithaJaganathan',
      domain: 'Wipro',
      role: 'Digital-Retainer',
      photo: 'https://pbs.twimg.com/profile_images/735509975649378305/B81JwLT7.jpg',
    },
    {
      username: 'Basavaraj',
      domain: 'Wipro',
      role: 'Digital-Mentor',
      photo: 'https://pbs.twimg.com/profile_images/735509975649378305/B81JwLT7.jpg',
    },
    {
      username: 'Sagaar',
      domain: 'Wipro',
      role: 'Digital-Mentor',
      photo: 'https://pbs.twimg.com/profile_images/735509975649378305/B81JwLT7.jpg',
    },
    {
      username: 'Nelanjan',
      domain: 'Wipro',
      role: 'Digital-Mentor',
      photo: 'https://pbs.twimg.com/profile_images/735509975649378305/B81JwLT7.jpg',
    },
    {
      username: 'Himani',
      domain: 'Wipro',
      role: 'Digital-Mentor',
      photo: 'https://pbs.twimg.com/profile_images/735509975649378305/B81JwLT7.jpg',
    },
  ],
};


function getMembers(member, done) {
  return done(null, cartoons);
}

function getMembersDetails(member, done) {
  let i = 0;
  while (i < cartoons.Members.length) {
    if (member === cartoons.Members[i].username) {
      const decoratedMember = {
        username: cartoons.Members[i].username,
        name: cartoons.Members[i].domain,
        avatar: cartoons.Members[i].photo,
      };
      return done(null, decoratedMember);
    }
    i++;
  }
  return done('Username not present', null);
}


function postMemberInvite(domain, inviteBody, done) {
  const url = `${BASE_COMMUNITY_SERVICE_URL}/communitymembership/${domain}/members`;
  request
  .post(url)
  .send(inviteBody)
  .end((err, res) => {
    if (err) {
      return done(err);
    }
    return done(null, res.body);
  });
}

function deleteMember(domain, data, callback) {
  const url = `${BASE_COMMUNITY_SERVICE_URL}/communitymembership/${domain}/members`;
  request.delete(url)
  .send(data)
  .end((err, res) => {
    if (err) {
      return callback(err);
    }
    return callback(null, res.body);
  });
}


module.exports = {
  getMembers,
  getMembersDetails,
  postMemberInvite,
  getCommunityMembers,
  deleteMember,
};

