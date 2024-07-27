import React from 'react'
import './Itemcard4.css'
const ItemCard4 = (props) => {
  return (
    <div className='card4'>
      <div className="title">{props.title}</div>
          <div className="content-block">
            <div>
            <img src={props.img1} alt="" />
            <span>{props.name1}</span>
            </div>
            <div>
              <img src={props.img2} alt="" />
              <span>{props.name2}</span>
            </div>
            <div>
              <img src={props.img3} alt="" />
              <span>{props.name3}</span>
            </div>
            <div>
              <img src={props.img4} alt="" />
              <span>{props.name4}</span>
            </div>
          </div>
         <div className="see-more">See more</div>
    </div>
  )
}

export default ItemCard4