

const Blog = ({ blog, handleBookmarkBtn, handleMarkAsReadBtn }) => {
    const { id, cover_page, title, post_date, reading_time, author_name, author_img, hashtags } = blog;

    return (
        <div className="p-4 border shadow-md rounded-md my-5">
            <div className="pb-5 w-full "><img className="w-full rounded-md lg:h-[420px]" src={cover_page} alt="" /></div>
            {/* author */}
            <div className="flex justify-between items-center mb-4">
                <div className="flex gap-2 items-center">
                    <div className=""><img className="md:w-14 w-10 md:h-14 h-10 rounded-full md:p-1 border  border-r-slate-600 shadow-md shadow-slate-500" src={author_img} alt="" /></div>
                    <div className="">
                        <h1 className=" font-semibold  md:text-lg text-slate-800">{author_name}</h1>
                        <p className="md:text-sm text-[10px] font-semibold text-slate-500">{post_date} </p>
                    </div>

                </div>
                <div className="">
                    <span className="text-rose-950 font-semibold text-sm md:text-lg">{reading_time} </span> <span className="md:pl-1 pr-1 text-[11px] md:text-sm md:pr-2  font-semibold text-slate-500">min read </span> <span onClick={() => handleBookmarkBtn(blog)} className=" cursor-pointer"><i className="fa-regular fa-bookmark text-sm md:text-lg"></i></span>
                </div>
            </div>
            <div className="text-2xl md:text-4xl font-bold">{title}</div>
            <div className="text-blue-900 font-semibold py-2 ">{hashtags}</div>
            <button className="btn btn-warning" onClick={() => { handleMarkAsReadBtn(reading_time, id) }}>Mark as read</button>
        </div>
    );
};

export default Blog;