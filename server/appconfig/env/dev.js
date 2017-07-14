
const connectionString = { // config for cassandra
    keyspacename: 'calvin',
    dburl: '127.0.0.1',
    port: '9042',
};

// const loggerConfig = { // config for log4js
//    appenders: [{
//      type: 'console',
//    }, {
//      type: 'file',
//      filename: './../logs/logger.log',
//      category: 'communities',
//    }],
//  };

const BASE_COMMUNITY_SERVICE_URL = 'http://calvin-communities.blr.stackroute.in/api/v1'; // config for calling Community API

const cookies = {    // to store cookie
    user: 'currentUsers',
    userCommunity: 'userCommunity'
};

appConstants = {            // config  for signing JWT token
    secret: 'secret key',
    expiryTime: 60 * 500,
};

module.exports = {
    connectionString,
    BASE_COMMUNITY_SERVICE_URL,
    appConstants
};