console.log('Starting notes app!');

var addNote = (title, body) => {
    console.log("Adding note", title,body);
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
    removeNote
};
