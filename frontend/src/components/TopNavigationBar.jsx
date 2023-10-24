import React from 'react';
import TopicList from './TopicList';
import FavBadge from './FavBadge';
import '../styles/TopNavigationBar.scss'
import topics from 'mocks/topics';

const TopNavigation = ({likedPhotos, fetchPhotosByTopic, topics}) => {
   const isFavPhotoExist = likedPhotos.length > 0;

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList fetchPhotosByTopic={fetchPhotosByTopic} topics={topics}/>
      <FavBadge  isFavPhotoExist={isFavPhotoExist}/>
    </div>
  )
}

export default TopNavigation;