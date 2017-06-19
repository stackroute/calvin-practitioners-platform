const db = require('../../../../config');
const cassandra = require('cassandra-driver');
const jwt = require('jsonwebtoken');

const USERS_TABLE = 'users';
const client = new cassandra.Client({
  contactPoints: [db.dbconfig.dburl],
  keyspace: db.dbconfig.keyspacename,
});


function checkIfUserExists(email, done) {
  // console.log('inside user exist');
  const chkQuery = `SELECT * FROM ${USERS_TABLE} where email = '${email}'`;
  client.execute(chkQuery, (err, results) => {
    if (err) {
      return done(err, 'db error');
    }

    const x = results.rows;
      // console.log("rows", x);
    if (!Array.isArray(x) || !x.length) {
      return done(null, false);
    }
    return done(null, true);
  });
}

function updateLastLoginTime(profile, done) {
  // console.log('inside last login');
  const updateQuery = (`UPDATE ${USERS_TABLE} set lastlogin=:lastlogin where email=:email`);
  client.execute(updateQuery, profile, (err) => {
    if (err) { return done(err, 'db err'); }
    return done();
  });
}

function insertUserInDb(profile, done) {
  const insertQuery = `INSERT into ${USERS_TABLE}(userhandle,email,lastlogin,role,name,profilepic) VALUES (:uh,:email,:lastlogin,:role,:name,:image)`;
  client.execute(insertQuery, profile, (err) => {
    if (err) {
      return done(err);
    }

    return done();
  });
}


function updateUser(profile, done) {
  // console.log("4. inside update user");
  const userDetails = {
    username: profile.name,
    email: profile.email,
    avatar: profile.image,
  };

  const userToken = jwt.sign(userDetails, 'secret key', { expiresIn: 60 * 30 });

  checkIfUserExists(profile.email, (error, userExists) => {
    // console.log('user existr? :', userExists);
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
      // console.log('inside insert user');
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


//   client.execute(chkQuery, (err, results) => {
  //   console.log("5.insidde ckhk query");


  //   if (err) {
  //     return done(err, 'db error');
  //   }
  //   const x = results.rows;
  //   if (!Array.isArray(x) || !x.length) {
  //     client.execute(insertQuery, profile, (error) => {
  //       console.log("6.inside insert");
  //       if (error) {
  //          done(error, 'db error');
  //          return;
  //       }

  //        done(null, userToken);
  //     });
  //   }
  //    client.execute(updateQuery, profile, (er) => {
  //     console.log('6.inside update');
  //     if (er) {
  //       console.log(er);
  //       done(er, 'Db error');
  //       return;
  //     }
  //      done(null, userToken);
  //   });
  //   // return done(null, userToken);
  // });
