#!/usr/bin/env node
var fileSystem = require('fs');
var sampletxt = 'A startup is a business built to grow rapidly.\n';
var outputfile = './output.txt';
fileSystem.writeFileSync(outputfile,sampletxt);
console.log('Output written to '+outputfile +'using '+__filename);
