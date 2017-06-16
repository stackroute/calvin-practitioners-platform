const GoogleStretegy = require('passport-google-oauth').OAuth2Strategy;
const configAuth = require('./oauthconfig');
// const userdata = require('../database/dbconfig');
const cassandra = require('cassandra-driver');
const jwt = require('jsonwebtoken');
const db = require('../database/dbconfig');

const client = new cassandra.Client({
  contactPoints: [db.dbdetail.dburl],
  keyspace: db.dbdetail.keyspacename,
});

module.exports = (passport) => {
  passport.use(new GoogleStretegy({
    clientID: configAuth.googleAuth.clientID,
    clientSecret: configAuth.googleAuth.clientSecret,
    callbackURL: configAuth.googleAuth.callbackURL,
  }, (accessToken, refreshToken, profile, done) => {
    process.nextTick(() => {
      // console.log('2.inside process next');
      const time = new Date();
      const namees = profile.displayName;
      // console.log('name', namees);
      const params = {
        email: profile.emails[0].value,
        image: profile.photos[0].value,
        name: namees,
        role: 'consumer',
        // comm:[{
        //       'groupname':'cdonealvin',
        //       'role': 'user',
        //       'type': 'true'
        // }],
        lastlogin: time,
        uh: namees + 123,
      };
      const userDetails = {
        username: profile.displayName,
        email: profile.emails[0].value,
      };
      const userToken = jwt.sign(userDetails, 'secret key', { expiresIn: 60 * 30 });
      client.execute('select * from users where email=:email', params, (err, result) => {
        // console.log('3.inside getting email');
        if (err) {
          return done(err);
        }
        const x = result.rows;
        if (!Array.isArray(x) || !x.length) {
          client.execute('INSERT into users(userhandle,email,lastlogin,role,name,profilepic) VALUES(:uh,:email,:lastlogin,:role,:name,:image)',
            params, (error) => {
              // console.log('4.inside insert');
              if (error) {
                return error;
              }

              // console.log('5.inside return token');
              return done(null, userToken);
            });
        }
        return done(null, userToken);
      });
    });
  }));
};
