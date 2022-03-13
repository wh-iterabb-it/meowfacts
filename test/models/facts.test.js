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

  describe('Testing the facts count model', () => {
    it('it should return 5 facts', () => {
      const actual = facts.getCountedFacts(5);
      expect(actual).to.have.length(5);
    });
  });

  describe('Testing the facts count model with undefined', () => {
    it('it should return 1 fact', () => {
      const actual = facts.getCountedFacts(undefined);
      expect(actual).to.have.length(1);
    });
  });
});
