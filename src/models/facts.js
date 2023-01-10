const localization = require("./localization");

/**
 * getLanguageFacts
 * @param {String} requestedLang - ISO 639-2 Code
 * @returns {String} fact localized to the language
 */
function getLanguageFacts(requestedLang) {
  for (const language in localization) {
    if (
      localization[language].code === requestedLang ||
      localization[language].langISO === requestedLang
    ) {
      return localization[language].facts;
    }
  }

  return localization["eng-us"].facts;
}

/**
 * getSingle
 * @description A simple function to return a random catfact
 * @param {Number} ID - the specific index / unique id of a fact starting at 1
 * @param {String} lang
 * @returns {String} - a single fact about cats
 **/
function getSingle(ID = null, lang = "eng-us") {
  const facts = getLanguageFacts(lang);
  if (ID) {
    const id = ID - 1;
    return facts[id];
  }

  return facts[Math.floor(Math.random() * facts.length)];
}

/**
 * getMany
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

/**
 * getLanguages
 * @description A simple function to return array of language objects
 * @returns {Array[Object]} array of language objects returned
 **/
function getLanguages() {
  return Object.values(localization).reduce((carry, language) => {
    const {
      langLocale,
      langISO,
      code,
      langLocaleName,
      langName,
      codeName,
      facts,
    } = language;

    return [
      ...carry,
      {
        locale_code: langLocale,
        iso_code: langISO,
        full_code: code,
        local_name: langLocaleName,
        english_name: langName,
        full_name: codeName,
        fact_count: facts?.length || 0,
      },
    ];
  }, []);
}

module.exports = { getSingle, getMany, getLanguageFacts, getLanguages };
