import Navbar from './components/navbar'
import './App.css'
import Blogs from './components/Blogs'
import Sidebar from './components/sidebar'
import { useState } from 'react'
import Bookmark from './components/Bookmark'


function App() {
  const [readTime, setReadTime] = useState(0);
  const [bookmarks, setBookmark] = useState([]);

  const handleBookmarkBtn = (blog) => {
    const newBookmark = [...bookmarks, blog];
    setBookmark(newBookmark);
  }
  const handleMarkAsReadBtn = (time, id) => {
    const newReadingTime = readTime + time;
    setReadTime(newReadingTime)
    const remainingBookmark = bookmarks.filter(Bookmark => Bookmark.id !== id);
    setBookmark(remainingBookmark)

  }
  return (
    <>
      {/* main section */}
      <div className="max-w-[1550px] mx-auto ">
        {/* container  */}
        <div className="md:w-10/12 w-11/12 mx-auto">
          <Navbar></Navbar>
          <div className="md:grid grid-cols-3 ">
            <div className="col-span-2">
              <Blogs handleBookmarkBtn={handleBookmarkBtn} handleMarkAsReadBtn={handleMarkAsReadBtn}></Blogs>
            </div>
            <div className="w-full md:w-11/12 mx-auto">
              <Sidebar readTime={readTime}></Sidebar>
              <Bookmark bookmarks={bookmarks}></Bookmark>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
