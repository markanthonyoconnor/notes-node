//console.log('Starting app.');

const fs = require('fs');
const _= require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const titleOptions= {
    describe: 'title of note',
    demand: true,
    alias: 't'
};
const bodyOptions = {
    describe: 'Body of note',
    demand:true,
    alias: 'b'
};
const argv = yargs
    .command('add', 'Add a new note', {
        title:titleOptions,
        body:bodyOptions
    })
    .command('list', 'List all notes')
    .command('read', 'Read a note', {
        title:titleOptions
    })
    .command('remove', 'Remove a note',{
        title:titleOptions
    })
    .help()
    .argv;
    var command = argv._[0];
    //console.log('Command: ', command);
    //console.log('Yargs', argv);

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
      var newNotes =  notes.getAll();
      debugger;
      console.log(`Printing ${newNotes.length} note(s).`);
      newNotes.forEach((note) => notes.logNote(note));
      debugger;
    }
    else if (command === 'read') {

    var readNote = notes.getNote(argv.title, argv.body);
    if (readNote) {
        console.log('Note found');
        notes.logNote(readNote);
        
    }
    else{
        console.log('Note not found');
    }

    }
    else if (command === 'remove') {
        var notesRemove = notes.removeNote(argv.title);
        var message = notesRemove ? 'Note was removed' : 'Note was not found'
        console.log(message); 
    }
    else{
        console.log('Command not recognised');
    }
