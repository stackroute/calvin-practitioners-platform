const request = require('superagent');

const BASE_COMMUNITY_SERVICE_URL = 'http://calvin-communities.blr.stackroute.in/api/v1';

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



// function getMembers(member, done) {
//    // Call communities service to get all the members
//   const url = `${BASE_COMMUNITY_SERVICE_URL}/community/members/${member}`;
//   request
//  .get(url)
//  .query({ member }) // query string
//  .end((err, res) => {
//    if (err) {
     
//      return done(err);
//    }
//    return done(null, res.body);
//  });
// }

module.exports = {
  getMembers,
};