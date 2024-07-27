import React from 'react'
import './ItemCard.css'

const ItemCard = (props) => {
  return (
    <div className='card'>
      <div className="title">{props.title}</div>
      <img src={props.img} alt="" className='card-img'/>
      <div className="see-more">See more</div>
    </div>
  )
}

export default ItemCard