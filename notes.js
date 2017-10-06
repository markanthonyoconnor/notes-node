console.log('Starting notes app!');

const fs = require('fs');

const _= require('lodash');

var fetchNotes = () =>{
    try {
        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
        
       
   } catch (error) {
       return [];
   }
};

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

var addNote = (title, body) => {
    //console.log('add note step 1')
   var notes = fetchNotes();
   var note ={
       title,
       body
   };

   var duplicateNotes = notes.filter((note) =>  note.title === title);
   console.log('duplicateNotes step 1')
   if (duplicateNotes.length ===0) {
    //console.log('duplicateNotes step 2')
       notes.push(note);
       saveNotes(notes);
       return note;
      // console.log('notes returned')
   }
};


var addNoteWithLodash = (title, body) => {
    //console.log('add note step 1')
   var notes = fetchNotes();
   var note ={
       title,
       body
   };

   var duplicateNotes = _.uniq(addNoteWithLodash);

   console.log('duplicateNotes step 1'+ duplicateNotes  +" "+addNoteWithLodash )
   if (duplicateNotes.length !==addNoteWithLodash.length) {
    console.log('duplicateNotes step 2')
       notes.push(note);
       saveNotes(notes);
       return note;
      // console.log('notes returned')
   }
 

  // var returnArray = _.uniq(_.map(addNoteWithLodash, function(a){ return a.title,a.body; }));
  // console.log(returnArray);
};



var getAll = () =>{ 
    console.log('Get all notes');
};

var getNote = (title) => {
    console.log('getting note'. title);
};

var removeNote = (title) => {
    console.log('removing note', title);
};
module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
    fetchNotes,
    addNoteWithLodash
};
