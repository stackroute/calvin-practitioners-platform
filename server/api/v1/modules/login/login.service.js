
// const request = require('superagent');

// const BASE_COMMUNITY_SERVICE_URL = 'http://calvin-communities.blr.stackroute.in/api/v1';

// function getCommunity(username, done) {
//   const url = `${BASE_COMMUNITY_SERVICE_URL}/membership/${username}`;
//   request
//  .get(url)
//  .query({ username }) // query string
//  .end((err, res) => {
//    if (err) {
//      console.log('error is ', err);
//      return done(err);
//    }
//    console.log('result is ', res.body);
//    return done(null, res.body);
//  });
// }


// const config = require('../common/config');
// const cassandra = require('cassandra-driver');
// const jwt = require('jsonwebtoken');

// const USERS_TABLE = 'users';
// const client = new cassandra.Client({
//   contactPoints: [config.dbconfig.dburl],
//   keyspace: config.dbconfig.keyspacename,
// });

// // this function is to check if user record is already present in database
// function checkIfUserExists(email, done) {
//   const chkQuery = `SELECT * FROM ${USERS_TABLE} where username = '${email}'`;
//   client.execute(chkQuery, (err, results) => {
//     if (err) {
//       return done(err, 'db error');
//     }

//     const x = results.rows;
//     if (!Array.isArray(x) || !x.length) {
//       return done(null, false);
//     }
//     return done(null, true);
//   });
// }
// // this function is to update last login time in database
// function updateLastLoginTime(profile, done) {
//   const updateQuery = (`UPDATE ${USERS_TABLE} set lastlogin=:lastlogin where username=:username`);
//   client.execute(updateQuery, profile, (err) => {
//     if (err) { return done(err, 'db err'); }
//     return done();
//   });
// }
// // this function is to insert new user in database
// function insertUserInDb(profile, done) {
//   const insertQuery = `INSERT into ${USERS_TABLE}(userhandle,username,lastlogin,role,name,profilepic) VALUES (:uh,:username,:lastlogin,:role,:name,:image)`;
//   client.execute(insertQuery, profile, (err) => {
//     if (err) {
//       return done(err);
//     }

//     return done();
//   });
// }
// // this function is  to handle a user after  successfull login .
// // If user already exists in database , last login time gets updated
// // else new record in inserted in database
// function updateUser(profile, done) {
//   console.log('inside update user;')
//   const userDetails = {
//     name: profile.name,
//     username: profile.username,
//     avatar: profile.image,
//   };

//   const userToken = jwt.sign(userDetails, config.appConstants.secret,
//     { expiresIn: config.appConstants.expiryTime });
//   // console.log('userToken', userToken);

//   checkIfUserExists(profile.username, (error, userExists) => {
//     if (userExists) {
//       if (error) {
//         return done(error, 'Unable to find user table');
//       }
//       updateLastLoginTime(profile, (err) => {
//         if (err) {
//           return done(err, 'db error');
//         }
//         return done(null, userToken);
//       });
//     } else {
//       insertUserInDb(profile, (err) => {
//         if (err) { done(err); return; }
//         done(null, userToken);
//       });
//     }
//     return 'hi';
//   });
// }

// module.exports = {
//   updateUser,
// };
