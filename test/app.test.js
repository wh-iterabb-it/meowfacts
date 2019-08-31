//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

let app = require('../src/app');

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');

let should = chai.should();


chai.use(chaiHttp);
//Our parent block
describe('Main', () => {

  /*
  * Test the /GET route
  */
  describe('/GET facts', () => {
      it('it should have successful GET', (done) => {
        chai.request(app)
            .get('/')
            .end((err, res) => {
              res.should.have.status(200);
              done();
            });
      });
  });

});
