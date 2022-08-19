# MyReads Project

A single page application created by using React Library, The app allow the user to search about the books that he want to read, 
Also allow him to categorize them into three categories want to read , read or currently reeading and show them in shielves 
based on their category,The user can move any book from a shielf to another easly.

## How to start it

To get start using the App:

- open a new terminal
- go to the folder of the app
- install all project dependencies with `npm install`
- start the server with `npm start`

## the files of the App

```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms.
├── package.json # npm package manager file.
├── public
│   ├── favicon.ico # React Icon.
│   └── index.html 
└── src
    ├──components
    │    ├──shelf
    │    │   ├──CurrentlyReading.js # Currently reading shielf component.
    │    │   ├──Read.js # Read shielf component.
    │    │   └──WantTORead.js # Want to read shielf component.
    │    ├──Book.js # Book component.
    │    ├──ListBooks.js # ListBooks that show the shielves component.
    │    ├──SearchBooks.js # SearchBooks where the user can search and get books component.
    │    └──Selection.js # Selection component which is a drop down list allow the user to categorize the book.
    ├── App.css # Styles for the app.
    ├── App.js # This is the root of the app.
    ├── App.test.js # Used for testing.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend.
    ├── icons # images of the app.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles.
    └── index.js # The DOM rendering file.
```

