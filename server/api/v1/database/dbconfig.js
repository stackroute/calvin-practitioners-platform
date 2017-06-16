

// module.exports=new cassandra.Client({ contactPoints: ['127.0.0.1'], keyspace: 'calvin' });

module.exports = {
  userdata: {
    email: '',
    image: '',
    name: '',
    role: 'consumer',
    communities: [{
      groupname: 'calvin',
      role: 'user',
      type: 'true',
    }],
    lastlogin: '',
    userhandle: '',
  },
  dbdetail: {
    keyspacename: 'calvin',
    dburl: '127.0.0.1',
  },
};
// module.exports = {
//   userdata: {
//     email: '',
//     image: '',
//     name: '',
//     role: 'consumer',
//     communities: [{
//       groupname: 'calvin',
//       role: 'user',
//       type: 'true',
//     }],
//     lastlogin: '',
//     userhandle: '',
//   },
//   dbdetail: {
//     keyspacename: 'calvin',
//     dburl: '127.0.0.1',
//   },
// };
