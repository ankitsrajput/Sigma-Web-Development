const fs = require("fs");

// Reading files from docs directory
fs.readdir("docs", (err, files) => {
    if (err) {
        console.log(err);
        return;
    }
    files.forEach(file => {
        if (file.length === 0) {
            console.log("Directory is empty!");
            return;
        }
        else {
            let ext = getExtension(file);
            createFol(ext);
            console.log(`File Name: ${file} | Extension: ${ext}`);
        }
    });
});

// Function to getting extention of every file...
function getExtension(fileName) {
    return fileName.slice(fileName.lastIndexOf('.'));
}

// Function to create folders based on file extensions...
function createFol(ext) {
    fs.readdir("docs", (err, files) => {
        if (err) {
            console.log(err);
            return;
        }
        files.forEach(file => {
            if (file.length === 0) {
                console.log("Directory is empty!");
                return;
            }
            if (getExtension(file) === ext) {
                fs.mkdir(`docs/${ext.slice(1)}`, { recursive: true }, (err) => {
                    if (err) {
                        console.log(err);
                        return;
                    }
                    console.log(`Folder Created For: ${ext.slice(1)}`);
                    fs.rename(`docs/${file}`, `docs/${ext.slice(1)}/${file}`, (err) => {
                        if (err) {
                            console.log(err);
                            return;
                        }
                    });
                });
            }
        });
    });
}