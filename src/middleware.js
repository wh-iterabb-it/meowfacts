const facts = require("./models/facts");
const { convert } = require("sst");

const VALID_LANGUAGES = ["eng", "ukr", "rus"];

/**
 * Check if user entered valid count parameter
 * @param {Number} param
 * @param {String} lang
 * @returns {Boolean} true if valid
 */
function validateCount(param, lang) {
  const safeParam = convert.toNumber(param);
  if (safeParam <= 1 || safeParam >= facts.getLanguageFacts(lang).length) {
    return false;
  }
  return true;
}

/**
 * a middleware for validating the language parameter.
 * @param language {String} The language to validate.
 * @returns {Boolean} True if the language is valid, false otherwise.
 */
function validateLanguage(language) {
  if (VALID_LANGUAGES.indexOf(language) === -1) {
    return false;
  }
  return true;
}

/**
 *
 * @param {Request} request - Express request object
 * @param {Response} response - Express response object
 * @param {NextFunction} next - Express next function
 */
function invalidLanguageMiddleware(request, response, next) {
  if (
    !request.params ||
    !request.params.lang ||
    request.params.lang.length === 0
  ) {
    next(); // no language specified, so continue
  }

  if (!validateLanguage(request.params.lang)) {
    // language specified, so continue
    response
      .status(400)
      .send(`Invalid language, valid languages are "eng", "ukr", "rus"`);
    return;
  }
  next();
}

/**
 *
 * @param {Request} request - Express request object
 * @param {Response} response - Express response object
 * @param {NextFunction} next - Express next function
 */
function invalidCountMiddleware(request, response, next) {
  if (
    !request.params ||
    !request.params.count ||
    request.params.count.length === 0
  ) {
    next(); // no count specified, so continue
  }

  if (!validateCount(request.params.count, request.params.lang)) {
    // count specified, so continue
    response
      .status(400)
      .send(
        `Invalid count, valid counts are between 2 and ${
          facts.getLanguageFacts(request.params.lang).length
        }`
      );
    return;
  }
  next();
}

function invalidIDMiddleware(request, response, next) {
  if (!request.params || !request.params.id || request.params.id.length === 0) {
    next(); // no id specified, so continue
  }

  if (!validateCount(request.params.id, request.params.lang)) {
    // id specified, so continue
    response
      .status(400)
      .send(
        `Invalid ID, valid IDs are between 1 and ${
          facts.getLanguageFacts(request.params.lang).length
        }`
      );
    return;
  }
  next();
}

module.exports = {
  invalidLanguageMiddleware,
  invalidCountMiddleware,
  invalidIDMiddleware,
};
