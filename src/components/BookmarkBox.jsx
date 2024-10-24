
const BookmarkBox = ({ bookmark }) => {
    const { title, reading_time, cover_page } = bookmark;
    return (
        <div className=" border bg-white rounded-lg my-3 shadow-sm">
            <div className="w-full">
                <img className="h-[100px] w-full rounded-t-lg" src={cover_page} alt="" />
            </div>
            <div className="p-3"> <h1 className="text-xl font-semibold text-slate-800">{title}</h1>
                <p className="">Spent time to read {reading_time} min</p></div>
        </div>
    );
};

export default BookmarkBox;