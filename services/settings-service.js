const fs = require("fs");
const { settings } = require("../app");

const settingsFilePath = path.join(__dirname, /json/settings.json); //6-2

//6-3
function getSettings() {
  const settingsData = fs.readFileSync(settingsFilePath);
  return JSON.parse(settingsData);
}
//6-4
function writeSettings(newSettings) {
  const settingsJSON = JSON.stringify(newSettings, null, 2);

}

function getDefaultDir() {
}

function isValidDir(dirPath) {
}

module.exports = {
  getSettings,
  writeSettings,
  getDefaultDir,
  isValidDir
};