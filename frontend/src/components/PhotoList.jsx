import React from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = ({photos, toggleFav, likedPhotos, openModal, setSelectedPhoto}) => {

    return (
      <ul className="photo-list">
        {photos.map((photo) =>

          <PhotoListItem
            key={photo.id}
            picture={photo}
            id={photo.id}
            username={photo.user.username}
            name={photo.user.name}
            profile={photo.user.profile}
            full={photo.urls.full}
            regular={photo.urls.regular}

            city={photo.location.city}
            country={photo.location.city}
            toggleFav={toggleFav} 
            isLiked={likedPhotos.includes(photo.id)} 
            openModal={openModal}
            similarPhotos={photo.similar_photos}
           setSelectedPhoto={setSelectedPhoto}
          />)}
      </ul>
    )
  }

export default PhotoList;
