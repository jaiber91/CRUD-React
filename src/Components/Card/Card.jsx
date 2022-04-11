import React from 'react'
import './Card.css'
import IconEye from '../../assets/icons/Eye.svg'
import IconPencil from '../../assets/icons/Pencil.svg'
import IconDelete from '../../assets/icons/Delete.svg'


const Card = () => {
  return (
    <>
      <div className="cards-details">
              <h3>Title post title post title post</h3>
              <div className="cards-details-icons">
                  <img src={IconEye} alt="icon eye" />
                  <img src={IconPencil} alt="icon pencil" />
                  <img src={IconDelete} alt="icon delete" />
              </div>
          </div>
    
    </>
  )
}

export default Card