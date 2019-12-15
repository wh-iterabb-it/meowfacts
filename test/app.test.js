const app = require('../src/app');
const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();

chai.use(chaiHttp);

describe('Main', () => {
  /**
   * Test for root route, with GET request
  **/
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

  describe('/GET health', () => {
    it('it should have successful GET', (done) => {
      chai.request(app)
        .get('/health')
        .end((err, res) => {
          res.should.have.status(200);
          done();
      });
    });
  });

});
