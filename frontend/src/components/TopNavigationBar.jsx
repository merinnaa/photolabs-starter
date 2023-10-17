import React from 'react';
import TopicList from './TopicList';
import FavBadge from './FavBadge';
import '../styles/TopNavigationBar.scss'
import photos from 'mocks/photos';
import FavIcon from './FavIcon';
const TopNavigation = ({likedPhotos}) => {
   const isFavPhotoExist = likedPhotos.length > 0;

  // console.log('isFavPhotoExist:', isFavPhotoExist);
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList/>
      <FavBadge  isFavPhotoExist={isFavPhotoExist}/>
    </div>
  )
}

export default TopNavigation;