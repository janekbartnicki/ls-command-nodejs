#!/usr/bin/env node
const fs = require('fs');
const fsPromises = require('fs/promises');

fs.readdir(process.cwd(), (err, files) => {
    if(err) throw new Error(err);

    // for(let file of files) {
    //     fs.lstat(file, (err, stat) => {
    //         if(err) throw new Error(err);
    //         if(stat.isDirectory()) {
    //             console.log('\x1b[36m%s\x1b[0m', file);             
    //         } else console.log(file);
    //     })
    // }
    const filesArray = [];

    for(let file of files) {
        fsPromises.lstat(file).then((stat) => {
            if(err) console.log(err);
            if(stat.isDirectory()) {
                console.log('\x1b[36m%s\x1b[0m', file);             
            } else console.log(file);
    })
    }
})
