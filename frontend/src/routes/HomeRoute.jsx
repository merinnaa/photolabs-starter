import React, { useState } from 'react';
import photos from 'mocks/photos';
import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import FavBadge from 'components/FavBadge';
import PhotoDetailsModal from './PhotoDetailsModal';
const HomeRoute = (props) => {
  
const {openModal,setSelectedPhoto,likedPhotos,toggleFav } = props

  
  return (
    <div className="home-route">
      
      <TopNavigation likedPhotos={likedPhotos}/>
      
      <PhotoList  setSelectedPhoto={setSelectedPhoto} toggleFav={toggleFav} likedPhotos={likedPhotos} photos={photos}  openModal={openModal} />

    </div>
  );
};

export default HomeRoute;
