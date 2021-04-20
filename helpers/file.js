import fs from "fs";

export function getFilesInPath(baseURL) {
    try {
        const arr = [];
        readDir(arr, baseURL);
        return {paths: arr}
    } catch (error) {
        return {error}
    }
}

function readDir(arr, basePath, path = '') {
    const stats = fs.statSync(basePath + '/' + path);

    if (stats.isDirectory()) {
        const files = getFilesInDir(basePath + '/' + path);
        files.forEach(file => {
            readDir(arr, basePath, path + '/' + file);
        });
    } else {
        arr.push(path.substr(1));
    }
}

function getFilesInDir(dir) {
    return fs.readdirSync(dir).map(file => file);
}