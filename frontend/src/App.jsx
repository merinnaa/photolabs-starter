import React from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';



const App = () => {
  const {
    state,
    onPhotoSelect,
    updateToFavPhotoIds,
    onLoadTopic,
    onClosePhotoDetailsModal,
    closeModal,
    fetchPhotosByTopic,
  } = useApplicationData();


  
  return (
    <div className="App">

      <HomeRoute
      topics={state.topicData}
        openModal={state.openModal}
        isModalOpen={state.isModalOpen}
        photos={state.photoData}
        selectedPhoto={state.selectedPhoto}
        likedPhotos={state.likedPhotos}
        setSelectedPhoto={onPhotoSelect}
        toggleFav={updateToFavPhotoIds}
        onClosePhotoDetailsModal={onClosePhotoDetailsModal}
        fetchPhotosByTopic={fetchPhotosByTopic}
      />

      {state.showModal && < PhotoDetailsModal
        isModalOpen={state.isModalOpen}
        closeModal={closeModal}
        likedPhotos={state.likedPhotos}
        selectedPhoto={state.clickedPhoto}
        onClosePhotoDetailsModal={onClosePhotoDetailsModal}
        toggleFav={updateToFavPhotoIds}



      />}

    </div>
  );
};

export default App;
