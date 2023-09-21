const facts = require("../../src/models/facts");
const chai = require("chai");
const expect = chai.expect;

describe("Testing Models", () => {
  /**
   * Test for root route, with GET request
   **/
  describe("Facts Model", () => {
    describe("ENG - Using default settings", () => {
      describe("getSingle using defaults", () => {
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
    });
    describe("getMany using defaults", () => {
      it("it should return an array of 3 facts of random", () => {
        const actual = facts.getMany(3);
        expect(actual).to.be.a("array");
        expect(actual[0]).to.be.a("string");
        expect(actual.length).to.be.equal(3);
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
    describe("BEN - Indian Localization", () => {
      describe("getSingle", () => {
        it("it should return a single fact of random", () => {
          const actual = facts.getSingle(null, "ben");
          expect(actual).to.be.a("string");
        });
        it("it should return the single fact of ID 1", () => {
          const actualOne = facts.getSingle(1, "ben");
          const expectedOne =
            "1987 সালে আমেরিকার এক নম্বর পোষা প্রাণী হিসাবে বিড়াল কুকুরকে ছাড়িয়ে যায়।";
          expect(actualOne).to.be.a("string");
          expect(actualOne).to.be.equal(expectedOne);
        });
        it("it should return the single fact of ID 3", () => {
          const actualThree = facts.getSingle(3, "ben");
          const expectedThree =
            "মা বিড়াল তাদের বিড়ালছানাদের লিটার বাক্স ব্যবহার করতে শেখায়।";
          expect(actualThree).to.be.a("string");
          expect(actualThree).to.be.equal(expectedThree);
        });
      });
      describe("BEN - getMany", () => {
        it("it should return an array of 3 facts of random", () => {
          const actual = facts.getMany(3, "ben");
          const allFacts = facts.getLanguageFacts("ben");
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
    describe("GER - German Localization", () => {
      describe("GER - getSingle", () => {
        it("it should return a single fact of random", () => {
          const actual = facts.getSingle(null, "ger");
          expect(actual).to.be.a("string");
        });
        it("it should return the single fact of ID 1", () => {
          const actualOne = facts.getSingle(1, "ger");
          const expectedOne =
            "Im Jahr 1987 überholten Katzen die Hunde als Nr.1 Haustier in Amerika.";
          expect(actualOne).to.be.a("string");
          expect(actualOne).to.be.equal(expectedOne);
        });
      });
      describe("GER - getMany", () => {
        it("it should return the single fact of ID 3", () => {
          const actualThree = facts.getSingle(3, "ger");
          const expectedThree =
            "Die Katzenmutter bringt ihren Kitten bei das Katzenklo zu verwenden";
          expect(actualThree).to.be.a("string");
          expect(actualThree).to.be.equal(expectedThree);
        });
      });
    });
    describe("ZHO - Chinese Localization", () => {
      describe("ZHO - getSingle", () => {
        it("it should return a single fact of random", () => {
          const actual = facts.getSingle(null, "zho");
          expect(actual).to.be.a("string");
        });
        it("it should return the single fact of ID 1", () => {
          const actualOne = facts.getSingle(1, "zho");
          const expectedOne =
            "在 1987 年的美國，貓首次取代狗成為最多人飼養的寵物。";
          expect(actualOne).to.be.a("string");
          expect(actualOne).to.be.equal(expectedOne);
        });
      });
      describe("ZHO - getMany", () => {
        it("it should return the single fact of ID 3", () => {
          const actualThree = facts.getSingle(3, "zho");
          const expectedThree =
            "貓媽媽會教小貓如何使用貓砂盤。";
          expect(actualThree).to.be.a("string");
          expect(actualThree).to.be.equal(expectedThree);
        });
      });
    });
    describe("URD - Urdu Localization", () => {
      describe("URD - getSingle", () => {
        it("it should return a single fact of random", () => {
          const actual = facts.getSingle(null, "urd");
          expect(actual).to.be.a("string");
        });
        it("it should return the single fact of ID 1", () => {
          const actualOne = facts.getSingle(1, "urd");
          const expectedOne =
            "1987 میں بلیوں نے کتوں کو امریکہ کے نمبر ایک پالتو جانور کے طور پر پیچھے چھوڑ دیا";
          expect(actualOne).to.be.a("string");
          expect(actualOne).to.be.equal(expectedOne);
        });
      });
      describe("URD - getMany", () => {
        it("it should return the single fact of ID 3", () => {
          const actualThree = facts.getSingle(3, "urd");
          const expectedThree =
            "ماں بلیاں اپنے بلی کے بچوں کو ٹوائلٹ استعمال کرنا سکھاتی ہیں";
          expect(actualThree).to.be.a("string");
          expect(actualThree).to.be.equal(expectedThree);
        });
      });
    });
    describe("FIL - Filipino Localization", () => {
      describe("FIL - getSingle", () => {
        it("it should return a single fact of random", () => {
          const actual = facts.getSingle(null, "fil");
          expect(actual).to.be.a("string");
        });
        it("it should return the single fact of ID 1", () => {
          const actualOne = facts.getSingle(1, "fil");
          const expectedOne =
            "Noong 1987, naunahan ng mga pusa ang aso bilang pinaka-sikat na alagang hayop sa America";
          expect(actualOne).to.be.a("string");
          expect(actualOne).to.be.equal(expectedOne);
        });
      });
      describe("FIL - getMany", () => {
        it("it should return the single fact of ID 3", () => {
          const actualThree = facts.getSingle(3, "fil");
          const expectedThree =
            "Tinuturuan ng mga ina ang kanilang mga alagang kuting na gumamit ng litter box.";
          expect(actualThree).to.be.a("string");
          expect(actualThree).to.be.equal(expectedThree);
        });
      });
    });
    describe("FRA - French Localization", () => {
      describe("FRA - getSingle", () => {
        it("it should return a single fact of random", () => {
          const actual = facts.getSingle(null, "fra");
          expect(actual).to.be.a("string");
        });
        it("it should return the single fact of ID 1", () => {
          const actualOne = facts.getSingle(1, "fra");
          const expectedOne =
            "En 2021, la France compte plus de 14 millions de chats contre seulement 8 millions de chiens.";
          expect(actualOne).to.be.a("string");
          expect(actualOne).to.be.equal(expectedOne);
        });
      });
      describe("FRA - getMany", () => {
        it("it should return the single fact of ID 3", () => {
          const actualThree = facts.getSingle(3, "fra");
          const expectedThree =
            "La maman chat apprend à ses chatons à utiliser la litière.";
          expect(actualThree).to.be.a("string");
          expect(actualThree).to.be.equal(expectedThree);
        });
      });
    });
    describe("POR - Portuguese Localization", () => {
      describe("POR - getSingle", () => {
        it("it should return a single fact of random", () => {
          const actual = facts.getSingle(null, "por");
          expect(actual).to.be.a("string");
        });
        it("it should return the single fact of ID 1", () => {
          const actualOne = facts.getSingle(1, "por");
          const expectedOne =
            "Em 1987, os gatos ultrapassaram os cachorros como o animal de estimação número um na America.";
          expect(actualOne).to.be.a("string");
          expect(actualOne).to.be.equal(expectedOne);
        });
      });
      describe("POR - getMany", () => {
        it("it should return the single fact of ID 3", () => {
          const actualThree = facts.getSingle(3, "por");
          const expectedThree =
            "As mães gatas ensinam seus filhotes a usar a caixa de areia.";
          expect(actualThree).to.be.a("string");
          expect(actualThree).to.be.equal(expectedThree);
        });
      });
    });
    describe("RUS - Russian Localization", () => {
      describe("RUS - getSingle", () => {
        it("it should return a single fact of random", () => {
          const actual = facts.getSingle(null, "rus");
          expect(actual).to.be.a("string");
        });
        it("it should return the single fact of ID 1", () => {
          const actualOne = facts.getSingle(1, "rus");
          const expectedOne =
            "В 1987 году кошки обогнали собак как домашнее животное номер один в Америке";
          expect(actualOne).to.be.a("string");
          expect(actualOne).to.be.equal(expectedOne);
        });
      });
      describe("RUS - getMany", () => {
        it("it should return the single fact of ID 3", () => {
          const actualThree = facts.getSingle(3, "rus");
          const expectedThree =
            "Кошки-матери учат своих котят пользоваться туалетом";
          expect(actualThree).to.be.a("string");
          expect(actualThree).to.be.equal(expectedThree);
        });
      });
    });
  });
});
