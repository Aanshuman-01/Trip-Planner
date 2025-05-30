import React from 'react'
import "./service-card.css";

const ServicesCard = ({item}) => {
    const {imgUrl,title,desc}=item;
  return (
    <div className="service_item">
        <div className="service_img">
            <img src={imgUrl} alt="" ></img>
        </div>
        <h5>{title}</h5>
        <p>{desc}</p>
      
    </div>
  )
}

export default ServicesCard