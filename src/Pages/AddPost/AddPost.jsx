import React from "react";
import "./AddPost.css";

const AddPost = () => {
  return (
    <>
      <section className="container">
        <form className="addPost">
         
          <div className="addPost-title">
            <label for="title">Title</label>
            <input type="text" id="title" placeholder="Post title" />
          </div>
          <div className="addPost-text">
            <label for="text">Text</label>
            <textarea placeholder="add text..."></textarea>
            
          </div>

          <input className="register-btn" type="submit" value="Create" />
        </form>
      </section>
    </>
  );
};

export default AddPost;
