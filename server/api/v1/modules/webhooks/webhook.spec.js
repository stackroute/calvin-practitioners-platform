const app=require('../../../../app.js');
const supertest=require('supertest');
const request=supertest(app);

require('chai').should();

describe('post tooldata to community ',function(){
           token="hi";
       it('should ',function(done){
              request.post(`api/v1/webhook/${token}`)
              .end(function(err,result){
                   if(err) {
                       done(err);
                   }
                result.should.be.equal('successfully sent'); 
                done();  
              });
       });
});
