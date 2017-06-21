const cassandra = require('cassandra-driver');

const client = new cassandra.Client({ contactPoints: ['127.0.0.1'] });

const keyspacename = 'calvin';
const tablename = 'users';
client.connect()
  .then(() => {
    const query = `CREATE KEYSPACE IF NOT EXISTS ${keyspacename} WITH replication =` +
      "{'class': 'SimpleStrategy', 'replication_factor': '3' }";
    return client.execute(query);
  })
  .then(() => {
    const query = `create table ${keyspacename}.${tablename}
    (userhandle text,email text primary key ,name text,profilepic text,role text,communities map<text,text>,favouriteCommunities set<text>,lastLogin timestamp)`;
    return client.execute(query);
  })
  .then(() => {
    // console.log('Keyspace Created');
    // console.log('Table created');
    client.shutdown();
  })
  .catch(
     client.shutdown());
