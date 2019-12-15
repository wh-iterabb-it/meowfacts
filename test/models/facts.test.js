const facts = require('../../src/models/facts');
const chai = require('chai');
const expect = chai.expect;

describe('Main', () => {
  /**
   * Test for root route, with GET request
  **/
  describe('Testing the facts model', () => {
    it('it should return a fact', () => {
      const actual = facts.getSingle();
      expect(actual).to.be.a('string');
    });
  });

});
