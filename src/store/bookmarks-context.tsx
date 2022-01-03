import React from "react";
interface BookInterface {
  bookedNumbers: number;
  allBooked: Array<{
    repoId:number,
    repoTitle: string,
    repoText: string
  }>
}

const BookmarksContext = React.createContext<BookInterface>({
  bookedNumbers: 0,
  allBooked: []
});

export default BookmarksContext;
