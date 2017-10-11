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
   notes.push(note);
//   var duplicateNotes = _.uniq(addNoteWithLodash);


var uniqueNotes = _.map(
    _.uniq(
        _.map(notes, function(obj){
            return JSON.stringify(obj);
        })
    ), function(obj) {
        return JSON.parse(obj);
    }
);



console.log('duplicateNotes step 1'+ uniqueNotes.length+" " + notes.length );
   
if (uniqueNotes.length ===notes.length) {
    console.log('duplicateNotes step 2')
   
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
  
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) =>  note.title === title);
    return returnFilteredNotes  = filteredNotes[0] && filteredNotes[1];
    
};

var removeNote = (title) => {
    var notes = fetchNotes();
    var filterNotes = notes.filter((note) =>  note.title != title);
    saveNotes(filterNotes)

    return notes.length !== filterNotes.length;
    //console.log('removing note', filterNotes);
};

var logNote = (readNote) =>{
    console.log('Note read');
    console.log('--');
    console.log(`Title: ${readNote.title}`);
    console.log(`Body: ${readNote.body}`);
}
module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
    fetchNotes,
    addNoteWithLodash,
    logNote
};
