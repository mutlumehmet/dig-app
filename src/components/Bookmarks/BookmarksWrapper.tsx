import React, { useState } from "react"
import BookmarksContext from "./store/bookmarks-context";
interface RepoDataInterface {
    repoId: number;
    repoTitle: string;
    repoText: string;
}

const BookmarksWrapper : React.FC = ({ children }) => {
    const [bookmarksArray, setBookmarksArray] = useState<RepoDataInterface[]>(
        [] as RepoDataInterface[]
      );
    
        function setBookMarks(bookmark: Bookmark) {
            setBookmarksArray(prev => [...prev, bookmark])
        }

    return (<BookmarksContext.Provider value={{ bookedNumbers: bookmarksArray.length,
      allBooked: bookmarksArray,
      setBookmarks: setBookMarks
      }}>
        {children}
    </BookmarksContext.Provider>)
}