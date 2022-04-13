import React from "react";
import {Outlet} from 'react-router-dom'
import {Link} from 'react-router-dom'
import "./Posts.css";
import Card from "../../Components/Card/Card";
import SeePosts from '../../Hooks/SeePosts'


const Posts = () => {
 //Usando el hook
const {Publicposts} = SeePosts()
console.log(Publicposts);



  return (
    <>
    <Outlet /> 
      <header className="header">
        <nav className="navigation">
          <h3>Posts</h3>
          <Link className="navigation-button" to='addpost'>create post</Link>
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
