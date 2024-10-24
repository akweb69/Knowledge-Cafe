import { useEffect } from "react";
import { useState } from "react";
import Blog from "./blog";


const Blogs = ({ handleBookmarkBtn, handleMarkAsReadBtn }) => {
    const [blogs, setBlogs] = useState([]);
    // ! for data load
    useEffect(() => {
        fetch('../../public/blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data));
    }, [])
    return (
        <div>
            {
                blogs.map(blog => <Blog key={blog.id} blog={blog} handleBookmarkBtn={handleBookmarkBtn} handleMarkAsReadBtn={handleMarkAsReadBtn} ></Blog>)
            }

        </div >
    );
};

export default Blogs;