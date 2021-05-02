import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);

  const deleteHandler = (id) => {
    const removed = blogs.filter((blog) => blog.id !== id);
    setBlogs(removed);
  };

  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="home">
      {blogs && (
        <BlogList
          blogs={blogs}
          title="All Blogs"
          deleteHandler={deleteHandler}
        />
      )}
    </div>
  );
};

export default Home;
