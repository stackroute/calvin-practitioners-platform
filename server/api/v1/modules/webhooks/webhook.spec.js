const app=require('../../../../app.js');
const supertest=require('supertest');
const request=supertest(app);


require('chai').should();

const postdata={ "post": 
   { "id": 21,
     "name": "Nitin Joshi",
     "username": "nitin.joshi",
     "avatar_template": "/letter_avatar_proxy/v2/letter/n/7993a0/{size}.png",
     "created_at": "2017-07-14T19:05:54.912Z",
     "cooked": "<p>In Discourse, a topic is made up of many posts. When you are embedding Discourse on another site, you are linking a document (blog entry, HTML page, etc.) with a single topic. When people post in that topic, their comments will automatically show up on the page you embedded it in.</p>",
     "topic_id": 15,
     "topic_slug": "secod-topic-created",
     "topic_title": "Secod topic created",
    "display_username": "Nitin Joshi"
      } 
};

describe('post tooldata to community ',function(){
           token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkb21haW5OYW1lIjoiZGlnaXRhbCIsInRvb2xJZCI6ImRpc2NvdXJzZSIsInVzZXJuYW1lIjoiY2VhbnN0YWNrZGV2QGdtYWwuY29tIn0.2lqcZGRuvJZqRVWLMoYijIbmEXMIkIkZ51BIAoxTpxY";

       it('should ',function(done){
              request
              .post(`/api/v1/webhook/${token}`)
              .send(postdata)
              .end(function(err,result){
                   if(err) {
                       done(err);
                   }
                result.should.be.equal('successfully sent'); 
                done();  
              });
       });
});
