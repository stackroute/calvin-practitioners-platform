module.exports = {
  dbconfig: {
    dburl: '127.0.0.1',
    keyspacename: 'calvin',
  },
  appConstants: {
    secret: 'secret key',
    expiryTime: 60 * 500,
  },
  cookie: {
    user: 'currentUsers',
    userCommunity:'userCommunity'
  },
};
// module.exports=require('../../../../appconfig');