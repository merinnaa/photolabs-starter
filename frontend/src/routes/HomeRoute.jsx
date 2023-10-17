import React, { useState } from 'react';
import photos from 'mocks/photos';
import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import FavBadge from 'components/FavBadge';
import PhotoDetailsModal from './PhotoDetailsModal';
const HomeRoute = (props) => {
  const [likedPhotos, setLikedPhotos] = useState([]);
const {openModal } = props
  const toggleFav = (photoId) => {
    if (likedPhotos.includes(photoId)) {
      
      setLikedPhotos(likedPhotos.filter((id) => id !== photoId));
    } else {
      
      setLikedPhotos([...likedPhotos, photoId]);
    }
  };
  return (
    <div className="home-route">
      
      <TopNavigation likedPhotos={likedPhotos}/>
      
      <PhotoList   toggleFav={toggleFav} likedPhotos={likedPhotos} photos={photos}  openModal={openModal} />

    </div>
  );
};

export default HomeRoute;
