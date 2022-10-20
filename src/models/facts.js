const english = require("./localization/eng-US");
const russian = require("./localization/rus-RU");
const ukraine = require("./localization/ukr-UA");
const german = require("./localization/de-DE");
const spanishMexico = require("./localization/esp-MX");
const spanishSpain = require("./localization/esp-ES");

/**
 *
 * @param {String} langName - ISO 639-2 Code
 * @returns {String} fact localized to the language
 */
function getLanguageFacts(langName) {
  switch (langName) {
    case "eng-us": // english
    case "eng": // default english
      return english.facts;
    case "rus-ru": // russian
    case "rus": // default russian
      return russian.facts;
    case "ukr-ua": // ukrainian
    case "ukr": // default ukrainian
      return ukraine.facts;
    case "esp-es": // spanish Spain
      return spanishSpain.facts;
    case "esp-mx": // spanish Mexico
    case "esp": // default spanish
      return spanishMexico.facts;
    case "de-de": // german Germany
    case "ger": // default german
      return german.facts;
    case undefined: // no language specified
    default:
      return english.facts;
  }
}

/**
 * getSingle
 * @description A simple function to return a random catfact
 * @param {Number} ID - the specific index / unique id of a fact starting at 1
 * @param {String} lang
 * @returns {String} - a single fact about cats
 **/
function getSingle(ID = null, lang) {
  const facts = getLanguageFacts(lang);
  if (ID) {
    const id = ID - 1;
    return facts[id];
  }

  return facts[Math.floor(Math.random() * facts.length)];
}

/**
 * getSingle
 * @description A simple function to return multiple random catfacts
 * @param {Number} count is a required param the number of catfacts to return in an array
 * @param {String} lang
 * @returns {Array[String]} many facts returned
 **/
function getMany(count, lang) {
  const facts = getLanguageFacts(lang);
  return [...Array(facts.length).keys()]
    .sort(() => 0.5 - Math.random())
    .slice(0, count)
    .map((index) => facts[index]);
}

module.exports = { getSingle, getMany, getLanguageFacts };
