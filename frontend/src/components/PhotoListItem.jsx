import React, { useState } from "react";

import "../styles/PhotoListItem.scss";
import PhotoList from "./PhotoList";
import PhotoFavButton from "./PhotoFavButton";




const PhotoListItem = (props) => {
  // const [like, setLike] = useState(false)
  /* Insert React */
  //const multiple = props.sampleDataForPhotoList[0]
  const { sampleDataForPhotoList } = props

 return (
     <div  key={props.key}>
      


<section className="photo-list__user-info ">
<div className="photo-list__item">
<PhotoFavButton />
        <img className="photo-list__image" src={props.full} />
        
        <div className="photo-list__user-details">
          
        <img className="photo-list__user-profile" src={props.profile} />
         <div>
        <p>{props.username}</p>
        <p className="photo-list__user-location">
          {props.city}
          {','}
          {props.country}</p>
          
          </div>
           </div>
           </div>
          </section>
    </div> 
 
   );
};


export default PhotoListItem;
