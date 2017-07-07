const cassandra = require('cassandra-driver');
const config = require('../common/config'); const client = new cassandra.Client({
  contactPoints: [config.dbconfig.dburl],
  keyspace: config.dbconfig.keyspacename,
});

const TABLE_NAME = 'tooltest';// this function is to check if tool is already present in DB

function checkIfToolExists(toolid, done) {
  const checkQry = `SELECT * FROM ${TABLE_NAME} where toolid = '${toolid}'`;
  client.execute(checkQry, (err, result) => {
    if (err) {
      console.log('err', err);
      return done('db error', err);
    }
    if ((!Array.isArray(result.rows)) || (!result.rows.length)) {
      return done(null, false);
    } return done(null, true);
  });
} function addToolinDB(tool, done) {    // console.log('toolaction',tool.toolAction);
   // console.log('tool event',tool.toolEvent);
  const toolte = {
    id: tool.toolid,
    name: tool.toolname,
    avatar: tool.toolavatar,
    detail: tool.tooldesc,
  }; console.log(typeof toolte.desc);
  console.log(toolte);
  const insertQry = `INSERT INTO ${TABLE_NAME} (toolid,toolname,toolavatar,tooldesc) VALUES(:id,:name,:avatar,:detail);`;
  client.execute(insertQry, toolte, (err) => {
    if (err) {
      console.log('err', err);
      return done(err);
    }
    return done();
  });
}
// this function is to add a new tool in marketplace
function AddToolinMarketplace(tool, done) {
  console.log('toolid', tool.toolid);
  console.log('inside addtoolmarketplkace service'); if (checkIfToolExists(tool.toolid, (error, toolExists) => {
    if (toolExists) {
      if (error) {
        return done(error, 'DB Error');
      }
      return done(null, 'Tool Already exist');
    } addToolinDB(tool, (err) => {
      if (err) {
        return done(err, 'db error');
      }
      done(null, ' Tool added');
    });
  })) { }
}// // function addToolinDB(tool) {
//   // const insertQry = `INSERT into tools (toolid,toolname,toolactions,toolevents)
//   //                VALUES(:toolid,:toolname,:toolaction,:toolevents);`;
// // }
// // this function is to add a new tool in marketplace
// function AddToolinMarketplace(tool, done) {
//   // const insertQry = `INSERT into tools (toolid,toolname,toolactions,toolevents)
//   //                VALUES(:toolid,:toolname,:toolaction,:toolevents);`;//   if (checkIfToolExists(tool.toolid, (error, toolExists) => {
//     if (toolExists) {
//       if (error) {
//         return done(error, 'DB Error');
//       }
//     }
//     return done();
//   }));
// }
// }

function getToolFromDB(toolid,done){
  const getQuery= `SELECT * FROM ${TABLE_NAME} where toolid = '${toolid}'`;
  client.execute(getQuery,(err,result)=>{

       if(err){
           console.log('error is ', err);
           return done(err,'Unable to fetch');
       }
     else{
         console.log('result is '+result.rows);
         return done(null,result.rows);
     }
  });

}


module.exports= {
    AddToolinMarketplace: AddToolinMarketplace,
    getToolFromDB: getToolFromDB
};
