const fs = require("fs"); //5-1 require fs module
const { forEach } = require("lodash");
const path = require("path"); //5-1 require path module

function getDirectoryContents(files, currentDir, query) {
    const data = [];
    files.forEach(file)
}

//5-2 implement isDirectory()function
function isDirectory(currentDir, file) {
    const fileInfo = fs.statSync(path.join(currentDir,file)); //getting file path
    return fileInfo.isDirectory(); //returns boolean
}

function readDir(currentDir, res, query) {
}

exports.get = (req, res) => {
};
