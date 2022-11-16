const path = require("path");
const fs = require("fs");

const defaultLanguages = require("./defaultLanguages");

const localizations = {};
const basename = path.basename(module.filename);
const defaultLanguagesName = "defaultLanguages.js";

// Do a barrel export
// Barrelling all the localization files into a single object
// any file in this folder will get a key in the localizations object
// the key will be the filename without the extension, lowercase
// Example: "eng-US.js" will be called as localizations["eng-us"]
fs.readdirSync(__dirname)
  .filter(
    (file) =>
      file.indexOf(".") !== 0 &&
      file !== basename &&
      file !== defaultLanguagesName &&
      file.slice(-3) === ".js"
  )
  .forEach((file) => {
    localizations[
      file.substring(0, file.length - 3).toLowerCase()
    ] = require(path.join(__dirname, file));
  });

module.exports = { localizations, defaultLanguages };
