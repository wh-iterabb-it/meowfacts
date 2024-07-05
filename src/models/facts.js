const { localizations, defaultLanguages } = require("./localizations");

/**
 * getLanguageFacts
 * @param {String} requestedLang - ISO 639-2 Code
 * @returns {Array} facts localized to the language
 */
const getLanguageFacts = (requestedLang) => {
  if (defaultLanguages[requestedLang]) {
    return defaultLanguages[requestedLang].facts;
  }

  const language = Object.values(localizations).find(
    ({ code, langISO }) => code === requestedLang || langISO === requestedLang
  );

  return language ? language.facts : localizations["eng-us"].facts;
};

/**
 * getSingle
 * @description A simple function to return a random fact
 * @param {Number} ID - the specific index / unique id of a fact starting at 1
 * @param {String} lang - language code
 * @returns {String} - a single fact
 **/
const getSingle = (ID = null, lang = "eng-us") => {
  const facts = getLanguageFacts(lang);
  return ID ? facts[ID - 1] : facts[Math.floor(Math.random() * facts.length)];
};

/**
 * getMany
 * @description A simple function to return multiple random facts
 * @param {Number} count - the number of facts to return
 * @param {String} lang - language code
 * @returns {Array[String]} - an array of facts
 **/
const getMany = (count, lang) => {
  const facts = getLanguageFacts(lang);
  return Array.from({ length: facts.length }, (_, i) => i)
    .sort(() => 0.5 - Math.random())
    .slice(0, count)
    .map((index) => facts[index]);
};

/**
 * getLanguages
 * @description A simple function to return an array of language objects
 * @returns {Array[Object]} - an array of language objects
 **/
const getLanguages = () =>
  Object.values(localizations).map(
    ({
      langLocale,
      langISO,
      code,
      langLocaleName,
      langName,
      codeName,
      facts,
    }) => ({
      locale_code: langLocale,
      iso_code: langISO,
      full_code: code,
      local_name: langLocaleName,
      english_name: langName,
      full_name: codeName,
      fact_count: facts?.length || 0,
    })
  );

module.exports = { getSingle, getMany, getLanguageFacts, getLanguages };
