const cassandra = require('cassandra-driver');
const config = require('../common/config');

const client = new cassandra.Client({
  contactPoints: [config.dbconfig.dburl],
  keyspace: config.dbconfig.keyspacename,
});

const TABLE_NAME = 'tools';


// this function is to check if tool is already present in DB
function checkIfToolExists(toolid, done) {
  const checkQry = `SELECT * from ${TABLE_NAME} where toolid=${toolid}`;
  client.execute(checkQry, (err, result) => {
    if ((!Array.isArray(result.rows)) || (!result.rows.length)) {
      return done(null, false);
    }

    return done(null, true);
  });
}
// this function is to add a new tool in marketplace
function AddToolinMarketplace(tool, done) {
  const insertQry = `INSERT into tools (toolid,toolname,toolactions,toolevents)
                 VALUES(:toolid,:toolname,:toolaction,:toolevents);`;

  if (checkIfToolExists(tool.toolid, (error, toolExists) => {
    if (toolExists) {
      if (error) {
        return done(error, 'DB Error');
      }
    }
  })) {


  }
}

module.exports = {
  AddToolinMarketplace,
};
