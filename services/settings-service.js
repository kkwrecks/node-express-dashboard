const fs = require("fs");
//const { settings } = require("../app");
const path = require('path');

const settingsFilePath = path.join(__dirname, '../json/settings.json'); //6-2

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

//6-6
//not yet tested this
//(This is not part of the task, and is not tested.) You can now start the app and visit the settings page at http://localhost:3000/settings . Try entering an invalid directory path, and clicking the Submit button. You should see an error saying the default directory is not valid. Now, enter a valid directory path and then click Submit. You should see a success message and the valid default directory should be displayed.
function getDefaultDir() {
  const defaultDir = getSettings().defaultDir;
  if(!defaultDir) {
    return process.cwd()
  }
  return isValidDir(defaultDir) ? defaultDir: process.cwd()
}

//6-5
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