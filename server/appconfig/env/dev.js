
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
const BASE_ACTIVITY_SERVICE_URL = '172.23.238.141:4000';


const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ik1heWFuayBTZXRoaSIsImFwaSI6ImNpcmNsZSIsInNjb3BlcyI6WyJtYWlsYm94OmFsbCIsImNpcmNsZTphbGwiLCJmb2xsb3c6YWxsIl0sImlhdCI6MTQ5NzkzODEzOX0.cpLAt8BaYZyqyp53iDJGbl3yIBtBjj6_qoSiM4_hDiY';
const discourseKey = '884f5fecb1bd914314e33530f353ab1e7e7c5e77c4c4ad2e393333a1a0e60ff1';
const discourseAdmin ='calvin';
// const btoken='Bearer ya29.GluMBMkeVO045z0HXNlM4vOgb63W-dzshTANCpYnpm2mlVjjkVvZahKksdW3CoDzvWKh1tjLx0mSsLPlYW3_cDsIpfXT07TATcBgWl1hBM7XGIcs_lcoCI6aspWR';


const cookies = {    // to store cookie
    user: 'currentUsers',
    userCommunity: 'userCommunity'
};


const TABLE_NAME = ['toolinfo', 'toolactions', 'toolevents', 'toolcommunity'];
const USERS_TABLE = 'users';

const appConstants = {            // config  for signing JWT token
    secret: 'secret key',
    expiryTime: 60 * 500,
};

module.exports = {
    connectionString,
    BASE_COMMUNITY_SERVICE_URL,
    BASE_ACTIVITY_SERVICE_URL,
    authToken,
    cookies,
    discourseKey,
    discourseAdmin,
    appConstants,
    USERS_TABLE,
    TABLE_NAME
};