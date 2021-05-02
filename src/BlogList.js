const BlogList = ({ blogs, title, deleteHandler }) => {
  return (
    <div className="bloglist">
      <h3 className="heading">{title}</h3>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>{blog.content}</p>
          <p>Written by: {blog.author}</p>
          <button onClick={() => deleteHandler(blog.id)}>Delete Blog</button>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
