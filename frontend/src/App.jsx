import React from 'react';
import { useState } from 'react';
import PhotoListItem from './components/PhotoListItem';
import './App.scss';
import PhotoFavButton from 'components/PhotoFavButton';
import PhotoList from 'components/PhotoList';
import TopicList from 'components/TopicList';
import TopicListItem from 'components/TopicListItem';
import TopNavigation from 'components/TopNavigationBar';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
// const sampleDataForPhotoListItem = {
//   id: "1",
//   location: {
//     city: "Montreal",
//     country: "Canada",
//   },
//   imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
//   username: "Joe Example",
//   profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
// };
// Note: Rendering a single component to build components in isolation
const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (id) => {
    setIsModalOpen(true);
    
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="App">
      {/* <TopNavigation /> */}
      {/* { Array.from(Array(3)).map((_, index) => <PhotoListItem key={index}/>) } */}
      {/* <PhotoList/> */}
      {/* <PhotoFavButton /> */}
      <HomeRoute
        openModal={openModal}
      />
      {/* <PhotoDetailsModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/> */}
      { isModalOpen && < PhotoDetailsModal
      isModalOpen={isModalOpen}
        closeModal={closeModal}
        
      />}

    </div>
  );
};

export default App;
