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
import useApplicationData from 'hooks/useApplicationData';
import photos from 'mocks/photos';
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
  const {
    state,
    onPhotoSelect,
    updateToFavPhotoIds,
    onLoadTopic,
    onClosePhotoDetailsModal,
    closeModal,
  } = useApplicationData();

  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const [selectedPhoto, setSelectedPhoto] = useState({});
  // const [likedPhotos, setLikedPhotos] = useState([]);
  // const openModal = (id) => {
  //   setIsModalOpen(true);
  //   console.log()
  // };

  // const closeModal = () => {
  //   setIsModalOpen(false);
  // };
  // const toggleFav = (photoId) => {
  //   if (likedPhotos.includes(photoId)) {

  //     setLikedPhotos(likedPhotos.filter((id) => id !== photoId));
  //   } else {

  //     setLikedPhotos([...likedPhotos, photoId]);
  //   }
  // };
  console.log('hi',state.likedPhotos)
  return (
    <div className="App">

      <HomeRoute
        openModal={state.openModal}
        //setSelectedPhoto={setSelectedPhoto}
        //toggleFav={toggleFav}
        //likedPhotos={likedPhotos}
        isModalOpen={state.isModalOpen}
        photos={state.photos}
        selectedPhoto={state.selectedPhoto}
        likedPhotos={state.likedPhotos}
        setSelectedPhoto={onPhotoSelect}
        toggleFav={updateToFavPhotoIds}
        onClosePhotoDetailsModal={onClosePhotoDetailsModal}

      />

      {state.showModal && < PhotoDetailsModal
        isModalOpen={state.isModalOpen}
        closeModal={closeModal}
        //selectedPhoto={selectedPhoto}
        //toggleFav={toggleFav}
        likedPhotos={state.likedPhotos}
        selectedPhoto={state.clickedPhoto}
        onClosePhotoDetailsModal={onClosePhotoDetailsModal}
        toggleFav={updateToFavPhotoIds}



      />}

    </div>
  );
};

export default App;
