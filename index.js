#!/usr/bin/env node
const fsPromises = require('fs/promises');

fsPromises.readdir(process.cwd(), {withFileTypes: true}).then(files => {
    for(let file of files) {
        file.isDirectory() ? console.log('\x1b[36m%s\x1b[0m', file.name) : console.log(file.name);
    }
}).catch(err => console.log(err));