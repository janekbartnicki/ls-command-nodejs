#!/usr/bin/env node
import fsPromises from 'fs/promises';
import chalk from 'chalk';

const locationArgument = process.argv[2] || process.cwd();

fsPromises.readdir(locationArgument, {withFileTypes: true}).then(files => {
    for(let file of files) {
        console.log(file.isDirectory() ? chalk.blue(file.name) : file.name);
    }
}).catch(err => console.log(chalk.bgRedBright('ERROR'), err));