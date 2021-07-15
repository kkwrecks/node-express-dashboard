const fs = require("fs"); //5-1 require fs module
const { forEach } = require("lodash");
const path = require("path"); //5-1 require path module

//const dir = process.cwd(); //replaced in 6-7
let dir; //6-7
exports.setcwd = (cwd) => {cwd = dir}; //6-7



//5-3 store name, whether file is valid directory, path to file. if not valid directory store also the currentDir 
function getDirectoryContents(files, currentDir, query) {
    const data = [];
    files.forEach((file) => {
        if(isDirectory(currentDir, file)){
            data.push({
                name: file, 
                isDirectory: true, 
                path: path.join(query,file)
            })
        } else {
            data.push({
                name: file, 
                isDirectory: false, 
                path: path.join(query,file),
                currentDir
            });
        }
    })
    return data;
}

//5-2 implement isDirectory()function
function isDirectory(currentDir, file) {
    const fileInfo = fs.statSync(path.join(currentDir,file)); //getting file path
    return fileInfo.isDirectory(); //returns boolean
}

//5-4 fs.readdir to read current contents of files
function readDir(currentDir, res, query) {
    fs.readdir(currentDir, (err,files) => {
        let directoryContents = [];
        if (!err) {
            directoryContents = getDirectoryContents(files,currentDir,query)
        }
        res.json(directoryContents)
    })
}

//assign it the value of req.query.path, or the empty string ("") if req.query.path is falsy. 
//5-6 
exports.get = (req, res) => {
    let currentDir = dir;
    const query = req.query.path || ""; 
    if (query) {
        currentDir = path.join(currentDir, query)
    }
    readDir(currentDir,res,query);
};
