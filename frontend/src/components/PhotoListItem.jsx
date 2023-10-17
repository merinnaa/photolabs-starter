import React, { useState } from "react";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import "../styles/PhotoListItem.scss";
import PhotoList from "./PhotoList";
import PhotoFavButton from "./PhotoFavButton";




const PhotoListItem = (props) => {
  console.log(props)
const handleClick = () =>{
  props.setSelectedPhoto({...props});
  props.openModal()}
  return (
    <div  >



      <section className="photo-list__user-info ">
        <div className="photo-list__item">
          <PhotoFavButton
            isLiked={props.isLiked}
            toggleFav={() => props.toggleFav(props.id)}
          />
          <img className="photo-list__image" src={props.full} onClick={handleClick}/>

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
