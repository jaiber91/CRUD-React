import React from "react";
import {Outlet} from 'react-router-dom'
import "./Posts.css";
import IconEye from '../../assets/icons/Eye.svg'
import IconPencil from '../../assets/icons/Pencil.svg'
import IconDelete from '../../assets/icons/Delete.svg'

const Posts = () => {
  return (
    <>
    <Outlet /> 
      <header className="header">
        <nav className="navigation">
          <h3>Posts</h3>
          <button>crear post</button>
        </nav>
      </header>

      <section className="cards">
          <div className="cards-details">
              <h3>Title Post</h3>
              <div>
                  <img src={IconEye} alt="icon eye" />
                  <img src={IconPencil} alt="icon pencil" />
                  <img src={IconDelete} alt="icon delete" />
              </div>
          </div>
      </section>
      <footer></footer>
    </>
  );
};

export default Posts;
