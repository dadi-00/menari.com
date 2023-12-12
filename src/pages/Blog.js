  import React, { useEffect, useState } from 'react';
  import axios from 'axios';

  function Blog() {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
      const fetchBlogs = async () => {
        try {
          const response = await axios.get('/api/dances');
          setBlogs(response.data);
        } catch (error) {
          console.error('Error fetching blogs:', error);
        }
      };

      fetchBlogs();
    }, []);

    return (
      <div>
        <h2>Blog</h2>
        {blogs.map((blog) => (
          <div key={blog.id}>
            <h3>{blog.nama}</h3>
            <p>{blog.details}</p>
          </div>
        ))}
      </div>
    );
  }

  export default Blog;
