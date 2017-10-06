console.log('Starting app.');

const fs = require('fs');
const _= require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
var command = process.argv[2];
console.log('Command: ', command);
console.log('Yargs', argv);

if (command === 'add') {
    //console.log('command step1');
    var note = notes.addNoteWithLodash(argv.title, argv.body);
    // if (note == undefined) {
    //     console.log('Note already exists', argv.title,argv.body);
        
    // }
    // else{
    //     console.log('note has been added', argv.title,argv.body);
    // }
    
    // console.log('Note step2');
}
else if (command === 'list') {
    notes.getAll();
}
else if (command === 'read') {
   notes.getNote(argv.title);
}
else if (command === 'remove') {
    notes.removeNote(argv.title);
}
else{
    console.log('Command not recognised');
}
