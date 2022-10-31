const facts = [
  "En 1987, los gatos superaron a los perros como la mascota número uno en Estados Unidos.",
];
const langName = "spanish",
  langISO = "esp",
  langLocale = "es",
  langLocaleName = "spain";

module.exports = {
  langName,
  langISO,
  langLocale,
  langLocaleName,
  code: `${langISO}-${langLocale}`,
  codeName: `${langName} (${langLocaleName})`,
  facts: facts,
};
