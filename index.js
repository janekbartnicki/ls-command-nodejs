#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

fs.readdir(process.cwd(), (err, files) => {
    if(err) throw new Error(err);

    for(let file of files) {
        fs.lstat(path.basename(file), (err, stat) => {
            if(stat.isDirectory()) {
                console.log(file, 'is directory');
            }
        })
    }
    })
