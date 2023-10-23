import React from 'react';
//import photos from 'mocks/photos';
import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = (props) => {
  const {openModal,setSelectedPhoto,likedPhotos,toggleFav,photos } = props

  
  return (
    <div className="home-route">
      
      <TopNavigation likedPhotos={likedPhotos}/>
      
      <PhotoList  setSelectedPhoto={setSelectedPhoto} toggleFav={toggleFav} likedPhotos={likedPhotos} photos={photos}  openModal={openModal} />

    </div>
  );
};

export default HomeRoute;
