const cassandra = require('cassandra-driver');
const config = require('../common/config');

const client = new cassandra.Client({
    contactPoints: [config.dbconfig.dburl],
    keyspace: config.dbconfig.keyspacename,
});

const TABLE_NAME = 'testers';


// this function is to check if tool is already present in DB
function checkIfToolExists(toolid, done) {
    const checkQry = `SELECT * FROM ${TABLE_NAME} where toolid = '${toolid}'`;
    client.execute(checkQry, (err, result) => {

        if (err) {
            console.log('err', err);
            return done('db error', err);
        }
        if ((!Array.isArray(result.rows)) || (!result.rows.length)) {
            return done(null, false);
        }

        return done(null, true);
    });
}

function addToolinDB(tool, done) {

    console.log('toolaction',tool.toolAction);
    console.log('tool event',tool.toolEvent);
    const insertQry = `INSERT into tools (toolid,toolname,toolactions,toolevents)
                     VALUES(:toolid,:toolname,:toolAction,:toolEvent);`;
    client.execute(insertQry, tool, (err) => {
        if (err) {
            console.log('err',err);
            return done(err);
        }
        return done();
    });

}
// this function is to add a new tool in marketplace
function AddToolinMarketplace(tool, done) {

    console.log('toolid', tool.toolid);
    console.log("inside addtoolmarketplkace service");

    if (checkIfToolExists(tool.toolid, (error, toolExists) => {
        if (toolExists) {
            if (error) {
                return done(error, 'DB Error');
            }
            return done(null, 'Tool Already exist');

        } else {

            addToolinDB(tool, (err) => {
                if (err) {
                    return done(err, 'db error');
                }
                done(nul, ' Tool added');
            });
        }
    })) {


    }
}

module.exports = {
    AddToolinMarketplace,
};
