import React from "react";
import {Outlet} from 'react-router-dom'
import "./Posts.css";
import Card from "../../Components/Card/Card";

const Posts = () => {
  return (
    <>
    <Outlet /> 
      <header className="header">
        <nav className="navigation">
          <h3>Posts</h3>
          <button>create post</button>
        </nav>
      </header>

      <section className="cards">
          <Card />
          <Card />
          <Card />
         
      </section>
      <footer className="footer">
        <p>Copyright © 2022- Post</p>
      </footer>
    </>
  );
};

export default Posts;
