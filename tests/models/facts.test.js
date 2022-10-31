const facts = require("../../src/models/facts");
const chai = require("chai");
const expect = chai.expect;

describe("Main", () => {
  /**
   * Test for root route, with GET request
   **/
  describe("Facts", () => {
    describe("ENG - English Localization", () => {
      describe("getSingle", () => {
        it("it should return a single fact of random", () => {
          const actual = facts.getSingle();
          expect(actual).to.be.a("string");
        });
        it("it should return the single fact of ID 1", () => {
          const actualOne = facts.getSingle(1);
          const expectedOne =
            "In 1987 cats overtook dogs as the number one pet in America.";
          expect(actualOne).to.be.a("string");
          expect(actualOne).to.be.equal(expectedOne);
        });
        it("it should return the single fact of ID 3", () => {
          const actualThree = facts.getSingle(3);
          const expectedThree =
            "Mother cats teach their kittens to use the litter box.";
          expect(actualThree).to.be.a("string");
          expect(actualThree).to.be.equal(expectedThree);
        });
      });
      describe("ENG - getMany", () => {
        it("it should return an array of 3 facts of random", () => {
          const actual = facts.getMany(3);
          expect(actual).to.be.a("array");
          expect(actual[0]).to.be.a("string");
          expect(actual.length).to.be.equal(3);
        });
      });
    });
    describe("UKR - Ukraine Localization", () => {
      describe("getSingle", () => {
        it("it should return a single fact of random", () => {
          const actual = facts.getSingle(null, "ukr");
          expect(actual).to.be.a("string");
        });
        it("it should return the single fact of ID 1", () => {
          const actualOne = facts.getSingle(1, "ukr");
          const expectedOne =
            "У 1987 році кішки обігнали собак як домашню тварину номер один в Америці";
          expect(actualOne).to.be.a("string");
          expect(actualOne).to.be.equal(expectedOne);
        });
        it("it should return the single fact of ID 3", () => {
          const actualThree = facts.getSingle(3, "ukr");
          const expectedThree =
            "Кішки-матері вчать своїх кошенят користуватися туалетом";
          expect(actualThree).to.be.a("string");
          expect(actualThree).to.be.equal(expectedThree);
        });
      });
      describe("UKR - getMany", () => {
        it("it should return an array of 3 facts of random", () => {
          const actual = facts.getMany(3, "ukr");
          const allFacts = facts.getLanguageFacts("ukr");
          expect(actual).to.be.a("array");
          expect(actual[0]).to.be.a("string");
          expect(actual.length).to.be.equal(3);
          expect(allFacts).to.deep.include(actual[0]);

        });
      });
    });
    describe("ESP-ES - Spanish - Spain Localization", () => {
      describe("getSingle", () => {
        it("it should return a single fact of random", () => {
          const actual = facts.getSingle(null, "esp-es");
          expect(actual).to.be.a("string");
        });
        it("it should return the single fact of ID 1", () => {
          const actualOne = facts.getSingle(1, "esp-es");
          const expectedOne =
					"En 1987, los gatos superaron a los perros como la mascota número uno en Estados Unidos.";
          expect(actualOne).to.be.a("string");
          expect(actualOne).to.be.equal(expectedOne);
        });
      });
    });
    describe("ESP-MX - Spanish - Mexico Localization", () => {
      describe("getSingle", () => {
        it("it should return a single fact of random", () => {
          const actual = facts.getSingle(null, "esp-mx");
          expect(actual).to.be.a("string");
        });
        it("it should return the single fact of ID 1", () => {
          const actualOne = facts.getSingle(1, "esp-mx");
          const expectedOne =
					"En 1987, los gatos superaron a los perros como la mascota número uno en Estados Unidos.";
          expect(actualOne).to.be.a("string");
          expect(actualOne).to.be.equal(expectedOne);
        });
      });
      describe("getMany", () => {
        it("it should return an array of 3 facts of random", () => {
          const actual = facts.getMany(3, "esp-mx");
          const allFacts = facts.getLanguageFacts("esp-mx");
          expect(actual).to.be.a("array");
          expect(actual[0]).to.be.a("string");
          expect(actual.length).to.be.equal(3);
          expect(allFacts).to.deep.include(actual[0]);
        });
      });
    });
  });
});
