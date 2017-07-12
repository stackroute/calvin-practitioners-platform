const cassandra = require('cassandra-driver');
const config = require('../common/config');
const async = require('async');
const client = new cassandra.Client({
  contactPoints: [config.dbconfig.dburl],
  keyspace: config.dbconfig.keyspacename,
});

const TABLE_NAME = ['toolinfo', 'toolactions', 'toolevents', 'toolcommunity'];

// this function is to check if tool is already present in DB
function checkIfToolExists(toolid, done) {
  console.log('check if tool exists');
  const checkQry = `SELECT * FROM ${TABLE_NAME[0]} where toolid = '${toolid}'`;
  client.execute(checkQry, (err, result) => {
    if (err) {
      // console.log('err', err);
      return done('db error', err);
    }
    if ((!Array.isArray(result.rows)) || (!result.rows.length)) {
      return done(null, false);
    } return done(null, true);
  });
}

// this function inserts Tool Basic information in DB
function insertBasicToolInfo(tool, done) {
  console.log('tool info is ', tool);
  const basicQry = `INSERT INTO ${TABLE_NAME[0]} (toolid,toolname,toolavatar,tooldesc,purpose) VALUES (:id,:name,:avatar,:detail,:purpose);`;
  const basicInfo = {
    id: tool.toolid,
    name: tool.toolname,
    avatar: tool.toolavatar,
    detail: tool.tooldesc,
    purpose: tool.toolpurpose,
  };

  console.log('tool basic info', basicInfo);

  client.execute(basicQry, basicInfo, (err, result) => {
    if (err) {
      return done(err, 'unable to insert  Basic Record in DB');
    }
    return done(null, 'Sucess');
  });
}

// this function inserts tool Action in DB
function insertToolActionInfo(tool, done) {
  console.log('tool data in toolaction.....', tool);
  const query = `INSERT into ${TABLE_NAME[1]} (toolid,actionid,description,grantactions,name) VALUES(?,?,?,?,?)`;

  const toolactions = tool.toolAction;
  // console.log('tool action is ', toolactions);
  const actionArray = [];

  toolactions.forEach((currentAction) => {
    // console.log('current action is : ', currentAction);
    actionArray.push({ query, params: [tool.toolid, currentAction.name, currentAction.id, currentAction.grants, currentAction.desc] });
  });

  console.log('actions are ...', actionArray);

  client.batch(actionArray, { prepare: true }, (err, result) => {
    if (err) {
      console.log('error is ', err);
      done(err, 'Unable to insert Action in DB ');
    }
    return done(null, 'sucesss');
  });
}

// this function insert tool events in DB
function insertToolEventInfo(tool, done) {
  console.log('tool data in toolevent.....', tool);
  const query = `INSERT into ${TABLE_NAME[2]} (toolid,eventid,name,description,metadata) VALUES(?,?,?,?,?)`;

  const toolEvent = tool.toolEvent;
  // console.log('tool action is ', toolactions);
  const eventArray = [];

  toolEvent.forEach((currentEvent) => {
    // console.log('current action is : ', currentAction);
    eventArray.push({ query, params: [tool.toolid, currentEvent.id, currentEvent.name, currentEvent.description, currentEvent.metadata] });
  });

  console.log('actions are ...', eventArray);

  client.batch(eventArray, { prepare: true }, (err, result) => {
    if (err) {
      console.log('error is ', err);
      done(err, 'Unable to insert event in DB ');
    }
    return done(null, 'sucesss');
  });
}

// this function Uses async.parallel method to insert Complete information about tool in DB
function addToolinDB(tool, done) {
  async.parallel([
    insertBasicToolInfo.bind(null, tool),
    insertToolActionInfo.bind(null, tool),
    insertToolEventInfo.bind(null, tool),
  ], (err, results) => {
    if (err) {
      console.log('error is ....', err);
      return done(err, 'failed');
    }
    return done(null, 'success');
  });
}
// this function is to add a new tool in marketplace
function AddToolinMarketplace(tool, done) {
  if (checkIfToolExists(tool.toolid, (error, toolExists) => {
    if (toolExists) {
      if (error) {
        return done(error, 'DB Error');
      }
      return done(null, 'Tool Already exist');
    }

    console.log('tool doesnt exists');

    addToolinDB(tool, (err) => {
      if (err) {
        return done(err, 'db error');
      }
      done(null, ' Tool added');
    });
  })) { }
}


function testing(toolid, done) {
  return done(null, 'success');
}

// this function returns a single tool information for given toolid
function getSingleTool(toolid, done) {
  console.log('inside get single tool');

  const getQuery = ` SELECT * from ${TABLE_NAME} where toolid='${toolid}'`;
  client.execute(getQuery, (err, result) => {
    if (err) {
      console.log('error is ', err);
      return done(err, 'Unable to Find tool');
    }
    console.log('result is : ', result);
    return done(null, result.rows);
  });
}


function getAllTools(done) {
  // console.log('entered getall tools service');
  const query = `SELECT * FROM ${TABLE_NAME[0]}`;
  return client.execute(query, (err, results) => {
    if (err) {
      return done({ error: 'Internal error' });
    } else {
      return done(null, results.rows);
    }
  });
}


module.exports = {
  AddToolinMarketplace,
  getSingleTool,
  getAllTools,
  testing,
};
