

const Sidebar = ({ readTime }) => {
    return (
        <div className="">
            <div className=" my-5 flex justify-center items-center border border-purple-200 rounded-lg bg-purple-100">
                <h1 className=" py-4 text-xl  font-semibold text-purple-900">
                    Spent time on read <span className="text-2xl font-bold text-emerald-800 rounded-full border border-green-500 p-2">{readTime < 10 ? '0' + readTime : readTime}</span> minutes
                </h1>
            </div>
        </div>
    );
};

export default Sidebar;