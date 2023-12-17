import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Blog.css";
import Modal from "react-modal";

const modalStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
  content: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    padding: "20px",
    borderRadius: "4px",
    boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.15)",
  },
};

function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const useOpenPopup = (blogId) => {
    const [blogCard, setBlogCard] = useState(null);

    useEffect(() => {
      const fetchBlogDetail = async () => {
        try {
          const response = await axios.get(`http://localhost:9000/api/dances/${blogId}`);
          setBlogCard(response.data);
        } catch (error) {
          console.error("Error fetching blog:", error);
        }
      };

      fetchBlogDetail();
    }, [blogId]);

    const closePopup = () => {
      if (blogCard) {
        blogCard.classList.remove("popup", "active");
      }
    };

    return { blogCard, closePopup };
  };

  const handlePopupOpen = (blogId) => {
    console.log("Opening popup for blog ID:", blogId);
    setSelectedBlog(blogId);
    setIsOpen(true);
  };

  const handlePopupClose = () => {
    setSelectedBlog(null);
    setIsOpen(false);
  };

  const { blogCard } = useOpenPopup(selectedBlog);

  const ModalContent = () => {
    if (!blogCard) return null;

    return (
      <div className="popup-content">
        <h2>{blogCard.nama}</h2>
        <p>{blogCard.details}</p>
        {blogCard.gambar && <img src={blogCard.gambar} alt="Additional image" className="popup-content-img" />}
        {blogCard.video && (
          <a href={blogCard.video} target="_blank" className="popup-content-link">
            Watch video
          </a>
        )}
        {}
        <button onClick={handlePopupClose} className="popup-close">
          Close
        </button>
      </div>
    );
  };

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("http://localhost:9000/api/dances");
        setBlogs(response.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="blog">
      {blogs.map((blog) => (
        <div key={blog.id} className="blog-card">
          <img src={blog.gambar} alt={blog.nama} className="blog-card-img" />
          <h3>{blog.nama}</h3>
          <p class="cutoff-text">{blog.details}</p>
          <button onClick={() => handlePopupOpen(blog.id)}>View Details</button>
          {isOpen && (
            <Modal
              isOpen={isOpen}
              onRequestClose={handlePopupClose}
              style={modalStyles}
            >
              <ModalContent />
            </Modal>
          )}
        </div>
      ))}
    </div>
  );
}

export default Blog;
