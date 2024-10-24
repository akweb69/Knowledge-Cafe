import BookmarkBox from "./BookmarkBox";

const Bookmark = ({ bookmarks }) => {
    console.log(bookmarks)
    return (
        <div className="p-4 bg-slate-200 rounded-lg">
            <h1 className="text-xl font-semibold ">
                Bookmarked Blogs : <span className="text-2xl font-bold text-emerald-800 rounded-full border border-green-500 p-1">{bookmarks.length < 10 ? "0" + bookmarks.length : bookmarks.length}</span>
            </h1>
            <div className="">
                {
                    bookmarks.map((bookmark, i) => <BookmarkBox key={i} bookmark={bookmark}  ></BookmarkBox>)
                }
            </div>

        </div>
    );
};

export default Bookmark;