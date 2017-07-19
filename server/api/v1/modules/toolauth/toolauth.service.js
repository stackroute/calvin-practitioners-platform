const config = require('../common/config');
const cassandra= require('cassandra-driver');

const client = new cassandra.Client({
  contactPoints: [config.dbconfig.dburl],
  keyspace: config.dbconfig.keyspacename,
});

function postAppIntegrationToken(tool,data,done){

        const query=`INSERT INTO userappintegration (username,toolid,tokenval,updatedon) VALUES(:username,:toolid,:tokenval,:updatedon)`;
        
        client.execute(query,data,(err,result)=>{
   
               if(err){

                   console.log('error in posting',err);
                   return done(err,'db error');
               }
              return done(null,'success'); 
        });

}

function getToolTokenFromDB({toolId,username},done){
  
    console.log('Getting token for ', toolId, ' for user', username)
    const query=`select tokenval from userappintegration where username='${username}' AND toolid='${toolId}'`;
    client.execute(query,(err,result)=>{

        if(err){
            console.log('error is ',err)
            return done(err,'unable to fetch token');
        }
        console.log("Got the result for token of user ", result.rows)
        return done(null, result.rows[0].tokenval);
    });
}

module.exports={
    postAppIntegrationToken,
    getToolTokenFromDB
}