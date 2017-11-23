const app=require('../../../../app.js');
const supertest=require('supertest');
const request=supertest(app);
const BASE_COMMUNITY_SERVICE_URL = 'http://calvin-communities.blr.stackroute.in/api/v1';
require('chai').should();

const data=[ { "toolId": "www.creativebloq.com", "actions": { "share": "true" } },
             { "toolId": "www.creativebloq.com", "actions": { "upload": "true" } } ];

describe('patch tool actions to a role ',function(){
       it('should return updated actions',function(done){
              request
              .patch('http://calvin-communities.blr.stackroute.in/api/v1/communityrole/asdbfe/roles/admin')
              .send(data)
              .end(function(err,result){
                   if(err) {
                       done(err);
                   }
                result.should.be.equal('Updated'); 
                done();  
              });
       });
       it('should create new role ')
       
});
