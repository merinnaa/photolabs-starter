import React, { useState } from "react";

import "../styles/PhotoListItem.scss";
import PhotoList from "./PhotoList";
import PhotoFavButton from "./PhotoFavButton";
import photos from "mocks/photos";



const PhotoListItem = ({picture}) => {
  // const [like, setLike] = useState(false)
  /* Insert React */
  //const multiple = props.sampleDataForPhotoList[0]
  const { photos } = picture

 return (
     <div  >
      


<section className="photo-list__user-info ">
<div className="photo-list__item">
<PhotoFavButton />
        <img className="photo-list__image" src={picture.full} />
        
        <div className="photo-list__user-details">
          
        <img className="photo-list__user-profile" src={picture.profile} />
         <div>
        <p>{picture.username}</p>
        <p className="photo-list__user-location">
          {picture.city}
          {','}
          {picture.country}</p>
          
          </div>
           </div>
           </div>
          </section>
    </div> 
 
   );
};


export default PhotoListItem;
