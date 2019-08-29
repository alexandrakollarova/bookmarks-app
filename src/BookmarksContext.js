import React from 'react';

// create a new context
// this one has its own file so it can be imported 
// into any other files

const BookmarksContext = React.createContext({
    bookmarsk: [],
    addBookmark: () => {},
    deleteBookmark: () => {}
})

export default BookmarksContext