const registerGroup = require('./newgroup');
const registerWebhook = require('./registerWebhook');

function generateGroup ({token, domainName, toolId, username}, done){
    //register Group for the community
    
    const postDetails = {"name": domainName };
    console.log('domain', domainName)
    registerGroup.createGroup(postDetails, (err, res)=>{
        if (err) {
            return done(err);
        }
        console.log("Group is created with - ",domainName ," and res",res)
        done(null, res);
    }); 
}

function generateWebhook ({token, domainName, toolId, username}, res,  done){
    // console.log("token :- ",`http://localhost:3000/api/v1/webhook/${token}`);
    // register webhook for the community
    console.log('res.id', res.basic_group.id)
    let arr = [];
    arr.push(res.basic_group.id);

     postDetails =  {
            // "payload_url": `${config.CALVIN_APP_BASE_URL}/api/v1/webhook/${token}`,
            "payload_url": `http://calvin-pages.stackroute.in/api/v1/webhook/${token}`,
            "secret": token,
            "wildcard_web_hook": true,
            "active": true,
            "web_hook_event_type_ids": [{"id": 1, "name": "topic"},{"id": 2,"name": "post"},{"id": 3,"name": "user"}],
            "category_ids": [],
            "group_ids": arr,
            "content_type": 1,
            "verify_certificate": false
        }

	registerWebhook.generateWebhook(postDetails, (err, result)=>{
        if (err) {
            return done(err);
        }
        done(null, result);
    });
}


module.exports = {
    generateGroup,
    generateWebhook
}