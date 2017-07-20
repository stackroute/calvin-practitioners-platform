const config = require('../../../../appconfig/env/dev');
const cassandra = require('cassandra-driver');
const jwt = require('jsonwebtoken');
const request = require('superagent');
const urlValue= config.BASE_COMMUNITY_SERVICE_URL ;

//const BASE_COMMUNITY_SERVICE_URL='http://172.23.238.141:3000/api/v1/';

let cookies = []; // stores Cookies User and Community info tokens

const usersTable = 'users';
const client = new cassandra.Client({
  contactPoints: [config.connectionString.dburl],
  keyspace: config.connectionString.keyspacename,
});

// this function is to check if user record is already present in database
function checkIfUserExists(email, done) {
  const chkQuery = `SELECT * FROM ${usersTable} where username = '${email}'`;
  client.execute(chkQuery, (err, results) => {
    if (err) {
      return done(err, 'db error');
    }

    const x = results.rows;
    if (!Array.isArray(x) || !x.length) {
      return done(null, false);
    }
    return done(null, true);
  });
}
// this function is to update last login time in database
function updateLastLoginTime(profile, done) {
  const updateQuery = (`UPDATE ${usersTable} set lastlogin=:lastlogin where username=:username`);
  client.execute(updateQuery, profile, (err) => {
    if (err) { return done(err, 'db err'); }
    return done();
  });
}
// this function is to insert new user in database
function insertUserInDb(profile, done) {
  const insertQuery = `INSERT into ${usersTable}(userhandle,username,lastlogin,role,name,profilepic) VALUES (:uh,:username,:lastlogin,:role,:name,:image)`;
  client.execute(insertQuery, profile, (err) => {
    if (err) {
      return done(err);
    }

    return done();
  });
}
// this function is  to handle a user after  successfull login .
// If user already exists in database , last login time gets updated
// else new record in inserted in database
function updateUser(profile, done) {
  console.log('inside update user;');
  const userDetails = {
    name: profile.name,
    username: profile.username,
    avatar: profile.image,
  };

  const userToken = jwt.sign(userDetails, config.appConstants.secret,
    { expiresIn: config.appConstants.expiryTime });
  // console.log('userToken', userToken);
  cookies.push(userToken);
  checkIfUserExists(profile.username, (error, userExists) => {
    if (userExists) {
      if (error) {
        return done(error, 'Unable to find user table');
      }
      updateLastLoginTime(profile, (err) => {
        if (err) {
          return done(err, 'db error');
        }
        return done(null, cookies);
      }); // end of  updateLastLoginTime
    } else {
      insertUserInDb(profile, (err) => {
        if (err) { done(err); return; }
        done(null, cookies);
      }); // end of  insertUserInDb
    }
  }); // end of checkIfUserExists
}
// this function is to get List of Comminities of a User
function getUserCommunities(username, done) {
  let tempCookie=[];
  const url = `${urlValue}/membership/${username}`;
  request
 .get(url)
 .query({ username }) // query string
 .end((err, res) => {
   if (err) {
     console.log('error is ', err);
     return done(err);
   }
   //console.log('result is ', res.body);
   const userCommunityToken = jwt.sign(res.body, config.appConstants.secret,
    { expiresIn: config.appConstants.expiryTime });
   cookies.push(userCommunityToken);
   tempCookie=cookies;
   cookies=[];
   return done(null, tempCookie);
 });
}
//update user details in userprofile component
function updateSpecificProfile(emailAddrs, profileData, done) {
  const query = (`UPDATE ${usersTable} SET aboutMe = '${profileData.about}',contact = '${profileData.contact}',interestedtopics= {'${profileData.interest}'},location = '${profileData.loc}' WHERE username = '${emailAddrs}'`);
  client.execute(query, (err) => {
    if (!err) {
      done(null);
    } else {
      done(err);
    }
  });
}
//get user details from user profile component
function getUserDetails(emailAddrs, done) {
  console.log('Insise Service');
  const query = (`SELECT aboutme,contact,interestedtopics,location from ${usersTable} where username ='${emailAddrs}'`);
  client.execute(query, (err, result) => {
    if (!err) {
      done(undefined, result.rows);
    } else {
      console.log("profile",err,usersTable)
      done(err, null);
    }
  });
}
module.exports = {
  updateUser,
  updateSpecificProfile,
  getUserDetails,
  getUserCommunities,
};