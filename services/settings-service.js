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
  try {
    fs.writeFileSync(settingsFilePath, settingsJSON); 
    return true;
  } catch {
    return false;
  }
}

function getDefaultDir() {
  const defaultDir = getSettings().defaultDir;
  return (isValidDir(defaultDir) ? defaultDir : process.cwd);
}

function isValidDir(dirPath) {
  try {
    fs.readdirSync(dirPath);
    return true;
  } catch {return false;}
}

module.exports = {
  getSettings,
  writeSettings,
  getDefaultDir,
  isValidDir
};