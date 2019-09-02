# notes-node
 Simple Node.js app used for adding/reading/deleting notes in JSON file
 
Node.js project thanks to this [Udemy course](https://www.udemy.com/the-complete-nodejs-developer-course-2/).

## Installation

```sh
git clone https://github.com/kenansabanovic/notes-node.git
cd notes-node
npm install
```

## Usage

```
$ node app.js --help
app.js [command]

Commands:
  app.js add     Add a new note
  app.js list    List all notes
  app.js read    Read a note
  app.js remove  Remove a note

Options:
  --version  Show version number                     [boolean]
  --help     Show help                               [boolean]
```

### Example

```sh
$ node app.js add -t "To do" -b "Buy some milk"
Note created
===
Title: To do
Body: Buy some milk

$ node app.js list
Printing 1 note(s).
===
Title: To do
Body: Buy some milk

$ node app.js read -t "To do"
Note found
===
Title: To do
Body: Buy some milk

$ node app.js remove -t "To do"
Note removed!

$ node app.js list
Printing 0 note(s).
```
