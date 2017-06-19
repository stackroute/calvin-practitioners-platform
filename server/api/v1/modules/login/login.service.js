const db = require('../../../../config');
const cassandra = require('cassandra-driver');
const jwt = require('jsonwebtoken');

const USERS_TABLE = 'users';
const client = new cassandra.Client({
  contactPoints: [db.dbconfig.dburl],
  keyspace: db.dbconfig.keyspacename,
});

function updateUser(profile, done) {
  // console.log("4. inside update user");

  const updateQuery = (`UPDATE ${USERS_TABLE} set lastlogin=:lastlogin where email=:email`);
  const chkQuery = `SELECT * FROM ${USERS_TABLE} where email = '${profile.email}'`;
  const insertQuery = `INSERT into ${USERS_TABLE}(userhandle,email,lastlogin,role,name,profilepic) VALUES (:uh,:email,:lastlogin,:role,:name,:image)`;
  const userDetails = {
    username: profile.name,
    email: profile.email,
    avatar: profile.image,
  };
  const userToken = jwt.sign(userDetails, 'secret key', { expiresIn: 60 * 30 });
  client.execute(chkQuery, (err, results) => {
    //  console.log("5.insidde ckhk query");
    if (err) {
      return done(err, 'db error');
    }
    const x = results.rows;
    if (!Array.isArray(x) || !x.length) {
      client.execute(insertQuery, profile, (error) => {
      //  console.log("6.inside insert");
        if (error) {
          return done(error, 'db error');
        }

        return done(null, userToken);
      });
    }
    client.execute(updateQuery, profile, (er) => {
      //  console.log('6.inside update');
      if (er) {
          // console.log(er);
        done(er, 'Db error');
      }
    });
    return done(null, userToken);
  });
}

module.exports = {
  updateUser,
};
