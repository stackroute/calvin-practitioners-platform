
const toolauthservice = require('./toolauth.service');


function getToolToken(toolid,username,done){
    
      console.log('got user name',username);
    //   toolauthservice.getToolToken();
      toolauthservice.getToolTokenFromDB(toolid,username,done);
}


module.exports={
    getToolToken
}