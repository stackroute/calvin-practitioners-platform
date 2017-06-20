const db = require('../../../../config');
const cassandra = require('cassandra-driver');
const jwt = require('jsonwebtoken');

const USERS_TABLE = 'users';
const client = new cassandra.Client({
  contactPoints: [db.dbconfig.dburl],
  keyspace: db.dbconfig.keyspacename,
});

// this function is to check if user record is already present in database
function checkIfUserExists(email, done) {
  const chkQuery = `SELECT * FROM ${USERS_TABLE} where email = '${email}'`;
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
  const updateQuery = (`UPDATE ${USERS_TABLE} set lastlogin=:lastlogin where email=:email`);
  client.execute(updateQuery, profile, (err) => {
    if (err) { return done(err, 'db err'); }
    return done();
  });
}
// this function is to insert new user in database
function insertUserInDb(profile, done) {
  const insertQuery = `INSERT into ${USERS_TABLE}(userhandle,email,lastlogin,role,name,profilepic) VALUES (:uh,:email,:lastlogin,:role,:name,:image)`;
  client.execute(insertQuery, profile, (err) => {
    if (err) {
      return done(err);
    }

    return done();
  });
}
// this function is  to handle a user after login successfull login .
// If user already exists in database , last login time gets updated
// else new recorded in inserted in database
function updateUser(profile, done) {
  const userDetails = {
    username: profile.name,
    email: profile.email,
    avatar: profile.image,
  };

  const userToken = jwt.sign(userDetails, 'secret key', { expiresIn: 60 * 30 });
  // console.log('userToken', userToken);
  checkIfUserExists(profile.email, (error, userExists) => {
    if (userExists) {
      if (error) {
        return done(error, 'db error');
      }
      updateLastLoginTime(profile, (err) => {
        if (err) {
          return done(err, 'db error');
        }
        return done(null, userToken);
      });
    } else {
      insertUserInDb(profile, (err) => {
        if (err) { done(err); return; }
        done(null, userToken);
      });
    }
    return 'hi';
  });
}

module.exports = {
  updateUser,
};
