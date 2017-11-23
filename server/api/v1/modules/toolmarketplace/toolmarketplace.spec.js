const app=require('../../../../app.js');
const supertest=require('supertest');
const request=supertest(app);
require('chai').should();

const toolid='discourse';
const tooldata={


}

describe('POST Tool to Toolmarketplace',function(){

    it('should post tool successfully',function(){

        request
        .post(`/api/v1/toolmarketplacetoolid/${toolid}`)
        .send(tooldata)
        .end(function(err,result){
            if(err) {
                done(err);
            }
            result.should.be.equal('')
        })
    })
})