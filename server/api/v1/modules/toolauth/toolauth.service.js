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

function getToolTokenFromDB({toolId,userName},done){
  
    console.log('inside db of db tool token')
    const query=`select tokenval from userappintegration where username='${userName}' AND toolid='${toolId}'`;
    client.execute(query,(err,result)=>{

        if(err){
            console.log('error is ',err)
            return done(err,'unable to fetch token');
        }
        return done(null,result.rows);
    });
}

module.exports={
    postAppIntegrationToken,
    getToolTokenFromDB
}