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
  } = useApplicationData();


  
  return (
    <div className="App">

      <HomeRoute
        openModal={state.openModal}
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
        likedPhotos={state.likedPhotos}
        selectedPhoto={state.clickedPhoto}
        onClosePhotoDetailsModal={onClosePhotoDetailsModal}
        toggleFav={updateToFavPhotoIds}



      />}

    </div>
  );
};

export default App;
