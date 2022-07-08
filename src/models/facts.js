const english = require('./localization/en-US');
const russian = require('./localization/ru-RU');
const ukraine = require('./localization/uk-UA');

function getLanguageFacts(langName) {
  switch (langName) {
    case "english":
      return english.facts;
      break;
    case "russian":
      return russian.facts;
      break;
    case "ukrainian":
      return ukraine.facts;
      break;
    default:
      return english.facts;
      break;
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

module.exports = { getSingle, getMany, getLanguageFacts};
