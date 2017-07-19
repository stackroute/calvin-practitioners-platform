// const communityTemplate = require('');
const config = require('../../../../appconfig/env/dev');
const urlValue =config.BASE_COMMUNITY_SERVICE_URL;

//Require the dev-dependencies
const chai = require('chai');

const request = require('supertest');

const server = require('../../index.js');

const should = chai.should();

describe('/GET communityTemplate', () => {
    it('it should GET all the community template list', (done) => {
        request(server)
            .get(`${urlValue}/communitytemplates`)
            .expect(200)
            .expect('Content-Type', /json/)
            .end((err, res) => {
                console.log("error" + err);
                if (err) { done(err); return; }
                (res.body).to.be.an('array');
                done();
            });
    });
});