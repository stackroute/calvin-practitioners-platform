const communityTemplate = require('../app/modules/communityTemplates');

//Require the dev-dependencies
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const should = chai.should(); 
  describe('/GET communityTemplate', () => {
      it('it should GET all the community template list', (done) => {
        chai.request(server)
            .get('/communityTemplates')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
            done();
            });
      });
  });