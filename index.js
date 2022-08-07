#!/usr/bin/env node
import fsPromises from 'fs/promises';
import chalk from 'chalk';

fsPromises.readdir(process.cwd(), {withFileTypes: true}).then(files => {
    for(let file of files) {
        console.log(file.isDirectory() ? chalk.blue(file.name) : file.name);
    }
}).catch(err => console.log(err));