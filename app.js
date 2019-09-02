const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const titleOptions = 
{
    describe: 'Naslov zabilješke',
    demand: true,
    alias: 't'
}
const bodyOptions =
{
    describe: 'Sadržaj zabilješke',
    demand: true,
    alias: 'b'
}
const argv = yargs
.command('add', 'Dodaj novu zabilješku',
{
    title:titleOptions,
    body:bodyOptions
})
.command('list', 'Izlistaj sve zabilješke')
.command('read', 'Pročitaj zabilješku', 
{
    title:titleOptions,
})
.command('remove', 'Izbriši zabilješku', 
{
    title:titleOptions
})
.help()
.argv;
var command = argv._[0];

if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body);

    if (note) {
        console.log('Zabilješka kreirana');
        notes.ispisiNote(note);
    } else {
        console.log('Zabilješka već postoji');
    }
}
else if (command === 'list') {
    var allNotes = notes.getAll();
    console.log(`Printam ${allNotes.length} zabilješku.`);
    allNotes.forEach((note) => notes.ispisiNote(note));
}
else if (command === 'read') {
    var note = notes.getNote(argv.title);
    if (note) {
        console.log('Zabilješka pronađena');
        notes.ispisiNote(note);
    } else {
        console.log('Zabilješka nije pronađena');
    }
}
else if (command === 'remove') {
    var ukloniNote = notes.removeNote(argv.title);
    var poruka = ukloniNote ? 'Zabilješka uklonjena' : 'Zabilješka nije pronađena';
    console.log(poruka);
}
else {
    console.log('Command not recognized');
}