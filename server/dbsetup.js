const cassandra = require('cassandra-driver');
const config = require('./appconfig');

const client = new cassandra.Client({contactPoints: [config.connectionString.dburl]});

const keyspacename = config.connectionString.keyspacename;

const tablename = ['users', 'toolinfo', 'toolactions', 'toolevents', 'userappintegration','userappintegration'];

client.connect()
  .then(() => {
    const query = `CREATE KEYSPACE IF NOT EXISTS ${keyspacename} WITH replication =` +
      "{'class': 'SimpleStrategy', 'replication_factor': '3' }";
    return client.execute(query);
  })
  .then(() => {
    const query = `create table IF NOT EXISTS ${keyspacename}.${tablename[0]}

    (userhandle text,username text primary key ,name text,profilepic text,role text,lastLogin timestamp,aboutme text,contact text,interestedtopics set<text>,location text)`;
    return client.execute(query);
  })
  .then(() => {
    const query = `create table IF NOT EXISTS ${keyspacename}.${tablename[1]}
    (toolid text primary key,purpose text, toolavatar text, tooldesc text,toolname text)`;
    return client.execute(query);
  })
  .then(() => {
    const query = `create table IF NOT EXISTS ${keyspacename}.${tablename[2]}
    (toolid text,actionid text,name text,grantactions text,description text,primary key(toolid,actionid))`;
    return client.execute(query);
  })
  .then(() => {
    const query = `create table IF NOT EXISTS ${keyspacename}.${tablename[3]}
    (toolid text,eventid text,name text,metadata text,description text,primary key(toolid,eventid))`;
    return client.execute(query);
  })
  .then(() => {
    const query = `create table IF NOT EXISTS ${keyspacename}.${tablename[4]}
    (username text,toolid text,tokenval text,updatedon timestamp,primary key(username,toolid))`;
    return client.execute(query);
  })
  .then(() => {
    // console.log('Keyspace Created');
    // console.log('Table created');
    client.shutdown();
  })
  .catch(
client.shutdown());
