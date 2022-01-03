import React from "react";
interface BookInterface {
  bookedNumbers: number;
}

const BookmarksContext = React.createContext<BookInterface>({
  bookedNumbers: 0,
});

export default BookmarksContext;
