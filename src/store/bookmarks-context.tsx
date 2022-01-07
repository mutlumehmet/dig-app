import React from "react";

type Bookmark = {
  
    repoId:number,
    repoTitle: string,
    repoText: string
  
}
interface BookInterface {
  bookedNumbers: number;
  allBooked: Array<Bookmark>
  setBookmarks: (bookmark: Bookmark) => void;
}

const BookmarksContext = React.createContext<BookInterface>({
  bookedNumbers: 0,
  allBooked: [],
  setBookmarks: (bookmark) => {}
});

export default BookmarksContext;
