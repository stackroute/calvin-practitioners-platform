// const fs = require('fs');

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
      domain: 'Wipro',
      role: 'Digital-Developer',
      photo: 'https://pbs.twimg.com/profile_images/735509975649378305/B81JwLT7.jpg',
    },
    {
      username: 'Aswini',
      domain: 'Wipro',
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
module.exports = {
  getMembers,
};
