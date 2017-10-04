console.log('Starting notes app!');

const fs = require('fs');

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

   //var duplicateNotes = notes.filter((note) =>  note.title === title);
   //console.log('duplicateNotes step 1')
   //if (duplicateNotes.length ===0) {
    //console.log('duplicateNotes step 2')
       notes.push(note);
       saveNotes(notes);
       return note;
      // console.log('notes returned')
   //}
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
    fetchNotes
};
