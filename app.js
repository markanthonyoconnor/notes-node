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
    var note = notes.addNote(argv.title, argv.body);
    // if (note == undefined) {
    //     console.log('Note already exists', argv.title,argv.body);
        
    // }
    // else{
    //     console.log('note was added', argv.title,argv.body);
    // }
    var fetchNewNotes = notes.fetchNotes(argv.title,argv.body);
    fetchNewNotes.forEach(function(element) { return element.title, element.body;}, this);
    console.log(fetchNewNotes);
    // var sortedArray = _.uniq(fetchNewNotes);
    var returnArray = _.uniq(_.map(fetchNewNotes, function(a){ return a.title,a.body; }));
    console.log('Note already exists',returnArray);
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
